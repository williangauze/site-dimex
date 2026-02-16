import { getQuery, getRequestIP, setResponseStatus } from "h3";

type InstagramMediaItem = {
  id?: string;
  caption?: string;
  media_type?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

type InstagramMediaResponse = {
  data?: InstagramMediaItem[];
};

type InstagramAccountsResponse = {
  data?: { id?: string }[];
};

type InstagramPageResponse = {
  instagram_business_account?: { id?: string; username?: string };
};

type InstagramPublicItem = {
  id?: string;
  caption: string;
  image: string;
  time: string;
  url: string;
};

let cachedUserId: string | null = null;
let cachedMediaResponse: { expiresAt: number; items: InstagramPublicItem[] } | null = null;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 90;
const responseCacheTtlMs = 2 * 60 * 1000;
const requestBuckets = new Map<string, { startTime: number; count: number }>();

const formatTime = (timestamp?: string) => {
  if (!timestamp) {
    return "";
  }

  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
};

const resolveUserId = async (baseUrl: string, accessToken: string, username?: string) => {
  if (cachedUserId) {
    return cachedUserId;
  }

  const accountsUrl = `${baseUrl}/me/accounts?access_token=${accessToken}`;
  const accounts = await $fetch<InstagramAccountsResponse>(accountsUrl);
  const pageIds = (accounts.data || [])
    .map((account) => account.id)
    .filter((id): id is string => Boolean(id));

  if (!pageIds.length) {
    return "";
  }

  const normalized = username?.replace(/^@/, "").toLowerCase() || "";
  let fallbackId = "";

  for (const pageId of pageIds) {
    const pageUrl = `${baseUrl}/${pageId}?fields=instagram_business_account{id,username}&access_token=${accessToken}`;
    const page = await $fetch<InstagramPageResponse>(pageUrl);
    const igAccount = page.instagram_business_account;

    if (!igAccount?.id) {
      continue;
    }

    if (!fallbackId) {
      fallbackId = igAccount.id;
    }

    if (normalized && igAccount.username?.toLowerCase() === normalized) {
      cachedUserId = igAccount.id;
      return igAccount.id;
    }
  }

  if (!normalized && fallbackId) {
    cachedUserId = fallbackId;
  }

  return cachedUserId || "";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const bucket = requestBuckets.get(ip);

  if (!bucket || now - bucket.startTime >= RATE_LIMIT_WINDOW_MS) {
    requestBuckets.set(ip, { startTime: now, count: 1 });
    return false;
  }

  bucket.count += 1;
  if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
};

const clearExpiredRateLimitBuckets = () => {
  const now = Date.now();
  for (const [ip, bucket] of requestBuckets.entries()) {
    if (now - bucket.startTime >= RATE_LIMIT_WINDOW_MS) {
      requestBuckets.delete(ip);
    }
  }
};

const isPresent = <T>(value: T | null | undefined): value is T => Boolean(value);

export default defineEventHandler(async (event) => {
  const { debug } = getQuery(event);
  const debugEnabled = process.dev && (debug === "1" || debug === "true");
  const requestIp = getRequestIP(event, { xForwardedFor: true }) || "unknown";

  clearExpiredRateLimitBuckets();
  if (isRateLimited(requestIp)) {
    setResponseStatus(event, 429);
    return debugEnabled ? { items: [], error: "rate_limited", info: { requestIp } } : { items: [] };
  }

  if (cachedMediaResponse && cachedMediaResponse.expiresAt > Date.now()) {
    return debugEnabled
      ? {
          items: cachedMediaResponse.items,
          info: {
            cache: "hit"
          }
        }
      : { items: cachedMediaResponse.items };
  }

  const { instagram } = useRuntimeConfig();
  const accessToken = instagram?.accessToken;
  const userId = instagram?.userId;
  const username = instagram?.username;

  if (!accessToken || (!userId && !username)) {
    return debugEnabled
      ? {
          items: [],
          error: "missing_access_token_or_user",
          info: {
            hasAccessToken: Boolean(accessToken),
            hasUserId: Boolean(userId),
            hasUsername: Boolean(username)
          }
        }
      : { items: [] };
  }

  const baseUrl = (instagram?.apiBase || "https://graph.facebook.com/v20.0").replace(/\/$/, "");
  let resolvedUserId = userId;
  if (!resolvedUserId && username) {
    try {
      resolvedUserId = await resolveUserId(baseUrl, accessToken, username);
    } catch (error) {
      return debugEnabled
        ? {
            items: [],
            error: "resolve_user_id_failed",
            info: {
              baseUrl,
              username
            },
            details: formatFetchError(error)
          }
        : { items: [] };
    }
  }

  if (!resolvedUserId) {
    return debugEnabled
      ? {
          items: [],
          error: "user_id_not_resolved",
          info: {
            baseUrl,
            username
          }
        }
      : { items: [] };
  }

  const configuredLimit = Number(instagram?.limit);
  const limit = Number.isFinite(configuredLimit)
    ? Math.min(Math.max(Math.trunc(configuredLimit), 1), 12)
    : 9;
  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "thumbnail_url",
    "permalink",
    "timestamp"
  ].join(",");

  const url = `${baseUrl}/${resolvedUserId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

  try {
    const response = await $fetch<InstagramMediaResponse>(url);
    const items: InstagramPublicItem[] =
      response.data
        ?.map((item) => {
          const image =
            item.media_type === "VIDEO"
              ? item.thumbnail_url || item.media_url || ""
              : item.media_url || item.thumbnail_url || "";
          if (!image) {
            return null;
          }

          return {
            id: item.id,
            caption: item.caption || "Publicacao no Instagram",
            image,
            time: formatTime(item.timestamp),
            url: item.permalink || ""
          };
        })
        .filter(isPresent) ?? [];

    cachedMediaResponse = {
      expiresAt: Date.now() + responseCacheTtlMs,
      items
    };

    return debugEnabled
      ? {
          items,
          info: {
            resolvedUserId,
            limit,
            baseUrl,
            cache: "miss"
          }
        }
      : { items };
  } catch (error) {
    return debugEnabled
      ? {
          items: [],
          error: "media_fetch_failed",
          info: {
            resolvedUserId,
            limit,
            baseUrl
          },
          details: formatFetchError(error)
        }
      : { items: [] };
  }
});

const formatFetchError = (error: unknown) => {
  if (!error || typeof error !== "object") {
    return { message: "unknown_error" };
  }
  const err = error as {
    message?: string;
    statusCode?: number;
    status?: number;
    data?: unknown;
  };
  return {
    message: err.message || "request_failed",
    status: err.statusCode || err.status || 0,
    data: err.data || null
  };
};

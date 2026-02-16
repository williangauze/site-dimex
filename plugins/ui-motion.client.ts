const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "p",
  "li",
  ".eyebrow",
  ".subhead",
  ".card__title",
  ".card__text",
  ".stat__value",
  ".stat__label",
  ".home-kpi__value",
  ".home-kpi__label",
  ".instagram-caption",
  ".instagram-meta",
  ".form-helper",
  ".field-label"
];

const ITEM_SELECTOR = [
  ".section",
  ".section > .container > *",
  ".split > *",
  ".grid > *",
  ".card",
  ".card > *",
  ".btn",
  ".pill",
  ".contact-actions > *",
  ".home-intro__cta > *",
  ".home-hero__chip",
  ".home-hero__seals",
  ".instagram-callout",
  ".instagram-preview",
  ".instagram-card",
  ".line-details__summary",
  ".line-details__panel",
  ".laminados-carousel-shell",
  "img",
  "video",
  "iframe"
];

const REVEAL_SELECTOR = [...TEXT_SELECTOR, ...ITEM_SELECTOR]
  .map((selector) => `main ${selector}`)
  .join(", ");

const TEXT_MATCHER = TEXT_SELECTOR.map((selector) => `main ${selector}`).join(", ");

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return;
  }

  const observed = new WeakSet<Element>();
  let observer: IntersectionObserver | null = null;

  const revealElement = (element: Element) => {
    const target = element as HTMLElement;
    target.classList.add("is-revealed");
    observer?.unobserve(element);
  };

  const observeTargets = () => {
    if (!observer) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    let staggerIndex = 0;
    for (const target of targets) {
      if (target.closest(".form-honeypot")) {
        continue;
      }
      if (target.classList.contains("fade-up")) {
        continue;
      }
      if (target.dataset.reveal === "off") {
        continue;
      }
      if (observed.has(target)) {
        continue;
      }

      const isTextTarget = target.matches(TEXT_MATCHER);
      target.dataset.revealKind = isTextTarget ? "text" : "item";
      const rect = target.getBoundingClientRect();
      const isVisibleInViewport = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (isVisibleInViewport) {
        target.classList.add("is-revealed");
        observed.add(target);
        continue;
      }

      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${Math.min(staggerIndex * 40, 240)}ms`);
      observed.add(target);
      observer.observe(target);
      staggerIndex += 1;
    }
  };

  onNuxtReady(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0.12) {
            revealElement(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px"
      }
    );

    requestAnimationFrame(observeTargets);
  });

  nuxtApp.hook("page:finish", () => {
    requestAnimationFrame(observeTargets);
  });
});

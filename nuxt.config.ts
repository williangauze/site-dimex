const baseUrl = "https://www.dimexprofiles.com.br";
const ogImage = `${baseUrl}/foto-home.png`;

export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  modules: ["@nuxt/ui", "@nuxt/image"],
  runtimeConfig: {
    instagram: {
      accessToken: process.env.NUXT_INSTAGRAM_ACCESS_TOKEN || "",
      userId: process.env.NUXT_INSTAGRAM_USER_ID || "",
      username: process.env.NUXT_INSTAGRAM_USERNAME || "",
      limit: Number(process.env.NUXT_INSTAGRAM_LIMIT) || 9,
      apiBase: process.env.NUXT_INSTAGRAM_API_BASE || "https://graph.facebook.com/v20.0"
    }
  },
  app: {
    head: {
      title: "Dimex Profiles",
      titleTemplate: "%s · Dimex Profiles",
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: "Soluções em perfis de PVC para esquadrias com tecnologia Dimex.",
          key: "description"
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow", key: "robots" },
        { name: "theme-color", content: "#10233d" },
        { property: "og:site_name", content: "Dimex Profiles", key: "og:site_name" },
        { property: "og:title", content: "Dimex Profiles", key: "og:title" },
        {
          property: "og:description",
          content: "Soluções em perfis de PVC para esquadrias com tecnologia Dimex.",
          key: "og:description"
        },
        { property: "og:type", content: "website", key: "og:type" },
        { property: "og:locale", content: "pt_BR", key: "og:locale" },
        { property: "og:image", content: ogImage, key: "og:image" },
        { name: "twitter:card", content: "summary_large_image", key: "twitter:card" },
        { name: "twitter:title", content: "Dimex Profiles", key: "twitter:title" },
        {
          name: "twitter:description",
          content: "Soluções em perfis de PVC para esquadrias com tecnologia Dimex.",
          key: "twitter:description"
        },
        { name: "twitter:image", content: ogImage, key: "twitter:image" }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
      ]
    }
  }
});

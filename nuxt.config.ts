export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  modules: ["@nuxt/ui"],
  app: {
    head: {
      title: "Dimex Profiles",
      titleTemplate: "%s · Dimex Profiles",
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        { name: "description", content: "Solucoes em perfis de PVC para esquadrias com tecnologia Dimex." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "Dimex Profiles" },
        { property: "og:description", content: "Solucoes em perfis de PVC para esquadrias com tecnologia Dimex." },
        { property: "og:type", content: "website" }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
      ]
    }
  }
});

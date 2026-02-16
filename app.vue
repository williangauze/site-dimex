<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { site } from "~/data/site";

const route = useRoute();
const canonicalUrl = computed(() => {
  const base = site.baseUrl.replace(/\/$/, "");
  return `${base}${route.path}`;
});

const organizationSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.baseUrl,
  logo: `${site.baseUrl}/logo.webp`,
  sameAs: [site.instagram.url],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.contact.phonesRaw[0],
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"]
    },
    {
      "@type": "ContactPoint",
      telephone: site.contact.phonesRaw[1],
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"]
    }
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address,
    addressLocality: "Caxias do Sul",
    addressRegion: "RS",
    addressCountry: "BR",
    postalCode: "95032-350"
  }
}));

useHead(() => ({
  link: [{ rel: "canonical", href: canonicalUrl.value }],
  meta: [
    { property: "og:url", content: canonicalUrl.value, key: "og:url" },
    { name: "twitter:url", content: canonicalUrl.value, key: "twitter:url" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(organizationSchema.value)
    }
  ]
}));
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 360ms ease,
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 360ms ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 14px, 0) scale(0.99);
  filter: blur(0.65rem);
}
</style>


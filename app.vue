<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
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
    postalCode: "95032-380"
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


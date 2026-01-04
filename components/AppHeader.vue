<template>
  <header class="site-header">
    <div class="top-bar">
      <div class="container top-bar__inner">
        <div class="top-bar__info">
          <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
          <a :href="`tel:${site.contact.phonesRaw[0]}`">{{ site.contact.phones[0] }}</a>
          <a :href="`tel:${site.contact.phonesRaw[1]}`">{{ site.contact.phones[1] }}</a>
        </div>
        <div class="top-bar__social">
          <a v-for="item in site.social" :key="item.label" :href="item.url">
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
    <div class="nav-bar">
      <div class="container nav-bar__inner">
        <NuxtLink to="/" class="brand">
          <img :src="logoUrl" alt="Dimex" />
          <span>Dimex Profiles</span>
        </NuxtLink>
        <nav class="nav-links">
          <NuxtLink v-for="item in site.nav" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="nav-cta">
          <NuxtLink to="/contato" class="btn btn--primary">Falar com a Dimex</NuxtLink>
        </div>
        <details class="nav-mobile">
          <summary>Menu</summary>
          <div class="nav-mobile__panel">
            <NuxtLink v-for="item in site.nav" :key="item.to" :to="item.to">
              {{ item.label }}
            </NuxtLink>
            <NuxtLink to="/contato" class="btn btn--primary">Falar com a Dimex</NuxtLink>
          </div>
        </details>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

const logoUrl = `${site.baseUrl}/img/logo.png`;
</script>

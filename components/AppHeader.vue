<template>
  <header class="site-header">
    <div class="nav-bar">
      <div class="container nav-bar__inner">
        <NuxtLink to="/" class="brand">
          <img :src="logoUrl" alt="Dimex" />
        </NuxtLink>
        <nav class="nav-links">
          <NuxtLink v-for="item in site.nav" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </nav>
        <div class="nav-cta">
          <UButton
            type="button"
            class="btn btn--secondary theme-toggle"
            :aria-pressed="isDark"
            :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
            @click="toggleTheme"
          >
            {{ isDark ? "Modo claro" : "Modo escuro" }}
          </UButton>
          <UButton to="/contato" class="btn btn--primary">Falar com a Dimex</UButton>
        </div>
        <details class="nav-mobile">
          <summary>Menu</summary>
          <div class="nav-mobile__panel">
            <NuxtLink v-for="item in site.nav" :key="item.to" :to="item.to">
              {{ item.label }}
            </NuxtLink>
            <UButton
              type="button"
              class="btn btn--secondary theme-toggle"
              :aria-pressed="isDark"
              :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
              @click="toggleTheme"
            >
              {{ isDark ? "Modo claro" : "Modo escuro" }}
            </UButton>
            <UButton to="/contato" class="btn btn--primary">Falar com a Dimex</UButton>
          </div>
        </details>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

const logoUrl = computed(() => (isDark.value ? "/logo.webp" : "/logo-2.webp"));
const theme = ref<"light" | "dark">("light");

const isDark = computed(() => theme.value === "dark");

const applyTheme = (value: "light" | "dark") => {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = value;
};

const setTheme = (value: "light" | "dark") => {
  theme.value = value;
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", value);
  }
  applyTheme(value);
};

const toggleTheme = () => {
  setTheme(isDark.value ? "light" : "dark");
};

onMounted(() => {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
});
</script>


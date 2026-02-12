<template>
  <header class="site-header">
    <div class="nav-bar">
      <div class="container nav-bar__inner">
        <NuxtLink to="/" class="brand">
          <img :src="logoUrl" alt="Dimex" />
        </NuxtLink>
        <nav class="nav-links" aria-label="Navegação principal">
          <NuxtLink
            v-for="item in site.nav"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            :class="{ 'is-active': isActiveRoute(item.to) }"
            :aria-current="isActiveRoute(item.to) ? 'page' : undefined"
          >
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
        <div class="nav-mobile">
          <button
            type="button"
            class="nav-mobile__toggle"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-navigation"
            @click="toggleMobileMenu"
          >
            {{ isMobileMenuOpen ? "Fechar" : "Menu" }}
          </button>
          <Transition name="nav-mobile-fade">
            <button
              v-if="isMobileMenuOpen"
              type="button"
              class="nav-mobile__backdrop"
              aria-label="Fechar menu"
              @click="closeMobileMenu"
            ></button>
          </Transition>
          <Transition name="nav-mobile-slide">
            <div
              v-if="isMobileMenuOpen"
              id="mobile-navigation"
              class="nav-mobile__panel"
              role="dialog"
              aria-label="Navegação mobile"
            >
              <NuxtLink
                v-for="item in site.nav"
                :key="item.to"
                :to="item.to"
                class="nav-mobile__link"
                :class="{ 'is-active': isActiveRoute(item.to) }"
                :aria-current="isActiveRoute(item.to) ? 'page' : undefined"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>
              <div class="nav-mobile__actions">
                <UButton
                  type="button"
                  class="btn btn--secondary theme-toggle"
                  :aria-pressed="isDark"
                  :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
                  @click="toggleTheme"
                >
                  {{ isDark ? "Modo claro" : "Modo escuro" }}
                </UButton>
                <UButton to="/contato" class="btn btn--primary" @click="closeMobileMenu">
                  Falar com a Dimex
                </UButton>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

const logoUrl = computed(() => (isDark.value ? "/logo.webp" : "/logo-2.webp"));
const theme = ref<"light" | "dark">("light");
const route = useRoute();
const isMobileMenuOpen = ref(false);

const isDark = computed(() => theme.value === "dark");

const isActiveRoute = (target: string) => {
  if (target === "/") return route.path === "/";
  return route.path === target || route.path.startsWith(`${target}/`);
};

const setBodyLock = (lock: boolean) => {
  if (typeof document === "undefined") return;
  document.body.classList.toggle("body-lock", lock);
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

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

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
};

const onResize = () => {
  if (typeof window === "undefined") return;
  if (window.innerWidth > 900) {
    closeMobileMenu();
  }
};

onMounted(() => {
  if (typeof window === "undefined") return;
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("resize", onResize);

  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
});

onBeforeUnmount(() => {
  if (typeof window === "undefined") return;
  window.removeEventListener("keydown", onKeyDown);
  window.removeEventListener("resize", onResize);
  setBodyLock(false);
});

watch(isMobileMenuOpen, (open) => {
  setBodyLock(open);
});

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu();
  }
);
</script>


<template>
  <div class="home">
    <section class="home-hero" :style="{ '--hero-slide-transition': `${heroSlideTransitionMs}ms` }">
      <div class="home-hero__slides" aria-hidden="true">
        <div class="home-hero__track" :style="heroTrackStyle">
          <div
            v-for="(slide, index) in heroSlidesLoop"
            :key="`${slide}-${index}`"
            class="home-hero__slide"
            :style="{ backgroundImage: `url(${slide})`, flexBasis: `${slideWidthPercent}%` }"
          ></div>
        </div>
      </div>
    </section>

    <section class="section section--soft home-intro">
      <div class="container split">
        <div class="home-hero__content home-intro__content">
          <span class="eyebrow home-hero__eyebrow fade-up" style="animation-delay: 0.1s;">
            {{ site.hero.eyebrow }}
          </span>
          <h1 class="home-hero__title fade-up" style="animation-delay: 0.2s;">
            {{ site.hero.title }}
          </h1>
          <p class="home-hero__lead fade-up" style="animation-delay: 0.3s;">
            {{ site.hero.description }}
          </p>
          <div class="home-hero__actions fade-up" style="animation-delay: 0.4s;">
            <UButton class="btn btn--primary" :to="site.hero.ctaPrimary.to">
              {{ site.hero.ctaPrimary.label }}
            </UButton>
            <UButton
              class="btn btn--secondary"
              :href="site.contact.whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ site.hero.ctaSecondary.label }}
            </UButton>
          </div>
          <div class="home-hero__chips">
            <span
              v-for="(item, index) in site.hero.highlights"
              :key="item"
              class="home-hero__chip fade-up"
              :style="{ animationDelay: `${0.5 + index * 0.1}s` }"
            >
              {{ item }}
            </span>
          </div>
        </div>
        <div class="home-hero__metrics home-intro__metrics">
          <div
            v-for="(stat, index) in heroStats"
            :key="stat.label"
            class="home-kpi fade-up"
            :style="{ animationDelay: `${0.35 + index * 0.1}s` }"
          >
            <div class="home-kpi__value">{{ stat.value }}</div>
            <div class="home-kpi__label">{{ stat.label }}</div>
          </div>
          <div class="home-hero__seals fade-up" style="animation-delay: 0.85s;" aria-label="Selos de qualidade">
            <img
              src="/20%20ANOS%20DE%20GARANTIA.webp"
              alt="Selo 20 anos de garantia"
              loading="lazy"
            />
            <img
              src="/PERFIL%20ALEM%C3%83O.webp"
              alt="Selo perfil alemão"
              loading="lazy"
            />
          </div>
          <div class="home-intro__cta">
            <UButton to="/produtos" class="btn btn--secondary">
              Ver catálogo completo
            </UButton>
            <UButton
              :href="site.contact.whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
            >
              Solicitar atendimento
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="instagram-callout">
          <div>
            <span class="eyebrow instagram-eyebrow">Instagram</span>
            <h2 class="headline">Acompanhe a Dimex no Instagram.</h2>
            <p class="subhead">
              Novidades, aplicações e inspirações em perfis de PVC para esquadrias.
            </p>
            <div class="instagram-actions">
              <UButton
                class="btn btn--primary"
                :href="site.instagram.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil
              </UButton>
              <span class="instagram-handle">{{ site.instagram.handle }}</span>
            </div>
          </div>
          <div class="instagram-preview">
            <div class="instagram-status">
              <span class="instagram-dot"></span>
              <span>{{ site.instagram.label }}</span>
              <span class="instagram-time">Agora</span>
            </div>
            <div class="instagram-embed">
              <ClientOnly>
                <blockquote
                  class="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/dimexgermany/"
                  data-instgrm-version="14"
                ></blockquote>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { site } from "~/data/site";

const heroStats = computed(() => site.stats.slice(0, 4));
const heroSlides = computed(() =>
  site.hero.carouselImages?.length ? site.hero.carouselImages : [site.hero.image]
);
const heroSlidesLoop = computed(() => {
  if (heroSlides.value.length < 2) return heroSlides.value;
  return [...heroSlides.value, heroSlides.value[0]];
});
const heroSlideHoldMs = 5000;
const heroSlideTransitionMs = 900;
const heroSlideCycleMs = heroSlideHoldMs + heroSlideTransitionMs;
const activeHeroTrackIndex = ref(0);
const isHeroTrackTransitionEnabled = ref(true);
let heroCarouselTimer: ReturnType<typeof setTimeout> | null = null;
let heroLoopResetTimer: ReturnType<typeof setTimeout> | null = null;

const slideWidthPercent = computed(() => 100 / Math.max(heroSlidesLoop.value.length, 1));
const heroTrackStyle = computed(() => {
  const count = Math.max(heroSlidesLoop.value.length, 1);
  return {
    width: `${count * 100}%`,
    transform: `translate3d(-${activeHeroTrackIndex.value * (100 / count)}%, 0, 0)`,
    transition: isHeroTrackTransitionEnabled.value
      ? `transform ${heroSlideTransitionMs}ms ease-in-out`
      : "none"
  };
});

const stopHeroCarousel = () => {
  if (typeof window === "undefined") return;
  if (heroCarouselTimer !== null) {
    window.clearTimeout(heroCarouselTimer);
  }
  if (heroLoopResetTimer !== null) {
    window.clearTimeout(heroLoopResetTimer);
  }
  heroCarouselTimer = null;
  heroLoopResetTimer = null;
};

const startHeroCarousel = () => {
  if (typeof window === "undefined" || heroSlides.value.length < 2) return;
  stopHeroCarousel();

  activeHeroTrackIndex.value = 0;
  isHeroTrackTransitionEnabled.value = true;

  const resetLoopTrack = () => {
    isHeroTrackTransitionEnabled.value = false;
    activeHeroTrackIndex.value = 0;
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        isHeroTrackTransitionEnabled.value = true;
      });
    });
  };

  const runStep = () => {
    if (heroSlides.value.length < 2) return;

    activeHeroTrackIndex.value += 1;

    if (activeHeroTrackIndex.value === heroSlides.value.length) {
      heroLoopResetTimer = window.setTimeout(resetLoopTrack, heroSlideTransitionMs + 32);
    }

    heroCarouselTimer = window.setTimeout(runStep, heroSlideCycleMs);
  };

  heroCarouselTimer = window.setTimeout(runStep, heroSlideHoldMs);
};

const preloadHeroSlides = () => {
  if (typeof window === "undefined") return;
  for (const src of heroSlides.value.slice(1)) {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
  }
};

const processInstagramEmbeds = () => {
  const instgrm = (window as { instgrm?: { Embeds?: { process?: () => void } } }).instgrm;
  instgrm?.Embeds?.process?.();
};

onMounted(async () => {
  startHeroCarousel();
  preloadHeroSlides();
  await nextTick();
  processInstagramEmbeds();
  const interval = window.setInterval(() => {
    const instgrm = (window as { instgrm?: { Embeds?: { process?: () => void } } }).instgrm;
    if (instgrm?.Embeds?.process) {
      instgrm.Embeds.process();
      window.clearInterval(interval);
    }
  }, 400);
});

onBeforeUnmount(() => {
  stopHeroCarousel();
});

useSeoMeta({
  title: "Dimex Profiles",
  description:
    "Perfis de PVC com padrão europeu, alta durabilidade e 20 anos de garantia. Conheça as linhas Dimex e soluções para esquadrias.",
  ogTitle: "Dimex Profiles",
  ogDescription:
    "Perfis de PVC com padrão europeu, alta durabilidade e 20 anos de garantia. Conheça as linhas Dimex e soluções para esquadrias.",
  twitterTitle: "Dimex Profiles",
  twitterDescription:
    "Perfis de PVC com padrão europeu, alta durabilidade e 20 anos de garantia. Conheça as linhas Dimex e soluções para esquadrias."
});

useHead({
  script: [
    {
      src: "https://www.instagram.com/embed.js",
      async: true
    }
  ]
});
</script>


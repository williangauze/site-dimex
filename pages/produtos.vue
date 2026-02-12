<template>
  <div>
    <section class="section section--soft">
      <div class="container">
        <span class="eyebrow">Linhas principais</span>
        <h2 class="headline">Conheça nossas linhas.</h2>
        <p class="subhead">
          A Dimex oferece linhas completas de perfis em PVC com padrão europeu, alta durabilidade e
          desempenho técnico para projetos. São soluções pensadas para conforto térmico e acústico,
          eficiência energética e acabamento sofisticado, atendendo com diferentes tipologias de
          esquadrias com confiança e segurança.
        </p>
        <div class="grid grid-1" style="margin-top: 2rem;">
          <template v-for="(line, index) in site.productLines" :key="`${line.title}-${index}`">
            <UCollapsible v-if="line.revealImage" class="line-details" :unmount-on-hide="false">
              <template #default="{ open }">
                <button
                  type="button"
                  class="card line-details__summary"
                  :class="{ 'is-open': open }"
                  @pointerenter="warmUpImage(line.revealImage)"
                  @focus="warmUpImage(line.revealImage)"
                  @touchstart.passive="warmUpImage(line.revealImage)"
                >
                  <div class="card__image">
                    <img :src="line.image" :alt="line.title" loading="lazy" />
                  </div>
                  <span class="line-details__chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </span>
                </button>
              </template>
              <template #content>
                <div class="line-details__panel">
                  <img
                    :src="line.revealImage"
                    :alt="`Catálogo ${line.title}`"
                    loading="lazy"
                    decoding="async"
                    width="1280"
                    height="720"
                  />
                </div>
              </template>
            </UCollapsible>
            <div v-else class="card">
              <div class="card__image">
                <img :src="line.image" :alt="line.title" loading="lazy" />
              </div>
              <div class="card__title">{{ line.title }}</div>
              <div class="card__text">{{ line.description }}</div>
            </div>
          </template>
          <UCollapsible class="line-details" :unmount-on-hide="false">
            <template #default="{ open }">
              <button
                type="button"
                class="card line-details__summary"
                :class="{ 'is-open': open }"
                @pointerenter="warmUpImage('/optimized/persiana-capa.webp')"
                @focus="warmUpImage('/optimized/persiana-capa.webp')"
                @touchstart.passive="warmUpImage('/optimized/persiana-capa.webp')"
              >
                <div class="card__image">
                  <img src="/PERSIANA.webp" alt="Persianas" loading="lazy" />
                </div>
                <span class="line-details__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
                  </svg>
                </span>
              </button>
            </template>
            <template #content>
              <div class="line-details__panel">
                <img
                  src="/optimized/persiana-capa.webp"
                  alt="Persianas"
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
              </div>
            </template>
          </UCollapsible>
          <UCollapsible class="line-details" :unmount-on-hide="false">
            <template #default="{ open }">
              <button
                type="button"
                class="card line-details__summary"
                :class="{ 'is-open': open }"
                @pointerenter="warmUpImage(laminadosCarouselItems[0]?.src)"
                @focus="warmUpImage(laminadosCarouselItems[0]?.src)"
                @touchstart.passive="warmUpImage(laminadosCarouselItems[0]?.src)"
              >
                <div class="card__image">
                  <img src="/laminados-logo.webp" alt="Laminados" loading="lazy" />
                </div>
                <span class="line-details__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
                  </svg>
                </span>
              </button>
            </template>
            <template #content>
              <div class="line-details__panel">
                <div class="laminados-carousel-shell">
                  <UButton
                    class="laminados-carousel__side-button"
                    icon="i-lucide-chevron-left"
                    color="neutral"
                    variant="solid"
                    aria-label="Imagem anterior de laminados"
                    @click="scrollLaminadosPrev"
                  >
                    Anterior
                  </UButton>
                  <UCarousel
                    ref="laminadosCarouselRef"
                    class="laminados-carousel"
                    :items="laminadosCarouselItems"
                    dots
                    loop
                  >
                    <template #default="{ item }">
                      <img
                        class="laminados-carousel__image"
                        :src="item.src"
                        :alt="item.alt"
                        loading="lazy"
                        decoding="async"
                        width="1280"
                        height="720"
                      />
                    </template>
                  </UCarousel>
                  <UButton
                    class="laminados-carousel__side-button"
                    trailing-icon="i-lucide-chevron-right"
                    color="neutral"
                    variant="solid"
                    aria-label="Próxima imagem de laminados"
                    @click="scrollLaminadosNext"
                  >
                    Próxima
                  </UButton>
                </div>
              </div>
            </template>
          </UCollapsible>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { site } from "~/data/site";

const laminadosCarouselItems = [
  { src: "/optimized/laminados.webp", alt: "Laminados" },
  { src: "/optimized/50.webp", alt: "Laminado 50" },
  { src: "/optimized/51.webp", alt: "Laminado 51" },
  { src: "/optimized/52.webp", alt: "Laminado 52" },
  { src: "/optimized/53.webp", alt: "Laminado 53" },
  { src: "/optimized/54.webp", alt: "Laminado 54" },
  { src: "/optimized/55.webp", alt: "Laminado 55" },
  { src: "/optimized/56.webp", alt: "Laminado 56" },
  { src: "/optimized/57.webp", alt: "Laminado 57" },
  { src: "/optimized/58.webp", alt: "Laminado 58" },
  { src: "/optimized/59.webp", alt: "Laminado 59" }
];

type LaminadosCarouselRef = {
  emblaApi?: {
    scrollPrev: () => void;
    scrollNext: () => void;
  };
};

const laminadosCarouselRef = ref<LaminadosCarouselRef | null>(null);
const warmedImages = new Set<string>();

const warmUpImage = (src?: string) => {
  if (typeof window === "undefined" || !src || warmedImages.has(src)) return;
  warmedImages.add(src);
  const image = new Image();
  image.decoding = "async";
  image.src = src;
};

const scrollLaminadosPrev = () => {
  laminadosCarouselRef.value?.emblaApi?.scrollPrev();
};

const scrollLaminadosNext = () => {
  laminadosCarouselRef.value?.emblaApi?.scrollNext();
};

onMounted(() => {
  const browserWindow = window as Window & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  };

  const warmUpFirstImages = () => {
    const firstLineImage = site.productLines[0]?.revealImage;
    warmUpImage(firstLineImage);
    warmUpImage("/optimized/persiana-capa.webp");
    warmUpImage("/optimized/laminados.webp");
  };

  if (browserWindow.requestIdleCallback) {
    browserWindow.requestIdleCallback(warmUpFirstImages, { timeout: 1200 });
    return;
  }

  warmUpFirstImages();
});

useSeoMeta({
  title: "Produtos",
  description:
    "Conheça as linhas Dimex de perfis em PVC, persianas e laminados com padrão europeu, durabilidade e desempenho técnico.",
  ogTitle: "Produtos · Dimex Profiles",
  ogDescription:
    "Conheça as linhas Dimex de perfis em PVC, persianas e laminados com padrão europeu, durabilidade e desempenho técnico.",
  twitterTitle: "Produtos · Dimex Profiles",
  twitterDescription:
    "Conheça as linhas Dimex de perfis em PVC, persianas e laminados com padrão europeu, durabilidade e desempenho técnico."
});
</script>

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
            <UCollapsible v-if="line.revealImage" class="line-details">
              <template #default="{ open }">
                <button type="button" class="card line-details__summary" :class="{ 'is-open': open }">
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
                  <img :src="line.revealImage" :alt="`Catálogo ${line.title}`" loading="lazy" />
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
          <UCollapsible class="line-details">
            <template #default="{ open }">
              <button type="button" class="card line-details__summary" :class="{ 'is-open': open }">
                <div class="card__image">
                  <img src="/PERSIANA.png" alt="Persianas" loading="lazy" />
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
                <img src="/persiana-capa.png" alt="Persianas" loading="lazy" />
              </div>
            </template>
          </UCollapsible>
          <UCollapsible class="line-details">
            <template #default="{ open }">
              <button type="button" class="card line-details__summary" :class="{ 'is-open': open }">
                <div class="card__image">
                  <img src="/laminados-logo.png" alt="Laminados" loading="lazy" />
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
                <div class="laminados-stack">
                  <img class="laminados-stack__image" src="/laminados.jpg" alt="Laminados" loading="lazy" />
                  <img class="laminados-stack__image" src="/50.jpg" alt="Laminado 50" loading="lazy" />
                  <img class="laminados-stack__image" src="/51.jpg" alt="Laminado 51" loading="lazy" />
                  <img class="laminados-stack__image" src="/52.jpg" alt="Laminado 52" loading="lazy" />
                  <img class="laminados-stack__image" src="/53.jpg" alt="Laminado 53" loading="lazy" />
                  <img class="laminados-stack__image" src="/54.jpg" alt="Laminado 54" loading="lazy" />
                  <img class="laminados-stack__image" src="/55.jpg" alt="Laminado 55" loading="lazy" />
                  <img class="laminados-stack__image" src="/56.jpg" alt="Laminado 56" loading="lazy" />
                  <img class="laminados-stack__image" src="/57.jpg" alt="Laminado 57" loading="lazy" />
                  <img class="laminados-stack__image" src="/58.jpg" alt="Laminado 58" loading="lazy" />
                  <img class="laminados-stack__image" src="/59.jpg" alt="Laminado 59" loading="lazy" />
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
import { site } from "~/data/site";

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

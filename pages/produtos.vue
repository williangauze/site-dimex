<template>
  <div>
    <section class="section section--soft">
      <div class="container">
        <span class="eyebrow">Linhas principais</span>
        <h2 class="headline">Conheça nossas linhas.</h2>
        <div class="grid grid-1" style="margin-top: 2rem;">
          <template v-for="(line, index) in site.productLines" :key="`${line.title}-${index}`">
            <details v-if="line.revealImage" class="line-details">
              <summary class="card line-details__summary">
                <div class="card__image">
                  <img :src="line.image" :alt="line.title" loading="lazy" />
                </div>
                <span class="line-details__hint">Clique para expandir</span>
              </summary>
              <div class="line-details__panel">
                <img :src="line.revealImage" :alt="`Catálogo ${line.title}`" loading="lazy" />
              </div>
            </details>
            <div v-else class="card">
              <div class="card__image">
                <img :src="line.image" :alt="line.title" loading="lazy" />
              </div>
              <div class="card__title">{{ line.title }}</div>
              <div class="card__text">{{ line.description }}</div>
            </div>
          </template>
          <details class="line-details">
            <summary class="card line-details__summary">
              <div class="card__image">
                <img src="/PERSIANA.png" alt="Persianas" loading="lazy" />
              </div>
              <span class="line-details__hint">Clique para expandir</span>
            </summary>
            <div class="line-details__panel">
              <img src="/persiana-capa.png" alt="Persianas" loading="lazy" />
            </div>
          </details>
          <details class="line-details">
            <summary class="card line-details__summary">
              <div class="card__image">
                <img src="/laminados-logo.png" alt="Laminados" loading="lazy" />
              </div>
              <span class="line-details__hint">Clique para expandir</span>
            </summary>
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
          </details>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useHead({
  title: "Produtos"
});
</script>

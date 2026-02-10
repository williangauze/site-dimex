<template>
  <div>
    <section class="section section--soft">
      <div class="container">
        <span class="eyebrow">Linhas principais</span>
        <h2 class="headline">Conheça as linhas Dimex.</h2>
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
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="eyebrow">Catálogo</span>
        <h2 class="headline">Produtos e tipologias</h2>
        <div class="grid grid-3" style="margin-top: 2rem;">
          <div v-for="item in site.productCatalog" :key="item.title" class="card">
            <div class="card__image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="card__title">{{ item.title }}</div>
            <div class="card__text">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container split">
        <div>
          <span class="eyebrow">Persianas em PVC</span>
          <h2 class="headline">Controle de luz e conforto térmico.</h2>
          <p class="subhead">
            Persianas de enrolar pensadas para escurecimento e eficiência energética.
          </p>
          <div class="grid grid-3" style="margin-top: 1.8rem;">
            <div v-for="item in site.persianas" :key="item.title" class="card">
              <div class="card__image">
                <img :src="item.image" :alt="item.title" loading="lazy" />
              </div>
              <div class="card__title">{{ item.title }}</div>
              <div class="card__text">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div class="card">
          <span class="pill">Destaque</span>
          <p class="card__text" style="margin-top: 1rem;">
            Solução padrão para dormitórios, home theaters e escritórios, com
            performance consistente e acabamento sofisticado.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Laminados</span>
          <h2 class="headline">Acabamentos personalizados e duráveis.</h2>
          <p class="subhead">{{ site.laminadosInfo.description }}</p>
          <div class="grid grid-2" style="margin-top: 1.8rem;">
            <div v-for="item in site.laminados" :key="item.title" class="card">
              <div class="card__image">
                <img :src="item.image" :alt="item.title" loading="lazy" />
              </div>
              <div class="card__title">{{ item.title }}</div>
              <div class="card__text">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div class="card">
          <span class="pill">Vantagens</span>
          <div class="subhead" style="margin-top: 1rem;">
            <p v-for="item in site.laminadosInfo.advantages" :key="item">- {{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container split">
        <div class="card">
          <div class="card__image">
            <img :src="site.reforcos.image" :alt="site.reforcos.title" loading="lazy" />
          </div>
          <div class="card__title">{{ site.reforcos.title }}</div>
          <div class="card__text">{{ site.reforcos.description }}</div>
        </div>
        <div class="card">
          <div class="card__image">
            <img :src="site.telaMosquiteiro.image" :alt="site.telaMosquiteiro.title" loading="lazy" />
          </div>
          <div class="card__title">{{ site.telaMosquiteiro.title }}</div>
          <div class="card__text">{{ site.telaMosquiteiro.description }}</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="eyebrow">Qualidade Dimex</span>
        <h2 class="headline">Certificações e diferenciais</h2>
        <div class="grid grid-4" style="margin-top: 2rem;">
          <div v-for="item in site.qualidade.items" :key="item.title" class="card">
            <div class="card__image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="card__title">{{ item.title }}</div>
            <div class="card__text">{{ item.description }}</div>
          </div>
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

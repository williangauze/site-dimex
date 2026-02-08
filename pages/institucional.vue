<template>
  <div>
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Institucional</span>
          <h1 class="headline">Dimex: engenharia e design em equilibrio.</h1>
          <p class="subhead">
            Conheca a historia que conecta tecnologia alema a solucoes de alto
            desempenho para esquadrias em PVC.
          </p>
          <div class="hero__stats" style="margin-top: 2rem;">
            <div v-for="stat in site.stats" :key="stat.label" class="stat">
              <div class="stat__value">{{ stat.value }}</div>
              <div class="stat__label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image">
            <img :src="institutionalImage" alt="Dimex institucional" />
          </div>
          <div class="card__text">
            Tecnologia, inovacao e sustentabilidade guiam cada etapa da producao.
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container split">
        <div>
          <span class="eyebrow">Nossa historia</span>
          <h2 class="headline">Conheca nossa trajetoria.</h2>
          <div class="subhead" style="display: grid; gap: 1rem;">
            <p v-for="line in site.history" :key="line">{{ line }}</p>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="card">
            <span class="pill">Missao</span>
            <p class="card__text" style="margin-top: 1rem;">{{ site.mission }}</p>
          </div>
          <div class="card">
            <span class="pill">Visao</span>
            <p class="card__text" style="margin-top: 1rem;">{{ site.vision }}</p>
          </div>
          <div class="card" style="grid-column: span 2;">
            <span class="pill">Valores</span>
            <p class="card__text" style="margin-top: 1rem;">{{ site.values }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Compromisso</span>
          <h2 class="headline">Uma marca pensada para arquitetos.</h2>
          <p class="subhead">
            A Dimex entrega perfis com alto desempenho termico e acustico, conforto
            e durabilidade, mantendo uma estetica elegante e contemporanea.
          </p>
        </div>
        <div class="card">
          <span class="pill">Diferenciais</span>
          <div class="subhead" style="margin-top: 1rem;">
            <p v-for="item in site.qualidade.differentiators" :key="item">- {{ item }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useHead({
  title: "Institucional"
});

const institutionalImage = `${site.catalogUrl}/p03-sobre.png`;
</script>

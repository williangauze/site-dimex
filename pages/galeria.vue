<template>
  <div>
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Galeria</span>
          <h1 class="headline">Arquitetura, luz e sensorialidade.</h1>
          <p class="subhead">
            Uma selecao de ambientes que destacam a elegancia das esquadrias Dimex,
            com foco em conforto e desempenho.
          </p>
        </div>
        <div class="card">
          <span class="pill">Inspire-se</span>
          <p class="card__text" style="margin-top: 1rem;">
            Projetos com perfis em PVC capazes de transformar a experiencia dos
            usuarios e valorizar cada detalhe construtivo.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="grid grid-3 gallery-grid">
          <img v-for="image in site.galleryImages" :key="image.src" :src="image.src" :alt="image.alt" loading="lazy" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useHead({
  title: "Galeria"
});
</script>

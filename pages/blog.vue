<template>
  <div>
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Blog</span>
          <h1 class="headline">Conteúdo técnico e tendências.</h1>
          <p class="subhead">
            Notícias, insights e conhecimento sobre perfis de PVC, isolamento e
            arquitetura contemporânea.
          </p>
        </div>
        <div class="card">
          <span class="pill">Categorias</span>
          <div class="subhead" style="margin-top: 1rem;">
            <p v-for="cat in site.blogCategories" :key="cat.name">
              {{ cat.name }} ({{ cat.count }} posts)
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="grid grid-3">
          <div v-for="post in site.blogPosts" :key="post.title" class="card blog-card">
            <div class="card__image">
              <img :src="post.image" :alt="post.title" loading="lazy" />
            </div>
            <div class="card__title">{{ post.title }}</div>
            <div class="blog-card__meta">{{ post.date }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useHead({
  title: "Blog"
});
</script>

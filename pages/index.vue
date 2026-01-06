<template>
  <div>
    <section class="section">
      <div class="container hero">
        <div class="hero__panel">
          <span class="eyebrow fade-up" style="animation-delay: 0.1s;">{{ site.hero.eyebrow }}</span>
          <h1 class="headline fade-up" style="animation-delay: 0.2s;">{{ site.hero.title }}</h1>
          <p class="subhead fade-up" style="animation-delay: 0.3s;">
            {{ site.hero.description }}
          </p>
          <div class="highlight-list">
            <div
              v-for="(item, index) in site.hero.highlights"
              :key="item"
              class="highlight-item fade-up"
              :style="{ animationDelay: `${0.4 + index * 0.1}s` }"
            >
              <span></span>
              <div>{{ item }}</div>
            </div>
          </div>
          <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1.6rem;">
            <NuxtLink class="btn btn--primary" :to="site.hero.ctaPrimary.to">
              {{ site.hero.ctaPrimary.label }}
            </NuxtLink>
            <NuxtLink class="btn btn--secondary" :to="site.hero.ctaSecondary.to">
              {{ site.hero.ctaSecondary.label }}
            </NuxtLink>
          </div>
          <div class="hero__stats">
            <div v-for="stat in site.stats" :key="stat.label" class="stat">
              <div class="stat__value">{{ stat.value }}</div>
              <div class="stat__label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div
          class="hero__image"
          :style="{ backgroundImage: `url(${site.hero.image})` }"
          aria-hidden="true"
        ></div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="split">
          <div>
            <span class="eyebrow">Produtos em destaque</span>
            <h2 class="headline">Selecao que inspira projetos contemporaneos.</h2>
            <p class="subhead">
              Perfis, tipologias e diferenciais que equilibram desempenho e elegancia,
              mantendo a assinatura tecnica Dimex.
            </p>
          </div>
          <div class="grid grid-4">
            <div
              v-for="(item, index) in site.featuredProducts"
              :key="item.title"
              class="card fade-up"
              :style="{ animationDelay: `${0.05 * index}s` }"
            >
              <div class="card__image">
                <img :src="item.image" :alt="item.title" loading="lazy" />
              </div>
              <div class="card__title">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Nossa historia</span>
          <h2 class="headline">Conheca a trajetoria Dimex.</h2>
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
      <div class="container">
        <div class="card instagram-callout">
          <div class="instagram-copy">
            <span class="eyebrow instagram-eyebrow">SIGA A DIMEX NO INSTAGRAM</span>
            <h2 class="headline">Atualizacoes e inspiracao para arquitetos.</h2>
            <p class="subhead">
              Conteudo tecnico, bastidores e inspiracao para projetos de arquitetura.
            </p>
            <div class="instagram-actions">
              <span class="instagram-handle">{{ site.instagram.handle }}</span>
              <a class="btn btn--primary" :href="site.instagram.url" target="_blank" rel="noreferrer">
                {{ site.instagram.label }}
              </a>
            </div>
          </div>
          <div class="instagram-preview">
            <div class="instagram-status">
              <span class="instagram-dot"></span>
              <span>Feed conectado</span>
              <span class="instagram-time">Atualizado hoje</span>
            </div>
            <div class="instagram-grid">
              <div v-for="item in site.instagramPreview" :key="item.image" class="instagram-card">
                <img :src="item.image" :alt="item.caption" loading="lazy" />
                <div class="instagram-overlay">
                  <div class="instagram-caption">{{ item.caption }}</div>
                  <div class="instagram-meta">{{ item.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="split">
          <div>
            <span class="eyebrow">Linhas Dimex</span>
            <h2 class="headline">Solucao completa para esquadrias em PVC.</h2>
            <p class="subhead">
              Cada linha foi desenvolvida para atender necessidades especificas de
              desempenho, acabamento e flexibilidade.
            </p>
          </div>
          <div class="grid grid-3">
            <div v-for="line in site.productLines" :key="line.title" class="card">
              <div class="card__image">
                <img :src="line.image" :alt="line.title" loading="lazy" />
              </div>
              <div class="card__title">{{ line.title }}</div>
              <div class="card__text">{{ line.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--deep">
      <div class="container">
        <span class="eyebrow" style="color: rgba(248, 244, 239, 0.6);">Qualidade Dimex</span>
        <h2 class="headline">Tecnologia europeia, proximidade brasileira.</h2>
        <p class="subhead" style="color: rgba(248, 244, 239, 0.75); max-width: 680px;">
          {{ site.qualidade.overview }}
        </p>
        <div class="grid grid-4" style="margin-top: 2.5rem;">
          <div v-for="item in site.qualidade.items" :key="item.title" class="card card--glass">
            <div class="card__image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="card__title">{{ item.title }}</div>
            <div class="card__text">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Laminados e cores</span>
          <h2 class="headline">{{ site.laminadosInfo.title }}</h2>
          <p class="subhead">{{ site.laminadosInfo.description }}</p>
          <div class="grid grid-2" style="margin-top: 1.6rem;">
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
          <span class="pill">Vantagens do PVC</span>
          <div class="subhead" style="margin-top: 1rem;">
            <p v-for="item in site.laminadosInfo.advantages" :key="item">- {{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="split">
          <div>
            <span class="eyebrow">Galeria</span>
            <h2 class="headline">Inspire-se com projetos e ambientes.</h2>
            <p class="subhead">
              Solucoes Dimex elevam o conforto e a estetica de residencias, fachadas e
              interiores.
            </p>
          </div>
          <div class="grid grid-3 gallery-grid">
            <img v-for="image in galleryPreview" :key="image.src" :src="image.src" :alt="image.alt" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split">
          <div>
            <span class="eyebrow">Blog</span>
            <h2 class="headline">Conteudo tecnico e tendencias.</h2>
            <p class="subhead">
              Materiais, performance e arquitetura em leitura leve para apoiar suas
              escolhas.
            </p>
            <NuxtLink class="btn btn--secondary" to="/blog" style="margin-top: 1.5rem;">
              Ver todas as noticias
            </NuxtLink>
          </div>
          <div class="grid grid-3">
            <div v-for="post in blogPreview" :key="post.title" class="card blog-card">
              <div class="card__image">
                <img :src="post.image" :alt="post.title" loading="lazy" />
              </div>
              <div class="card__title">{{ post.title }}</div>
              <div class="blog-card__meta">{{ post.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--deep">
      <div class="container split">
        <div>
          <span class="eyebrow" style="color: rgba(248, 244, 239, 0.6);">Contato</span>
          <h2 class="headline">Vamos conversar sobre seu proximo projeto.</h2>
          <p class="subhead" style="color: rgba(248, 244, 239, 0.75);">
            Fale com nossos especialistas e leve a tecnologia Dimex para suas obras.
          </p>
        </div>
        <div class="card card--glass">
          <p class="card__text">
            {{ site.contact.address }}
          </p>
          <p class="card__text">
            {{ site.contact.phones[0] }} | {{ site.contact.phones[1] }}
          </p>
          <p class="card__text">
            {{ site.contact.email }}
          </p>
          <NuxtLink to="/contato" class="btn btn--primary" style="margin-top: 1rem;">
            Falar com a Dimex
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useHead({
  title: "Home"
});

const galleryPreview = site.galleryImages.slice(0, 6);
const blogPreview = site.blogPosts.slice(0, 3);
</script>

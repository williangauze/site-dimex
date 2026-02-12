<template>
  <div class="home">
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
            <UButton class="btn btn--primary" :to="site.hero.ctaPrimary.to">
              {{ site.hero.ctaPrimary.label }}
            </UButton>
            <UButton class="btn btn--secondary" :to="site.hero.ctaSecondary.to">
              {{ site.hero.ctaSecondary.label }}
            </UButton>
          </div>
          <div class="hero__stats">
            <div v-for="stat in site.stats" :key="stat.label" class="stat">
              <div class="stat__value">{{ stat.value }}</div>
              <div class="stat__label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="hero__media">
          <div
            class="hero__image"
            :style="{ backgroundImage: `url(${site.hero.image})` }"
            aria-hidden="true"
          ></div>
          <div class="hero__seals" aria-label="Selos de qualidade">
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
          <div class="hero__certs" aria-label="Certificações">
            <img
              src="/CERTIFICA%C3%87%C3%95ES.webp"
              alt="Certificações nacionais e internacionais"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Dimex Window Profile</span>
          <h2 class="headline">Perfis de PVC com padrão europeu para obras exigentes.</h2>
          <div class="subhead home-text">
            <p>
              A Dimex entrega solução completa em perfis de PVC, unindo tecnologia,
              design e desempenho para esquadrias residenciais e corporativas.
            </p>
            <p>
              Da especificação ao pós-obra, oferecemos suporte técnico, atendimento próximo
              e confiança para que cada projeto tenha o melhor resultado.
            </p>
          </div>
        </div>
          <div class="grid grid-2">
          <div class="card">
            <UBadge class="pill">Tecnologia</UBadge>
            <p class="card__text" style="margin-top: 1rem;">
              Matérias-primas de alta pureza e controle de processo para durabilidade superior.
            </p>
          </div>
          <div class="card">
            <UBadge class="pill">Garantia</UBadge>
            <p class="card__text" style="margin-top: 1rem;">
              Única a oferecer 20 anos de garantia no Brasil para perfis brancos.
            </p>
          </div>
          <div class="card" style="grid-column: span 2;">
            <UBadge class="pill">Certificações</UBadge>
            <p class="card__text" style="margin-top: 1rem;">
              Certificações nacionais e internacionais que comprovam desempenho e qualidade.
            </p>
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
                rel="noreferrer"
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

    <section class="section section--deep">
      <div class="container split">
        <div>
          <span class="eyebrow" style="color: rgba(248, 244, 239, 0.6);">Contato</span>
          <h2 class="headline">Vamos conversar sobre seu próximo projeto.</h2>
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
          <UButton to="/contato" class="btn btn--primary" style="margin-top: 1rem;">
            Falar com a Dimex
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { site } from "~/data/site";

const processInstagramEmbeds = () => {
  const instgrm = (window as { instgrm?: { Embeds?: { process?: () => void } } }).instgrm;
  instgrm?.Embeds?.process?.();
};

onMounted(async () => {
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

useSeoMeta({
  title: "Home",
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


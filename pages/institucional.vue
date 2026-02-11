<template>
  <div>
    <section class="section section--soft">
      <div class="container split">
        <div>
          <span class="eyebrow">Nossa história</span>
          <h2 class="headline">Conheça nossa trajetória.</h2>
          <div class="subhead history-text">
            <p v-for="line in site.history" :key="line">{{ line }}</p>
          </div>
        </div>
        <div class="grid grid-2">
          <div class="card">
            <UBadge class="pill">Missão</UBadge>
            <p class="card__text" style="margin-top: 1rem;">{{ site.mission }}</p>
          </div>
          <div class="card">
            <UBadge class="pill">Visão</UBadge>
            <p class="card__text" style="margin-top: 1rem;">{{ site.vision }}</p>
          </div>
          <div class="card" style="grid-column: span 2;">
            <UBadge class="pill">Valores</UBadge>
            <p class="card__text" style="margin-top: 1rem;">{{ site.values }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <span class="eyebrow">Fábricas</span>
        <div class="card" style="margin-top: 1.6rem; padding: 0;">
          <img
            src="/empresas.png"
            alt="Unidades fabris Dimex no mundo"
            loading="lazy"
            style="width: 100%; height: auto; display: block; border-radius: 20px;"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Compromisso</span>
          <h2 class="headline">Uma marca pensada para todos os projetos.</h2>
          <p class="subhead">
            A Dimex desenvolve perfis para diferentes tipologias e usos, com alto desempenho
            térmico e acústico, conforto e durabilidade, mantendo uma estética elegante
            e contemporânea.
          </p>
        </div>
        <div class="card">
          <UBadge class="pill">Diferenciais</UBadge>
          <div class="subhead" style="margin-top: 1rem;">
            <p v-for="item in site.qualidade.differentiators" :key="item">- {{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container split">
        <div>
          <span class="eyebrow">Certificações</span>
          <h2 class="headline">Qualidade comprovada.</h2>
          <p class="subhead">
            Os perfis DIMEX passam por testes rigorosos de desempenho e composição, com validações
            em laboratórios reconhecidos internacionalmente. No Brasil, além das exigências da ABNT
            para perfis, ensaiamos as esquadrias em penetração de ar, estanqueidade à água e resistência
            a cargas uniformes, garantindo eficiência, conforto térmico e segurança estrutural.
          </p>
        </div>
        <div class="card" style="display: flex; align-items: center; justify-content: center;">
          <div class="cert-block">
            <img
              src="/Certificado%2020%20anos%20de%20Garantia%20DIMEX%202024.png"
              alt="Certificado de 20 anos de garantia Dimex"
              loading="lazy"
            />
            <div class="cert-seals" aria-label="Selos de qualidade">
              <img
                src="/20%20ANOS%20DE%20GARANTIA.png"
                alt="Selo 20 anos de garantia"
                loading="lazy"
              />
              <img
                src="/PERFIL%20ALEM%C3%83O.png"
                alt="Selo perfil alemão"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useSeoMeta({
  title: "Institucional",
  description:
    "Conheça a história, missão, visão e valores da Dimex, além dos diferenciais de qualidade e certificações.",
  ogTitle: "Institucional · Dimex Profiles",
  ogDescription:
    "Conheça a história, missão, visão e valores da Dimex, além dos diferenciais de qualidade e certificações.",
  twitterTitle: "Institucional · Dimex Profiles",
  twitterDescription:
    "Conheça a história, missão, visão e valores da Dimex, além dos diferenciais de qualidade e certificações."
});

</script>

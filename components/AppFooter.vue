<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <img :src="logoUrl" alt="Dimex" style="width: 140px; margin-bottom: 1rem;" />
        <p>
          Solucoes em perfis de PVC para esquadrias com tecnologia alema e
          desempenho comprovado.
        </p>
        <div class="top-bar__social" style="margin-top: 1rem;">
          <a v-for="item in site.social" :key="item.label" :href="item.url">
            {{ item.label }}
          </a>
        </div>
      </div>
      <div class="footer-links">
        <strong>Menu</strong>
        <div style="margin-top: 0.8rem;">
          <NuxtLink v-for="item in site.nav" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <strong>Contato</strong>
        <p style="margin-top: 0.8rem;">
          <a :href="site.contact.addressLink" target="_blank" rel="noreferrer">
            {{ site.contact.address }}
          </a>
        </p>
        <p>
          <a :href="`tel:${site.contact.phonesRaw[0]}`">{{ site.contact.phones[0] }}</a>
        </p>
        <p>
          <a :href="`tel:${site.contact.phonesRaw[1]}`">{{ site.contact.phones[1] }}</a>
        </p>
        <p>
          <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
        </p>
      </div>
      <div>
        <strong>Newsletter</strong>
        <form class="form" style="margin-top: 0.8rem;">
          <input class="input" type="email" placeholder="Seu e-mail" required />
          <button class="btn btn--light" type="submit">Enviar</button>
        </form>
        <p style="margin-top: 0.6rem; font-size: 0.85rem; opacity: 0.7;">
          Cadastre-se para receber novidades e tendencias.
        </p>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>Copyright 2026 Dimex.</span>
      <a href="http://www.ellitedigital.com.br" target="_blank" rel="noreferrer">
        Desenvolvido por Ellite Digital
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

const logoUrl = `${site.baseUrl}/img/logo.png`;
</script>

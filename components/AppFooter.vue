<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <img :src="logoUrl" alt="Dimex" style="width: 140px; margin-bottom: 1rem;" />
        <p>
          Soluções em perfis de PVC para esquadrias com tecnologia alemã e
          desempenho comprovado.
        </p>
        <div class="top-bar__social" style="margin-top: 1rem;">
          <a :href="site.instagram.url" class="social-link" target="_blank" rel="noreferrer">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.6" />
              <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
            </svg>
            <span>{{ site.instagram.handle }}</span>
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
        <p style="margin-top: 0.8rem;">
          Em breve, novidades e tendências no seu e-mail.
        </p>
      </div>
    </div>
    <div class="container footer-share">
      <div>
        <strong>Compartilhe a Dimex</strong>
        <p style="margin-top: 0.4rem; color: rgba(248, 244, 239, 0.75);">
          Gostou das soluções Dimex? Envie o site para sua equipe ou clientes.
        </p>
      </div>
      <div class="footer-share__actions">
        <UButton class="btn btn--light" type="button" @click="shareSite">Compartilhar</UButton>
        <button class="footer-share__link" type="button" @click="copyLink">Copiar link</button>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>Copyright 2026 Dimex.</span>
      <span>Desenvolvido por Arbitrium Produtora</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

const logoUrl = "/logo.png";
const toast = useToast();

const getShareUrl = () => {
  if (typeof window === "undefined") return "";
  return window.location.href;
};

const copyLink = async () => {
  if (typeof navigator === "undefined") return;
  try {
    await navigator.clipboard.writeText(getShareUrl());
    toast.add({ title: "Link copiado", description: "Pronto para compartilhar." });
  } catch {
    toast.add({ title: "Não foi possível copiar", color: "red" });
  }
};

const shareSite = async () => {
  if (typeof navigator === "undefined") return;
  const url = getShareUrl();
  if (!url) return;
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Dimex Window Profile",
        url
      });
      return;
    } catch {
      // user cancelled share
    }
  }
  await copyLink();
};
</script>

<template>
  <div>
    <section class="section">
      <div class="container split" style="align-items: flex-start;">
        <div>
          <span class="eyebrow">Inovação</span>
          <div style="margin-top: 0.4rem;">
            <img
              src="/PROTEA.png"
              alt="Logo Protea"
              loading="lazy"
              style="max-width: 380px; height: auto;"
            />
          </div>
          <h1 class="headline">Inovação em portas de correr</h1>
          <p class="subhead">
            A Protea é o sistema da Dimex pensado para desempenho e praticidade,
            com foco em drenagem eficiente e soluções para piso embutido.
          </p>
          <div class="card" style="margin-top: 1.6rem;">
            <UBadge class="pill">Diferenciais</UBadge>
            <div class="subhead" style="margin-top: 1rem; text-align: left;">
              <p>Sistema de drenagem com componentes técnicos.</p>
              <p>Projetado para portas de correr com piso embutido.</p>
              <p>Desempenho e acabamento alinhados ao padrão Dimex.</p>
            </div>
            <div style="margin-top: 1.2rem; text-align: center;">
              <img
                :src="profileImage"
                alt="Perfil Dimex"
                loading="lazy"
                style="max-width: 140px; width: 100%; height: auto; border-radius: 12px; margin: 0 auto; display: block;"
              />
            </div>
          </div>
        </div>
        <div class="card">
          <video
            src="/VÍDEO-PROTEA.mp4"
            controls
            style="width: 100%; border-radius: 16px;"
          ></video>
        </div>
      </div>

      <div class="container" style="margin-top: 2.5rem;">
        <span class="eyebrow">Linha Protea</span>
        <h2 class="headline">Desempenho técnico com acabamento premium.</h2>
        <div class="subhead">
          <p>
            A linha Protea foi desenvolvida para projetos que exigem suavidade no movimento,
            melhor estanqueidade e integração estética com diferentes ambientes.
          </p>
          <p>
            Seu sistema de drenagem e componentes dedicados permite uma instalação mais limpa,
            com foco em durabilidade e segurança no uso diário.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { site } from "~/data/site";

const isDark = ref(false);

const updateTheme = () => {
  if (typeof document === "undefined") return;
  isDark.value = document.documentElement.dataset.theme === "dark";
};

onMounted(() => {
  updateTheme();
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  onUnmounted(() => observer.disconnect());
});

const profileImage = computed(() => (isDark.value ? "/perfil-modo-escuro.png" : "/perfil.png"));

useSeoMeta({
  title: "Inovação",
  description:
    "Linha Protea: inovação em portas de correr com drenagem eficiente, piso embutido e desempenho técnico Dimex.",
  ogTitle: "Inovação · Dimex Profiles",
  ogDescription:
    "Linha Protea: inovação em portas de correr com drenagem eficiente, piso embutido e desempenho técnico Dimex.",
  twitterTitle: "Inovação · Dimex Profiles",
  twitterDescription:
    "Linha Protea: inovação em portas de correr com drenagem eficiente, piso embutido e desempenho técnico Dimex."
});
</script>

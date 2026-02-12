<template>
  <div>
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Contato</span>
          <h1 class="headline">Vamos conversar sobre seu projeto.</h1>
          <p class="subhead">
            Entre em contato para receber suporte técnico, informações e
            especificações completas das linhas Dimex.
          </p>
          <div class="card" style="margin-top: 2rem;">
            <p class="card__text">
              <strong>Endereço</strong><br />
              <a :href="site.contact.addressLink" target="_blank" rel="noreferrer">
                {{ site.contact.address }}
              </a>
            </p>
            <p class="card__text">
              <strong>Telefone</strong><br />
              <a :href="`tel:${site.contact.phonesRaw[0]}`">{{ site.contact.phones[0] }}</a>
              |
              <a :href="`tel:${site.contact.phonesRaw[1]}`">{{ site.contact.phones[1] }}</a>
            </p>
            <p class="card__text">
              <strong>E-mail</strong><br />
              <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
            </p>
            <div class="contact-actions">
              <UButton
                class="btn btn--secondary"
                :href="`tel:${site.contact.phonesRaw[0]}`"
              >
                Ligar agora
              </UButton>
              <UButton
                class="btn btn--secondary"
                :href="site.contact.addressLink"
                target="_blank"
                rel="noreferrer"
              >
                Abrir no mapa
              </UButton>
            </div>
          </div>
        </div>
        <div class="card">
          <UBadge class="pill">Envie uma mensagem</UBadge>
          <form class="form" style="margin-top: 1rem;" @submit.prevent="openEmailDraft">
            <div class="field">
              <label class="field-label" for="contact-name">Nome</label>
              <input
                id="contact-name"
                v-model.trim="contactForm.name"
                class="input"
                type="text"
                autocomplete="name"
                required
              />
            </div>
            <div class="field">
              <label class="field-label" for="contact-email">E-mail</label>
              <input
                id="contact-email"
                v-model.trim="contactForm.email"
                class="input"
                type="email"
                autocomplete="email"
                inputmode="email"
                required
              />
            </div>
            <div class="field">
              <label class="field-label" for="contact-phone">Telefone (opcional)</label>
              <input
                id="contact-phone"
                v-model.trim="contactForm.phone"
                class="input"
                type="tel"
                autocomplete="tel"
                inputmode="tel"
              />
            </div>
            <div class="field">
              <label class="field-label" for="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                v-model.trim="contactForm.message"
                class="textarea"
                required
              ></textarea>
            </div>
            <UButton class="btn btn--primary" type="submit">Abrir e-mail para envio</UButton>
          </form>
          <p class="form-helper">
            Enviamos a mensagem para seu cliente de e-mail já preenchida.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="contact-grid">
          <div class="card">
            <UBadge class="pill">Mapa</UBadge>
            <div style="margin-top: 1rem;">
              <iframe
                :src="site.contact.mapEmbed"
                width="100%"
                height="320"
                style="border: 0; border-radius: 16px;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa Dimex"
              ></iframe>
            </div>
          </div>
          <div class="card">
            <UBadge class="pill">Atendimento</UBadge>
            <p class="card__text" style="margin-top: 1rem;">
              Tecnologia Dimex para esquadrias com alto desempenho térmico e
              acústico. Atendimento especializado para arquitetos e especificadores.
            </p>
            <UButton to="/produtos" class="btn btn--secondary" style="margin-top: 1rem;">
              Ver produtos
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { site } from "~/data/site";

const toast = useToast();

const contactForm = reactive({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const openEmailDraft = () => {
  if (typeof window === "undefined") return;

  const subject = encodeURIComponent(`Contato pelo site Dimex - ${contactForm.name}`);
  const body = [
    `Nome: ${contactForm.name}`,
    `E-mail: ${contactForm.email}`,
    contactForm.phone ? `Telefone: ${contactForm.phone}` : "",
    "",
    "Mensagem:",
    contactForm.message
  ]
    .filter(Boolean)
    .join("\n");

  const mailtoUrl = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
  toast.add({
    title: "Rascunho aberto",
    description: "Revise no e-mail e envie para a equipe Dimex."
  });
};

useSeoMeta({
  title: "Contato",
  description:
    "Fale com a Dimex e receba suporte técnico, informações e especificações das linhas de perfis em PVC.",
  ogTitle: "Contato · Dimex Profiles",
  ogDescription:
    "Fale com a Dimex e receba suporte técnico, informações e especificações das linhas de perfis em PVC.",
  twitterTitle: "Contato · Dimex Profiles",
  twitterDescription:
    "Fale com a Dimex e receba suporte técnico, informações e especificações das linhas de perfis em PVC."
});
</script>

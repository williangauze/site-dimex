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
              <a :href="site.contact.addressLink" target="_blank" rel="noopener noreferrer">
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
              <strong>WhatsApp</strong><br />
              <a :href="site.contact.whatsappUrl" target="_blank" rel="noopener noreferrer">
                {{ site.contact.whatsappPhone }}
              </a>
            </p>
            <p class="card__text">
              <strong>E-mail</strong><br />
              <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
            </p>
            <div class="contact-actions">
              <UButton
                class="btn btn--secondary"
                :href="site.contact.whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </UButton>
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
                rel="noopener noreferrer"
              >
                Abrir no mapa
              </UButton>
            </div>
          </div>
        </div>
        <div class="card">
          <UBadge class="pill">Envie uma mensagem</UBadge>
          <form class="form" style="margin-top: 1rem;" @submit.prevent="openEmailDraft">
            <div class="form-honeypot" aria-hidden="true">
              <label class="field-label" for="contact-company-site">Site</label>
              <input
                id="contact-company-site"
                v-model.trim="contactForm.companySite"
                class="input"
                type="text"
                autocomplete="off"
                tabindex="-1"
              />
            </div>
            <div class="field">
              <label class="field-label" for="contact-name">Nome</label>
              <input
                id="contact-name"
                v-model.trim="contactForm.name"
                class="input"
                type="text"
                autocomplete="name"
                maxlength="80"
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
                maxlength="120"
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
                maxlength="30"
                pattern="[\d\s()+-]{8,30}"
              />
            </div>
            <div class="field">
              <label class="field-label" for="contact-message">Mensagem</label>
              <textarea
                id="contact-message"
                v-model.trim="contactForm.message"
                class="textarea"
                maxlength="1500"
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { site } from "~/data/site";

const toast = useToast();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
const PHONE_PATTERN = /^[\d\s()+-]{8,30}$/u;

const contactForm = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  companySite: ""
});

const normalizeInline = (value: string) => value.replace(/\s+/g, " ").trim();
const sanitizeHeaderValue = (value: string, maxLength: number) =>
  normalizeInline(value)
    .replace(/[\r\n]+/g, " ")
    .slice(0, maxLength);
const sanitizeMessageValue = (value: string, maxLength: number) =>
  value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[^\S\n]{2,}/g, " ")
    .trim()
    .slice(0, maxLength);

const validateContactForm = () => {
  if (contactForm.companySite) {
    toast.add({ title: "Não foi possível abrir o rascunho", color: "red" });
    return null;
  }

  const safeName = sanitizeHeaderValue(contactForm.name, 80);
  const safeEmail = sanitizeHeaderValue(contactForm.email, 120).toLowerCase();
  const safePhone = sanitizeHeaderValue(contactForm.phone, 30);
  const safeMessage = sanitizeMessageValue(contactForm.message, 1500);

  if (safeName.length < 2) {
    toast.add({ title: "Informe seu nome completo", color: "red" });
    return null;
  }

  if (!EMAIL_PATTERN.test(safeEmail)) {
    toast.add({ title: "Informe um e-mail válido", color: "red" });
    return null;
  }

  if (safePhone && !PHONE_PATTERN.test(safePhone)) {
    toast.add({ title: "Telefone em formato inválido", color: "red" });
    return null;
  }

  if (safeMessage.length < 10) {
    toast.add({ title: "A mensagem precisa ter ao menos 10 caracteres", color: "red" });
    return null;
  }

  return {
    name: safeName,
    email: safeEmail,
    phone: safePhone,
    message: safeMessage
  };
};

const openEmailDraft = () => {
  if (typeof window === "undefined") return;

  const safeValues = validateContactForm();
  if (!safeValues) return;

  const subject = encodeURIComponent(`Contato pelo site Dimex - ${safeValues.name}`);
  const body = [
    `Nome: ${safeValues.name}`,
    `E-mail: ${safeValues.email}`,
    safeValues.phone ? `Telefone: ${safeValues.phone}` : "",
    "",
    "Mensagem:",
    safeValues.message
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

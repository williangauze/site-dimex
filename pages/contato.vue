<template>
  <div>
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Contato</span>
          <h1 class="headline">Vamos conversar sobre seu projeto.</h1>
          <p class="subhead">
            Entre em contato para receber suporte tecnico, informacoes e
            especificacoes completas das linhas Dimex.
          </p>
          <div class="card" style="margin-top: 2rem;">
            <p class="card__text">
              <strong>Endereco</strong><br />
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
          </div>
        </div>
        <div class="card">
          <span class="pill">Envie uma mensagem</span>
          <form class="form" style="margin-top: 1rem;">
            <input class="input" type="text" placeholder="Nome" required />
            <input class="input" type="email" placeholder="E-mail" required />
            <textarea class="textarea" placeholder="Mensagem" required></textarea>
            <button class="btn btn--primary" type="submit">Enviar</button>
          </form>
          <p style="margin-top: 0.6rem; font-size: 0.85rem; opacity: 0.7;">
            Formulario ilustrativo. Configure o envio conforme sua integracao.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="contact-grid">
          <div class="card">
            <span class="pill">Mapa</span>
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
            <span class="pill">Atendimento</span>
            <p class="card__text" style="margin-top: 1rem;">
              Tecnologia Dimex para esquadrias com alto desempenho termico e
              acustico. Atendimento especializado para arquitetos e especificadores.
            </p>
            <NuxtLink to="/produtos" class="btn btn--secondary" style="margin-top: 1rem;">
              Ver produtos
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { site } from "~/data/site";

useHead({
  title: "Contato"
});
</script>

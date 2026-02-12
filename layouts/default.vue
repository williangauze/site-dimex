<template>
  <div class="page">
    <a class="skip-link" href="#main-content">Pular para o conteúdo principal</a>
    <AppHeader />
    <main id="main-content" class="page-content" tabindex="-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

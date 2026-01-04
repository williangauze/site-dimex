Especificacoes do Projeto Dimex

Stack e ferramentas
- Framework: Nuxt 3 (Vue 3 + Vite)
- Linguagem: TypeScript para configuracao do Nuxt
- Estilos: CSS customizado em `assets/styles/main.css`
- Renderizacao: SPA/SSR configuravel via Nuxt (padrao)

Dependencias
- `nuxt` (framework principal)

Estrutura do projeto
- `app.vue`: ponto de entrada com layout padrao
- `layouts/default.vue`: cabecalho, conteudo e rodape
- `components/AppHeader.vue`: topo, navegacao e CTA
- `components/AppFooter.vue`: contatos, newsletter e creditos
- `data/site.ts`: conteudos e URLs centralizados
- `pages/`: paginas institucionais e de produtos

Design system
- Tipografia: Cormorant Garamond (titulos) e Sora (texto)
- Paleta: tons quentes neutros com acentos em bronze e cobre
- Componentes: cards, grids responsivos, botoes e pills
- Movimento: animacao `fade-up` para entradas suaves

Conteudo e midia
- Imagens: URLs remotas do site atual da Dimex
- Galeria: selecao de imagens oficiais para inspiracao
- Blog: lista de posts conforme o site atual

Forms e integracoes
- Formularios: componentes de UI sem backend configurado
- Mapa: iframe do Google Maps com localizacao oficial
- Newsletter: campo ilustrativo para futura integracao

Comandos
- `npm install`
- `npm run dev`
- `npm run build`

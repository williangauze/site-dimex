const baseUrl = "https://www.dimexprofiles.com.br";
const catalogUrl = "/arquivos/catalogo-2025";

export const site = {
  name: "Dimex Window Profile",
  baseUrl,
  catalogUrl,
  tagline: "Perfis de PVC com tecnologia, confianca e durabilidade",
  nav: [
    { label: "Home", to: "/" },
    { label: "Institucional", to: "/institucional" },
    { label: "Produtos", to: "/produtos" },
    { label: "Blog", to: "/blog" },
    { label: "Galeria", to: "/galeria" },
    { label: "Contato", to: "/contato" }
  ],
  social: [{ label: "Instagram", url: "https://www.instagram.com/dimexgermany" }],
  instagram: {
    label: "Instagram Dimex",
    url: "https://www.instagram.com/dimexgermany",
    handle: "@dimexgermany"
  },
  instagramPreview: [
    {
      image: `${catalogUrl}/p01-hero.png`,
      caption: "Tecnologia e durabilidade",
      time: "hoje"
    },
    {
      image: `${catalogUrl}/p13-edelweiss-35.png`,
      caption: "Linha Edelweiss 35",
      time: "1d"
    },
    {
      image: `${catalogUrl}/p15-edelweiss-55-slide.png`,
      caption: "Edelweiss 55 Slide",
      time: "2d"
    },
    {
      image: `${catalogUrl}/p27-lotos-70-slide.png`,
      caption: "Lotos 70 Slide",
      time: "3d"
    },
    {
      image: `${catalogUrl}/p31-protea.png`,
      caption: "Sistema Protea",
      time: "4d"
    },
    {
      image: `${catalogUrl}/p45-laminados.png`,
      caption: "Laminados e cores",
      time: "5d"
    }
  ],
  contact: {
    email: "contato@dimexprofiles.com.br",
    phones: ["54 3029-2022", "54 3029-2024"],
    phonesRaw: ["+555430292022", "+555430292024"],
    address: "Rua Frei Pacifico, 588, Sao Jose, Caxias do Sul, RS, CEP 95032-380",
    addressLink: "https://goo.gl/maps/WQbdjGuJSMn",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.4643993325267!2d-51.19087468473989!3d-29.150984297255352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2cf6cc28875%3A0xda323f4d9f867ad0!2sDIMEX%20%2F%20QLEEN%20PERFIS%20EM%20PVC%20PARA%20ESQUADRIAS!5e0!3m2!1spt-BR!2sbr!4v1547579223433"
  },
  hero: {
    eyebrow: "Perfis de PVC que unem tecnologia, confianca e durabilidade",
    title: "Design e desempenho para esquadrias com padrao europeu.",
    description:
      "Fundada em 1933, em Stuttgart, a Dimex entrega perfis de PVC com tecnologia aplicada, materias-primas de alta pureza e 20 anos de garantia nas linhas de produtos.",
    highlights: ["Padrao europeu", "20 anos de garantia", "Eficiencia energetica", "Sustentabilidade"],
    image: `${catalogUrl}/p01-hero.png`,
    ctaPrimary: { label: "Conheca os produtos", to: "/produtos" },
    ctaSecondary: { label: "Fale com a Dimex", to: "/contato" }
  },
  stats: [
    { label: "Fundada", value: "1933" },
    { label: "Experiencia", value: "+90 anos" },
    { label: "Garantia", value: "20 anos" },
    { label: "Unidades no Brasil", value: "4" }
  ],
  history: [
    "A Dimex foi fundada em 1933, em Stuttgart, no berco da industria e tecnologia alema.",
    "Mais de 90 anos de experiencia consolidaram processos, tecnologia aplicada e padronizacao do composto de PVC.",
    "A marca e pioneira em oferecer 20 anos de garantia para suas linhas de produtos.",
    "Comprometida com eficiencia energetica e protecao ambiental, atua com responsabilidade socioambiental.",
    "No Brasil, a presenca e reforcada por quatro unidades em Caxias do Sul - RS, com logistica para atender todo o pais."
  ],
  mission:
    "Desenvolver perfis de PVC com tecnologia e qualidade europeia, garantindo conforto termico, acustico e seguranca.",
  vision:
    "Ser referencia em esquadrias de PVC no Brasil, unindo inovacao, sustentabilidade e desempenho superior.",
  values:
    "Tecnologia aplicada, padrao europeu, responsabilidade socioambiental, durabilidade, seguranca e confianca em cada projeto.",
  featuredProducts: [
    {
      title: "Edelweiss 35",
      image: `${catalogUrl}/p13-edelweiss-35.png`
    },
    {
      title: "Edelweiss 55 Slide",
      image: `${catalogUrl}/p15-edelweiss-55-slide.png`
    },
    {
      title: "Edelweiss 60",
      image: `${catalogUrl}/p19-edelweiss-60.png`
    },
    {
      title: "Edelweiss 62 Slide",
      image: `${catalogUrl}/p23-edelweiss-62-slide.png`
    },
    {
      title: "Lotos 70 Slide",
      image: `${catalogUrl}/p27-lotos-70-slide.png`
    },
    {
      title: "Sistema Protea",
      image: `${catalogUrl}/p31-protea.png`
    },
    {
      title: "Centaurea 195 Slide",
      image: `${catalogUrl}/p35-centaurea-195-slide.png`
    },
    {
      title: "Laminados e cores",
      image: `${catalogUrl}/p45-laminados.png`
    }
  ],
  productLines: [
    {
      title: "Edelweiss 35",
      description:
        "Sistema de perfis com design minimalista para vaos menores, com ampla variedade de tipologias.",
      image: `${catalogUrl}/p13-edelweiss-35.png`
    },
    {
      title: "Edelweiss 55 Slide",
      description:
        "Linha de correr com deslizamento suave, vedacao por escovas e otimo custo-beneficio.",
      image: `${catalogUrl}/p15-edelweiss-55-slide.png`
    },
    {
      title: "Edelweiss 60",
      description:
        "Linha versatil com fixas, maxim-ar, giro e portas camarao, unindo estetica e desempenho.",
      image: `${catalogUrl}/p19-edelweiss-60.png`
    },
    {
      title: "Edelweiss 62 Slide",
      description:
        "Portas e janelas de correr com camaras isolantes e eficiencia termica superior.",
      image: `${catalogUrl}/p23-edelweiss-62-slide.png`
    },
    {
      title: "Lotos 70 Slide",
      description:
        "Sistema robusto para grandes vaos com alto desempenho termico e acustico.",
      image: `${catalogUrl}/p27-lotos-70-slide.png`
    },
    {
      title: "Protea",
      description:
        "Portas de correr com trilho embutido e piso nivelado, drenagem eficiente e conforto.",
      image: `${catalogUrl}/p31-protea.png`
    },
    {
      title: "Centaurea 195 Slide",
      description:
        "Sistema para portas de correr que atendem grandes vaos com alta performance.",
      image: `${catalogUrl}/p35-centaurea-195-slide.png`
    }
  ],
  productCatalog: [
    {
      title: "Persianas em PVC",
      description:
        "Solucao pratica para escurecimento, privacidade e conforto, com reducao de ruidos.",
      image: `${catalogUrl}/p39-persianas.png`
    },
    {
      title: "Laminados e cores",
      description:
        "Acabamentos sofisticados com opcoes de cores e protecao UV para maior durabilidade.",
      image: `${catalogUrl}/p45-laminados.png`
    },
    {
      title: "Perfis de PVC",
      description:
        "Perfis extrudados com multicamaras, isolamento termico e acustico e alta resistencia.",
      image: `${catalogUrl}/p06-perfis-pvc.png`
    },
    {
      title: "Sobre o PVC",
      description:
        "Composto com etileno e cloro, 100% reciclavel e formulado para alto desempenho.",
      image: `${catalogUrl}/p05-sobre-pvc.png`
    },
    {
      title: "Certificacoes Dimex",
      description:
        "Testes rigorosos e certificacoes internacionais garantem qualidade e seguranca.",
      image: `${catalogUrl}/p11-certificacoes.png`
    },
    {
      title: "Componentes e acessorios",
      description:
        "Perfis, acoplamentos e itens tecnicos para solucoes completas em esquadrias.",
      image: `${catalogUrl}/p52-componentes.png`
    },
    {
      title: "Baguetes e vedacoes",
      description:
        "Componentes para fixacao de vidros, vedacao e isolamento termico e acustico.",
      image: `${catalogUrl}/p61-baguetes.png`
    },
    {
      title: "Tecnico Protea",
      description:
        "Sistema de drenagem e componentes para portas de correr com piso embutido.",
      image: `${catalogUrl}/p65-protea-tecnico.png`
    }
  ],
  persianas: [
    {
      title: "Persianas 1 Pano",
      description:
        "Solucao pratica para escurecimento, privacidade e conforto termico.",
      image: `${catalogUrl}/p39-persianas.png`
    },
    {
      title: "Persianas 2 Panos",
      description:
        "Protege contra intemperies e luzes externas, reduzindo ruidos.",
      image: `${catalogUrl}/p39-persianas.png`
    },
    {
      title: "Persianas 3 ou Mais Panos",
      description:
        "Conforto e funcionalidade para diferentes tipologias de esquadrias.",
      image: `${catalogUrl}/p39-persianas.png`
    }
  ],
  laminados: [
    {
      title: "Tabela de Cores",
      description: "Opcoes de cores marcantes com acabamento sofisticado.",
      image: `${catalogUrl}/p45-laminados.png`
    },
    {
      title: "Aplicacao dos Laminados",
      description: "Pode ser aplicado em um ou dois lados, com protecao UV.",
      image: `${catalogUrl}/p45-laminados.png`
    }
  ],
  reforcos: {
    title: "Reforcos Metalicos",
    description:
      "Perfis com camara especial para reforco metalico interno, garantindo resistencia e estabilidade.",
    image: `${catalogUrl}/p06-perfis-pvc.png`
  },
  telaMosquiteiro: {
    title: "Componentes Tecnicos",
    description:
      "Acessorios, baguetes e vedacoes para montagem precisa e alto desempenho.",
    image: `${catalogUrl}/p61-baguetes.png`
  },
  qualidade: {
    overview:
      "A Dimex alia eficiencia energetica, protecao ambiental e seguranca em janelas e portas, com testes rigorosos e padrao europeu.",
    items: [
      {
        title: "Certificacoes Dimex",
        description:
          "Testes de desempenho e composicao, com aprovacao em laboratorios internacionais.",
        image: `${catalogUrl}/p11-certificacoes.png`
      },
      {
        title: "Sobre o PVC",
        description:
          "Composto versatil, 100% reciclavel e formulado para durabilidade e seguranca.",
        image: `${catalogUrl}/p05-sobre-pvc.png`
      },
      {
        title: "Perfis de PVC",
        description:
          "Multicamaras para isolamento termico e acustico, com alta resistencia estrutural.",
        image: `${catalogUrl}/p06-perfis-pvc.png`
      },
      {
        title: "Sustentabilidade",
        description:
          "Reducao de consumo de energia e emissoes, com foco em impacto ambiental menor.",
        image: `${catalogUrl}/p08-sustentabilidade.png`
      }
    ],
    differentiators: [
      "20 anos de garantia para perfis brancos (exclusividade Dimex).",
      "Perfis livres de chumbo com alta protecao UV.",
      "Testes de estanqueidade, resistencia ao vento e desempenho das esquadrias.",
      "Eficiencia energetica e conforto termico e acustico.",
      "Responsabilidade socioambiental e compromisso com sustentabilidade.",
      "Padrao europeu de qualidade aplicado em todas as unidades."
    ],
    certifications: [
      "CE",
      "IFT",
      "SKZ",
      "SGS",
      "TUV (ISO 9001)",
      "RAL Rosenheim"
    ]
  },
  laminadosInfo: {
    title: "Laminados e Cores",
    description:
      "Perfis laminados com cores marcantes e pelicula protetiva contra raios UV.",
    advantages: [
      "Opcoes de cores internas, externas ou em ambos os lados",
      "Protecao UV e maior conservacao termica",
      "Acabamento sofisticado para projetos personalizados",
      "Alta durabilidade e baixa manutencao",
      "Aplicacao em diferentes tipologias",
      "Garantia de 15 anos para laminados"
    ]
  },
  galleryImages: [
    { src: `${catalogUrl}/p00-capa.png`, alt: "Capa catalogo" },
    { src: `${catalogUrl}/p01-hero.png`, alt: "Hero catalogo" },
    { src: `${catalogUrl}/p03-sobre.png`, alt: "Sobre a Dimex" },
    { src: `${catalogUrl}/p05-sobre-pvc.png`, alt: "Sobre o PVC" },
    { src: `${catalogUrl}/p06-perfis-pvc.png`, alt: "Perfis de PVC" },
    { src: `${catalogUrl}/p07-beneficios.png`, alt: "Beneficios do PVC" },
    { src: `${catalogUrl}/p08-sustentabilidade.png`, alt: "Sustentabilidade" },
    { src: `${catalogUrl}/p11-certificacoes.png`, alt: "Certificacoes Dimex" },
    { src: `${catalogUrl}/p13-edelweiss-35.png`, alt: "Edelweiss 35" },
    { src: `${catalogUrl}/p23-edelweiss-62-slide.png`, alt: "Edelweiss 62 Slide" },
    { src: `${catalogUrl}/p31-protea.png`, alt: "Protea" },
    { src: `${catalogUrl}/p45-laminados.png`, alt: "Laminados" }
  ],
  blogPosts: [
    {
      title: "Sobre a Dimex Window Profile",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p03-sobre.png`
    },
    {
      title: "Sobre o PVC e sua composicao",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p05-sobre-pvc.png`
    },
    {
      title: "Perfis de PVC: tecnologia e desempenho",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p06-perfis-pvc.png`
    },
    {
      title: "Beneficios das esquadrias de PVC",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p07-beneficios.png`
    },
    {
      title: "Sustentabilidade e compromisso ambiental",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p08-sustentabilidade.png`
    },
    {
      title: "Certificacoes e qualidade Dimex",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p11-certificacoes.png`
    }
  ],
  blogCategories: [
    { name: "Historia", count: 1 },
    { name: "PVC", count: 2 },
    { name: "Desempenho", count: 1 },
    { name: "Sustentabilidade", count: 1 },
    { name: "Certificacoes", count: 1 }
  ]
};

const baseUrl = "https://www.dimexprofiles.com.br";
const catalogUrl = "/arquivos/catalogo-2025";

export const site = {
  name: "Dimex Window Profile",
  baseUrl,
  catalogUrl,
  tagline: "Perfis de PVC com tecnologia, confiança e durabilidade",
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
    address: "Rua Frei Pacífico, 588, São José, Caxias do Sul, RS, CEP 95032-380",
    addressLink: "https://goo.gl/maps/WQbdjGuJSMn",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.4643993325267!2d-51.19087468473989!3d-29.150984297255352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2cf6cc28875%3A0xda323f4d9f867ad0!2sDIMEX%20%2F%20QLEEN%20PERFIS%20EM%20PVC%20PARA%20ESQUADRIAS!5e0!3m2!1spt-BR!2sbr!4v1547579223433"
  },
  hero: {
    eyebrow: "Perfis de PVC que unem tecnologia, confiança e durabilidade",
    title: "Design e desempenho para esquadrias com padrão europeu.",
    description:
      "Fundada em 1933, em Stuttgart, a Dimex entrega perfis de PVC com tecnologia aplicada, matérias-primas de alta pureza e 20 anos de garantia nas linhas de produtos.",
    highlights: ["Padrão europeu", "20 anos de garantia", "Eficiência energética", "Sustentabilidade"],
    image: "/foto-home.png",
    ctaPrimary: { label: "Conheça os produtos", to: "/produtos" },
    ctaSecondary: { label: "Fale com a Dimex", to: "/contato" }
  },
  stats: [
    { label: "Fundada", value: "1933" },
    { label: "Experiência", value: "+90 anos" },
    { label: "Garantia", value: "20 anos" },
    { label: "Unidades fabris no mundo", value: "7" },
    { label: "Garantia de 20 anos", value: "Única no Brasil" },
    { label: "Certificada Nacional e Internacionalmente", value: "Empresa" }
  ],
  history: [
    "A Dimex foi fundada em 1933, em Stuttgart, no berço da indústria e tecnologia alemã.",
    "Mais de 90 anos de experiência consolidaram processos, tecnologia aplicada e padronização do composto de PVC.",
    "A marca é pioneira em oferecer 20 anos de garantia para suas linhas de produtos.",
    "Comprometida com eficiência energética e proteção ambiental, atua com responsabilidade socioambiental.",
    "No Brasil, a presença é reforçada por quatro unidades em Caxias do Sul - RS, com logística para atender todo o país."
  ],
  mission:
    "Desenvolver perfis de PVC com tecnologia e qualidade europeia, garantindo conforto térmico, acústico e segurança.",
  vision:
    "Ser referência em esquadrias de PVC no Brasil, unindo inovação, sustentabilidade e desempenho superior.",
  values:
    "Tecnologia aplicada, padrão europeu, responsabilidade socioambiental, durabilidade, segurança e confiança em cada projeto.",
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
        "Sistema de perfis com design minimalista para vãos menores, com ampla variedade de tipologias.",
      image: `${catalogUrl}/p13-edelweiss-35.png`
    },
    {
      title: "Edelweiss 55 Slide",
      description:
        "Linha de correr com deslizamento suave, vedação por escovas e ótimo custo-benefício.",
      image: `${catalogUrl}/p15-edelweiss-55-slide.png`
    },
    {
      title: "Edelweiss 60",
      description:
        "Linha versátil com fixas, maxim-ar, giro e portas camarão, unindo estética e desempenho.",
      image: `${catalogUrl}/p19-edelweiss-60.png`
    },
    {
      title: "Edelweiss 62 Slide",
      description:
        "Portas e janelas de correr com câmaras isolantes e eficiência térmica superior.",
      image: `${catalogUrl}/p23-edelweiss-62-slide.png`
    },
    {
      title: "Lotos 70 Slide",
      description:
        "Sistema robusto para grandes vãos com alto desempenho térmico e acústico.",
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
        "Sistema para portas de correr que atendem grandes vãos com alta performance.",
      image: `${catalogUrl}/p35-centaurea-195-slide.png`
    }
  ],
  productCatalog: [
    {
      title: "Persianas em PVC",
      description:
        "Solução prática para escurecimento, privacidade e conforto, com redução de ruídos.",
      image: `${catalogUrl}/p39-persianas.png`
    },
    {
      title: "Laminados e cores",
      description:
        "Acabamentos sofisticados com opções de cores e proteção UV para maior durabilidade.",
      image: `${catalogUrl}/p45-laminados.png`
    },
    {
      title: "Perfis de PVC",
      description:
        "Perfis extrudados com multicâmaras, isolamento térmico e acústico e alta resistência.",
      image: `${catalogUrl}/p06-perfis-pvc.png`
    },
    {
      title: "Sobre o PVC",
      description:
        "Composto com etileno e cloro, 100% reciclável e formulado para alto desempenho.",
      image: `${catalogUrl}/p05-sobre-pvc.png`
    },
    {
      title: "Certificações Dimex",
      description:
        "Testes rigorosos e certificações internacionais garantem qualidade e segurança.",
      image: `${catalogUrl}/p11-certificacoes.png`
    },
    {
      title: "Componentes e acessórios",
      description:
        "Perfis, acoplamentos e itens técnicos para soluções completas em esquadrias.",
      image: `${catalogUrl}/p52-componentes.png`
    },
    {
      title: "Baguetes e vedações",
      description:
        "Componentes para fixação de vidros, vedação e isolamento térmico e acústico.",
      image: `${catalogUrl}/p61-baguetes.png`
    },
    {
      title: "Técnico Protea",
      description:
        "Sistema de drenagem e componentes para portas de correr com piso embutido.",
      image: `${catalogUrl}/p65-protea-tecnico.png`
    }
  ],
  persianas: [
    {
      title: "Persianas 1 Pano",
      description:
        "Solução prática para escurecimento, privacidade e conforto térmico.",
      image: `${catalogUrl}/p39-persianas.png`
    },
    {
      title: "Persianas 2 Panos",
      description:
        "Protege contra intempéries e luzes externas, reduzindo ruídos.",
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
      description: "Opções de cores marcantes com acabamento sofisticado.",
      image: `${catalogUrl}/p45-laminados.png`
    },
    {
      title: "Aplicação dos Laminados",
      description: "Pode ser aplicado em um ou dois lados, com proteção UV.",
      image: `${catalogUrl}/p45-laminados.png`
    }
  ],
  reforcos: {
    title: "Reforços Metálicos",
    description:
      "Perfis com câmara especial para reforço metálico interno, garantindo resistência e estabilidade.",
    image: `${catalogUrl}/p06-perfis-pvc.png`
  },
  telaMosquiteiro: {
    title: "Componentes Técnicos",
    description:
      "Acessórios, baguetes e vedações para montagem precisa e alto desempenho.",
    image: `${catalogUrl}/p61-baguetes.png`
  },
  qualidade: {
    overview:
      "A Dimex alia eficiência energética, proteção ambiental e segurança em janelas e portas, com testes rigorosos e padrão europeu.",
    items: [
      {
        title: "Certificações Dimex",
        description:
          "Testes de desempenho e composição, com aprovação em laboratórios internacionais.",
        image: `${catalogUrl}/p11-certificacoes.png`
      },
      {
        title: "Sobre o PVC",
        description:
          "Composto versátil, 100% reciclável e formulado para durabilidade e segurança.",
        image: `${catalogUrl}/p05-sobre-pvc.png`
      },
      {
        title: "Perfis de PVC",
        description:
          "Multicâmaras para isolamento térmico e acústico, com alta resistência estrutural.",
        image: `${catalogUrl}/p06-perfis-pvc.png`
      },
      {
        title: "Sustentabilidade",
        description:
          "Redução de consumo de energia e emissões, com foco em impacto ambiental menor.",
        image: `${catalogUrl}/p08-sustentabilidade.png`
      }
    ],
    differentiators: [
      "Única a oferecer 20 anos de garantia no Brasil para perfis brancos.",
      "Perfis livres de chumbo com alta proteção UV.",
      "Testes de estanqueidade, resistência ao vento e desempenho das esquadrias.",
      "Eficiência energética e conforto térmico e acústico.",
      "Certificações nacionais e internacionais que comprovam desempenho e qualidade.",
      "Responsabilidade socioambiental e compromisso com sustentabilidade.",
      "Padrão europeu de qualidade aplicado em todas as unidades."
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
      "Perfis laminados com cores marcantes e película protetiva contra raios UV.",
    advantages: [
      "Opções de cores internas, externas ou em ambos os lados",
      "Proteção UV e maior conservação térmica",
      "Acabamento sofisticado para projetos personalizados",
      "Alta durabilidade e baixa manutenção",
      "Aplicação em diferentes tipologias",
      "Garantia de 15 anos para laminados"
    ]
  },
  galleryImages: [
    { src: `${catalogUrl}/p00-capa.png`, alt: "Capa catálogo" },
    { src: `${catalogUrl}/p01-hero.png`, alt: "Hero catálogo" },
    { src: `${catalogUrl}/p03-sobre.png`, alt: "Sobre a Dimex" },
    { src: `${catalogUrl}/p05-sobre-pvc.png`, alt: "Sobre o PVC" },
    { src: `${catalogUrl}/p06-perfis-pvc.png`, alt: "Perfis de PVC" },
    { src: `${catalogUrl}/p07-beneficios.png`, alt: "Benefícios do PVC" },
    { src: `${catalogUrl}/p08-sustentabilidade.png`, alt: "Sustentabilidade" },
    { src: `${catalogUrl}/p11-certificacoes.png`, alt: "Certificações Dimex" },
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
      title: "Sobre o PVC e sua composição",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p05-sobre-pvc.png`
    },
    {
      title: "Perfis de PVC: tecnologia e desempenho",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p06-perfis-pvc.png`
    },
    {
      title: "Benefícios das esquadrias de PVC",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p07-beneficios.png`
    },
    {
      title: "Sustentabilidade e compromisso ambiental",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p08-sustentabilidade.png`
    },
    {
      title: "Certificações e qualidade Dimex",
      date: "Novembro de 2025",
      image: `${catalogUrl}/p11-certificacoes.png`
    }
  ],
  blogCategories: [
    { name: "História", count: 1 },
    { name: "PVC", count: 2 },
    { name: "Desempenho", count: 1 },
    { name: "Sustentabilidade", count: 1 },
    { name: "Certificações", count: 1 }
  ]
};

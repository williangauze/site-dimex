const baseUrl = "https://www.dimexprofiles.com.br";

export const site = {
  name: "Dimex Profiles",
  baseUrl,
  tagline: "Solucoes em Perfis de PVC para Esquadrias",
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
    label: "Instagram Dimex Germany",
    url: "https://www.instagram.com/dimexgermany",
    handle: "@dimexgermany"
  },
  instagramPreview: [
    {
      image: `${baseUrl}/arquivos/1547559016_01.jpg`,
      caption: "Fachada com perfis PVC",
      time: "2h"
    },
    {
      image: `${baseUrl}/arquivos/1547559024_foto3.png`,
      caption: "Luz natural e conforto",
      time: "5h"
    },
    {
      image: `${baseUrl}/arquivos/1547559027_foto8.png`,
      caption: "Detalhes de acabamento",
      time: "1d"
    },
    {
      image: `${baseUrl}/arquivos/1547559029_foto10.png`,
      caption: "Arquitetura contemporanea",
      time: "2d"
    },
    {
      image: `${baseUrl}/arquivos/1547559026_foto6.png`,
      caption: "Perfis laminados",
      time: "3d"
    },
    {
      image: `${baseUrl}/arquivos/1547559029_foto11.png`,
      caption: "Esquadrias sob medida",
      time: "4d"
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
    eyebrow: "Tecnologia alema aplicada ao design brasileiro",
    title: "Perfis de PVC para esquadrias que valorizam silencio, luz e conforto.",
    description:
      "A Dimex nasce na Alemanha em 1933 e leva seu know-how para projetos de arquitetura que pedem durabilidade, isolamento e beleza atemporal.",
    highlights: ["Tecnologia Alema", "Perfis Laminados", "Livre de Manutencao"],
    image: `${baseUrl}/arquivos/1536945720_dbda96baa76e28b67d222bdbc1c3fd0384234c72_01.jpg`,
    ctaPrimary: { label: "Conheca os produtos", to: "/produtos" },
    ctaSecondary: { label: "Fale com a Dimex", to: "/contato" }
  },
  stats: [
    { label: "Desde", value: "1933" },
    { label: "PVC nas esquadrias", value: "1975" },
    { label: "Presenca em paises", value: "19" },
    { label: "Crescimento recente", value: "32%" }
  ],
  history: [
    "A Dimex foi criada na Alemanha em 1933, entrando para a industria de portas e janelas em PVC em 1975.",
    "Engenheiros altamente qualificados usaram mais de 80 anos de know-how para chegar a um produto com padrao europeu, genuinamente alemao.",
    "Possui unidades de fabricacao e distribuicao em 19 paises, crescendo 32% nos ultimos dois anos.",
    "A Dimex e sinonimo de janelas e portas de altissima qualidade, com ampla gama de perfis em PVC e tecnologia de ponta.",
    "Alto rendimento, desenho exclusivo, funcionalidade, protecao do meio ambiente e uso consciente dos recursos naturais."
  ],
  mission:
    "Fornecer as melhores solucoes em perfis de PVC para esquadrias, com qualidade alema, contribuindo com uma construcao sustentavel e respeitando sociedade e meio ambiente.",
  vision:
    "Ser referencia pela qualidade, inovacao e agilidade de nossas solucoes para esquadrias com tecnologia Dimex.",
  values:
    "Garantimos qualidade e confiabilidade a todos os projetos, oferecendo um conceito consagrado mundialmente, com solida tecnologia e caracteristicas locais para configuracoes personalizadas e inovadoras.",
  featuredProducts: [
    {
      title: "Distribuicao Mundial",
      image: `${baseUrl}/img/270/161/arquivos/1547484920_ad4e0ca87425535c9f6288a42f2fb66adc3a16a7_distribuicao_mundial.jpg`
    },
    {
      title: "Persianas 2 Panos",
      image: `${baseUrl}/img/270/161/arquivos/1547465459_89fc7277db2fa58cb55938df365f5441fa711f61_02.jpg`
    },
    {
      title: "Janela | Porta Oscilo Batente",
      image: `${baseUrl}/img/270/161/arquivos/1547047775_a9bf6e2473aa5ca089d6de0c87d91e03e145bf0f_1.jpg`
    },
    {
      title: "Janela | Porta Personalizados",
      image: `${baseUrl}/img/270/161/arquivos/1547462019_093b909526aa6d238b4b29d2a047a9169df8ede4_01.jpg`
    },
    {
      title: "Diferenciais Dimex",
      image: `${baseUrl}/img/270/161/arquivos/1547487419_152234c26050d3cadd287917f74891506674c2da_diferenciais_dimex.jpg`
    },
    {
      title: "Tabela de Cores",
      image: `${baseUrl}/img/270/161/arquivos/1547466784_5c2b5f36000e657578ceb461d104d93a8328b3fa_13.jpg`
    },
    {
      title: "Janela | Porta de Correr",
      image: `${baseUrl}/img/270/161/arquivos/1546969317_caa03c7b2af70bd0083065185b4edadc23bd1e44_01.jpg`
    },
    {
      title: "Janela | Porta Fixa",
      image: `${baseUrl}/img/270/161/arquivos/1546967610_ae3f81e8af91d91342bce38edb77ccea3bc56f69_01.jpg`
    }
  ],
  productLines: [
    {
      title: "Linha Lotos",
      description: "Perfis para tipologias versateis e projetos sob medida.",
      image: `${baseUrl}/img/370/221/arquivos/1546969317_caa03c7b2af70bd0083065185b4edadc23bd1e44_01.jpg`
    },
    {
      title: "Persianas em PVC",
      description: "Solucao de escurecimento e conforto para interiores.",
      image: `${baseUrl}/img/370/221/arquivos/1547465459_89fc7277db2fa58cb55938df365f5441fa711f61_02.jpg`
    },
    {
      title: "Laminados em PVC",
      description: "Acabamentos sofisticados e ampla tabela de cores.",
      image: `${baseUrl}/img/370/221/arquivos/1547466784_5c2b5f36000e657578ceb461d104d93a8328b3fa_13.jpg`
    },
    {
      title: "Reforcos Metalicos",
      description: "Estrutura e estabilidade para perfis de alto desempenho.",
      image: `${baseUrl}/img/370/221/arquivos/1547490559_6c8a9e094ffe952070bed1afe42f2ab1443b751a_reforcos.jpg`
    },
    {
      title: "Tela Mosquiteiro",
      description: "Ambientes arejados com protecao contra insetos.",
      image: `${baseUrl}/img/370/221/arquivos/1547489435_313b512d5a055beb331bf25c932e0ac495eca314_mosquiteira.jpg`
    },
    {
      title: "Qualidade Dimex",
      description: "Certificacoes, caracteristicas e diferenciais da marca.",
      image: `${baseUrl}/img/370/221/arquivos/1547487419_152234c26050d3cadd287917f74891506674c2da_diferenciais_dimex.jpg`
    }
  ],
  productCatalog: [
    {
      title: "Auxiliares | Acoplamentos e Acessorios",
      description: "Componentes complementares para configuracoes sob medida.",
      image: `${baseUrl}/img/370/221/arquivos/1547494400_467a655419157abbdceb41eaf410b23fceb29371_01.jpg`
    },
    {
      title: "Caracteristicas do PVC",
      description:
        "Durabilidade, resistencia climatica e reciclagem total com excelente conforto termico e acustico.",
      image: `${baseUrl}/img/370/221/arquivos/1547486058_56d302ee0995f66414b5fdf94df8dddc48828409_caracteristicas_01.jpg`
    },
    {
      title: "Certificacoes e Testes",
      description: "Procedimentos e selos que comprovam performance e qualidade.",
      image: `${baseUrl}/img/370/221/arquivos/1547488415_a552da4c364ece8064776242c944a34b7d470ff8_skz_testing_certificate_dimex.jpg`
    },
    {
      title: "Diferenciais Dimex",
      description: "Solucoes completas, inovadoras e orientadas a resultados.",
      image: `${baseUrl}/img/370/221/arquivos/1547487419_152234c26050d3cadd287917f74891506674c2da_diferenciais_dimex.jpg`
    },
    {
      title: "Distribuicao Mundial",
      description:
        "A Qleen Perfis e distribuidora exclusiva no Brasil da Dimex Window Profile.",
      image: `${baseUrl}/img/370/221/arquivos/1547484920_ad4e0ca87425535c9f6288a42f2fb66adc3a16a7_distribuicao_mundial.jpg`
    },
    {
      title: "Janela | Porta de Correr",
      description:
        "Tipologia para grandes vaos, com deslizamento horizontal e 2 ou mais folhas.",
      image: `${baseUrl}/img/370/221/arquivos/1546969317_caa03c7b2af70bd0083065185b4edadc23bd1e44_01.jpg`
    },
    {
      title: "Janela | Porta de Correr",
      description: "Movimento por deslizamento horizontal com 2 ou mais folhas.",
      image: `${baseUrl}/img/370/221/arquivos/1546889713_3411e11a24e57ea7904e3b9b0d2e313a52c388bc_01.jpg`
    },
    {
      title: "Janela | Porta Fixa",
      description:
        "Janelas sem movimentos, com 1 ou mais folhas e possibilidade de acoplamento.",
      image: `${baseUrl}/img/370/221/arquivos/1546967610_ae3f81e8af91d91342bce38edb77ccea3bc56f69_01.jpg`
    },
    {
      title: "Janela | Porta Giro ou Abrir",
      description:
        "Muito comuns, ventilam e iluminam por todo o vao em uso interno ou externo.",
      image: `${baseUrl}/img/370/221/arquivos/1547461841_5c12a6d540103ad95b65c39862f28607094249c6_01.jpg`
    },
    {
      title: "Janela | Porta Maxim-Ar",
      description:
        "Folhas com eixo horizontal e translacao simultanea para ventilacao controlada.",
      image: `${baseUrl}/img/370/221/arquivos/1546974377_aec0e2b398c729452813425eb7535196a3e70b7c_01.jpg`
    },
    {
      title: "Janela | Porta Oscilo Batente",
      description:
        "Folhas de giro e tombar, com duas formas de ventilacao.",
      image: `${baseUrl}/img/370/221/arquivos/1547047775_a9bf6e2473aa5ca089d6de0c87d91e03e145bf0f_1.jpg`
    },
    {
      title: "Janela | Porta Personalizados",
      description:
        "Desenvolvimento de tipologias sob medida e personalizadas.",
      image: `${baseUrl}/img/370/221/arquivos/1547462019_093b909526aa6d238b4b29d2a047a9169df8ede4_01.jpg`
    }
  ],
  persianas: [
    {
      title: "Persianas 1 Pano",
      description:
        "Persianas de enrolar sao solucao padrao para escurecimento de dormitorios, home theaters e escritorios.",
      image: `${baseUrl}/img/370/221/arquivos/1547465082_75eaf8147453cf5798251e6edb8aa5eb24e752ea_01.jpg`
    },
    {
      title: "Persianas 2 Panos",
      description:
        "Persianas de enrolar sao solucao padrao para escurecimento de dormitorios, home theaters e escritorios.",
      image: `${baseUrl}/img/370/221/arquivos/1547465459_89fc7277db2fa58cb55938df365f5441fa711f61_02.jpg`
    },
    {
      title: "Persianas 3 ou Mais Panos",
      description:
        "Persianas de enrolar sao solucao padrao para escurecimento de dormitorios, home theaters e escritorios.",
      image: `${baseUrl}/img/370/221/arquivos/1547466237_c58bcbfd88f1fb4ab27e78e25e57a5c8585a4038_03.jpg`
    }
  ],
  laminados: [
    {
      title: "Tabela de Cores",
      description: "Mais vida para suas esquadrias.",
      image: `${baseUrl}/img/370/221/arquivos/1547466784_5c2b5f36000e657578ceb461d104d93a8328b3fa_13.jpg`
    },
    {
      title: "Vantagem dos Laminados",
      description: "Sofisticacao ao seu gosto.",
      image: `${baseUrl}/img/370/221/arquivos/1547472252_b66730b4ee3b7569c899c2b03bab879cafd6f89e_01.jpg`
    }
  ],
  reforcos: {
    title: "Reforcos Metalicos",
    description:
      "Reforcos metalicos sao introduzidos nas camaras internas dos perfis e fixados com parafusos de aco galvanizados.",
    image: `${baseUrl}/img/370/221/arquivos/1547490559_6c8a9e094ffe952070bed1afe42f2ab1443b751a_reforcos.jpg`
  },
  telaMosquiteiro: {
    title: "Tela Mosquiteiro",
    description:
      "Solucao para ambiente arejado e sem insetos, garantindo circulacao de ar e protecao.",
    image: `${baseUrl}/img/370/221/arquivos/1547489435_313b512d5a055beb331bf25c932e0ac495eca314_mosquiteira.jpg`
  },
  qualidade: {
    overview:
      "Tecnologia, inovacao e sustentabilidade sao fundamentos do trabalho da Dimex e da Qleen Perfis no Brasil.",
    items: [
      {
        title: "Distribuicao Mundial",
        description:
          "A Qleen Perfis e distribuidora exclusiva no Brasil da Dimex Window Profile, com experiencia em tecnologia europeia.",
        image: `${baseUrl}/arquivos/1547484920_ad4e0ca87425535c9f6288a42f2fb66adc3a16a7_distribuicao_mundial.jpg`
      },
      {
        title: "Caracteristicas do PVC",
        description:
          "Projetos inovadores, isolamento termico e acustico, alta durabilidade e reciclabilidade.",
        image: `${baseUrl}/arquivos/1547486058_56d302ee0995f66414b5fdf94df8dddc48828409_caracteristicas_01.jpg`
      },
      {
        title: "Diferenciais Dimex",
        description:
          "Distribuicao exclusiva, logistica com estoque, apoio tecnico e software de orcamentacao.",
        image: `${baseUrl}/arquivos/1547487419_152234c26050d3cadd287917f74891506674c2da_diferenciais_dimex.jpg`
      },
      {
        title: "Certificacoes e Testes",
        description:
          "Certificacoes, relatorios de testes e filiacao que comprovam performance.",
        image: `${baseUrl}/arquivos/1547488415_a552da4c364ece8064776242c944a34b7d470ff8_skz_testing_certificate_dimex.jpg`
      }
    ],
    differentiators: [
      "Distribuicao exclusiva no Brasil e America Latina.",
      "Logistica com perfis disponiveis para entrega.",
      "Projetos especiais com analise de viabilidade.",
      "Apoio tecnico com especialistas experientes.",
      "Software de orcamentacao 2D/3D para esquadrias.",
      "Divulgacao da marca Dimex em midias especializadas."
    ],
    certifications: [
      "SKZ testing certificate Dimex",
      "Relatorios de testes de perfil",
      "Relatorios de testes de esquadrias",
      "Certificacoes e filiacao"
    ]
  },
  laminadosInfo: {
    title: "Laminados e Cores",
    description:
      "Cores personalizadas para projetos arquitetonicos com tecnologia e protecao UV.",
    advantages: [
      "Durabilidade e estabilidade de cor",
      "Resistencia a pressao dos ventos",
      "Possibilidade de vidros duplos",
      "Economia e facil manutencao",
      "Modelos personalizados sob medida",
      "Isolamento termico e acustico",
      "Imunes a cupins e corrosao",
      "10 anos de garantia nos perfis"
    ]
  },
  galleryImages: [
    { src: `${baseUrl}/arquivos/1547559016_01.jpg`, alt: "Galeria 01" },
    { src: `${baseUrl}/arquivos/1547559023_foto1.png`, alt: "Galeria 02" },
    { src: `${baseUrl}/arquivos/1547559024_foto2.png`, alt: "Galeria 03" },
    { src: `${baseUrl}/arquivos/1547559024_foto3.png`, alt: "Galeria 04" },
    { src: `${baseUrl}/arquivos/1547559024_foto4.png`, alt: "Galeria 05" },
    { src: `${baseUrl}/arquivos/1547559025_foto5.png`, alt: "Galeria 06" },
    { src: `${baseUrl}/arquivos/1547559026_foto6.png`, alt: "Galeria 07" },
    { src: `${baseUrl}/arquivos/1547559026_foto7.png`, alt: "Galeria 08" },
    { src: `${baseUrl}/arquivos/1547559027_foto8.png`, alt: "Galeria 09" },
    { src: `${baseUrl}/arquivos/1547559028_foto9.png`, alt: "Galeria 10" },
    { src: `${baseUrl}/arquivos/1547559029_foto10.png`, alt: "Galeria 11" },
    { src: `${baseUrl}/arquivos/1547559029_foto11.png`, alt: "Galeria 12" }
  ],
  blogPosts: [
    {
      title: "Maleficios do Aluminio no Meio Ambiente",
      date: "24 de Maio de 2019",
      image: `${baseUrl}/img/0/0/arquivos/1558717965_d14945623dc123451e9675271b448728e35974d7_blog.jpg`
    },
    {
      title: "Persianas",
      date: "09 de Abril de 2019",
      image: `${baseUrl}/img/0/0/arquivos/1554838239_9c11be6e59ee015592bc0f1e6d977ba4c88fb612_img_20161219_161440282_1431566.jpg`
    },
    {
      title: "Conheca um pouco mais sobre os nossos perfis",
      date: "07 de Fevereiro de 2019",
      image: `${baseUrl}/img/0/0/arquivos/1549561317_0a8454c82a38b5f68e732584c7625aee8a38f87a_caracteristicas_dos_perfis.jpg`
    },
    {
      title: "Caracteristicas do PVC",
      date: "23 de Janeiro de 2019",
      image: `${baseUrl}/img/0/0/arquivos/1548263459_10d249d19aaf5129a6970af7b393871a7bab8188_image5.jpg`
    },
    {
      title: "Isolamento Termico e Acustico",
      date: "17 de Janeiro de 2019",
      image: `${baseUrl}/img/0/0/arquivos/1547741710_90801e9a5839a8ded8389fb1d6e46fcaf694743e_imagem_17_.png`
    },
    {
      title: "Perfis de PVC Dimex",
      date: "27 de Novembro de 2018",
      image: `${baseUrl}/img/0/0/arquivos/1543334092_eae431d0b2aaa3356d9cd4926f96dd553c358f1a_imagem_88_.png`
    },
    {
      title: "5 Vantagens de escolher os perfis de PVC",
      date: "21 de Novembro de 2018",
      image: `${baseUrl}/img/0/0/arquivos/1542818172_e134252e260f072539a6062394757bbf5f3ca14d_cabralesquadrias_banner01.jpg`
    },
    {
      title: "Perfis coloridos",
      date: "01 de Novembro de 2018",
      image: `${baseUrl}/img/0/0/arquivos/1541095187_3eea7d4ce0e8cccb84ba3be0951c8c070232eb6a_21366859_1530516763650426_7952577052403470702_o.jpg`
    },
    {
      title: "Beneficios de escolher esquadrias de PVC",
      date: "01 de Novembro de 2018",
      image: `${baseUrl}/img/0/0/arquivos/1541091687_e686132ef2941a57843da23df29b8a917bb6da6e_imagem_87_.png`
    },
    {
      title: "Participacao Revista Contramarco",
      date: "24 de Setembro de 2018",
      image: `${baseUrl}/img/0/0/arquivos/1537816070_038d61a8a65a4a804d129a7ff4e7fdb70b631ec2_capturar.PNG`
    }
  ],
  blogCategories: [
    { name: "Caracteristicas", count: 2 },
    { name: "Voce sabia?", count: 1 },
    { name: "Dicas", count: 1 },
    { name: "Eventos", count: 1 },
    { name: "Vantagens", count: 6 },
    { name: "Novidades", count: 3 }
  ]
};

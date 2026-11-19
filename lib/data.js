// ============================================================
//  Tudo o que aparece no site vem deste arquivo.
//  Procure por TODO para ver o que ainda pode ser completado.
// ============================================================

export const perfil = {
  nome: "Isabella Martins",
  titulo: "Administradora em transição para tecnologia",
  frase:
    "Estudo Sistemas para Internet e quero usar tecnologia, dados e inovação para criar soluções mais eficientes para pessoas e empresas.",
  cidade: "Recife, PE",
  email: "isabella.0000860564@unicap.br",
  github: "isabellamartinshsilva",
  githubUrl: "https://github.com/isabellamartinshsilva",
  linkedin: "https://www.linkedin.com/in/isabellamartinssin/",
};

export const fotos = {
  retrato: {
    src: "/img/isabella-techwoman.jpg",
    alt: "Isabella sorrindo, de óculos e jaqueta bege, diante do painel roxo do Tech Woman 2026",
    largura: 1536,
    altura: 1024,
  },
  plateia: {
    src: "/img/plateia-techwoman.jpg",
    alt: "Plateia de mulheres sorrindo e acompanhando uma palestra, algumas filmando com o celular",
    largura: 1600,
    altura: 1066,
  },
};

export const sobre = {
  texto: [
    "Sou administradora em transição para a área de tecnologia, atualmente cursando Sistemas para Internet na Universidade Católica de Pernambuco.",
    "Tenho interesse em compreender como tecnologia, dados e inovação podem transformar processos e gerar soluções mais eficientes para pessoas e empresas.",
    "Participei da Residência Tecnológica do Porto Digital, onde atuei no desenvolvimento de uma solução educacional com uso de inteligência artificial, trabalhando em squad, metodologias ágeis e validação de ideias. O projeto foi selecionado para o Demoday entre os destaques do programa.",
    "Busco oportunidades que me permitam aprender na prática, contribuir com projetos relevantes e crescer junto com o negócio.",
  ],
  forcas: ["Comunicação", "Pensamento analítico", "Organização", "Colaboração em equipe"],
};

export const eventoTechWoman = {
  titulo: "Tech Woman 2026",
  texto:
    "Participei do Tech Woman 2026, evento sobre mulheres na tecnologia. Assisti às palestras ao lado de outras mulheres da área e voltei com ainda mais vontade de construir minha carreira nela.",
};

export const tecnologiasSite = [
  {
    grupo: "Framework",
    itens: [
      ["Next.js (App Router)", "Rotas, layout compartilhado e build para a Vercel"],
      ["React", "Componentes e hooks (useState, useEffect)"],
      ["JavaScript", "Toda a lógica do site"],
    ],
  },
  {
    grupo: "Estilo",
    itens: [
      ["CSS puro", "Variáveis, Grid, Flexbox, clamp() e media queries, sem biblioteca de UI"],
      ["conic-gradient", "O arco colorido em volta da foto da página inicial é desenhado só com CSS"],
      ["Google Fonts", "Bricolage Grotesque nos títulos e Public Sans no texto"],
    ],
  },
  {
    grupo: "Dados e publicação",
    itens: [
      ["GitHub REST API", "Lista os repositórios e as estatísticas direto da minha conta"],
      ["Git e GitHub", "Controle de versão e repositório do código"],
      ["Vercel", "Hospedagem e deploy automático a cada push"],
    ],
  },
];

export const academica = [
  {
    periodo: "Em andamento",
    titulo: "Tecnologia em Sistemas para Internet",
    local: "Universidade Católica de Pernambuco (Unicap)",
    descricao:
      "Estou no 3º período. O curso mistura desenvolvimento web, banco de dados, design e gestão de projetos.",
    destaques: [
      "Design Thinking: desafio de extremos climáticos nas cidades, com etapas de empatia e ideação",
      "Gestão de Projetos: planejamento e acompanhamento de atividades de uma equipe",
      "Projeto Integrador III: ISAC Marketplace, desenvolvido em equipe",
    ],
  },
  // TODO: adicione aqui sua graduação em Administração (instituição e período), se quiser mostrar.
  {
    periodo: "2026",
    titulo: "Residência Tecnológica",
    local: "Porto Digital, Recife",
    descricao:
      "Programa prático em que atuei em squad no desenvolvimento de uma solução educacional com inteligência artificial.",
    destaques: [
      "Metodologias ágeis e validação de ideias",
      "Projeto selecionado para o Demoday entre os destaques do programa",
    ],
  },
  {
    periodo: "2026",
    titulo: "Tech Woman 2026",
    local: "Evento de mulheres na tecnologia, como participante",
    descricao:
      "Participei do evento, assisti às palestras e conheci pessoas e iniciativas que incentivam mulheres na área de tecnologia.",
    destaques: [],
  },
  {
    periodo: "Nov 2026",
    titulo: "REC'n'Play",
    local: "Recife",
    descricao:
      "Assisti à palestra do CESAR sobre cibersegurança e gestão de riscos de terceiros no setor financeiro e registrei os aprendizados.",
    destaques: [],
  },
];

export const profissional = [
  {
    periodo: "Nov 2026",
    titulo: "Participante do Converge Challenge",
    local: "Hackathon powered by Tako, Porto Digital, Recife",
    descricao:
      "Fui selecionada para o hackathon de dois dias. Meu time, as Booleanas, escolheu o Desafio Tako e propôs um agente de IA que acompanha novas legislações e mostra como o RH pode aplicá-las, começando pela NR-1 (riscos psicossociais e saúde mental). Fiquei na frente de negócio.",
    destaques: [
      "Trabalho em equipe sob prazo curto",
      "Pesquisa de problema e validação da ideia",
      "Apresentação da solução",
    ],
  },
  {
    periodo: "2026",
    titulo: "Squad da Residência Tecnológica",
    local: "Porto Digital, Recife",
    descricao:
      "Atuei no desenvolvimento de uma solução educacional com inteligência artificial, trabalhando em squad com metodologias ágeis e validação de ideias. O projeto foi selecionado para o Demoday entre os destaques do programa.",
    destaques: [],
  },
  {
    periodo: "2026",
    titulo: "Projeto integrador ISAC Marketplace",
    local: "Projeto Integrador III, Unicap, equipe 04",
    descricao:
      "Marketplace conversacional no WhatsApp para anunciar e buscar produtos e serviços locais por meio de um bot. Arquitetura low-code com Typebot, Evolution API e Supabase.",
    destaques: [
      "Definição da arquitetura",
      "Documentação da proposta executiva",
      "Apresentação ao mentor",
    ],
  },
  // TODO: adicione aqui sua experiência anterior como administradora (empresa, cargo, período), se quiser mostrar.
];

export const projetos = [
  {
    nome: "Solução educacional com IA (Residência Tecnológica)",
    resumo:
      "Projeto desenvolvido em squad na Residência Tecnológica do Porto Digital, com metodologias ágeis e validação de ideias. Foi selecionado para o Demoday entre os destaques do programa.",
    stack: ["Inteligência artificial", "Squad", "Metodologias ágeis", "Demoday"],
    link: "",
  },
  {
    nome: "ISAC Marketplace",
    resumo:
      "Marketplace conversacional no WhatsApp. A pessoa conversa com um bot para anunciar ou encontrar produtos e serviços locais, sem instalar nenhum app.",
    stack: ["Typebot", "Evolution API", "Supabase", "WhatsApp"],
    link: "https://github.com/SIN-disciplina-PI3/ISAC-Marketplace-time-4",
  },
  {
    nome: "Agente de legislação para RH (Converge Challenge)",
    resumo:
      "Ideia desenvolvida em hackathon: um agente de IA que acompanha novas normas e explica como o RH deve aplicá-las. Primeiro caso: NR-1.",
    stack: ["IA", "Negócio", "Pitch"],
    link: "",
  },
  {
    nome: "Portfólio pessoal",
    resumo:
      "Este site. Feito em Next.js, com CSS próprio e a lista de repositórios vinda da API do GitHub.",
    stack: ["Next.js", "React", "CSS", "GitHub API", "Vercel"],
    link: "https://github.com/isabellamartinshsilva",
  },
];

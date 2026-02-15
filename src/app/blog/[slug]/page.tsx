import Link from "next/link";

const posts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "por-que-medicina": {
    title: "Por que escolhi a medicina?",
    date: "15 de fevereiro de 2026",
    category: "Reflexão",
    readTime: "5 min de leitura",
    content: `
      <p>A decisão de cursar medicina não foi algo que aconteceu da noite para o dia. Foi um processo longo de autoconhecimento, experiências e, acima de tudo, uma vontade genuína de impactar vidas.</p>

      <h2>O começo na tecnologia</h2>
      <p>Minha carreira começou no desenvolvimento de software. Como full stack developer, construí sistemas complexos, fundei uma empresa e aprendi a resolver problemas de forma estruturada. A tecnologia me ensinou a pensar de forma lógica, a ser persistente diante de bugs e a nunca parar de aprender.</p>
      <p>Mas havia algo que a tecnologia, por si só, não me proporcionava: o contato humano direto. O impacto que eu queria causar nas pessoas precisava ser mais tangível, mais próximo.</p>

      <h2>A virada</h2>
      <p>O momento decisivo veio quando percebi que minha maior satisfação não estava em entregar um projeto de software, mas em ver como aquele projeto ajudava pessoas reais. Comecei a me perguntar: e se eu pudesse ajudar de forma ainda mais direta?</p>
      <p>A medicina surgiu como resposta natural. Uma profissão onde cada dia é uma oportunidade de fazer a diferença na vida de alguém. Onde o conhecimento técnico encontra a empatia, e onde cada decisão pode mudar o rumo de uma história.</p>

      <h2>O que trago comigo</h2>
      <p>Não vejo minha transição como um abandono da tecnologia, mas como uma evolução. A capacidade analítica, o pensamento estruturado e a facilidade com ferramentas digitais são habilidades que levarei para a prática médica.</p>
      <p>Acredito que o futuro da medicina está na interseção entre o cuidado humano e a inovação tecnológica. E é nesse cruzamento que quero construir minha carreira.</p>

      <h2>O próximo passo</h2>
      <p>Agora, no início desta nova jornada, sinto uma mistura de ansiedade e entusiasmo. Sei que os próximos anos serão desafiadores, mas estou pronto. A medicina não é apenas uma profissão — é uma vocação que escolhi abraçar com tudo o que sou.</p>
    `,
  },
  "rotina-estudante-medicina": {
    title: "A rotina de um estudante de medicina no Paraguai",
    date: "14 de fevereiro de 2026",
    category: "Vida Acadêmica",
    readTime: "7 min de leitura",
    content: `
      <p>Estudar medicina fora do Brasil é uma experiência transformadora. Neste artigo, compartilho como é o dia a dia, os desafios e as adaptações necessárias.</p>

      <h2>A decisão de estudar no Paraguai</h2>
      <p>A escolha pelo Paraguai veio após muita pesquisa. As universidades oferecem uma formação sólida, com foco em prática clínica desde os primeiros semestres. Além disso, a proximidade com o Brasil facilita a logística.</p>

      <h2>Um dia típico</h2>
      <p>O dia começa cedo. As aulas práticas exigem preparação prévia, então a rotina de estudos começa antes mesmo de sair de casa. Entre aulas teóricas, laboratórios e tempo de estudo individual, o dia é intenso mas gratificante.</p>

      <h2>Desafios e adaptações</h2>
      <p>Morar em outro país traz desafios únicos: idioma, cultura, saudade de casa. Mas cada obstáculo é também uma oportunidade de crescimento pessoal e profissional.</p>

      <h2>O que aprendi até agora</h2>
      <p>A maior lição tem sido sobre resiliência. A medicina exige dedicação constante, e estar longe de casa adiciona uma camada extra de desafio. Mas é exatamente isso que torna a experiência tão valiosa.</p>
    `,
  },
  "saude-mental-estudantes": {
    title: "Saúde mental na faculdade de medicina",
    date: "12 de fevereiro de 2026",
    category: "Saúde",
    readTime: "6 min de leitura",
    content: `
      <p>A saúde mental dos estudantes de medicina é um tema que merece atenção especial. A pressão acadêmica, a carga horária intensa e o contato com o sofrimento humano podem impactar significativamente o bem-estar emocional.</p>

      <h2>O cenário atual</h2>
      <p>Estudos mostram que estudantes de medicina apresentam taxas mais elevadas de ansiedade e burnout em comparação com a população geral. Reconhecer isso é o primeiro passo para mudar.</p>

      <h2>Estratégias de cuidado</h2>
      <p>Manter uma rotina equilibrada, buscar apoio profissional quando necessário e cultivar conexões sociais são fundamentais. Não existe fraqueza em pedir ajuda — existe sabedoria.</p>

      <h2>Minha experiência</h2>
      <p>Desde o início da graduação, tenho me dedicado a manter o equilíbrio entre estudos e qualidade de vida. Exercícios físicos, momentos de lazer e conversas com pessoas queridas fazem parte da minha rotina tanto quanto os livros.</p>
    `,
  },
  "tecnologia-medicina": {
    title: "Como a tecnologia está transformando a medicina",
    date: "10 de fevereiro de 2026",
    category: "Tecnologia",
    readTime: "8 min de leitura",
    content: `
      <p>A medicina está vivendo uma revolução tecnológica sem precedentes. Da inteligência artificial ao prontuário eletrônico, as ferramentas digitais estão redefinindo como cuidamos da saúde.</p>

      <h2>Inteligência Artificial no diagnóstico</h2>
      <p>Algoritmos de IA já auxiliam médicos na interpretação de exames de imagem, identificando padrões que o olho humano pode não perceber. Isso não substitui o profissional — potencializa sua capacidade.</p>

      <h2>Telemedicina</h2>
      <p>A pandemia acelerou a adoção da telemedicina, democratizando o acesso à saúde. Pacientes em regiões remotas agora podem consultar especialistas sem sair de casa.</p>

      <h2>O futuro</h2>
      <p>Como alguém que vem da tecnologia, vejo um futuro onde a medicina será cada vez mais personalizada, preventiva e acessível. E quero fazer parte dessa transformação.</p>
    `,
  },
  "primeiros-passos-anatomia": {
    title: "Primeiros passos na anatomia humana",
    date: "8 de fevereiro de 2026",
    category: "Vida Acadêmica",
    readTime: "5 min de leitura",
    content: `
      <p>As primeiras aulas de anatomia são um marco na vida de qualquer estudante de medicina. É quando a teoria começa a ganhar forma — literalmente.</p>

      <h2>O impacto inicial</h2>
      <p>Nada prepara completamente para o primeiro contato com o estudo prático do corpo humano. É uma experiência que muda sua perspectiva sobre a vida e sobre a responsabilidade que é ser médico.</p>

      <h2>Métodos de estudo</h2>
      <p>Combinar atlas de anatomia, modelos 3D digitais e estudo prático tem sido minha estratégia. Cada abordagem complementa a outra e consolida o aprendizado.</p>

      <h2>A beleza da complexidade</h2>
      <p>Quanto mais estudo o corpo humano, mais me impressiono com sua complexidade e perfeição. Cada sistema, cada estrutura tem uma função precisa. É impossível não se maravilhar.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-heading mb-4">Artigo não encontrado</h1>
        <p className="text-muted mb-8">O artigo que você procura não existe ou foi removido.</p>
        <Link href="/blog" className="btn-primary">Voltar ao blog</Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <div className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar ao blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-[10px] text-muted uppercase tracking-wider">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-bold font-heading">G</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">Gabriel Gerbi</p>
              <p className="text-xs text-muted">{post.date}</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-100 mb-12" />

        {/* Content */}
        <div
          className="
            [&>p]:text-slate-600 [&>p]:leading-[1.8] [&>p]:mb-6 [&>p]:text-base
            [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-slate-900
            [&>blockquote]:border-l-2 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-muted [&>blockquote]:my-8
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="h-px bg-slate-100 mt-16 mb-8" />

        {/* Share / Back */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Mais artigos
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span>Compartilhe:</span>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <span>·</span>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </article>
    </>
  );
}

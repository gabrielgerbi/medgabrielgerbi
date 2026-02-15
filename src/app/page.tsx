import Link from "next/link";

const featuredPosts = [
  {
    slug: "por-que-medicina",
    title: "Por que escolhi a medicina?",
    excerpt:
      "A decisão de cursar medicina não foi simples. Neste texto, compartilho minha trajetória e os motivos que me trouxeram até aqui.",
    date: "15 Fev 2026",
    category: "Reflexão",
    readTime: "5 min",
  },
  {
    slug: "rotina-estudante-medicina",
    title: "A rotina de um estudante de medicina no Paraguai",
    excerpt:
      "Como é o dia a dia de quem estuda medicina fora do Brasil. Desafios, adaptações e aprendizados.",
    date: "14 Fev 2026",
    category: "Vida Acadêmica",
    readTime: "7 min",
  },
  {
    slug: "saude-mental-estudantes",
    title: "Saúde mental na faculdade de medicina",
    excerpt:
      "Um tema essencial que precisa ser discutido: como cuidar da mente enquanto se prepara para cuidar dos outros.",
    date: "12 Fev 2026",
    category: "Saúde",
    readTime: "6 min",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-white" />
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="fade-in">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6 border border-primary/20 px-3 py-1">
                Medicina & Saúde
              </span>
            </div>

            <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-heading leading-[1.05] mb-8">
              Onde a ciência
              <br />
              <span className="text-primary">encontra a</span>
              <br />
              vocação.
            </h1>

            <p className="fade-in fade-in-delay-2 text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              Reflexões, conteúdos e vivências de um estudante de medicina. 
              Acompanhe a jornada do conhecimento à prática.
            </p>

            <div className="fade-in fade-in-delay-3 flex flex-wrap gap-4">
              <Link href="/blog" className="btn-primary">
                Ler artigos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/sobre" className="btn-outline">
                Sobre mim
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
              Quem sou
            </span>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              Gabriel Gerbi
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Estudante de medicina com background em tecnologia e empreendedorismo. 
              Acredito que a medicina do futuro será construída na interseção entre 
              cuidado humano e inovação.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Neste espaço, compartilho conteúdos sobre saúde, a jornada acadêmica 
              e reflexões sobre o que significa cuidar de pessoas.
            </p>
            <Link href="/sobre" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              Conheça minha história
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "2026", label: "Início da graduação" },
              { number: "6", label: "Anos de formação" },
              { number: "∞", label: "Vontade de aprender" },
              { number: "2", label: "Áreas de atuação" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-surface border border-slate-100 hover:border-primary/20 transition-colors"
              >
                <span className="text-2xl md:text-3xl font-heading text-primary block mb-2">
                  {stat.number}
                </span>
                <span className="text-xs text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-heading">
              Artigos recentes
            </h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            Ver todos
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card group"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-accent to-slate-50 border border-slate-100 mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-6xl opacity-10 group-hover:scale-110 transition-transform duration-500">
                  {["🩺", "📚", "🧠"][i]}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] text-muted uppercase tracking-wider">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-heading mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-3">
                {post.excerpt}
              </p>

              <span className="text-xs text-slate-400">{post.date}</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link href="/blog" className="btn-outline">
            Ver todos os artigos
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
            Acompanhe a jornada
          </h2>
          <p className="text-primary-light/80 text-lg mb-8 max-w-md mx-auto">
            Receba novos conteúdos sobre medicina, saúde e vida acadêmica.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-medium text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors">
            Entre em contato
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

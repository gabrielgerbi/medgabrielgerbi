import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre medicina, saúde, vida acadêmica e a interseção entre tecnologia e cuidado humano.",
};

const posts = [
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
      "Como é o dia a dia de quem estuda medicina fora do Brasil. Desafios, adaptações e aprendizados que moldam a formação.",
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
  {
    slug: "tecnologia-medicina",
    title: "Como a tecnologia está transformando a medicina",
    excerpt:
      "Da inteligência artificial ao prontuário eletrônico: como a tecnologia está redefinindo o cuidado com a saúde.",
    date: "10 Fev 2026",
    category: "Tecnologia",
    readTime: "8 min",
  },
  {
    slug: "primeiros-passos-anatomia",
    title: "Primeiros passos na anatomia humana",
    excerpt:
      "O que aprendi nas primeiras aulas de anatomia e como o estudo do corpo humano muda nossa perspectiva.",
    date: "8 Fev 2026",
    category: "Vida Acadêmica",
    readTime: "5 min",
  },
];

const categories = ["Todos", "Reflexão", "Vida Acadêmica", "Saúde", "Tecnologia"];

export default function Blog() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block fade-in">
          Blog
        </span>
        <h1 className="text-4xl md:text-6xl font-heading mb-6 fade-in fade-in-delay-1">
          Artigos & <span className="text-primary">Reflexões</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl leading-relaxed fade-in fade-in-delay-2">
          Conteúdos sobre medicina, saúde e a jornada acadêmica.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`text-xs font-medium uppercase tracking-wider px-4 py-2 transition-colors ${
                i === 0
                  ? "bg-primary text-white"
                  : "bg-slate-50 text-muted hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {/* Featured Post */}
        <Link
          href={`/blog/${posts[0].slug}`}
          className="block group mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-accent to-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
              <span className="text-8xl opacity-10 group-hover:scale-110 transition-transform duration-500">
                🩺
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {posts[0].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[10px] text-muted uppercase tracking-wider">
                  {posts[0].readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading mb-3 group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                Ler artigo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </Link>

        <div className="h-px bg-slate-100 mb-16" />

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts.slice(1).map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-accent to-slate-50 border border-slate-100 mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-6xl opacity-10 group-hover:scale-110 transition-transform duration-500">
                  {["📚", "🧠", "💻", "🦴"][i]}
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
      </section>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história de Gabriel Gerbi — de desenvolvedor full stack a estudante de medicina.",
};

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block fade-in">
          Sobre
        </span>
        <h1 className="text-4xl md:text-6xl font-heading mb-6 fade-in fade-in-delay-1">
          Do código ao<br />
          <span className="text-primary">cuidado humano.</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl leading-relaxed fade-in fade-in-delay-2">
          Uma trajetória que conecta tecnologia, empreendedorismo e a medicina.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-24">
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-accent to-slate-50 border border-slate-100 mb-6 flex items-center justify-center">
                <span className="text-8xl opacity-10">👨‍⚕️</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Gabriel Gerbi</h3>
              <p className="text-sm text-muted mb-4">Estudante de Medicina</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Amparo, SP → Paraguai
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary">
                    <path d="M2 4l6 4 6-4M2 4v8l6 4 6-4V4M2 4l6-4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-8">
            <div className="prose-custom space-y-8">
              <div>
                <h2 className="text-2xl font-heading mb-4">Minha história</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Antes de decidir pela medicina, construí minha carreira como desenvolvedor full stack. 
                  Comecei na ETEC João Belarmino estudando Design Digital, e desde então venho desenvolvendo 
                  sistemas complexos com React, Next.js e TypeScript. Aprendi que resolver problemas é o que 
                  me move — seja com código ou com cuidado.
                </p>
                <p className="text-muted leading-relaxed">
                  A decisão de estudar medicina veio da vontade de impactar vidas de forma mais direta. 
                  Acredito que minha experiência com tecnologia me dará uma perspectiva única na prática 
                  médica, especialmente em um momento onde a saúde digital transforma a forma como 
                  cuidamos das pessoas.
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              <div>
                <h2 className="text-2xl font-heading mb-4">Por que este blog?</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Este espaço nasceu da vontade de documentar a jornada, compartilhar conhecimento 
                  e criar um canal de comunicação sobre saúde acessível e responsável.
                </p>
                <p className="text-muted leading-relaxed">
                  Aqui você encontrará conteúdos sobre a vida acadêmica na medicina, reflexões sobre 
                  saúde e bem-estar, e a interseção entre tecnologia e cuidado humano.
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Timeline */}
              <div>
                <h2 className="text-2xl font-heading mb-8">Trajetória</h2>
                <div className="space-y-8">
                  {[
                    {
                      year: "2026",
                      title: "Medicina + Tech",
                      description: "Início da faculdade de medicina na UMAX (Universidad María Auxiliadora) em Assunção, Paraguai. Unindo tecnologia e saúde.",
                    },
                    {
                      year: "2024",
                      title: "Freelancer Full Stack",
                      description: "Consolidação como desenvolvedor autônomo, construindo sistemas de gestão, landing pages e aplicativos para clientes reais.",
                    },
                    {
                      year: "2021",
                      title: "ETEC João Belarmino",
                      description: "Início do ensino médio integrado ao técnico em Desenvolvimento de Sistemas no Centro Paula Souza, Amparo.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary border-2 border-white ring-2 ring-primary/20" />
                        {i < 2 && <div className="w-px flex-1 bg-slate-200 mt-2" />}
                      </div>
                      <div className="pb-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-lg mt-1 mb-1">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100" />

              {/* Values */}
              <div>
                <h2 className="text-2xl font-heading mb-8">O que acredito</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Medicina humana",
                      description: "Antes de qualquer técnica ou tecnologia, está o olhar para o ser humano.",
                    },
                    {
                      title: "Aprendizado contínuo",
                      description: "A ciência nunca para. Estar atualizado é um compromisso ético.",
                    },
                    {
                      title: "Tecnologia + Saúde",
                      description: "A inovação pode ampliar o acesso e a qualidade do cuidado.",
                    },
                    {
                      title: "Informação responsável",
                      description: "Compartilhar conhecimento com base em evidências científicas.",
                    },
                  ].map((value, i) => (
                    <div key={i} className="p-6 border border-slate-100 hover:border-primary/20 transition-colors">
                      <h3 className="font-heading text-base mb-2">{value.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

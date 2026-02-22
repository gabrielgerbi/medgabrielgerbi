import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Gabriel Gerbi. Dúvidas, sugestões ou parcerias.",
};

export default function Contato() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block fade-in">
          Contato
        </span>
        <h1 className="text-4xl md:text-6xl font-heading mb-6 fade-in fade-in-delay-1">
          Vamos <span className="text-primary">conversar.</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl leading-relaxed fade-in fade-in-delay-2">
          Tem alguma dúvida, sugestão ou quer trocar uma ideia? Estou sempre aberto para novas conexões.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Info */}
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  Email
                </h3>
                <a
                  href="mailto:med@gabrielgerbi.com.br"
                  className="text-base text-slate-900 hover:text-primary transition-colors"
                >
                  med@gabrielgerbi.com.br
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  Redes sociais
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/gabrielgerbi_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 border border-slate-200 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                        <circle cx="12" cy="12" r="5"/>
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                      </svg>
                    </div>
                    @gabrielgerbi_
                  </a>
                  <a
                    href="https://gabrielgerbi.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group"
                  >
                    <div className="w-8 h-8 border border-slate-200 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                      </svg>
                    </div>
                    gabrielgerbi.com.br
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  Localização
                </h3>
                <p className="text-sm text-muted">
                  Amparo, SP — Brasil
                  <br />
                  <span className="text-xs text-slate-400">Em transição para o Paraguai</span>
                </p>
              </div>

              <div className="p-6 bg-accent border border-primary/10">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                  Aviso importante
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Este é um espaço informativo. Para questões médicas específicas,
                  consulte sempre um profissional de saúde qualificado.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-8">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:ring-0 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:ring-0 focus:outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Sobre o que quer falar?"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:ring-0 focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Escreva sua mensagem..."
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-200 text-slate-900 placeholder:text-slate-300 focus:border-primary focus:ring-0 focus:outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button type="submit" className="btn-primary">
                Enviar mensagem
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

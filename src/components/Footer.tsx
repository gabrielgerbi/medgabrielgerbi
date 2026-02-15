import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-sm font-bold font-heading">G</span>
              </div>
              <span className="font-semibold text-slate-900">Gabriel Gerbi</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Estudante de medicina compartilhando a jornada acadêmica, 
              conteúdos sobre saúde e reflexões sobre a prática médica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Navegação
            </h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/sobre", label: "Sobre" },
                { href: "/blog", label: "Blog" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Redes
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/gabrielgerbi_"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://gabrielgerbi.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted hover:text-primary transition-colors"
              >
                Portfolio Dev
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Gabriel Gerbi. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-400">
            Conteúdo informativo — não substitui orientação médica profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}

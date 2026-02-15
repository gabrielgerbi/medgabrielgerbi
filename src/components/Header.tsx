"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white text-sm font-bold font-heading">G</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 tracking-tight">
              Gabriel Gerbi
            </span>
            <span className="text-[10px] text-muted uppercase tracking-widest">
              Medicina
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? "text-primary after:w-full" : ""
              }`}
              style={
                pathname === link.href
                  ? ({ "--tw-after-w": "100%", color: "var(--color-primary)" } as React.CSSProperties)
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
          <Link href="https://gabrielgerbi.com.br" className="nav-link text-primary-light">
            ← Dev
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-slate-700 transition-transform ${
              menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-slate-700 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-slate-700 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium uppercase tracking-wider ${
                pathname === link.href ? "text-primary" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://gabrielgerbi.com.br"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-primary-light"
          >
            ← Portfolio Dev
          </Link>
        </div>
      )}
    </header>
  );
}

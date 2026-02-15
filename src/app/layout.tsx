import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gabriel Gerbi — Medicina",
    template: "%s | Gabriel Gerbi",
  },
  description:
    "Estudante de medicina compartilhando conhecimento, vivências acadêmicas e conteúdos sobre saúde e bem-estar.",
  keywords: ["medicina", "saúde", "estudante de medicina", "gabriel gerbi", "blog médico"],
  authors: [{ name: "Gabriel Gerbi" }],
  openGraph: {
    title: "Gabriel Gerbi — Medicina",
    description: "Estudante de medicina compartilhando conhecimento e vivências acadêmicas.",
    url: "https://med.gabrielgerbi.com.br",
    siteName: "Gabriel Gerbi Med",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

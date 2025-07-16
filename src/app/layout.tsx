// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import { QueryProvider } from "../components/QueryProvider";

export const metadata = {
  title: "GaleriaX",
  description: "Uma galeria de artes moderna em full‑stack",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Contexto do React Query disponível em toda a app */}
        <QueryProvider>
          <header className="bg-secondary shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
              <Link href="/" className="text-xl font-heading">
                GaleriaX
              </Link>
              <nav className="space-x-6 font-medium">
                <Link href="/">Home</Link>
                <Link href="/artistas">Artistas</Link>
                <Link href="/exposicoes">Exposições</Link>
                <Link href="/sobre">Sobre</Link>
              </nav>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-neutralDark text-secondary py-6">
            <div className="container mx-auto text-center text-sm">
              © {new Date().getFullYear()} GaleriaX. Todos os direitos reservados.
            </div>
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}

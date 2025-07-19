import ClientHome from "../components/ClientHome";

export const metadata = {
  title: "Galeria de Artes • Início",
  description: "Explore obras incríveis de artistas talentosos ao redor do mundo.",
  openGraph: {
    title: "Galeria de Artes • Início",
    description: "Explore obras incríveis de artistas talentosos ao redor do mundo.",
    url: "https://seu-dominio.com",
    siteName: "Galeria de Artes",
    images: [
      {
        url: "/banner-art.jpg",
        width: 1200,
        height: 630,
        alt: "Banner da Galeria de Artes",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria de Artes • Início",
    description: "Explore obras incríveis de artistas talentosos ao redor do mundo.",
    images: ["/banner-art.jpg"],
  },
};

export default function HomePage() {
  return <ClientHome />;
}
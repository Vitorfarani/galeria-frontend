// src/app/sobre/page.tsx
export const metadata = {
  title: "Sobre – GaleriaX",
};

export default function SobrePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-heading mb-6">Sobre</h1>
      <p>
        GaleriaX é um projeto full‑stack para demonstrar CRUD de artistas,
        obras e exposições, desenvolvido com Spring Boot no backend e Next.js
        + Tailwind no frontend.
      </p>
    </div>
  );
}

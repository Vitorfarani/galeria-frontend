"use client";

import { useGallery } from "../hooks/useGallery";
import { ArtworkCard } from "./ArtworkCard";

export default function Gallery() {
  const { data, isLoading, error } = useGallery();

  if (isLoading) {
    return <p>Carregando obras...</p>;
  }
  if (error) {
    return <p>Erro ao carregar: {error.message}</p>;
  }

  // data agora sempre é um array (mesmo que vazio)
  return (
    <div className="container mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((obra) => (
        <ArtworkCard
          key={obra.id}
          id={obra.id}
          titulo={obra.titulo}
          urlImagem={obra.urlImagem}
        />
      ))}
      {data.length === 0 && (
        <p className="col-span-full text-center text-neutral">
          Nenhuma obra encontrada.
        </p>
      )}
    </div>
  );
}

"use client";

import { useExhibitions } from "../hooks/useExhibitions";
import { ExhibitionCard } from "./ExhibitionCard";

export default function ExhibitionsList() {
  const { data, isLoading, error } = useExhibitions();

  if (isLoading) return <p>Carregando exposições…</p>;
  if (error) return <p>Erro ao carregar: {error.message}</p>;

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((expo) => (
        <ExhibitionCard
          key={expo.id}
          id={expo.id}
          nome={expo.nome}
          descricao={expo.descricao}
          data={expo.data}
        />
      ))}
      {data.length === 0 && (
        <p className="col-span-full text-center text-neutral">
          Nenhuma exposição encontrada.
        </p>
      )}
    </div>
  );
}

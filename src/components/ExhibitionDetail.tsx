// src/components/ExhibitionDetail.tsx
"use client";

import { useParams } from "next/navigation";
import { useExhibitionDetail } from "../hooks/useExhibitionDetail";
import { ArtworkCard } from "./ArtworkCard";

export default function ExhibitionDetail() {
  const params = useParams();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const id = parseInt(idParam ?? "0", 10);

  const { data, isLoading, error } = useExhibitionDetail(id);

  // Proteção para não tentar ler propriedades de `undefined`
  if (isLoading || !data) {
    return <p>Carregando exposição…</p>;
  }
  if (error) {
    return <p>Erro: {error.message}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-heading mb-4">{data.nome}</h1>
      <p className="mb-6 text-neutralDark">{data.descricao}</p>
      <p className="mb-8 text-sm text-neutral">Data: {data.data}</p>

      <h2 className="text-2xl font-heading mb-4">Obras na exposição</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.obras.map((obra) => (
          <ArtworkCard
            key={obra.id}
            id={obra.id}
            titulo={obra.titulo}
            urlImagem={obra.urlImagem}
          />
        ))}
        {data.obras.length === 0 && (
          <p className="col-span-full text-center text-neutral">
            Nenhuma obra cadastrada nesta exposição.
          </p>
        )}
      </div>
    </div>
  );
}

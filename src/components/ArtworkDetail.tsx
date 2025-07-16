// src/components/ArtworkDetail.tsx
"use client";

import { useParams } from "next/navigation";
import { useArtwork } from "../hooks/useArtwork";

export default function ArtworkDetail() {
  const params = useParams();
  // Se vier array, pega o primeiro elemento; senão usa a própria string
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  // Garante que seja string antes de parseInt
  const id = parseInt(idParam ?? "0", 10);

  const { data, isLoading, error } = useArtwork(id);

  if (isLoading) return <p>Carregando detalhes da obra…</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-heading mb-4">{data!.titulo}</h1>
      <img
        src={data!.urlImagem}
        alt={data!.titulo}
        className="w-full max-w-2xl mx-auto mb-6 rounded-lg shadow-lg"
      />
      <p className="mb-4 text-neutralDark">{data!.descricao}</p>
      <p className="text-sm text-neutral">
        Criada em: {data!.dataCriacao} • Artista: {data!.nomeArtista}
      </p>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import { useArtwork } from "../hooks/useArtwork";

export default function ArtworkDetail() {
  // 1️⃣ Garantir que params NUNCA seja null
  const params = useParams()!;

  // 2️⃣ Extrair o ID mesmo que venha como array
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;

  // 3️⃣ Caso não venha nada, trocar por "0" antes do parse
  const id = parseInt(rawId ?? "0", 10);

  const { data: artwork, isLoading, error } = useArtwork(id);

  if (isLoading) return <p>Carregando obra…</p>;
  if (error) return <p>Erro ao carregar obra.</p>;
  if (!artwork) return <p>Obra não encontrada.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{artwork.titulo}</h1>
      <img
        src={artwork.urlImagem}
        alt={artwork.titulo}
        className="w-full max-w-lg mb-4 rounded-md"
      />
      <p>{artwork.descricao}</p>
      {/* adicione mais campos conforme seu modelo */}
    </div>
  );
}
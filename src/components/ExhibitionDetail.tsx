"use client";

import { useParams } from "next/navigation";
import { useExhibitionDetail } from "../hooks/useExhibitionDetail";
import { ArtworkCard } from "./ArtworkCard";


export default function ExhibitionDetail() {
  // 1️⃣ Forçar que params não seja null
  const params = useParams()!;
  // 2️⃣ Extrair id de forma segura
  const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
  const id = parseInt(rawId ?? "0", 10);

  const { data: exhibition } = useExhibitionDetail(id);

  if (!exhibition) {
    return <p>Carregando detalhes da exposição…</p>;
  }

  return (
    <div>
      <h1>{exhibition.nome}</h1>
      <p>{exhibition.descricao}</p>
      <div className="grid grid-cols-3 gap-4">
        {exhibition.obras.map((obra) => (
          <ArtworkCard
            key={obra.id}
            id={obra.id}
            titulo={obra.titulo}
            urlImagem={obra.urlImagem}
          />
        ))}
      </div>
    </div>
  );
}

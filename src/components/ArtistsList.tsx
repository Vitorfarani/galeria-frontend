"use client";

import { useArtists } from "../hooks/useArtists";
import { ArtistCard } from "./ArtistCard";

export default function ArtistsList() {
  const { data, isLoading, error } = useArtists();

  if (isLoading) return <p>Carregando artistas…</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-heading mb-6">Artistas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data!.map((artista) => (
          <ArtistCard key={artista.id} id={artista.id} nome={artista.nome} />
        ))}
      </div>
    </div>
  );
}

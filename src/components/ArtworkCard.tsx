"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export interface Artwork {
  id: number;
  titulo: string;
  urlImagem: string;
}

export function ArtworkCard({ id, titulo, urlImagem }: Artwork) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(localStorage.getItem(`favorite-${id}`) === "true");
  }, [id]);

  const toggleFavorite = () => {
    const novo = !isFavorite;
    setIsFavorite(novo);
    localStorage.setItem(`favorite-${id}`, novo.toString());
  };

  return (
    <div className="relative group">
      <Link
        href={`/obras/${id}`}
        className="block overflow-hidden rounded-lg shadow-lg bg-secondary hover:shadow-2xl transition"
      >
        <img
          src={urlImagem}
          alt={titulo}
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform"
        />
        <div className="p-4">
          <h3 className="font-heading text-lg text-primary group-hover:text-accent">
            {titulo}
          </h3>
        </div>
      </Link>
      <button
        onClick={toggleFavorite}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? "Desfavoritar obra" : "Favoritar obra"}
        className="absolute top-2 right-2 text-2xl"
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
}

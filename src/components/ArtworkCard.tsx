"use client";

import Link from "next/link";

export interface Artwork {
  id: number;
  titulo: string;
  urlImagem: string;
}

export function ArtworkCard({ id, titulo, urlImagem }: Artwork) {
  return (
    <Link
      href={`/obras/${id}`}
      className="block group overflow-hidden rounded-lg shadow-lg bg-secondary hover:shadow-2xl transition"
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={urlImagem}
          alt={titulo}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg text-primary group-hover:text-accent">
          {titulo}
        </h3>
      </div>
    </Link>
  );
}

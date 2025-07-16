"use client";

import Link from "next/link";

export function ArtistCard({ id, nome }: { id: number; nome: string }) {
  return (
    <Link
      href={`/artistas/${id}`}
      className="block p-4 bg-secondary rounded-lg shadow hover:shadow-lg transition"
    >
      <h3 className="font-heading text-xl">{nome}</h3>
    </Link>
  );
}

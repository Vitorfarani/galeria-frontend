"use client";

import Link from "next/link";

export function ExhibitionCard({
  id,
  nome,
  descricao,
  data,
}: {
  id: number;
  nome: string;
  descricao: string;
  data: string;
}) {
  return (
    <Link
      href={`/exposicoes/${id}`}
      className="block p-6 bg-secondary rounded-lg shadow hover:shadow-lg transition"
    >
      <h3 className="font-heading text-2xl mb-2">{nome}</h3>
      <p className="text-neutralDark mb-4 line-clamp-3">{descricao}</p>
      <span className="text-sm text-neutral">Data: {data}</span>
    </Link>
  );
}

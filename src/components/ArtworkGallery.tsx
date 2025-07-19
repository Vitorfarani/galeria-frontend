"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArtworkCard, Artwork } from "./ArtworkCard";   // ← named export
import SearchBar from "./SearchBar";
import YearFilter from "./YearFilter";

export default function ArtworkGallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get<Artwork[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/obras?titulo=${searchQuery}&ano=${yearFilter}`
        );
        setArtworks(response.data);
      } catch (error) {
        console.error("Erro ao buscar obras:", error);
      }
    };
    fetchArtworks();
  }, [searchQuery, yearFilter]);

  return (
    <div className="gallery">
      <div className="flex gap-4 mb-6">
        <SearchBar onSearch={setSearchQuery} />
        <YearFilter onFilter={setYearFilter} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artworks.length > 0 ? (
          artworks.map((art) => (
            <ArtworkCard
              key={art.id.toString()}
              id={art.id}
              titulo={art.titulo}
              urlImagem={art.urlImagem}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Nenhuma obra encontrada.
          </p>
        )}
      </div>
    </div>
  );
}

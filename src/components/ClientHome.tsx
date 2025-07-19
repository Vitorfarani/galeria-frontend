"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import FeaturedCarousel from "./FeaturedCarousel";
import axios from "axios";
import { Artwork } from "./ArtworkCard";

export default function ClientHome() {
  const [featured, setFeatured] = useState<Artwork[]>([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const res = await axios.get<Artwork[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/obras/galeria`
      );
      setFeatured(res.data.slice(0, 5));
    };
    loadFeatured();
  }, []);

  return (
    <main className="space-y-12">
      <Hero />
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-4">Em Destaque</h2>
        {featured.length > 0 && <FeaturedCarousel artworks={featured} />}
      </section>
    </main>
  );
}

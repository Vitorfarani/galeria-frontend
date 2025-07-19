"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Artwork } from "./ArtworkCard";
import { motion } from "framer-motion";

interface FeaturedCarouselProps {
  artworks: Artwork[];
}

export default function FeaturedCarousel({ artworks }: FeaturedCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const timer = useRef<number | null>(null);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    timer.current = window.setTimeout(autoplay, 5000);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    autoplay();
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, [emblaApi, autoplay]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {artworks.map((art, idx) => (
          <motion.div
            key={art.id}
            className="min-w-full px-2"
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={art.urlImagem}
              alt={art.titulo}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-2 text-xl font-semibold text-center">
              {art.titulo}
            </h3>
          </motion.div>
        ))}
      </div>

      <button
        aria-label="Slide anterior"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
      >
        ‹
      </button>
      <button
        aria-label="Próximo slide"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}

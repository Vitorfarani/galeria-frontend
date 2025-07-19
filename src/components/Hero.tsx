"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  // Captura o scroll vertical
  const { scrollY } = useScroll();
  // Transforma a posição do background: de 0px → até -200px ao rolar 0→500px
  const y = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background com parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="/hero-bg.jpg"       /* coloque sua imagem em public/hero-bg.jpg */
          alt="Fundo Hero"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Conteúdo acima do fundo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">
          Bem-vindo à Galeria de Artes
        </h1>
        <p className="text-xl max-w-2xl">
          Descubra obras incríveis e artistas inspiradores.
        </p>
      </div>
    </section>
  );
}

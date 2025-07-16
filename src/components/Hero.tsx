"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full container mx-auto px-6 text-secondary">
        <motion.h1
          className="text-5xl md:text-6xl font-heading mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Discover a new
          <br />
          kind of art
        </motion.h1>
        <motion.p
          className="max-w-xl mb-8 text-lg text-neutral"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Explore obras exclusivas de artistas contemporâneos e mergulhe em
          exposições surpreendentes.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/exposicoes"
            className="px-6 py-3 bg-accent text-secondary font-semibold rounded-md hover:bg-accent/90"
          >
            Browse Exhibitions
          </Link>
          <Link
            href="/tickets"
            className="px-6 py-3 border border-secondary font-semibold rounded-md hover:bg-secondary hover:text-primary transition"
          >
            Buy Tickets
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

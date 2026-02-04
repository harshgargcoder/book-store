"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-32 px-6 bg-slate-950 overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A74E]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20 relative z-10">

        {/* TEXT Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white mb-6">
            Discover Stories <br />
            <span className="text-[#C6A74E]">Worth Collecting</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            A curated bookstore experience for readers who value timeless
            literature, thoughtful design, and refined taste.
          </p>

          <Button className="cursor-pointer px-8 py-3 rounded-full bg-[#C6A74E] text-slate-900 font-medium hover:opacity-90 transition-all shadow-md">
            Explore Collection
          </Button>
        </motion.div>

        {/* IMAGE Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Luxury Books"
            width={600}
            height={700}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

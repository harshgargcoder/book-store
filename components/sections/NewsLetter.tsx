"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">

      {/* Subtle Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-[#C6A74E]/5 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">

        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Join Our <span className="text-[#C6A74E]">Literary Circle</span>
            </h2>

            <p className="text-slate-400 text-base">
              Curated reads and exclusive releases delivered to your inbox.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-xl p-6">

            <div className="flex flex-col md:flex-row gap-3">

              <Input
                placeholder="Enter your email"
                className="h-12 text-base bg-slate-950 border-slate-700 focus:border-[#C6A74E]"
              />

              <Button className="cursor-pointer h-12 px-6 rounded-lg bg-[#C6A74E] text-slate-900 hover:opacity-90 transition">
                Subscribe
              </Button>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

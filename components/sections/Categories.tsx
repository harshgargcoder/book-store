"use client";

import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Self Development",
  "Biographies",
  "Business",
  "Fantasy",
];

export default function Categories() {
  return (
    <section className="relative py-32 px-6 bg-slate-900 overflow-hidden">

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C6A74E]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <ScrollReveal>
          <h2 className="text-4xl font-semibold text-center mb-16 text-white">
            Browse <span className="text-[#C6A74E]">Categories</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="group cursor-pointer bg-slate-950/60 backdrop-blur-md border border-slate-800 rounded-2xl p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A74E]/40 hover:shadow-2xl hover:shadow-[#C6A74E]/10">

                <h3 className="text-lg tracking-wide text-slate-200 group-hover:text-white transition">
                  {cat}
                </h3>

                <div className="mt-4 h-[1px] w-0 bg-[#C6A74E] mx-auto transition-all duration-500 group-hover:w-12"></div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

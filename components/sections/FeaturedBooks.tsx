"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="py-28 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal>
          <h2 className="text-4xl font-semibold text-white text-center mb-16">
            Featured <span className="text-[#C6A74E]">Books</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {books.map((book, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="group bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#C6A74E]/10 transition-all duration-500">

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-medium text-white mb-2">
                    {book.title}
                  </h3>
                  <p className="text-slate-400 mb-6">{book.author}</p>

                  <Button className="cursor-pointer px-6 py-2 rounded-full bg-[#C6A74E] text-slate-900 hover:opacity-90 transition">
                    View Details
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

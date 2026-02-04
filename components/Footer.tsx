"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12 text-slate-400">

            {/* Brand */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                Golden <span className="text-[#C6A74E]">Quill</span>
              </h3>
              <p className="text-sm leading-relaxed">
                A curated bookstore experience crafted for readers who value
                timeless literature and refined storytelling.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-medium mb-4">Explore</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="hover:text-[#C6A74E] transition">
                  Home
                </Link>
                <br />
                <Link href="/books" className="hover:text-[#C6A74E] transition">
                  Books
                </Link>
                <br />
                <Link href="/categories" className="hover:text-[#C6A74E] transition">
                  Categories
                </Link>
                <br />
                <Link href="/about" className="hover:text-[#C6A74E] transition">
                  About
                </Link>
              </div>
            </div>

            {/* Newsletter Mini */}
            <div>
              <h4 className="text-white font-medium mb-4">
                Stay Connected
              </h4>
              <p className="text-sm mb-4">
                Get thoughtful recommendations and exclusive releases.
              </p>
              <Link
                href="/"
                className="text-[#C6A74E] text-sm hover:underline"
              >
                Join Newsletter →
              </Link>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Line */}
        <div className="mt-16 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Golden Quill Bookstore. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

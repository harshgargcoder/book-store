"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const supabase = createClient();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    router.refresh();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Golden Quill Logo"
              width={55}
              height={55}
            />
            <span className="text-2xl tracking-wide font-semibold text-[#C6A74E]">
              Golden Quill
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-slate-300">
            {["Home", "Books", "Categories", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group transition"
              >
                <span className="group-hover:text-white transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C6A74E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div
            className="hidden md:flex items-center relative"
            ref={dropdownRef}
          >
            {user ? (
              <div className="relative">

                {/* Avatar Button */}
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-800 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C6A74E] flex items-center justify-center text-slate-900 text-sm font-semibold">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>

                  <span className="text-sm text-slate-200">
                    {user.email?.split("@")[0]}
                  </span>
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                 <div className="absolute right-0 mt-2 w-48 bg-[#0F172A] border border-[#C6A74E]/40 rounded-lg shadow-2xl py-2 z-50">

                    <div className="px-4 py-2 text-xs text-slate-400 border-b border-slate-700">
                      {user.email}
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-900 hover:text-red-300 transition"
                    >
                      Logout
                      
                    </button>
                  </div>
                )}

              </div>
            ) : (
              <Button
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#C6A74E] to-[#E7C873] text-slate-900 hover:scale-[1.02] transition"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#C6A74E]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-6 space-y-6 text-slate-300">
            {["Home", "Books", "Categories", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block hover:text-[#C6A74E] transition"
              >
                {item}
              </Link>
            ))}

            {user ? (
              <Button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setShowLogin(true);
                  setIsOpen(false);
                }}
                className="w-full bg-[#C6A74E] text-slate-900"
              >
                Sign In
              </Button>
            )}
          </div>
        )}
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

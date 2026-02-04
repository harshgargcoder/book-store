"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2, X, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Enter email and password");
      return;
    }

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) setError(error.message);
    else {
      onClose();
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#0F172A] border border-[#C6A74E]/40 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] p-8 space-y-6 z-10">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center space-y-3">
          <Image
            src="/logo.png"
            alt="Golden Quill"
            width={70}
            height={70}
          />
          <h2 className="text-3xl font-serif text-[#E7C873]">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-400 text-center">
            Continue your writing journey.
          </p>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
        >
          {googleLoading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Continue with Google
            </>
          )}
        </button>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-slate-700" />
          <span className="text-xs text-slate-400">OR</span>
          <div className="flex-1 h-[1px] bg-slate-700" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 h-12 rounded-xl bg-[#0B1120] border border-slate-700 focus-within:ring-2 focus-within:ring-[#C6A74E] transition">
            <Mail size={18} className="text-slate-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-slate-400 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 h-12 rounded-xl bg-[#0B1120] border border-slate-700 focus-within:ring-2 focus-within:ring-[#C6A74E] transition">

          <Lock size={18} className="text-slate-400" />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder:text-slate-400 outline-none"
          />

        </div>


        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C6A74E] to-[#E7C873] text-[#0B1120] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            "Enter the Realm"
          )}
        </button>
      </div>
    </div>
  );
}

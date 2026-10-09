"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2));
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => router.push("/login"), 400);
      return () => clearTimeout(t);
    }
  }, [progress, router]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <Image src="/images/logo.png" alt="MathSign" width={260} height={200} priority />
      <p className="mt-2 text-sm font-semibold">~Belajar Tanpa Batas~</p>

      <div className="mt-24 w-full max-w-3xl">
        <div className="mb-1 flex justify-between text-[11px] text-slate-400">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full rounded-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="absolute bottom-4 left-6 text-[10px] text-slate-400">© 2026 MathSign</p>
    </main>
  );
}
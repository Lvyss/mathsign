"use client"; // Wajib ditambahkan karena menggunakan hooks (useState, useEffect)

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Topbar() {
  // State default jika tidak ada cookie
  const [user, setUser] = useState({
    name: "Siti Aisyah",
    initials: "SA",
  });

  // Cek cookie saat komponen dirender di client-side
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedName = getCookie("user_name");
    const savedInitials = getCookie("user_initials");

    // Jika cookie ditemukan (artinya habis login pakai Google), timpa state
    if (savedName && savedInitials) {
      setUser({
        name: decodeURIComponent(savedName),
        initials: savedInitials,
      });
    }
  }, []);

  return (
    <header className="sticky top-0 z-999 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-3">
      <h2 className="text-base font-bold">MathSign: Belajar Tanpa Batas</h2>

      <button className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-white">
          {user.initials}
        </span>
        <span className="text-xs font-bold">{user.name}</span>
        <ChevronDown size={14} />
      </button>
    </header>
  );
}
"use client";

import { useState, useEffect } from "react";
import BerandaGratis from "@/components/beranda/BerandaGratis";
import BerandaIndividu from "@/components/beranda/BerandaIndividu";
import BerandaSekolah from "@/components/beranda/BerandaSekolah";

export default function BerandaPage() {
  const [packageType, setPackageType] = useState<"gratis" | "individu" | "sekolah" | null>(null);

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedPkg = getCookie("user_package");
    
    if (savedPkg?.includes("Individu")) {
      setPackageType("individu");
    } else if (savedPkg?.includes("Sekolah")) {
      setPackageType("sekolah");
    } else {
      setPackageType("gratis"); // Default
    }
  }, []);

  // Tampilkan layar loading sebentar untuk menghindari error Hydration
  if (!packageType) {
    return <div className="mx-auto max-w-6xl py-20 text-center text-slate-400">Memuat beranda...</div>;
  }

  return (
    <div className="mx-auto max-w-6xl pb-10">
      {packageType === "gratis" && <BerandaGratis />}
      {packageType === "individu" && <BerandaIndividu />}
      {packageType === "sekolah" && <BerandaSekolah />}
    </div>
  );
}
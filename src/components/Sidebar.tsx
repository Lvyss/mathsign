"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, HandMetal, Home, Info, PencilLine, Users, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

const menu = [
  { label: "Beranda", href: "/beranda", icon: Home },
  { label: "Materi", href: "/materi", icon: BookOpen },
  { label: "Materi Bahasa Isyarat", href: "/materi-bahasa-isyarat", icon: HandMetal },
  { label: "Latihan Interaktif", href: "/latihan", icon: PencilLine },
  { label: "Cara Penggunaan", href: "/cara-penggunaan", icon: Info },
  { label: "Pilihan Paket", href: "/pilihan-paket", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [userPackage, setUserPackage] = useState("Paket 1 · Gratis aktif");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedPackage = getCookie("user_package");
    if (savedPackage) {
      setUserPackage(decodeURIComponent(savedPackage));
    }
  }, []);

  // FUNGSI LOGOUT: Hapus Cookie & Redirect
  // FUNGSI LOGOUT: Hapus Cookie & Redirect Paksa
  const handleLogout = () => {
    // Fungsi helper untuk menghapus cookie dengan aman
    const deleteCookie = (name: string) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    };

    // Hapus semua cookie terkait
    deleteCookie("user_package");
    deleteCookie("user_name");
    deleteCookie("user_initials");
    
    // Gunakan window.location.href (bukan router.push) untuk FORCE RELOAD
    // Agar semua state React (seperti Sidebar & Topbar) kembali ke awal (Gratis)
    window.location.href = "/login";
  };

  return (
    // Gunakan flex-col dan justify-between agar menu di atas dan logout di bawah
    <aside className="fixed inset-y-0 left-0 hidden w-52 flex-col justify-between border-r border-slate-200 bg-white p-3 md:flex">
      
      {/* Bagian Atas: Logo & Menu */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-center py-4">
          <Image src="/images/logo.png" alt="MathSign" width={80} height={60} />
        </div>

        {/* BADGE STATUS PAKET */}
        <div className="mb-3 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-[10px] font-bold text-blue-700">
            {isMounted ? userPackage : "Paket 1 · Gratis aktif"}
          </span>
        </div>

        <nav className="mt-2 space-y-1">
          {menu.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold transition ${
                  active ? "bg-blue-100 text-primary" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon size={15} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bagian Bawah: Tombol Logout */}
      <div className="mt-4 border-t border-slate-200 pt-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={15} />
          Keluar (Logout)
        </button>
      </div>

    </aside>
  );
}
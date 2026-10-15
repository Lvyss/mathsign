"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HandMetal, Home, Info, PencilLine, Users } from "lucide-react";

const menu = [
  { label: "Beranda", href: "/beranda", icon: Home },
  { label: "Materi Pecahan", href: "/materi-pecahan", icon: BookOpen },
  { label: "Materi Bahasa Isyarat", href: "/materi-isyarat", icon: HandMetal },
  { label: "Latihan Interaktif", href: "/latihan", icon: PencilLine },
  { label: "Cara Penggunaan", href: "/cara-penggunaan", icon: Info },
  { label: "Pilihan Paket", href: "/pilihan-paket", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-52 flex-col border-r border-slate-200 bg-white p-3 md:flex">
      <div className="flex justify-center py-4">
        <Image src="/images/logo.png" alt="MathSign" width={80} height={60} />
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
    </aside>
  );
}
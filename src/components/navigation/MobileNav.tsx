"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Plus, MessageSquare, User } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Ana Sayfa", href: "/feed", icon: Home },
    { label: "Keşfet", href: "/kesfet", icon: Compass },
    { label: "Oluştur", href: "/firsat-olustur", icon: Plus, isAction: true },
    { label: "Mesajlar", href: "/mesajlar", icon: MessageSquare },
    { label: "Profil", href: "/profil", icon: User },
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#F0E6DA] py-1 px-4">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          if (item.isAction) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#0D4842] text-white flex items-center justify-center shadow-md active:scale-95 transition-transform">
                  <Plus size={24} />
                </div>
                <span className="text-[10px] font-semibold text-[#0D4842] mt-0.5">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center py-1 px-2 rounded-xl transition-colors
                ${isActive ? "text-[#0D4842]" : "text-[#7E7068] hover:text-[#2F1C31]"}
              `}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

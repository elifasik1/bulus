"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  Users,
  Sparkles,
  Bookmark,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

export default function ProfileSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { label: "Profilim", href: "/profil", icon: User },
    { label: "Takip Ettiklerim", href: "/baglantilar", icon: Users },
    { label: "Fırsatlarım", href: "/feed", icon: Sparkles },
    { label: "Kaydedilenler", href: "/kaydedilenler", icon: Bookmark },
    { label: "Mesajlar", href: "/mesajlar", icon: MessageSquare },
    { label: "Bildirimler", href: "/bildirimler", icon: Bell },
    { label: "Ayarlar", href: "/ayarlar", icon: Settings },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white dark:bg-[#1e1b18] rounded-3xl p-4 border border-[#F0E6DA] dark:border-[#332e29] shadow-xs shrink-0 transition-colors duration-200">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-colors
                ${
                  isActive
                    ? "bg-[#FAF7F2] dark:bg-[#2a2521] text-[#0D4842] dark:text-[#8EBF9F] border border-[#EAE2D8] dark:border-[#38322d]"
                    : "text-[#6E615A] dark:text-[#b5aaa0] hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] hover:text-[#1F1714] dark:hover:text-[#F3EFEA]"
                }
              `}
            >
              <item.icon size={18} className={isActive ? "text-[#0D4842] dark:text-[#8EBF9F]" : "text-[#7E7068] dark:text-[#9e9088]"} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

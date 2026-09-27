"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  MapPin,
  ChevronDown,
  Plus,
  Sun,
  Moon,
  User,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import Logo from "@/components/brand/Logo";
import Avatar from "@/components/ui/Avatar";
import { useTheme } from "@/context/ThemeContext";

export default function AppHeader() {
  const pathname = usePathname();

  const [selectedCity, setSelectedCity] = useState("İstanbul");
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileMenuRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();

  const cities = [
    "İstanbul",
    "Ankara",
    "İzmir",
    "Bursa",
    "Antalya",
    "Eskişehir",
  ];

  const navItems = [
    { label: "Akış", href: "/feed" },
    { label: "Keşfet", href: "/kesfet" },
    { label: "Şehirler", href: "/sehirler" },
    { label: "Mesajlar", href: "/mesajlar" },
    { label: "Kaydedilenler", href: "/kaydedilenler" },
  ];

  // Profil menüsünün dışına tıklanınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sayfa değiştiğinde açık menüleri kapat
  useEffect(() => {
    setIsProfileOpen(false);
    setIsCityOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#181614]/95 backdrop-blur-md border-b border-[#F0E6DA] dark:border-[#332e29] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LEFT — LOGO + CITY */}
          <div className="flex items-center gap-6">
            <Logo size="md" />

            {/* City Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCityOpen(!isCityOpen);
                  setIsProfileOpen(false);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] dark:bg-[#2a2521] border border-[#EAE2D8] dark:border-[#332e29] text-xs sm:text-sm font-semibold text-[#2F1C31] dark:text-[#F3EFEA] hover:bg-[#F5EFE8] dark:hover:bg-[#332d28] transition-colors cursor-pointer"
              >
                <MapPin
                  size={14}
                  className="text-[#0D4842] dark:text-[#8EBF9F]"
                />

                <span>{selectedCity}</span>

                <ChevronDown
                  size={14}
                  className="text-[#6E615A] dark:text-[#B5AAA0]"
                />
              </button>

              {isCityOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-[#201d1a] rounded-2xl shadow-lg border border-[#F0E6DA] dark:border-[#332e29] py-1 z-50">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityOpen(false);
                      }}
                      className={`
                        w-full text-left px-4 py-2 text-xs sm:text-sm font-medium
                        hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521]
                        transition-colors cursor-pointer
                        ${
                          city === selectedCity
                            ? "text-[#0D4842] dark:text-[#8EBF9F] font-bold bg-[#F4F9F8] dark:bg-[#1a2f26]"
                            : "text-[#4A403A] dark:text-[#F3EFEA]"
                        }
                      `}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CENTER NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3.5 py-1.5 text-xs sm:text-sm transition-all
                    rounded-full flex items-center gap-1
                    ${
                      isActive
                        ? "bg-[#EAF3EC] dark:bg-[#1a2f26] text-[#0D4842] dark:text-[#8EBF9F] font-bold shadow-2xs"
                        : "font-semibold text-[#4A403A] dark:text-[#D5C9BD] hover:text-[#0D4842] dark:hover:text-[#8EBF9F] hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* DARK MODE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#6E615A] dark:text-[#D5C9BD] hover:text-[#1F1714] dark:hover:text-white hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] transition-colors cursor-pointer"
              title={theme === "dark" ? "Açık Moda Geç" : "Koyu Moda Geç"}
              aria-label="Tema değiştir"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-[#D99A10]" />
              ) : (
                <Moon size={20} className="text-[#3B65B5]" />
              )}
            </button>

            {/* CREATE */}
            <Link
              href="/firsat-olustur"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D4842] text-white text-xs sm:text-sm font-semibold hover:bg-[#093632] transition-colors shadow-xs"
            >
              <Plus size={16} />
              <span>Fırsat Paylaş</span>
            </Link>

            {/* NOTIFICATIONS */}
            <Link
              href="/bildirimler"
              className="p-2 rounded-full text-[#6E615A] dark:text-[#D5C9BD] hover:text-[#1F1714] dark:hover:text-white hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] transition-colors relative"
              aria-label="Bildirimler"
            >
              <Bell size={20} />

              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F7A695] rounded-full" />
            </Link>

            {/* PROFILE MENU */}
            <div
              ref={profileMenuRef}
              className="relative"
            >
              <button
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsCityOpen(false);
                }}
                className="flex items-center cursor-pointer group"
                aria-label="Profil menüsü"
                aria-expanded={isProfileOpen}
              >
                <Avatar
                  src="/brand/hero-illustration.png"
                  alt="Elif Aşık"
                  size="sm"
                  className={`
                    ring-2 transition-all
                    ${
                      isProfileOpen
                        ? "ring-[#0D4842]/40 scale-105"
                        : "ring-[#0D4842]/20 group-hover:scale-105"
                    }
                  `}
                />
              </button>

              {/* DROPDOWN */}
              {isProfileOpen && (
                <div
                  className="
                    absolute right-0 top-full mt-3
                    w-64
                    bg-white dark:bg-[#201d1a]
                    border border-[#F0E6DA] dark:border-[#332e29]
                    rounded-3xl
                    shadow-xl
                    overflow-hidden
                    z-50
                  "
                >

                  {/* USER HEADER */}
                  <div className="px-4 py-4 bg-[#FAF7F2] dark:bg-[#2a2521] border-b border-[#F0E6DA] dark:border-[#332e29]">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src="/brand/hero-illustration.png"
                        alt="Elif Aşık"
                        size="md"
                      />

                      <div className="min-w-0">
                        <p className="text-sm font-extrabold text-[#2F1C31] dark:text-[#F3EFEA] truncate">
                          Elif Aşık
                        </p>

                        <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0] truncate">
                          Bilgisayar Mühendisi
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* MENU ITEMS */}
                  <div className="p-2">

                    {/* PROFILE */}
                    <Link
                      href="/profil"
                      className="flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#F3EAF7] dark:bg-[#352a38] text-[#4B2E4D] dark:text-[#DCC7EB] flex items-center justify-center">
                        <User size={17} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-bold text-[#2F1C31] dark:text-[#F3EFEA]">
                          Profilim
                        </p>

                        <p className="text-[10px] text-[#8A7C74] dark:text-[#B5AAA0]">
                          Profilini görüntüle
                        </p>
                      </div>

                      <ChevronRight
                        size={15}
                        className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>

                    {/* SETTINGS */}
                    <Link
                      href="/ayarlar"
                      className="flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#EAF3EC] dark:bg-[#1a2f26] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center">
                        <Settings size={17} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-bold text-[#2F1C31] dark:text-[#F3EFEA]">
                          Ayarlar
                        </p>

                        <p className="text-[10px] text-[#8A7C74] dark:text-[#B5AAA0]">
                          Hesap ve gizlilik
                        </p>
                      </div>

                      <ChevronRight
                        size={15}
                        className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>

                    {/* NOTIFICATIONS */}
                    <Link
                      href="/bildirimler"
                      className="flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#FFF0EB] dark:bg-[#3A2824] text-[#C96F59] flex items-center justify-center">
                        <Bell size={17} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-bold text-[#2F1C31] dark:text-[#F3EFEA]">
                          Bildirimler
                        </p>

                        <p className="text-[10px] text-[#8A7C74] dark:text-[#B5AAA0]">
                          Yeni bildirimlerini gör
                        </p>
                      </div>

                      <ChevronRight
                        size={15}
                        className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>

                  {/* LOGOUT */}
                  <div className="p-2 pt-0">
                    <div className="border-t border-[#F0E6DA] dark:border-[#332e29] pt-2">
                      <Link
                        href="/giris"
                        className="flex items-center gap-3 px-3 py-3 rounded-2xl hover:bg-[#FFF0F0] dark:hover:bg-[#3b1c1c] transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#FFF0F0] dark:bg-[#3b1c1c] text-red-500 flex items-center justify-center">
                          <LogOut size={17} />
                        </div>

                        <div className="flex-1">
                          <p className="text-xs font-bold text-red-600 dark:text-red-400">
                            Çıkış Yap
                          </p>

                          <p className="text-[10px] text-red-400/70 dark:text-red-400/60">
                            Hesabından çık
                          </p>
                        </div>

                        <ChevronRight
                          size={15}
                          className="text-red-300 group-hover:translate-x-0.5 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
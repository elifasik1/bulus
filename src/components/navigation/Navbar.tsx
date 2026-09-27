"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS_PUBLIC } from "@/constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-soft"
            : "bg-[#FAF7F2]/80 backdrop-blur-sm"
        }
      `}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Ana navigasyon"
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 sm:h-[4.5rem]">
          {/* Logo with beta badge */}
          <div className="flex items-center gap-2 justify-self-start">
            <Logo size="md" />
            <span className="bg-[#EAE3F7] text-[#6B4AA0] text-[11px] font-semibold px-2 py-0.5 rounded-full leading-none">
              beta
            </span>
          </div>

          {/* Desktop Navigation — centered */}
          <div className="hidden md:flex items-center gap-1 justify-self-center">
            {NAV_LINKS_PUBLIC.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#2C2623] hover:text-[#1F1714] rounded-full hover:bg-black/[0.04] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 justify-self-end">
            <Link href="/giris">
              <Button size="sm" variant="ghost">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/kayit">
              <Button size="sm" variant="primary">
                Hemen Başla
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden justify-self-end p-2 rounded-[var(--radius-md)] text-plum-600 hover:bg-plum-50 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
        >
          <div
            className="absolute inset-0 bg-plum-900/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative bg-[#FAF7F2] border-t border-border/50 animate-slide-down">
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS_PUBLIC.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-plum-600 hover:text-plum-700 rounded-[var(--radius-md)] hover:bg-plum-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-border/50 space-y-3">
                <Link
                  href="/giris"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-plum-600 hover:text-plum-700 rounded-[var(--radius-md)] hover:bg-plum-50 transition-colors text-center"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/kayit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button
                    fullWidth
                    size="md"
                    variant="primary"
                  >
                    Hemen Başla
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

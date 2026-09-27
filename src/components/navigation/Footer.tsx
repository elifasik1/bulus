"use client";

import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF7F2] dark:bg-[#181614] border-t border-[#EAE2D8] dark:border-[#332e29] py-8 text-[#6E615A] dark:text-[#9e9088] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <Logo size="md" />
            <span className="text-sm font-medium">
              Aynı şehir, daha fazla fikir. ♡
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm font-medium">
            <Link href="/hakkimizda" className="hover:text-[#1F1714] dark:hover:text-[#F3EFEA] transition-colors">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="hover:text-[#1F1714] dark:hover:text-[#F3EFEA] transition-colors">
              İletişim
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-[#1F1714] dark:hover:text-[#F3EFEA] transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/gizlilik" className="hover:text-[#1F1714] dark:hover:text-[#F3EFEA] transition-colors">
              Gizlilik Politikası
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {[
              { href: "https://github.com", label: "GitHub", icon: GithubIcon },
              { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedinIcon },
              { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
              { href: "https://x.com", label: "X (Twitter)", icon: XIcon },
              { href: "https://youtube.com", label: "YouTube", icon: YoutubeIcon },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-[#7E7068] dark:text-[#9e9088] hover:text-[#1F1714] dark:hover:text-[#F3EFEA] hover:bg-[#EAE2D8]/50 dark:hover:bg-[#2a2521] transition-colors"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#EAE2D8]/80 dark:bg-[#2a2521] hover:bg-[#DDD4C8] dark:hover:bg-[#38322d] text-[#4A403A] dark:text-[#D5C9BD] transition-colors cursor-pointer ml-1"
              aria-label="Yukarı Kaydır"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

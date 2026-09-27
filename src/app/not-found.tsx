"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import AppHeader from "@/components/navigation/AppHeader";
import Footer from "@/components/navigation/Footer";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] flex flex-col justify-between">
      <AppHeader />

      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#F0E6DA] shadow-xs text-center max-w-md w-full relative overflow-hidden">
          
          {/* Signpost Illustration */}
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="37" y="10" width="6" height="60" fill="#B07D5B" rx="3" />
              <path d="M 15 20 L 60 20 L 65 28 L 60 36 L 15 36 Z" fill="#D99B73" />
              <path d="M 20 42 L 65 42 L 70 50 L 65 58 L 20 58 Z" fill="#C4845B" />
              <circle cx="50" cy="68" r="8" fill="#F7A695" />
            </svg>
          </div>

          <h1 className="text-6xl font-extrabold text-[#1F1714] tracking-tight">404</h1>

          <p className="font-handwriting text-2xl text-[#7E3D29] mt-3 mb-2">
            Sanırım bu sayfa başka bir yerde buluşmuş. ♡
          </p>

          <p className="text-xs text-[#7E7068] mb-6">
            Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
          </p>

          <Link href="/">
            <Button size="md" variant="primary" leftIcon={<Home size={16} />}>
              Ana Sayfa&apos;ya Dön
            </Button>
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageCircle } from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7E7068] transition hover:text-[#4B2E4D]"
        >
          <ArrowLeft size={16} />
          Ana sayfaya dön
        </Link>

        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="font-handwriting text-xl text-[#D9674A]">
              konuşalım ♡
            </span>

            <h1 className="mt-2 font-serif text-4xl font-extrabold leading-tight text-[#1F1714] sm:text-5xl">
              Aklında bir şey mi var?
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#6E615A]">
              Bir sorunla mı karşılaştın, bir fikrin mi var ya da sadece
              Buluş. hakkında konuşmak mı istiyorsun? Bize ulaşabilirsin.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:destek@bulus.app"
                className="inline-flex items-center gap-2 rounded-full bg-[#4B2E4D] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#3C243E]"
              >
                <Mail size={16} />
                Bize e-posta gönder
                <ArrowRight size={15} />
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5DAD2] bg-white px-5 py-3 text-sm font-bold text-[#4B2E4D] transition hover:bg-[#FFF6EE]"
              >
                Buluş.'u keşfet
              </Link>
            </div>
          </div>

          {/* Illustration / message card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[#F7A695]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#F0E6DA] bg-white p-7 shadow-[0_15px_45px_rgba(75,46,77,0.07)] sm:p-9">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DCC7EB]/40" />
              <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-[#C7DBC9]/40" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0EB] text-[#D9674A]">
                  <MessageCircle size={25} />
                </div>

                <p className="mt-8 font-handwriting text-2xl leading-relaxed text-[#4B2E4D]">
                  “İyi insanlar,
                  <br />
                  güzel şeyler üretir.”
                </p>

                <div className="mt-8 border-t border-[#F0E6DA] pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9A8980]">
                    Buluş.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#6E615A]">
                    Bir soru bazen yeni bir tanışmanın başlangıcı olabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact card */}
        <section className="mt-12 rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-handwriting text-lg text-[#2C6E49]">
                buradayız ✨
              </p>

              <h2 className="mt-1 text-xl font-extrabold text-[#1F1714]">
                Bize nasıl ulaşabilirsin?
              </h2>

              <p className="mt-2 text-sm text-[#7E7068]">
                Şimdilik bize doğrudan e-posta üzerinden ulaşabilirsin.
              </p>
            </div>

            <a
              href="mailto:destek@bulus.app"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#FFF0EB] px-5 py-3 text-sm font-extrabold text-[#4B2E4D] transition hover:bg-[#FFE4DC]"
            >
              <Mail size={16} />
              destek@bulus.app
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
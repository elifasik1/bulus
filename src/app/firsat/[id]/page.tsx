"use client";

import { useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Share2,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface Opportunity {
  title: string;
  category: string;
  location: string;
  author: string;
  school: string;
  time: string;
  type: "Arıyor" | "Sunuyor";
  description: string;
  details: string[];
  tags: string[];
}

const mockOpportunities: Record<string, Opportunity> = {
  "1": {
    title: "Mobil uygulamamı test edecek 20 kişi arıyorum",
    category: "Kullanıcı testi",
    location: "İstanbul / Online",
    author: "Cem Yılmaz",
    school: "ODTÜ Bilgisayar Müh.",
    time: "2 saat önce",
    type: "Arıyor",
    description:
      "React Native ile geliştirdiğim üniversite öğrencilerine yönelik çalışma ve odaklanma planlama uygulamasının beta sürümünü deneyip kullanıcı deneyimi ve arayüz hakkında samimi geri bildirim verecek arkadaşlar arıyorum.",
    details: [
      "Test yaklaşık 15-20 dakika sürüyor.",
      "iOS veya Android telefon sahibi olmanız yeterli.",
      "Kısa bir geri bildirim formu doldurmanız yeterli.",
    ],
    tags: ["React Native", "Beta Test", "Mobil App", "UX/UI"],
  },

  "2": {
    title: "Yeni mezun olarak İstanbul'da frontend fırsatı arıyorum",
    category: "İş",
    location: "İstanbul",
    author: "Elif Aşık",
    school: "İTÜ Bilgisayar Müh.",
    time: "5 saat önce",
    type: "Arıyor",
    description:
      "İTÜ Bilgisayar Mühendisliği yeni mezunuyum. React, Next.js ve Tailwind CSS ile modern web projeleri geliştirdim. İstanbul'da dinamik bir ekip içerisinde frontend geliştirici olarak değer katabileceğim tam zamanlı veya hibrit pozisyonlar arıyorum.",
    details: [
      "Next.js, TypeScript ve Tailwind CSS ile çalışıyorum.",
      "Frontend ve backend tarafında proje geliştirme deneyimim var.",
      "Portfolyo ve GitHub projelerimi paylaşabilirim.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Frontend"],
  },

  "3": {
    title: "Sosyal etki projemiz için UI/UX tasarımcı arıyoruz",
    category: "Ekip arkadaşı",
    location: "Ankara / Online",
    author: "Ahmet Kara",
    school: "Boğaziçi Üniv.",
    time: "1 gün önce",
    type: "Arıyor",
    description:
      "Öğrencilerin geri dönüşüm farkındalığını artıran ve puan kazanmalarını sağlayan bir mobil uygulama geliştiriyoruz. Figma yetkinliği olan ve sosyal etki odaklı projelerde heyecan duyan bir UI/UX tasarımcı ekip arkadaşı arıyoruz.",
    details: [
      "Figma ve wireframe oluşturma deneyimi gerekiyor.",
      "Haftalık 4-6 saatlik esnek çalışma öngörülüyor.",
      "Yarışma ve fon süreçlerine birlikte katılım sağlanacak.",
    ],
    tags: ["Figma", "UI/UX", "Sosyal Etki", "Ekip Arkadaşı"],
  },

  "4": {
    title: "Backend geliştirmede Python ve FastAPI mentörlüğü",
    category: "Mentor",
    location: "Online",
    author: "Zeynep Demir",
    school: "Hacettepe Üniv.",
    time: "3 saat önce",
    type: "Sunuyor",
    description:
      "5 yıllık backend yazılım tecrübem var. Yazılım yolculuğunun başındaki öğrenci veya yeni mezunlara Python, FastAPI ve veritabanı tasarımı konularında ücretsiz mentörlük desteği vermek istiyorum.",
    details: [
      "Haftada 1 saat online görüşme yapılabilir.",
      "Kod incelemesi ve kariyer tavsiyeleri dahil.",
      "Özellikle backend alanına yeni başlayanlarla çalışmak istiyorum.",
    ],
    tags: ["Python", "FastAPI", "Mentörlük", "Backend"],
  },
};

export default function OpportunityDetailPage({
  params,
}: PageProps) {
  const resolvedParams = use(params);
  const opportunityId = resolvedParams.id;

  const opportunity =
    mockOpportunities[opportunityId] ?? {
      title: "Teknoloji ve Girişimcilik Fırsatı",
      category: "Proje",
      location: "İstanbul / Online",
      author: "Buluş Üyesi",
      school: "Üniversite Öğrencisi",
      time: "Yeni paylaşıldı",
      type: "Arıyor" as const,
      description:
        "Topluluğumuzda paylaşılan bir proje veya iş birliği fırsatı. Detaylar için fırsat sahibiyle doğrudan iletişime geçebilirsiniz.",
      details: [
        "Çevrimiçi veya yüz yüze buluşma imkanı.",
        "Topluluk kurallarına uygun iletişim beklenmektedir.",
      ],
      tags: ["Proje", "Buluş", "Topluluk"],
    };

  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === "undefined") return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Clipboard desteklenmiyorsa sessizce devam ediyoruz.
    }
  };

  const isLooking = opportunity.type === "Arıyor";

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      <main className="flex-1">
        {/* =====================================================
            TOP HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#FFF6EE]">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#DCC7EB]/35" />
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#F7A695]/25" />

          <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-7 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/kesfet"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#756860] transition hover:text-[#4B2E4D]"
              >
                <ArrowLeft size={16} />
                Keşfet&apos;e dön
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
                  aria-label={
                    isSaved ? "Kaydedilenlerden çıkar" : "Kaydet"
                  }
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                    isSaved
                      ? "border-[#F4C9BC] bg-[#FFE8DF] text-[#D9674A]"
                      : "border-[#E5DAD0] bg-white text-[#756860] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <Bookmark
                    size={17}
                    fill={isSaved ? "currentColor" : "none"}
                  />
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Paylaş"
                  className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#E5DAD0] bg-white text-[#756860] transition hover:bg-[#FAF7F2]"
                >
                  <Share2 size={17} />

                  {copied && (
                    <span className="absolute right-0 top-11 z-10 whitespace-nowrap rounded-lg bg-[#4B2E4D] px-3 py-2 text-[10px] font-bold text-white shadow-lg">
                      Bağlantı kopyalandı
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-9 max-w-3xl">
              {/* Type */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold ${
                    isLooking
                      ? "bg-[#F1E8F5] text-[#6B4B73]"
                      : "bg-[#EAF3EC] text-[#276044]"
                  }`}
                >
                  {isLooking ? "🔎 Arıyor" : "🌱 Sunuyor"}
                </span>

                <span className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-extrabold text-[#C47E6E]">
                  {opportunity.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-[#4B2E4D] sm:text-4xl lg:text-5xl">
                {opportunity.title}
              </h1>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#81746C]">
                <span className="flex items-center gap-1.5">
                  <MapPin
                    size={14}
                    className="text-[#0D4842]"
                  />
                  {opportunity.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {opportunity.time}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div className="mx-auto max-w-5xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_310px]">
            {/* MAIN */}
            <div className="space-y-5">
              {/* Person */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${
                      isLooking
                        ? "bg-[#DCC7EB] text-[#4B2E4D]"
                        : "bg-[#C7DBC9] text-[#0D4842]"
                    }`}
                  >
                    {opportunity.author.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h2 className="truncate text-base font-extrabold text-[#4B2E4D]">
                        {opportunity.author}
                      </h2>

                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[#4C9469]"
                      />
                    </div>

                    <p className="mt-0.5 text-xs text-[#81746C]">
                      {opportunity.school}
                    </p>
                  </div>

                  <Link
                    href={`/profil?user=${encodeURIComponent(
                      opportunity.author
                    )}`}
                    className="hidden items-center gap-1.5 rounded-full border border-[#E6DBD2] px-3 py-2 text-[10px] font-bold text-[#6E615A] transition hover:bg-[#FAF7F2] sm:inline-flex"
                  >
                    <UserRound size={13} />
                    Profili gör
                  </Link>
                </div>

                <Link
                  href={`/profil?user=${encodeURIComponent(
                    opportunity.author
                  )}`}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FAF7F2] px-4 py-3 text-xs font-bold text-[#4B2E4D] transition hover:bg-[#F3ECE5] sm:hidden"
                >
                  <UserRound size={14} />
                  Profili gör
                </Link>
              </section>

              {/* Main description */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                    {isLooking ? "İhtiyaç" : "Sunulan şey"}
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold text-[#4B2E4D]">
                    {isLooking
                      ? "Ne arıyor?"
                      : "Ne sunuyor?"}
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#514640]">
                  {opportunity.description}
                </p>

                <div className="mt-7 border-t border-[#F0E7DF] pt-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                    Biraz daha detay
                  </p>

                  <ul className="mt-4 space-y-3">
                    {opportunity.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF3EC] text-[#276044]">
                          <Check size={11} strokeWidth={3} />
                        </span>

                        <span className="text-xs leading-5 text-[#6E615A] sm:text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                  İlgili şeyler
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E7DDD3] bg-[#FAF7F2] px-3 py-2 text-[10px] font-bold text-[#675B54]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="space-y-5">
              {/* Main CTA */}
              <div className="sticky top-24 rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-6">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    isLooking
                      ? "bg-[#F1E8F5] text-[#6B4B73]"
                      : "bg-[#EAF3EC] text-[#276044]"
                  }`}
                >
                  <HeartHandshake size={20} />
                </div>

                <h2 className="mt-4 text-lg font-extrabold text-[#4B2E4D]">
                  Belki sen yardımcı olabilirsin.
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#7E7068]">
                  {isLooking
                    ? "Bu kişinin aradığı şey sende olabilir. Bir mesajla tanışın."
                    : "Bu kişinin sunduğu şey senin aradığın şey olabilir. Bir mesajla tanışın."}
                </p>

                <Link
                  href="/mesajlar"
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D4842] px-4 py-3.5 text-xs font-extrabold text-white transition hover:bg-[#093A36]"
                >
                  <MessageCircle size={16} />
                  Mesaj gönder
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <p className="mt-3 text-center text-[9px] leading-4 text-[#A0948C]">
                  Önce tanış, sonra birlikte ne yapabileceğinize
                  karar verin.
                </p>
              </div>

              {/* Opportunity summary */}
              <div className="rounded-[2rem] bg-[#4B2E4D] p-5 text-white sm:p-6">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className="text-[#F7A695]"
                  />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/55">
                    Kısaca
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <SummaryRow
                    label="Tür"
                    value={opportunity.type}
                  />

                  <SummaryRow
                    label="Kategori"
                    value={opportunity.category}
                  />

                  <SummaryRow
                    label="Konum"
                    value={opportunity.location}
                  />

                  <SummaryRow
                    label="Paylaşan"
                    value={opportunity.author}
                  />
                </div>
              </div>

              {/* Community message */}
              <div className="rounded-[2rem] border border-[#E7DDD3] bg-[#FFF6EE] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7A695] text-[#4B2E4D]">
                  <HeartHandshake size={18} />
                </div>

                <h3 className="mt-4 text-sm font-extrabold text-[#4B2E4D]">
                  Buluş&apos;un amacı
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#766A63]">
                  Burada amaç ilanlara başvurmak değil,
                  insanların birbirini bulmasını sağlamak.
                </p>
              </div>
            </aside>
          </div>

          {/* =====================================================
              SAFETY
          ====================================================== */}
          <div className="mt-5 flex items-start gap-3 rounded-[1.75rem] border border-[#F0DDD2] bg-[#FFF4EE] p-5">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#7E3D29]"
            />

            <div>
              <p className="text-xs font-extrabold text-[#7E3D29]">
                Güvenli topluluk
              </p>

              <p className="mt-1 text-[10px] leading-5 text-[#82746C]">
                Tanımadığın kişilerle iletişim kurarken kişisel
                bilgilerini paylaşmadan önce dikkatli ol. Buluş.
                topluluk içinde saygılı ve dürüst iletişimi teşvik
                eder.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

/* =============================================================
   SUMMARY ROW
============================================================= */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <span className="text-[10px] font-semibold text-white/45">
        {label}
      </span>

      <span className="text-right text-[10px] font-bold text-white">
        {value}
      </span>
    </div>
  );
}
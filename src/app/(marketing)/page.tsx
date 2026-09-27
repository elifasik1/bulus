"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Users,
  Heart,
  Home,
  BookOpen,
  Smartphone,
  Calendar,
  MoreHorizontal,
  Search,
  Compass,
  User,
  UserPlus,
  MessageSquarePlus,
  Handshake,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MapPin,
  Edit3,
  MessageSquare,
  FlaskConical,
  Trophy,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function LandingPage() {
  return (
    <div className="pt-[4.5rem] bg-[#FAF7F2] text-[#2C2623] min-h-screen overflow-x-hidden space-y-6 pb-16">
      <HeroSection />
      <ThreePillarsSection />
      <HowItWorksSection />
      <CategoriesSection />
      <CityAndQuoteSection />
      <CommunityStatsSection />
      <FAQSection />
    </div>
  );
}

/* ═══════════════════════════════════════
   Section 1 — Hero
   ═══════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative pt-6 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text & CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="font-handwriting text-2xl sm:text-[1.75rem] text-[#5E514B]"
            >
              Aynı şehir, farklı hikayeler, daha fazla fırsat. ♡
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1F1714] tracking-tight leading-[1.1]"
            >
              İhtiyacın olan insan{" "}
              <br className="hidden sm:inline" />
              sandığından daha yakın.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-[#6E615A] leading-relaxed max-w-lg"
            >
              İş, staj, proje, mentorluk, ev arkadaşı veya sadece bir fikir mi arıyorsun?
              Şehrindeki gerçek insanlarla tanış, birlikte üret.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/giris">
                <Button size="lg" variant="primary" rightIcon={<ArrowRight size={18} />}>
                  Hemen Başla
                </Button>
              </Link>
              <a href="#nasil-calisir">
                <Button size="lg" variant="secondary">
                  Nasıl Çalışır?
                </Button>
              </a>
            </motion.div>

            {/* Stats row with vertical dividers matching reference */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-[#EAE2D8] grid grid-cols-4 gap-2 text-center sm:text-left"
            >
              {[
                { value: "0+", label: "Aktif Kullanıcı" },
                { value: "0+", label: "Paylaşılan Fırsat" },
                { value: "0", label: "Şehir" },
                { value: "0+", label: "Gerçek Bağlantı" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center sm:items-start ${i < 3 ? "border-r border-[#E8DFC2]/80 pr-2 sm:pr-4" : ""}`}
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#1F1714]">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-[#7E7068] font-medium mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-4"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#FDF4EC]/80 to-[#EAF3EC]/80 rounded-[2rem] -z-10 blur-2xl opacity-80" />

            <div className="relative">
              <Image
                src="/brand/hero-illustration.png"
                alt="buluş. topluluk illüstrasyonu"
                width={640}
                height={480}
                priority
                className="w-full h-auto rounded-2xl"
              />

              {/* Sticky notes */}
              <div className="absolute top-6 right-6 bg-[#FFE7D9] text-[#7E3D29] font-handwriting text-base sm:text-lg px-3 py-1.5 rounded-md shadow-sm rotate-3 border border-[#F8D2C2]">
                Yeni insanlar ♡♡
              </div>
              <div className="absolute top-20 right-20 bg-[#E3F4E9] text-[#296841] font-handwriting text-base sm:text-lg px-3 py-1.5 rounded-md shadow-sm -rotate-2 border border-[#C5E9D3]">
                Yeni fırsatlar
              </div>
              <div className="absolute bottom-28 right-16 bg-[#F5EBE6] text-[#7E3D29] font-handwriting text-sm sm:text-base px-2.5 py-1 rounded-md shadow-sm rotate-1 border border-[#F0D8CB]">
                Daha fazla üretmek
              </div>
              <div className="absolute bottom-16 right-4 bg-[#F3EAF8] text-[#693D7C] font-handwriting text-base sm:text-lg px-3 py-1.5 rounded-md shadow-sm rotate-6 border border-[#E3D1EE]">
                Daha iyi bir ben
              </div>
            </div>

            {/* Speech bubble — right side */}
            <div className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 hidden sm:block max-w-[180px] lg:max-w-[200px]">
              <p className="font-handwriting text-lg lg:text-xl text-[#3E3531] leading-snug">
                buluş. — bir topluluk, bir şehir, bir sen. ♡
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Section 2 — Three Pillars (With Curved Connecting Arrows)
   ═══════════════════════════════════════ */
function ThreePillarsSection() {
  const cards = [
    {
      icon: Search,
      iconBg: "bg-[#EBF3FE]",
      iconColor: "text-[#3B72E2]",
      border: "border-[#EBF0F8]",
      bg: "bg-gradient-to-b from-[#F7FAFF] to-white",
      title: "İhtiyacım var",
      wave: "text-[#F28C72]",
      desc: "Bir fırsat, yardım veya insan ara.",
      tags: ["İş", "Staj", "Proje", "Mentor", "Ev / Oda", "Diğer"],
      tagBg: "bg-[#EFF4FC] text-[#3B65B5]",
      href: "/firsat-olustur",
    },
    {
      icon: Users,
      iconBg: "bg-[#E6F4EA]",
      iconColor: "text-[#2E8B57]",
      border: "border-[#EAF4ED]",
      bg: "bg-gradient-to-b from-[#F6FBF7] to-white",
      title: "Yardım edebilirim",
      wave: "text-[#8EBF9F]",
      desc: "Bildiğin, deneyimlediğin veya paylaşabileceğin şeyleri sun.",
      tags: ["Mentorluk", "Proje desteği", "CV inceleme", "Eğitim", "Kullanıcı testi", "Diğer"],
      tagBg: "bg-[#EBF6EE] text-[#2C6E49]",
      href: "/feed",
    },
    {
      icon: Compass,
      iconBg: "bg-[#F0E5F6]",
      iconColor: "text-[#7B42A6]",
      border: "border-[#F3EBF8]",
      bg: "bg-gradient-to-b from-[#FAF5FD] to-white",
      title: "Keşfet",
      wave: "text-[#A675CA]",
      desc: "Şehrindeki insanları, fırsatları ve ilham verici projeleri gör.",
      tags: ["Yakındakiler", "Aynı bölümden", "Aynı şehirde", "Trend fırsatlar"],
      tagBg: "bg-[#F5ECFB] text-[#6E3696]",
      href: "/kesfet",
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-[#F0E6DA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Curved connecting arrows matching mockup */}
          <div className="hidden md:block absolute top-1/2 left-[31%] -translate-y-1/2 z-10 pointer-events-none">
            <svg width="60" height="35" viewBox="0 0 60 35" fill="none" className="text-[#3EA278]">
              <path d="M 5 25 Q 30 5 55 20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
              <polygon points="50,25 58,18 48,15" fill="currentColor" />
            </svg>
          </div>
          <div className="hidden md:block absolute top-1/2 left-[64%] -translate-y-1/2 z-10 pointer-events-none">
            <svg width="60" height="35" viewBox="0 0 60 35" fill="none" className="text-[#E89E7A]">
              <path d="M 5 10 Q 30 30 55 15" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
              <polygon points="50,10 58,17 48,20" fill="currentColor" />
            </svg>
          </div>

          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="block group">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`rounded-3xl border ${card.border} ${card.bg} p-7 shadow-xs group-hover:shadow-md group-hover:border-[#0D4842]/30 transition-all h-full flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center mb-5 ${card.iconColor} group-hover:scale-105 transition-transform`}>
                    <card.icon size={26} strokeWidth={2} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1F1714] group-hover:text-[#0D4842] transition-colors">{card.title}</h2>
                    <span className={`font-handwriting text-xl ${card.wave}`}>〰</span>
                  </div>
                  <p className="text-sm text-[#6E615A] leading-relaxed mb-5">{card.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${card.tagBg}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Section 3 — Nasıl Çalışır? (With Wavy Underline & Step Icons)
   ═══════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    { num: 1, numBg: "bg-[#EAE3F7] text-[#6B4AA0]", iconBg: "bg-[#F7F3FD] text-[#6B4AA0]", icon: User, title: "Hesabını oluştur", desc: "Kendini kısaca tanıt, şehrini ve ilgi alanlarını seç." },
    { num: 2, numBg: "bg-[#E1F3E6] text-[#2C6E49]", iconBg: "bg-[#FFF0EB] text-[#D9674A]", icon: Edit3, title: "İhtiyacını veya desteğini paylaş", desc: "Ne aradığını ya da ne sunabileceğini belirt." },
    { num: 3, numBg: "bg-[#E3EEF8] text-[#296EB4]", iconBg: "bg-[#F0F6FC] text-[#296EB4]", icon: Users, title: "Uygun insanları keşfet", desc: "Şehrindeki veya ilgi alanlarına uygun insanları bul." },
    { num: 4, numBg: "bg-[#FCE6DF] text-[#D9674A]", iconBg: "bg-[#EBF6EE] text-[#2C6E49]", icon: MessageSquare, title: "İletişime geç ve gerçekleştir", desc: "Mesajlaş, tanış, birlikte üret!" },
  ];

  return (
    <section id="nasil-calisir" className="py-10 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title with wavy underline accent */}
        <div className="mb-10 relative inline-block">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1F1714]">
            Nasıl Çalışır?
          </h2>
          <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
            <path d="M2 8 Q50 2 100 6 T198 8" stroke="#F28C72" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-6 border border-[#F0E6DA] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-full ${step.numBg} font-bold flex items-center justify-center text-sm shrink-0`}>
                    {step.num}
                  </div>
                  <div className={`w-10 h-10 rounded-full ${step.iconBg} flex items-center justify-center shrink-0`}>
                    <step.icon size={20} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#1F1714] mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#7E7068] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Right Handwritten Note */}
        <div className="mt-8 flex justify-end">
          <span className="font-handwriting text-xl sm:text-2xl text-[#5E514B] inline-block rotate-2">
            küçük adımlar büyük hikayeler. ♡
          </span>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Section 4 — Categories (10 Category Items Row)
   ═══════════════════════════════════════ */
function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const categoryItems = [
    { label: "İş", icon: Briefcase, color: "bg-[#FFE8D9] text-[#D9674A]", slug: "is" },
    { label: "Staj", icon: GraduationCap, color: "bg-[#E1F2ED] text-[#1B635C]", slug: "staj" },
    { label: "Proje", icon: FolderKanban, color: "bg-[#EAE3F7] text-[#693D7C]", slug: "proje" },
    { label: "Mentor", icon: Heart, color: "bg-[#FCE6F1] text-[#B83E7A]", slug: "mentor" },
    { label: "Ekip arkadaşı", icon: Users, color: "bg-[#E3F4E9] text-[#296841]", slug: "ekip-arkadasi" },
    { label: "Ev / Oda", icon: Home, color: "bg-[#FCEAE6] text-[#C94A32]", slug: "ev-oda" },
    { label: "Eğitim", icon: BookOpen, color: "bg-[#E3F0FC] text-[#296EB4]", slug: "egitim" },
    { label: "Kullanıcı testi", icon: FlaskConical, color: "bg-[#FFF0D9] text-[#C97926]", slug: "kullanici-testi" },
    { label: "Etkinlik", icon: Trophy, color: "bg-[#EAE5F8] text-[#553C9A]", slug: "etkinlik" },
    { label: "Diğer", icon: MoreHorizontal, color: "bg-[#F0ECE7] text-[#6E615A]", slug: "diger" },
  ];

  return (
    <section id="firsatlar" className="py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DA] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Title */}
          <div className="lg:max-w-xs shrink-0 text-left w-full lg:w-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1F1714] leading-tight">
              Hangi alanlarda <br className="hidden sm:inline" />
              insanlarla buluşabilirsin?
            </h2>
            <p className="text-xs sm:text-sm text-[#7E7068] mt-1">
              Sadece iş değil, hayatın birçok alanında.
            </p>
          </div>

          {/* Right 10 Horizontal Category Badges with Scroll Controls */}
          <div className="relative flex-1 w-full flex items-center min-w-0">
            
            {/* Scroll Left Button */}
            <button
              onClick={() => scroll("left")}
              className="flex absolute -left-2 sm:-left-3 z-10 w-8 h-8 rounded-full bg-white border border-[#EAE2D8] shadow-md items-center justify-center text-[#1F1714] hover:bg-[#FAF7F2] transition-all cursor-pointer"
              aria-label="Sola kaydır"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-x-auto w-full pb-2 pt-1 scroll-smooth scrollbar-none px-3"
            >
              <div className="flex items-center justify-start lg:justify-end gap-3 sm:gap-5 min-w-max">
                {categoryItems.map((item) => (
                  <Link
                    key={item.label}
                    href={`/kesfet?kategori=${item.slug}`}
                    className="flex flex-col items-center gap-2 group cursor-pointer w-[68px] shrink-0"
                  >
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200`}>
                      <item.icon size={20} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#4A403A] text-center leading-tight group-hover:text-[#1F1714]">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Scroll Right Button */}
            <button
              onClick={() => scroll("right")}
              className="flex absolute -right-2 sm:-right-3 z-10 w-8 h-8 rounded-full bg-white border border-[#EAE2D8] shadow-md items-center justify-center text-[#1F1714] hover:bg-[#FAF7F2] transition-all cursor-pointer"
              aria-label="Sağa kaydır"
            >
              <ChevronRight size={16} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Section 5 — City & Quote (Matching Image Row 2)
   ═══════════════════════════════════════ */
function TurkeyMap() {
  const pins = [
    { name: "İstanbul", count: "0 fırsat", x: "32%", y: "30%", active: true },
    { name: "Ankara", x: "48%", y: "45%", active: false },
    { name: "İzmir", x: "24%", y: "58%", active: false },
    { name: "Antalya", x: "40%", y: "76%", active: false },
    { name: "Trabzon", x: "78%", y: "30%", active: false },
    { name: "Adana", x: "62%", y: "72%", active: false },
  ];

  return (
    <div className="relative w-full h-[180px] sm:h-[200px] bg-[#FAF8F5] rounded-2xl border border-[#F0E6DA] overflow-hidden flex items-center justify-center p-2">
      <svg viewBox="0 0 500 240" className="w-full h-full object-contain opacity-75">
        <path
          d="M 50 110 C 60 90, 100 80, 130 85 C 160 90, 190 70, 230 75 C 270 80, 310 60, 360 65 C 410 70, 440 90, 460 110 C 470 130, 450 160, 420 170 C 390 180, 340 185, 290 180 C 240 175, 190 185, 140 180 C 90 175, 60 150, 50 110 Z"
          fill="#ECE5DC"
          stroke="#DFD6C9"
          strokeWidth="2"
        />
        <path d="M 120 100 Q 180 110 240 95 T 380 105" stroke="#E3DACF" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <path d="M 150 140 Q 230 150 320 140 T 420 130" stroke="#E3DACF" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      </svg>

      {/* Pins Overlay */}
      {pins.map((pin) => (
        <div
          key={pin.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
          style={{ left: pin.x, top: pin.y }}
        >
          {pin.active ? (
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-2xl px-3 py-1 shadow-md border border-[#EAE2D8] flex items-center gap-1.5 whitespace-nowrap mb-1">
                <div className="w-4 h-4 rounded-full bg-[#0D4842] text-white flex items-center justify-center text-[9px]">
                  📍
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-extrabold text-[#1F1714]">{pin.name}</p>
                  <p className="text-[9px] text-[#7E7068] font-medium">{pin.count}</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-[#0D4842] border-2 border-white shadow-sm" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-[#0D4842] text-white flex items-center justify-center shadow-sm border-2 border-white">
              <MapPin size={12} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CityAndQuoteSection() {
  return (
    <section id="sehirler" className="py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Card — Şehrini Seç */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DA] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex-1 space-y-4 text-left">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1F1714]">
                    Şehrini seç, insanları keşfet.
                  </h2>
                  <span className="font-handwriting text-xl text-[#0D4842]">vv</span>
                </div>
                <p className="text-xs sm:text-sm text-[#7E7068] mt-2 leading-relaxed">
                  Türkiye&apos;nin dört bir yanındaki öğrenciler, mezunlar ve profesyoneller burada.
                </p>
              </div>

              <div>
                <Link href="/sehirler">
                  <Button size="sm" variant="secondary" rightIcon={<ArrowRight size={14} />}>
                    Tüm Şehirleri Gör
                  </Button>
                </Link>
              </div>
            </div>

            {/* Map Container */}
            <div className="w-full md:w-[54%] shrink-0">
              <TurkeyMap />
            </div>
          </motion.div>

          {/* Right Card — Quote & Stacked Books */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5 bg-[#FFF4EE] rounded-3xl p-6 sm:p-8 border border-[#F8E3D8] shadow-xs flex items-center justify-between gap-4 relative overflow-hidden min-h-[220px]"
          >
            <div className="space-y-3 z-10 max-w-[200px]">
              <span className="font-handwriting text-2xl sm:text-3xl text-[#296841] leading-snug block">
                &ldquo;İyi insanlar, <br />
                güzel şeyler üretir.&rdquo;
              </span>
            </div>

            {/* Books Illustration */}
            <div className="shrink-0 z-10">
              <Image
                src="/brand/books-illustration.png"
                alt="Kitaplar ve kedi illüstrasyonu"
                width={240}
                height={190}
                className="w-auto h-40 sm:h-44 object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Section 6 — Community Stats (0+ Stat Values Matching Mockup)
   ═══════════════════════════════════════ */
function CommunityStatsSection() {
  const statCards = [
    { icon: UserPlus, value: "0+", label: "Kayıtlı Kullanıcı", bg: "bg-[#F3EFFB]", border: "border-[#EBE3F7]", iconBg: "bg-[#E3D8F5] text-[#693D7C]", labelColor: "text-[#693D7C]" },
    { icon: Sparkles, value: "0+", label: "Paylaşılan Fırsat", bg: "bg-[#FFF0EB]", border: "border-[#FCE3DA]", iconBg: "bg-[#FCD8CC] text-[#D9674A]", labelColor: "text-[#D9674A]" },
    { icon: Handshake, value: "0+", label: "Gerçekleştirilen Bağlantı", bg: "bg-[#E9F6F2]", border: "border-[#D5EFE7]", iconBg: "bg-[#C6EADF] text-[#1B635C]", labelColor: "text-[#1B635C]" },
  ];

  return (
    <section className="py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DA] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Plant & Handwritten Quote */}
          <div className="lg:col-span-4 flex items-center gap-4">
            <Image
              src="/brand/plant-illustration.png"
              alt="Botanik bitki çizimi"
              width={100}
              height={150}
              className="w-16 sm:w-20 h-auto object-contain shrink-0"
            />
            <p className="font-handwriting text-xl sm:text-2xl text-[#2C6E49] leading-snug">
              Daha fazla insan. <br />
              Daha fazla fikir. <br />
              Daha <span className="underline decoration-wavy underline-offset-4">iyi</span> bir yarın. ♡
            </p>
          </div>

          {/* Center Call to Action */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1F1714]">
              Henüz yolun başındayız.
            </h2>
            <p className="text-xs sm:text-sm text-[#7E7068] leading-relaxed">
              Topluluğumuz seninle büyüyecek. İlk katılanlardan biri olup bu yolculuğun bir parçası ol!
            </p>
            <div>
              <Link href="/giris">
                <Button size="sm" variant="primary" rightIcon={<ArrowRight size={14} />}>
                  Hemen Katıl
                </Button>
              </Link>
            </div>
          </div>

          {/* Right 3 Stat Cards Side-by-Side */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-3">
            {statCards.map((card) => (
              <div key={card.label} className={`${card.bg} rounded-2xl p-3 sm:p-4 text-center border ${card.border} flex flex-col items-center justify-center`}>
                <div className={`w-9 h-9 rounded-full ${card.iconBg} mx-auto mb-2 flex items-center justify-center`}>
                  <card.icon size={18} />
                </div>
                <p className="text-xl font-extrabold text-[#1F1714]">{card.value}</p>
                <p className={`text-[10px] font-medium ${card.labelColor} mt-0.5 leading-tight text-center`}>{card.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   Section 7 — FAQ
   ═══════════════════════════════════════ */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqItems = [
    {
      q: "Buluş. tam olarak ne?",
      a: "Buluş., ihtiyacın olan insanı bulmanı sağlayan bir fırsat ağı. İş, staj, proje, mentorluk, ekip arkadaşı, kullanıcı testi, eğitim, ev arkadaşı gibi ihtiyaçlarını paylaşabilir; başkalarının sunduğu fırsatları keşfedebilirsin.",
    },
    {
      q: "Çevrem yoksa Buluş.'ta ne yapabilirim?",
      a: "Zaten Buluş.'un çıkış noktası bu. Herkes aynı çevreyle başlamıyor. İhtiyacını açıkça paylaşarak seni tanımayan ama sana yardımcı olabilecek insanlara ulaşabilirsin.",
    },
    {
      q: "Buluş. bir iş ilanı sitesi mi?",
      a: "Hayır. Buluş.'ta sadece şirketler ilan yayınlamaz. Öğrenciler, yeni mezunlar ve çalışanlar da gerçek ihtiyaçlarını ve sunabilecekleri şeyleri paylaşır. Bir fırsat bir iş olabilir; ama bir proje arkadaşı, mentor veya kullanıcı testçisi de olabilir.",
    },
    {
      q: "Ben de fırsat paylaşabilir miyim?",
      a: 'Evet. Bir şeye ihtiyacın varsa "Arıyorum", bir konuda yardımcı olabiliyorsan "Sunuyorum" diyerek paylaşabilirsin.',
    },
    {
      q: "Sadece iş ve staj mı var?",
      a: "Hayır. Buluş.'ta bir proje için ekip arkadaşı, tez için katılımcı, uygulaman için test kullanıcısı, bir konuda mentor, ev arkadaşı veya birlikte öğrenebileceğin birini de arayabilirsin.",
    },
    {
      q: "Buluş.'ta insanlarla nasıl iletişime geçiyorum?",
      a: "İlgini çeken bir fırsatı gördüğünde kişiyle iletişime geçebilir ve mesajlaşmaya başlayabilirsin. Çünkü Buluş.'ta amaç sadece bir ilana başvurmak değil, insanlarla tanışmak.",
    },
    {
      q: "Başka şehirdeki insanları da bulabilir miyim?",
      a: "Evet. Kendi şehrindeki fırsatları keşfedebilir, farklı şehirlerdeki insanlara ve online fırsatlara da ulaşabilirsin.",
    },
    {
      q: "Bir fırsatı kaydedersem ne olur?",
      a: "İlgini çeken fırsatı kaydedip daha sonra Kaydettiklerin alanından tekrar ulaşabilirsin. Böylece gördüğün her şeyi o anda değerlendirmek zorunda kalmazsın.",
    },
    {
      q: "Buluş.'ta profil neden önemli?",
      a: "Çünkü burada sadece bir ilanla değil, bir insanla tanışıyorsun. Profilin; neler yaptığını, neler aradığını ve neler sunabileceğini karşı tarafa anlatan küçük bir tanışma alanı.",
    },
  ];

  return (
    <section id="sss" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="font-handwriting text-xl text-[#D9674A]">
              merak ettiklerin ♡
            </span>

            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-[#1F1714] leading-tight">
              Aklında bir soru
              <br />
              mu var?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#7E7068] max-w-sm">
              Buluş. hakkında en çok merak edilenleri burada cevapladık.
            </p>

            {/* Decorative arrow */}
            <div className="hidden lg:block mt-7 ml-5">
              <svg
                width="90"
                height="60"
                viewBox="0 0 90 60"
                fill="none"
                className="text-[#6E615A]"
              >
                <path
                  d="M8 8 Q48 8 72 42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <polygon
                  points="66,40 76,45 72,34"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Small handwritten note */}
            <p className="hidden lg:block mt-1 ml-3 font-handwriting text-lg text-[#2C6E49] rotate-[-3deg]">
              belki aradığın cevap burada. ✨
            </p>
          </div>

          {/* Questions */}
          <div className="lg:col-span-8 space-y-3">
            {faqItems.map((item, idx) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:ml-[33.33%]">
          <div className="relative overflow-hidden rounded-3xl bg-[#4B2E4D] px-6 py-8 sm:px-9 sm:py-9">

            {/* Decorative circles */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F7A695]/20" />
            <div className="absolute -bottom-12 left-1/3 h-28 w-28 rounded-full bg-[#DCC7EB]/20" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-handwriting text-lg text-[#F7A695]">
                  hâlâ merak ediyorsan...
                </p>

                <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-white">
                  Aklında hâlâ bir soru mu var?
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  Bize yaz, birlikte bulalım. ✨
                </p>
              </div>

             <Link
  href="/iletisim"
  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#4B2E4D] transition-all hover:-translate-y-0.5 hover:bg-[#FFF6EE]"
>
  Bize ulaş
  <ArrowRight size={16} />
</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        isOpen
          ? "border-[#DCC7EB] shadow-[0_10px_30px_rgba(75,46,77,0.07)]"
          : "border-[#F0E6DA] shadow-xs hover:border-[#DECBD9]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-sm sm:text-base font-bold text-[#1F1714]">
          {item.q}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-[#4B2E4D] text-white"
              : "bg-[#FFF0EB] text-[#6E615A]"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="border-t border-[#F0E6DA] px-5 pb-5 pt-4 sm:px-6">
          <p className="text-sm leading-7 text-[#6E615A]">
            {item.a}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  UserRound,
  X,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";
import Avatar from "@/components/ui/Avatar";

interface Opportunity {
  id: string;
  type: "need" | "offer";
  category: string;
  title: string;
  description: string;
  name: string;
  role: string;
  university: string;
  city: string;
  time: string;
  avatar: string;
  tags: string[];
  featured?: boolean;
}

const categories = [
  { label: "İş", icon: Briefcase },
  { label: "Staj", icon: GraduationCap },
  { label: "Proje", icon: Sparkles },
  { label: "Mentor", icon: HeartHandshake },
  { label: "Ekip Arkadaşı", icon: Users },
  { label: "Ev / Oda", icon: Home },
];

const opportunities: Opportunity[] = [
  {
    id: "1",
    type: "need",
    category: "Staj",
    title: "Frontend stajı için bir fırsat arıyorum",
    description:
      "Yeni mezunum ve React & Next.js üzerine geliştirdiğim projelerim var. İstanbul'da kendimi geliştirebileceğim bir ekip arıyorum.",
    name: "Elif Aşık",
    role: "Bilgisayar Mühendisliği",
    university: "İTÜ",
    city: "İstanbul",
    time: "5 saat önce",
    avatar: "/brand/hero-illustration.png",
    tags: ["React", "Next.js", "Frontend"],
    featured: true,
  },
  {
    id: "2",
    type: "need",
    category: "Kullanıcı Testi",
    title: "Mobil uygulamamı test edecek 20 kişi arıyorum",
    description:
      "React Native ile geliştirdiğim çalışma planlama uygulamasının beta sürümünü deneyip geri bildirim verecek arkadaşlar arıyorum.",
    name: "Cem Yılmaz",
    role: "Fullstack Geliştirici",
    university: "ODTÜ",
    city: "İstanbul",
    time: "2 saat önce",
    avatar: "/brand/feed-illustration.png",
    tags: ["React Native", "Firebase", "Beta"],
  },
  {
    id: "3",
    type: "need",
    category: "Ekip Arkadaşı",
    title: "Sosyal etki projem için UI/UX tasarımcı arıyorum",
    description:
      "Öğrencilerin geri dönüşüm farkındalığını artıran bir mobil uygulama tasarlıyoruz. Figma bilen bir ekip arkadaşı arıyoruz.",
    name: "Ahmet Kara",
    role: "Ürün Geliştirici",
    university: "Boğaziçi",
    city: "Ankara",
    time: "1 gün önce",
    avatar: "/brand/saved-illustration.png",
    tags: ["Figma", "UI/UX", "Sosyal Etki"],
  },
];

const people = [
  {
    name: "Zeynep Kaya",
    role: "UI/UX Tasarımcısı",
    city: "İstanbul",
    avatar: "/brand/hero-illustration.png",
    offer: "Mentor olabilir",
  },
  {
    name: "Can Yılmaz",
    role: "Fullstack Geliştirici",
    city: "Ankara",
    avatar: "/brand/feed-illustration.png",
    offer: "Proje arkadaşı arıyor",
  },
  {
    name: "Zeynep Demir",
    role: "Frontend Geliştirici",
    city: "İstanbul",
    avatar: "/brand/profile-cat.png",
    offer: "Deneyimini paylaşabilir",
  },
];

export default function FeedPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      const matchesCategory =
        selectedCategory === "Tümü" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.city.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  const toggleSave = (id: string) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    setToast(
      saved.includes(id)
        ? "Kaydedilenlerden çıkarıldı."
        : "Fırsat kaydedildi."
    );

    setTimeout(() => setToast(null), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      {toast && (
        <div className="fixed top-20 right-5 z-50 flex items-center gap-2 rounded-2xl bg-[#0D4842] px-4 py-3 text-sm font-semibold text-white shadow-xl">
          <CheckCircle2 size={17} className="text-[#A8D5B7]" />
          {toast}
        </div>
      )}

      <main className="mx-auto w-full max-w-7xl px-4 pb-28 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        {/* =====================================================
            WELCOME / DISCOVERY HERO
        ====================================================== */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#FFF6EE] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          {/* Decorative shapes */}
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#F7A695]/20" />
          <div className="absolute -bottom-20 right-36 h-44 w-44 rounded-full bg-[#DCC7EB]/30" />
          <div className="absolute left-[42%] top-8 hidden h-5 w-5 rotate-12 rounded-md bg-[#C7DBC9] sm:block" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#0D4842] shadow-sm">
                <Sparkles size={13} />
                Sana yakın fırsatlar
              </div>

              <h1 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-[#4B2E4D] sm:text-4xl lg:text-5xl">
                İstanbul&apos;da bugün
                <br />
                <span className="text-[#0D4842]">
                  ne arıyorsun?
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6E615A] sm:text-base">
                İhtiyacın olan insan sandığından daha yakın.
                Bir fırsat ara, bir ihtiyacını paylaş veya
                sana yardımcı olabilecek insanları keşfet.
              </p>

              {/* Search */}
              <div className="mt-7 flex max-w-2xl items-center rounded-2xl border border-[#E8DED3] bg-white p-2 shadow-sm transition-all focus-within:border-[#0D4842]/40 focus-within:shadow-md">
                <Search
                  size={20}
                  className="ml-3 shrink-0 text-[#9B8D85]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Bir insan, fırsat veya ihtiyaç ara..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#2F1C31] outline-none placeholder:text-[#A89B92]"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="mr-1 rounded-full p-2 text-[#8B7D75] hover:bg-[#FAF7F2]"
                    aria-label="Aramayı temizle"
                  >
                    <X size={16} />
                  </button>
                )}

                <button className="hidden rounded-xl bg-[#0D4842] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#093A36] sm:block">
                  Ara
                </button>
              </div>

              {/* Categories */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                <CategoryChip
                  label="Tümü"
                  active={selectedCategory === "Tümü"}
                  onClick={() => setSelectedCategory("Tümü")}
                />

                {categories.map((category) => (
                  <CategoryChip
                    key={category.label}
                    label={category.label}
                    icon={category.icon}
                    active={selectedCategory === category.label}
                    onClick={() => setSelectedCategory(category.label)}
                  />
                ))}
              </div>
            </div>

            {/* Hero side card */}
            <div className="hidden lg:block">
              <div className="relative rounded-[1.75rem] bg-[#4B2E4D] p-6 text-white shadow-lg">
                <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[#F7A695]/20" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7A695] text-[#4B2E4D]">
                    <HeartHandshake size={22} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#F7C9BF]">
                    Buluş Topluluğu
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold leading-tight">
                    Aradığın insan burada olabilir.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Bugün birinden yardım iste.
                    Yarın sen bir başkasının fırsatı ol.
                  </p>

                  <Link
                    href="/firsat-olustur"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#0D4842] transition hover:bg-[#FFF6EE]"
                  >
                    İhtiyacımı paylaş
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK DISCOVERY
        ====================================================== */}
        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[#E9DED3] bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0D4842]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3EC]">
                    <Search size={17} />
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wide">
                    İnsanlar ne arıyor?
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-[#4B2E4D]">
                  Bir ihtiyacın mı var?
                </h2>
              </div>

              <span className="rounded-full bg-[#FFF6EE] px-3 py-1 text-xs font-bold text-[#8A766C]">
                İstanbul
              </span>
            </div>

            <div className="mt-5 space-y-2">
              <MiniNeed text="Staj fırsatı arayanlar" count="12 kişi" />
              <MiniNeed text="Ekip arkadaşı arayanlar" count="8 kişi" />
              <MiniNeed text="Mentor arayanlar" count="5 kişi" />
            </div>

            <Link
              href="/kesfet"
              className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#0D4842] hover:underline"
            >
              İhtiyaçları keşfet
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="rounded-[1.75rem] border border-[#E9DED3] bg-[#EAF3EC] p-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0D4842]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                    <HeartHandshake size={17} />
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wide">
                    İnsanlar ne sunuyor?
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-[#4B2E4D]">
                  Yardım edebileceğin bir şey var mı?
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <MiniNeed text="Mentor olmak isteyenler" count="7 kişi" />
              <MiniNeed text="Proje arkadaşı olabilecekler" count="11 kişi" />
              <MiniNeed text="Deneyimini paylaşabilecekler" count="9 kişi" />
            </div>

            <Link
              href="/firsat-olustur"
              className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#0D4842] hover:underline"
            >
              Sen ne sunabilirsin?
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_310px]">
          <section>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#C47E6E]">
                  İstanbul&apos;dan
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-[#4B2E4D] sm:text-3xl">
                  Sana yakın fırsatlar
                </h2>
              </div>

              <Link
                href="/kesfet"
                className="hidden items-center gap-1 text-sm font-bold text-[#0D4842] sm:flex"
              >
                Tümünü gör
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-4">
              {filteredOpportunities.length > 0 ? (
                filteredOpportunities.map((opportunity) => (
                  <OpportunityItem
                    key={opportunity.id}
                    opportunity={opportunity}
                    isSaved={saved.includes(opportunity.id)}
                    onSave={() => toggleSave(opportunity.id)}
                  />
                ))
              ) : (
                <div className="rounded-[1.75rem] border border-dashed border-[#D9CBBF] bg-white px-6 py-14 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1E8F5] text-[#4B2E4D]">
                    <Compass size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-[#4B2E4D]">
                    Aradığını henüz bulamadık.
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#7E7068]">
                    Başka bir kategori deneyebilir veya
                    topluluğa ihtiyacını anlatabilirsin.
                  </p>

                  <Link
                    href="/firsat-olustur"
                    className="mt-5 inline-flex rounded-full bg-[#0D4842] px-5 py-2.5 text-sm font-bold text-white"
                  >
                    İhtiyacımı paylaş
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* ===================================================
              SIDEBAR
          ==================================================== */}
          <aside className="space-y-5">
            <div className="rounded-[1.75rem] border border-[#E9DED3] bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#C47E6E]">
                    Şehrinde bugün
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-[#4B2E4D]">
                    İstanbul hareketli 🌿
                  </h3>
                </div>

                <MapPin size={19} className="text-[#0D4842]" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <StatBox number="12" label="Staj" />
                <StatBox number="8" label="Proje" />
                <StatBox number="5" label="Mentor" />
                <StatBox number="17" label="İhtiyaç" />
              </div>

              <Link
                href="/sehirler"
                className="mt-4 flex items-center justify-between rounded-xl bg-[#FAF7F2] px-4 py-3 text-sm font-bold text-[#4B2E4D]"
              >
                İstanbul topluluğunu gör
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-[#E9DED3] bg-[#FFF6EE] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-[#C47E6E]">
                    Yeni insanlar
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-[#4B2E4D]">
                    Tanışabileceğin kişiler
                  </h3>
                </div>

                <Users size={19} className="text-[#0D4842]" />
              </div>

              <div className="mt-5 space-y-4">
                {people.map((person) => (
                  <div
                    key={person.name}
                    className="flex items-center gap-3"
                  >
                    <Avatar
                      src={person.avatar}
                      alt={person.name}
                      size="sm"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-[#4B2E4D]">
                        {person.name}
                      </p>
                      <p className="truncate text-[11px] text-[#7E7068]">
                        {person.role} · {person.city}
                      </p>
                      <p className="mt-0.5 text-[10px] font-semibold text-[#0D4842]">
                        {person.offer}
                      </p>
                    </div>

                    <Link
                      href="/profil"
                      className="rounded-full p-2 text-[#8A7A72] hover:bg-white hover:text-[#0D4842]"
                      aria-label={`${person.name} profilini gör`}
                    >
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>

              <Link
                href="/kesfet"
                className="mt-5 flex items-center justify-center gap-1 rounded-xl border border-[#E3D5CA] bg-white px-4 py-3 text-xs font-bold text-[#4B2E4D] transition hover:border-[#0D4842]/30"
              >
                Daha fazla insan keşfet
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="rounded-[1.75rem] bg-[#4B2E4D] p-5 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7A695] text-[#4B2E4D]">
                <PlusIcon />
              </div>

              <h3 className="mt-4 text-lg font-extrabold">
                Çevreni genişlet.
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/65">
                Bir ihtiyacın varsa bekleme.
                Belki onu çözebilecek kişi sandığından daha yakın.
              </p>

              <Link
                href="/firsat-olustur"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#4B2E4D]"
              >
                Fırsat paylaş
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

/* =============================================================
   COMPONENTS
============================================================= */

function CategoryChip({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon?: React.ElementType;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-all ${
        active
          ? "border-[#0D4842] bg-[#0D4842] text-white shadow-sm"
          : "border-[#E7DCD2] bg-white text-[#6E615A] hover:border-[#CDBFB4] hover:text-[#0D4842]"
      }`}
    >
      {Icon && <Icon size={13} />}
      {label}
    </button>
  );
}

function MiniNeed({
  text,
  count,
}: {
  text: string;
  count: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/75 px-3.5 py-3">
      <span className="text-xs font-semibold text-[#4A403A]">
        {text}
      </span>

      <span className="text-[10px] font-bold text-[#0D4842]">
        {count}
      </span>
    </div>
  );
}

function StatBox({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[#FAF7F2] p-3">
      <p className="text-lg font-extrabold text-[#4B2E4D]">
        {number}
      </p>
      <p className="text-[10px] font-semibold text-[#7E7068]">
        {label}
      </p>
    </div>
  );
}

function OpportunityItem({
  opportunity,
  isSaved,
  onSave,
}: {
  opportunity: Opportunity;
  isSaved: boolean;
  onSave: () => void;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border bg-white p-5 transition-all sm:p-6 ${
        opportunity.featured
          ? "border-[#A7C6C1] shadow-sm hover:shadow-md"
          : "border-[#E9DED3] hover:border-[#CDBFB4] hover:shadow-sm"
      }`}
    >
      {opportunity.featured && (
        <div className="absolute left-0 top-0 h-full w-1 bg-[#0D4842]" />
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar
            src={opportunity.avatar}
            alt={opportunity.name}
            size="md"
          />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <Link
                href="/profil"
                className="text-sm font-extrabold text-[#4B2E4D] hover:text-[#0D4842]"
              >
                {opportunity.name}
              </Link>

              <CheckCircle2
                size={14}
                className="fill-[#EAF3EC] text-[#4C9469]"
              />
            </div>

            <p className="mt-0.5 text-[11px] text-[#7E7068]">
              {opportunity.role} · {opportunity.university}
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-extrabold ${
            opportunity.type === "need"
              ? "bg-[#F1E8F5] text-[#6B4B73]"
              : "bg-[#EAF3EC] text-[#276044]"
          }`}
        >
          {opportunity.type === "need" ? "Arıyor" : "Sunuyor"}
        </span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C47E6E]">
            {opportunity.category}
          </span>

          <span className="text-[#D2C5BC]">•</span>

          <span className="text-[10px] font-medium text-[#91827A]">
            {opportunity.time}
          </span>
        </div>

        <h3 className="text-lg font-extrabold leading-snug text-[#2F1C31] sm:text-xl">
          {opportunity.title}
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6E615A]">
          {opportunity.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F2F6F1] px-2.5 py-1 text-[10px] font-bold text-[#47705A]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#F0E6DA] pt-4">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#7E7068]">
          <MapPin size={13} className="text-[#0D4842]" />
          {opportunity.city}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSave}
            className={`rounded-full p-2 transition ${
              isSaved
                ? "bg-[#EAF3EC] text-[#0D4842]"
                : "text-[#8A7A72] hover:bg-[#FAF7F2] hover:text-[#0D4842]"
            }`}
            aria-label="Fırsatı kaydet"
          >
            <Bookmark
              size={17}
              fill={isSaved ? "currentColor" : "none"}
            />
          </button>

          <Link
            href={`/firsat/${opportunity.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#0D4842] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#093A36]"
          >
            İncele
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function PlusIcon() {
  return <span className="text-xl font-light leading-none">+</span>;
}
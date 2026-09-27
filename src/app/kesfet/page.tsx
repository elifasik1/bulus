"use client";

import { Suspense, useMemo, useState, type ElementType } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  FlaskConical,
  FolderKanban,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home,
  MapPin,
  MoreHorizontal,
  Search,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";

const categorySlugMap: Record<string, string> = {
  all: "Tümü",
  is: "İş",
  staj: "Staj",
  proje: "Proje",
  mentor: "Mentor",
  "ekip-arkadasi": "Ekip arkadaşı",
  "ev-oda": "Ev / Oda",
  egitim: "Eğitim",
  "kullanici-testi": "Kullanıcı testi",
  etkinlik: "Etkinlik",
  diger: "Diğer",
};

const categories = [
  { label: "Tümü", icon: Sparkles, slug: "all" },
  { label: "İş", icon: Briefcase, slug: "is" },
  { label: "Staj", icon: GraduationCap, slug: "staj" },
  { label: "Proje", icon: FolderKanban, slug: "proje" },
  { label: "Mentor", icon: Heart, slug: "mentor" },
  { label: "Ekip arkadaşı", icon: Users, slug: "ekip-arkadasi" },
  { label: "Ev / Oda", icon: Home, slug: "ev-oda" },
  { label: "Eğitim", icon: BookOpen, slug: "egitim" },
  {
    label: "Kullanıcı testi",
    icon: FlaskConical,
    slug: "kullanici-testi",
  },
  { label: "Etkinlik", icon: Trophy, slug: "etkinlik" },
  { label: "Diğer", icon: MoreHorizontal, slug: "diger" },
];

interface Opportunity {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  author: string;
  school: string;
  time: string;
  tags: string[];
  type: "Arıyor" | "Sunuyor";
  featured?: boolean;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Mobil uygulamamı test edecek 20 kişi arıyorum",
    description:
      "React Native ile geliştirdiğim çalışma planlama uygulamasının beta sürümünü deneyip geri bildirim verecek arkadaşlar arıyorum.",
    category: "Kullanıcı testi",
    location: "İstanbul",
    author: "Cem Yılmaz",
    school: "ODTÜ",
    time: "2 saat önce",
    tags: ["React Native", "Beta Test", "Mobil"],
    type: "Arıyor",
    featured: true,
  },
  {
    id: "2",
    title: "Yeni mezun olarak İstanbul'da frontend fırsatı arıyorum",
    description:
      "Bilgisayar mühendisliği mezunuyum. React ve Next.js ile geliştirdiğim modern portfolyo projelerim var.",
    category: "İş",
    location: "İstanbul",
    author: "Elif Aşık",
    school: "İTÜ",
    time: "5 saat önce",
    tags: ["React", "Next.js", "Frontend"],
    type: "Arıyor",
  },
  {
    id: "3",
    title: "Sosyal etki projemiz için UI/UX tasarımcı arıyoruz",
    description:
      "Öğrencilerin geri dönüşüm farkındalığını artıran mobil uygulama tasarlıyoruz. Figma bilen bir ekip arkadaşı arıyoruz.",
    category: "Ekip arkadaşı",
    location: "Ankara",
    author: "Ahmet Kara",
    school: "Boğaziçi",
    time: "1 gün önce",
    tags: ["Figma", "UI/UX", "Ekip"],
    type: "Arıyor",
  },
  {
    id: "4",
    title: "Backend geliştirmede Python ve FastAPI mentörlüğü",
    description:
      "5 yıllık backend tecrübem var. Yazılım yolculuğunun başındaki 2 kişiye birebir mentörlük desteği vermek istiyorum.",
    category: "Mentor",
    location: "Online",
    author: "Zeynep Demir",
    school: "Hacettepe",
    time: "3 saat önce",
    tags: ["Python", "FastAPI", "Mentorluk"],
    type: "Sunuyor",
    featured: true,
  },
  {
    id: "5",
    title: "Yaz dönemi için Full-Stack Stajyer ilanı",
    description:
      "React ve Node.js ekibimizde çalışacak stajyer arkadaş arıyoruz. Eğitim ve mentörlük desteği sağlanacaktır.",
    category: "Staj",
    location: "İzmir",
    author: "Caner Varol",
    school: "Ege Üniv.",
    time: "4 saat önce",
    tags: ["React", "Node.js", "Staj"],
    type: "Sunuyor",
  },
  {
    id: "6",
    title: "İTÜ Kampüsüne yakın 3+1 daireye oda arkadaşı arıyorum",
    description:
      "Maslak tarafında 3+1 evime düzenli ve sigara içmeyen öğrenci oda arkadaşı arıyorum. Eşyalar mevcuttur.",
    category: "Ev / Oda",
    location: "İstanbul",
    author: "Mert Şahin",
    school: "İTÜ",
    time: "6 saat önce",
    tags: ["Ev Arkadaşı", "Maslak", "İTÜ"],
    type: "Arıyor",
  },
  {
    id: "7",
    title: "Sıfırdan Web Geliştirme Atölyesi",
    description:
      "Hafta sonları ücretsiz olarak HTML, CSS ve JavaScript temellerini öğreteceğim 4 haftalık topluluk eğitimi.",
    category: "Eğitim",
    location: "Online",
    author: "Selin Kaya",
    school: "ODTÜ",
    time: "1 gün önce",
    tags: ["Web", "Eğitim", "JavaScript"],
    type: "Sunuyor",
  },
  {
    id: "8",
    title: "Öğrenci Hackathon Etkinliği — Kampüs Buluşması",
    description:
      "24 saatlik inovatif fikir geliştirme yarışması. Ödüllü ve mentör katılımlı etkinlik için kayıtlar açıldı.",
    category: "Etkinlik",
    location: "Ankara",
    author: "Görkem Yıldız",
    school: "Bilkent",
    time: "2 gün önce",
    tags: ["Hackathon", "Etkinlik", "Yarışma"],
    type: "Sunuyor",
  },
];

const trending = [
  {
    label: "Kullanıcı testi",
    count: "16 kişi",
    text: "uygulamasını test ettirecek insan arıyor",
  },
  {
    label: "Mentor",
    count: "9 kişi",
    text: "deneyimini paylaşmaya hazır",
  },
  {
    label: "Ekip arkadaşı",
    count: "14 kişi",
    text: "projelerine yeni birini arıyor",
  },
];

const cities = [
  { name: "İstanbul", count: 38 },
  { name: "Ankara", count: 21 },
  { name: "İzmir", count: 17 },
  { name: "Bursa", count: 9 },
];

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FAF7F2] text-[#7E7068]">
          Yükleniyor...
        </div>
      }
    >
      <ExploreContent />
    </Suspense>
  );
}

function ExploreContent() {
  const searchParams = useSearchParams();

  const initialCategoryParam = searchParams.get("kategori");
  const initialCityParam = searchParams.get("sehir");

  const [activeCategory, setActiveCategory] = useState(
    initialCategoryParam && categorySlugMap[initialCategoryParam]
      ? categorySlugMap[initialCategoryParam]
      : "Tümü"
  );

  const [searchQuery, setSearchQuery] = useState(initialCityParam ?? "");
  const [activeMode, setActiveMode] = useState<"all" | "need" | "offer">(
    "all"
  );

  const filteredOpportunities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return opportunities.filter((opportunity) => {
      const matchesCategory =
        activeCategory === "Tümü" ||
        opportunity.category === activeCategory;

      const matchesMode =
        activeMode === "all" ||
        (activeMode === "need" && opportunity.type === "Arıyor") ||
        (activeMode === "offer" && opportunity.type === "Sunuyor");

      const searchableText = [
        opportunity.title,
        opportunity.description,
        opportunity.location,
        opportunity.author,
        opportunity.category,
        ...opportunity.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      return matchesCategory && matchesMode && matchesSearch;
    });
  }, [activeCategory, activeMode, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      <main className="flex-1">
        {/* =====================================================
            DISCOVERY HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-[#EDE2D8] bg-[#FFF6EE]">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#DCC7EB]/35" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F7A695]/25" />

          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-extrabold text-[#0D4842] shadow-sm">
                <Compass size={14} />
                Fırsat alanı
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#4B2E4D] sm:text-5xl lg:text-6xl">
                Buluş&apos;ta
                <br />
                <span className="text-[#0D4842]">
                  neler oluyor?
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6E615A] sm:text-base">
                İnsanların aradığı, sunduğu ve birlikte
                gerçekleştirmek istediği şeyleri keşfet.
                Belki aradığın fırsat, hiç tanımadığın birinin
                paylaşımında seni bekliyordur.
              </p>
            </div>

            {/* Search */}
            <div className="mt-8 max-w-4xl">
              <div className="flex items-center rounded-2xl border border-[#E6D9CE] bg-white p-2 shadow-sm transition focus-within:border-[#0D4842]/40 focus-within:shadow-md">
                <Search
                  size={21}
                  className="ml-3 shrink-0 text-[#9A8C83]"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Bir insan, fırsat, beceri veya şehir ara..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-[#2F1C31] outline-none placeholder:text-[#A39890]"
                />

                <button
                  type="button"
                  className="hidden rounded-xl bg-[#0D4842] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#093A36] sm:block"
                >
                  Keşfet
                </button>
              </div>
            </div>

            {/* Mode */}
            <div className="mt-4 flex flex-wrap gap-2">
              <ModeButton
                active={activeMode === "all"}
                onClick={() => setActiveMode("all")}
              >
                Her şeyi keşfet
              </ModeButton>

              <ModeButton
                active={activeMode === "need"}
                onClick={() => setActiveMode("need")}
              >
                🔎 İnsanlar arıyor
              </ModeButton>

              <ModeButton
                active={activeMode === "offer"}
                onClick={() => setActiveMode("offer")}
              >
                🌱 İnsanlar sunuyor
              </ModeButton>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORY DISCOVERY
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                Neye bakıyorsun?
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-[#4B2E4D]">
                Bir yerden başlayalım.
              </h2>
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.label;

              return (
                <button
                  key={category.slug}
                  onClick={() =>
                    setActiveCategory(category.label)
                  }
                  className={`flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-bold transition-all ${
                    active
                      ? "border-[#4B2E4D] bg-[#4B2E4D] text-white shadow-sm"
                      : "border-[#E6DBD1] bg-white text-[#6E615A] hover:-translate-y-0.5 hover:border-[#CDBEB3] hover:text-[#4B2E4D]"
                  }`}
                >
                  <Icon size={15} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            TRENDING
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {trending.map((item, index) => (
              <div
                key={item.label}
                className={`relative overflow-hidden rounded-[1.5rem] p-5 ${
                  index === 0
                    ? "bg-[#F1E8F5]"
                    : index === 1
                      ? "bg-[#EAF3EC]"
                      : "bg-[#FFF0EA]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7E7068]">
                    Şu anda
                  </span>

                  <Sparkles
                    size={16}
                    className="text-[#C47E6E]"
                  />
                </div>

                <p className="mt-3 text-2xl font-extrabold text-[#4B2E4D]">
                  {item.count}
                </p>

                <p className="mt-1 text-sm font-bold text-[#4B2E4D]">
                  {item.label}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#766A63]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            MAIN DISCOVERY AREA
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            {/* Opportunities */}
            <div>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                    {activeCategory === "Tümü"
                      ? "Topluluktan"
                      : activeCategory}
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-[#4B2E4D] sm:text-3xl">
                    Keşfedilecek şeyler
                  </h2>

                  <p className="mt-1 text-xs text-[#7E7068]">
                    {filteredOpportunities.length} fırsat gösteriliyor
                  </p>
                </div>

                <Link
                  href="/firsat-olustur"
                  className="hidden items-center gap-2 rounded-full bg-[#0D4842] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#093A36] sm:inline-flex"
                >
                  <span>Fırsat paylaş</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {filteredOpportunities.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredOpportunities.map((opportunity) => (
                    <ExploreOpportunityCard
                      key={opportunity.id}
                      opportunity={opportunity}
                    />
                  ))}
                </div>
              ) : (
                <EmptyExploreState />
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* City */}
              <div className="rounded-[1.75rem] border border-[#E7DDD3] bg-white p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#C47E6E]">
                      Şehirler
                    </p>

                    <h3 className="mt-1 text-lg font-extrabold text-[#4B2E4D]">
                      Nerede keşfetmek istersin?
                    </h3>
                  </div>

                  <MapPin
                    size={19}
                    className="text-[#0D4842]"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  {cities.map((city) => (
                    <button
                      key={city.name}
                      onClick={() => setSearchQuery(city.name)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition ${
                        searchQuery.toLowerCase() ===
                        city.name.toLowerCase()
                          ? "bg-[#EAF3EC] font-bold text-[#0D4842]"
                          : "text-[#6E615A] hover:bg-[#FAF7F2]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <MapPin size={13} />
                        {city.name}
                      </span>

                      <span className="text-[10px] font-bold text-[#9B8C83]">
                        {city.count}
                      </span>
                    </button>
                  ))}
                </div>

                <Link
                  href="/sehirler"
                  className="mt-4 flex items-center justify-between rounded-xl bg-[#FAF7F2] px-3.5 py-3 text-xs font-bold text-[#4B2E4D]"
                >
                  Tüm şehirleri keşfet
                  <ChevronRight size={15} />
                </Link>
              </div>

              {/* What can you do? */}
              <div className="rounded-[1.75rem] bg-[#4B2E4D] p-5 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7A695] text-[#4B2E4D]">
                  <HeartHandshake size={19} />
                </div>

                <h3 className="mt-4 text-lg font-extrabold">
                  Sen ne sunabilirsin?
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/65">
                  Bir fırsatın, deneyimin veya yardım
                  edebileceğin bir konu varsa toplulukla paylaş.
                </p>

                <Link
                  href="/firsat-olustur"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#4B2E4D] transition hover:bg-[#FFF6EE]"
                >
                  Bir şey paylaş
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Small philosophy */}
              <div className="rounded-[1.75rem] border border-[#E7DDD3] bg-[#FFF6EE] p-5">
                <Sparkles
                  size={18}
                  className="text-[#C47E6E]"
                />

                <p className="mt-4 text-sm font-bold leading-6 text-[#4B2E4D]">
                  &quot;Belki aradığın fırsat burada değil.
                  Ama onu arayan insan burada.&quot;
                </p>

                <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-[#9A8278]">
                  buluş.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

/* =============================================================
   MODE BUTTON
============================================================= */

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-bold transition-all ${
        active
          ? "border-[#4B2E4D] bg-[#4B2E4D] text-white"
          : "border-[#E4D8CE] bg-white/70 text-[#6E615A] hover:border-[#CBBDB2] hover:text-[#4B2E4D]"
      }`}
    >
      {children}
    </button>
  );
}

/* =============================================================
   OPPORTUNITY CARD
============================================================= */

function ExploreOpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white transition-all hover:-translate-y-1 hover:shadow-lg ${
        opportunity.featured
          ? "border-[#C8DCD3]"
          : "border-[#E8DED4]"
      }`}
    >
      {opportunity.featured && (
        <div className="flex items-center gap-1.5 bg-[#EAF3EC] px-5 py-2 text-[10px] font-extrabold uppercase tracking-wide text-[#276044]">
          <Sparkles size={12} />
          Dikkat çeken
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold ${
              opportunity.type === "Arıyor"
                ? "bg-[#F1E8F5] text-[#6B4B73]"
                : "bg-[#EAF3EC] text-[#276044]"
            }`}
          >
            {opportunity.type === "Arıyor"
              ? "🔎 Arıyor"
              : "🌱 Sunuyor"}
          </span>

          <span className="flex items-center gap-1 text-[10px] font-medium text-[#9A8D85]">
            <Clock size={12} />
            {opportunity.time}
          </span>
        </div>

        <div className="mt-5">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#C47E6E]">
            {opportunity.category}
          </p>

          <Link href={`/firsat/${opportunity.id}`}>
            <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#4B2E4D] transition group-hover:text-[#0D4842]">
              {opportunity.title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#6E615A]">
            {opportunity.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#F5F0EB] px-2.5 py-1 text-[9px] font-bold text-[#766A63]"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="border-t border-[#F0E7DF] pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1E8F5] text-xs font-extrabold text-[#4B2E4D]">
                {opportunity.author.charAt(0)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="truncate text-xs font-extrabold text-[#4B2E4D]">
                    {opportunity.author}
                  </p>

                  <CheckCircle2
                    size={12}
                    className="shrink-0 text-[#4C9469]"
                  />
                </div>

                <p className="truncate text-[10px] text-[#8A7D75]">
                  {opportunity.school}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-[#8A7D75]">
                <MapPin size={12} className="text-[#0D4842]" />
                {opportunity.location}
              </div>
            </div>

            <Link
              href={`/firsat/${opportunity.id}`}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FAF7F2] px-4 py-3 text-xs font-extrabold text-[#0D4842] transition hover:bg-[#EAF3EC]"
            >
              Fırsatı incele
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =============================================================
   EMPTY STATE
============================================================= */

function EmptyExploreState() {
  return (
    <div className="rounded-[2rem] border border-dashed border-[#D9CBC0] bg-white px-6 py-14 text-center">
      <div className="mx-auto max-w-[180px]">
        <Image
          src="/brand/feed-illustration.png"
          alt="Keşfet"
          width={180}
          height={160}
          className="h-auto w-full object-contain opacity-85"
        />
      </div>

      <h2 className="mt-3 text-xl font-extrabold text-[#4B2E4D]">
        Henüz burada bir şey yok.
      </h2>

      <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-[#7E7068]">
        Aradığın şeyi henüz bulamadık. Belki ilk
        fırsatı paylaşan sen olabilirsin.
      </p>

      <Link
        href="/firsat-olustur"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0D4842] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#093A36]"
      >
        Fırsat paylaş
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
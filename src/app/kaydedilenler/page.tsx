"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookmarkCheck,
  Clock3,
  MapPin,
  Sparkles,
  Trash2,
  UserRound,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type Tab = "all" | "opportunities" | "people";

type SavedOpportunity = {
  id: number;
  title: string;
  description: string;
  author: {
    name: string;
    university: string;
    avatar?: string;
  };
  category: string;
  city: string;
  time: string;
  type: "Arıyor" | "Sunuyor";
  tags: string[];
};

type SavedPerson = {
  id: number;
  name: string;
  university: string;
  role: string;
  description: string;
  avatar?: string;
  type: "Arıyor" | "Sunuyor";
};

const savedOpportunities: SavedOpportunity[] = [
  {
    id: 1,
    title: "Mobil uygulamamı test edecek 20 kişi arıyorum",
    description:
      "Geliştirdiğim mobil uygulamanın beta sürümünü gerçek kullanıcılarla test etmek istiyorum.",
    author: {
      name: "Cem Yılmaz",
      university: "ODTÜ",
    },
    category: "Kullanıcı Testi",
    city: "İstanbul",
    time: "2 saat önce",
    type: "Arıyor",
    tags: ["React Native", "Beta", "Mobil"],
  },
  {
    id: 3,
    title: "Sosyal etki projemiz için UI/UX tasarımcı arıyoruz",
    description:
      "Üniversiteler arası sosyal etki projemizde ekibimize UI/UX tarafında destek olacak birini arıyoruz.",
    author: {
      name: "Ahmet Kara",
      university: "Boğaziçi Üniversitesi",
    },
    category: "Ekip Arkadaşı",
    city: "Ankara",
    time: "5 saat önce",
    type: "Arıyor",
    tags: ["UI/UX", "Figma", "Sosyal Etki"],
  },
  {
    id: 4,
    title: "Backend geliştirmede Python/FastAPI mentörlüğü",
    description:
      "Backend geliştirme konusunda kendini geliştirmek isteyenlere Python ve FastAPI tarafında destek olabilirim.",
    author: {
      name: "Zeynep Demir",
      university: "Hacettepe Üniversitesi",
    },
    category: "Mentor",
    city: "Online",
    time: "Dün",
    type: "Sunuyor",
    tags: ["Python", "FastAPI", "Backend"],
  },
  {
    id: 6,
    title: "İTÜ Kampüsüne yakın 3+1 oda arkadaşı",
    description:
      "İTÜ kampüsüne ulaşımı kolay bir evde birlikte kalabileceğim bir oda arkadaşı arıyorum.",
    author: {
      name: "Mert Şahin",
      university: "İTÜ",
    },
    category: "Ev / Oda",
    city: "İstanbul",
    time: "2 gün önce",
    type: "Arıyor",
    tags: ["İTÜ", "Ev", "Oda Arkadaşı"],
  },
];

const savedPeople: SavedPerson[] = [
  {
    id: 101,
    name: "Cem Yılmaz",
    university: "ODTÜ",
    role: "Mobil Geliştirici",
    description: "Mobil uygulama geliştiriyor ve kullanıcı testi konusunda ekip arıyor.",
    type: "Arıyor",
  },
  {
    id: 102,
    name: "Zeynep Demir",
    university: "Hacettepe Üniversitesi",
    role: "Backend Geliştirici",
    description: "Python ve FastAPI konusunda mentörlük sunuyor.",
    type: "Sunuyor",
  },
  {
    id: 103,
    name: "Ahmet Kara",
    university: "Boğaziçi Üniversitesi",
    role: "Proje Geliştirici",
    description: "Sosyal etki projeleri geliştiriyor ve ekip arkadaşları arıyor.",
    type: "Arıyor",
  },
];

export default function KaydedilenlerPage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const [savedOpportunityIds, setSavedOpportunityIds] = useState<number[]>(
    savedOpportunities.map((item) => item.id)
  );

  const [savedPersonIds, setSavedPersonIds] = useState<number[]>(
    savedPeople.map((item) => item.id)
  );

  const visibleOpportunities = useMemo(
    () =>
      savedOpportunities.filter((item) =>
        savedOpportunityIds.includes(item.id)
      ),
    [savedOpportunityIds]
  );

  const visiblePeople = useMemo(
    () => savedPeople.filter((item) => savedPersonIds.includes(item.id)),
    [savedPersonIds]
  );

  const removeOpportunity = (id: number) => {
    setSavedOpportunityIds((current) =>
      current.filter((itemId) => itemId !== id)
    );
  };

  const removePerson = (id: number) => {
    setSavedPersonIds((current) =>
      current.filter((itemId) => itemId !== id)
    );
  };

  const showOpportunities = activeTab === "all" || activeTab === "opportunities";
  const showPeople = activeTab === "all" || activeTab === "people";

  const hasAnything =
    visibleOpportunities.length > 0 || visiblePeople.length > 0;

  return (
    <div className="min-h-screen bg-[#FFF6EE] text-[#4B2E4D]">
      <AppHeader />

      <main className="mx-auto flex w-full max-w-7xl gap-8 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <ProfileSidebar />
          </div>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1">
          {/* Header */}
          <div className="mb-7">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#8B6C89]">
              <BookmarkCheck className="h-4 w-4" />
              Kendi köşen
            </div>

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Kaydettiklerin
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#7D657A] sm:text-base">
                  Daha sonra dönmek istediğin fırsatları ve insanları burada
                  bulabilirsin.
                </p>
              </div>

              <Link
                href="/kesfet"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4B2E4D] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#3c243e]"
              >
                Yeni şeyler keşfet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Summary */}
          <Card
            padding="md"
            className="mb-7 overflow-hidden border border-[#eadbd6] bg-white shadow-[0_12px_40px_rgba(75,46,77,0.06)]"
          >
            <div className="relative px-5 py-5 sm:px-6">
              <div className="absolute -right-5 -top-8 h-28 w-28 rounded-full bg-[#F7A695]/20 blur-2xl" />
              <div className="absolute -bottom-10 left-1/3 h-24 w-24 rounded-full bg-[#DCC7EB]/30 blur-2xl" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7A695]/20 text-[#4B2E4D]">
                    <BookmarkCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-bold">Buluş. köşen</p>
                    <p className="mt-1 text-sm text-[#806D7E]">
                      {visibleOpportunities.length} fırsat ·{" "}
                      {visiblePeople.length} insan kaydedildi
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#8B6C89]">
                  <Sparkles className="h-4 w-4 text-[#F19A88]" />
                  Sonra bakmak için burada
                </div>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="mb-7 flex gap-2 overflow-x-auto pb-1">
            <TabButton
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
            >
              Tümü
              <span>{visibleOpportunities.length + visiblePeople.length}</span>
            </TabButton>

            <TabButton
              active={activeTab === "opportunities"}
              onClick={() => setActiveTab("opportunities")}
            >
              Fırsatlar
              <span>{visibleOpportunities.length}</span>
            </TabButton>

            <TabButton
              active={activeTab === "people"}
              onClick={() => setActiveTab("people")}
            >
              İnsanlar
              <span>{visiblePeople.length}</span>
            </TabButton>
          </div>

          {!hasAnything ? (
            <EmptySavedState />
          ) : (
            <div className="space-y-10">
              {/* Opportunities */}
              {showOpportunities && visibleOpportunities.length > 0 && (
                <section>
                  <SectionTitle
                    title="Kaydettiğin fırsatlar"
                    description="İlgini çeken fırsatlara buradan tekrar dönebilirsin."
                  />

                  <div className="grid gap-5 md:grid-cols-2">
                    {visibleOpportunities.map((opportunity) => (
                      <SavedOpportunityCard
                        key={opportunity.id}
                        opportunity={opportunity}
                        onRemove={() => removeOpportunity(opportunity.id)}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* People */}
              {showPeople && visiblePeople.length > 0 && (
                <section>
                  <SectionTitle
                    title="Kaydettiğin insanlar"
                    description="Tanışmak veya daha sonra profiline dönmek istediğin kişiler."
                  />

                  <div className="grid gap-5 md:grid-cols-2">
                    {visiblePeople.map((person) => (
                      <SavedPersonCard
                        key={person.id}
                        person={person}
                        onRemove={() => removePerson(person.id)}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function TabButton({
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
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition ${
        active
          ? "bg-[#4B2E4D] text-white shadow-sm"
          : "border border-[#e7d9d5] bg-white text-[#745E72] hover:border-[#cdb8ca] hover:text-[#4B2E4D]"
      }`}
    >
      {children}
    </button>
  );
}

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-extrabold">{title}</h2>
      <p className="mt-1 text-sm text-[#806D7E]">{description}</p>
    </div>
  );
}

function SavedOpportunityCard({
  opportunity,
  onRemove,
}: {
  opportunity: SavedOpportunity;
  onRemove: () => void;
}) {
  return (
    <Card
      hover
      padding="md"
      className="group overflow-hidden border border-[#eadbd6] bg-white shadow-[0_8px_30px_rgba(75,46,77,0.05)]"
    >
      <div className="p-5">
        {/* top row */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7A695]/15 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#76536F]">
              <BookmarkCheck className="h-3.5 w-3.5" />
              Kaydedildi
            </span>

            <Badge variant="lilac">{opportunity.category}</Badge>
          </div>

          <button
            type="button"
            onClick={onRemove}
            aria-label="Kaydı kaldır"
            className="rounded-full p-2 text-[#a58e9f] transition hover:bg-[#FFF0EC] hover:text-[#b76d62]"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* title */}
        <Link href={`/fırsat/${opportunity.id}`} className="block">
          <h3 className="text-lg font-extrabold leading-snug text-[#4B2E4D] transition group-hover:text-[#6b426c]">
            {opportunity.title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#806D7E]">
          {opportunity.description}
        </p>

        {/* author */}
        <div className="mt-5 flex items-center gap-3">
          <Avatar
            src={opportunity.author.avatar}
            alt={opportunity.author.name}
            size="sm"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#4B2E4D]">
              {opportunity.author.name}
            </p>
            <p className="truncate text-xs text-[#927D8D]">
              {opportunity.author.university}
            </p>
          </div>

          <span
            className={`ml-auto rounded-full px-2.5 py-1 text-[11px] font-extrabold ${
              opportunity.type === "Arıyor"
                ? "bg-[#DCC7EB]/50 text-[#694d72]"
                : "bg-[#C7DBC9]/60 text-[#49634d]"
            }`}
          >
            {opportunity.type}
          </span>
        </div>

        {/* meta */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#f0e6e2] pt-4 text-xs font-semibold text-[#927D8D]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {opportunity.city}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {opportunity.time}
          </span>
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#FFF6EE] px-2.5 py-1 text-[11px] font-semibold text-[#806D7E]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/fırsat/${opportunity.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#4B2E4D] transition group-hover:gap-2.5"
        >
          Fırsatı görüntüle
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}

function SavedPersonCard({
  person,
  onRemove,
}: {
  person: SavedPerson;
  onRemove: () => void;
}) {
  return (
    <Card
      hover
      padding="md"
      className="group overflow-hidden border border-[#eadbd6] bg-white shadow-[0_8px_30px_rgba(75,46,77,0.05)]"
    >
      <div className="p-5">
        <div className="mb-5 flex items-start justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCC7EB]/35 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#725678]">
            <UserRound className="h-3.5 w-3.5" />
            Kaydedilen insan
          </span>

          <button
            type="button"
            onClick={onRemove}
            aria-label="Kaydı kaldır"
            className="rounded-full p-2 text-[#a58e9f] transition hover:bg-[#FFF0EC] hover:text-[#b76d62]"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-start gap-4">
          <Avatar src={person.avatar} alt={person.name} size="lg" />

          <div className="min-w-0">
            <Link href="/profil">
              <h3 className="font-extrabold text-[#4B2E4D] transition group-hover:text-[#6b426c]">
                {person.name}
              </h3>
            </Link>

            <p className="mt-0.5 text-sm text-[#806D7E]">{person.role}</p>

            <p className="mt-0.5 text-xs text-[#9A8795]">
              {person.university}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-[#806D7E]">
          {person.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#f0e6e2] pt-4">
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-extrabold ${
              person.type === "Arıyor"
                ? "bg-[#DCC7EB]/50 text-[#694d72]"
                : "bg-[#C7DBC9]/60 text-[#49634d]"
            }`}
          >
            {person.type}
          </span>

          <Link
            href="/profil"
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#4B2E4D] transition group-hover:gap-2.5"
          >
            Profili gör
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

function EmptySavedState() {
  return (
    <Card className="overflow-hidden border border-[#eadbd6] bg-white">
      <div className="relative flex flex-col items-center px-6 py-14 text-center">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#F7A695]/15 blur-3xl" />

        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#FFF0EC]">
          <BookmarkCheck className="h-9 w-9 text-[#8B627F]" />
        </div>

        <h2 className="text-xl font-extrabold">
          Henüz kaydettiğin bir şey yok.
        </h2>

        <p className="mt-2 max-w-md text-sm leading-6 text-[#806D7E]">
          Keşfette ilgini çeken fırsatları veya tanışmak istediğin insanları
          kaydet. Sonra buradan kolayca geri dön.
        </p>

        <Link
          href="/kesfet"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4B2E4D] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#3c243e]"
        >
          Keşfetmeye başla
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
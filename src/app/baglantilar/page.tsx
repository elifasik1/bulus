"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Search,
  UserCheck,
  UserPlus,
  MessageSquare,
  MapPin,
  Sparkles,
  CheckCircle2,
  Star,
  MoreHorizontal,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import Button from "@/components/ui/Button";

interface Connection {
  id: string;
  name: string;
  avatar: string;
  title: string;
  city: string;
  university?: string;
  tags: string[];
  isFollowing: boolean;
  isMentor?: boolean;
  mutualCount: number;
  bio: string;
}

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState("Takip Edilenler");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [connections, setConnections] = useState<Connection[]>([
    {
      id: "1",
      name: "Zeynep Kaya",
      avatar: "/brand/hero-illustration.png",
      title: "UI/UX Tasarımcısı",
      city: "İstanbul",
      university: "İTÜ Endüstriyel Tasarım",
      tags: ["Figma", "Design System", "User Research"],
      isFollowing: true,
      isMentor: false,
      mutualCount: 5,
      bio: "Kullanıcı deneyimi tasarlıyor, İstanbul'da tasarım topluluklarını organize ediyorum.",
    },
    {
      id: "2",
      name: "Can Yılmaz",
      avatar: "/brand/feed-illustration.png",
      title: "Fullstack Geliştirici",
      city: "Ankara",
      university: "ODTÜ Bilgisayar Mühendisliği",
      tags: ["React Native", "Next.js", "GraphQL"],
      isFollowing: true,
      isMentor: false,
      mutualCount: 8,
      bio: "Mobil uygulamalar ve açık kaynak projeler geliştiriyorum.",
    },
    {
      id: "3",
      name: "Ahmethan Demir",
      avatar: "/brand/saved-illustration.png",
      title: "Kıdemli Yazılım Mimarı",
      city: "İzmir",
      university: "Ege Üniversitesi",
      tags: ["Backend", "System Design", "Go", "Docker"],
      isFollowing: true,
      isMentor: true,
      mutualCount: 12,
      bio: "10+ yıl deneyim. Genç yazılımcılara mentorluk veriyor, mikroservis mimarileri tasarlıyorum.",
    },
    {
      id: "4",
      name: "Selin Şahin",
      avatar: "/brand/profile-cat.png",
      title: "Yapay Zeka Araştırmacısı",
      city: "İstanbul",
      university: "Boğaziçi Üniversitesi",
      tags: ["Python", "PyTorch", "LLM", "NLP"],
      isFollowing: true,
      isMentor: true,
      mutualCount: 4,
      bio: "Doğal dil işleme ve veri bilimi üzerine çalışıyorum.",
    },
    {
      id: "5",
      name: "Burak Avcı",
      avatar: "/brand/hero-illustration.png",
      title: "Frontend Developer",
      city: "Bursa",
      university: "Uludağ Üniversitesi",
      tags: ["Tailwind", "TypeScript", "Vue.js"],
      isFollowing: false,
      isMentor: false,
      mutualCount: 3,
      bio: "Modern arayüzler ve responsive web uygulamaları inşa ediyorum.",
    },
    {
      id: "6",
      name: "Merve Tekin",
      avatar: "/brand/feed-illustration.png",
      title: "Ürün Yöneticisi (PM)",
      city: "Eskişehir",
      university: "Anadolu Üniversitesi",
      tags: ["Agile", "Scrum", "Product Strategy"],
      isFollowing: false,
      isMentor: false,
      mutualCount: 6,
      bio: "Fikir aşamasından yayına ürün süreçlerini yönetiyorum.",
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleFollow = (id: string) => {
    setConnections(
      connections.map((c) => {
        if (c.id === id) {
          const next = !c.isFollowing;
          showToast(
            next
              ? `${c.name} takip edilmeye başlandı! ✨`
              : `${c.name} takipten çıkarıldı.`
          );
          return { ...c, isFollowing: next };
        }
        return c;
      })
    );
  };

  const filteredConnections = connections.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeTab === "Takip Edilenler") return c.isFollowing;
    if (activeTab === "Mentorlar") return c.isMentor;
    if (activeTab === "Önerilen Üyeler") return !c.isFollowing;
    return true; // Tümü
  });

  const tabs = [
    { label: "Takip Edilenler", count: connections.filter((c) => c.isFollowing).length },
    { label: "Tümü", count: connections.length },
    { label: "Mentorlar", count: connections.filter((c) => c.isMentor).length },
    { label: "Önerilen Üyeler", count: connections.filter((c) => !c.isFollowing).length },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] flex flex-col relative">
      <AppHeader />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#0D4842] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} className="text-[#8EBF9F]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pb-24 sm:pb-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:block shrink-0">
            <ProfileSidebar />
          </div>

          {/* Connections Content */}
          <div className="flex-1 w-full space-y-6 min-w-0">
            
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DA] shadow-xs space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#1F1714] flex items-center gap-2.5">
                    <Users size={24} className="text-[#0D4842]" />
                    <span>Takip Ettiklerim & Bağlantılarım</span>
                  </h1>
                  <p className="text-xs text-[#7E7068] mt-1">
                    Birlikte ürettiğin, ilham aldığın geliştirici ve mentor topluluğu.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9E9088]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="İsim, ünvan veya şehir..."
                    className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-xs text-[#1F1714] focus:outline-none focus:border-[#0D4842]"
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-2 border-t border-[#F0E6DA]">
                {tabs.map((t) => {
                  const isSelected = activeTab === t.label;
                  return (
                    <button
                      key={t.label}
                      onClick={() => setActiveTab(t.label)}
                      className={`
                        px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2
                        ${
                          isSelected
                            ? "bg-[#0D4842] text-white shadow-xs"
                            : "bg-[#FAF7F2] text-[#6E615A] hover:bg-[#EAE2D8] hover:text-[#1F1714]"
                        }
                      `}
                    >
                      <span>{t.label}</span>
                      <span className={`text-[10px] px-2 py-0.2 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-white text-[#0D4842]"
                      }`}>
                        {t.count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Connections Grid */}
            {filteredConnections.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 border border-[#F0E6DA] text-center space-y-3">
                <p className="text-sm font-bold text-[#1F1714]">Henüz eşleşen kişi bulunamadı.</p>
                <p className="text-xs text-[#7E7068]">Arama filtrenizi değiştirebilir veya keşfet sayfasından yeni kişiler ekleyebilirsiniz.</p>
                <Link
                  href="/kesfet"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0D4842] text-white text-xs font-bold hover:bg-[#093632] transition-colors"
                >
                  <span>Keşfet&apos;e Git</span>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredConnections.map((person) => (
                  <div
                    key={person.id}
                    className="bg-white rounded-3xl p-5 border border-[#F0E6DA] shadow-xs hover:border-[#0D4842]/30 transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      
                      {/* Top Bar: Avatar & Follow Status */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <Link href="/profil" className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EAE2D8] shrink-0">
                            <Image
                              src={person.avatar}
                              alt={person.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </Link>

                          <div>
                            <div className="flex items-center gap-1.5">
                              <Link href="/profil" className="font-bold text-base text-[#1F1714] hover:text-[#0D4842] transition-colors">
                                {person.name}
                              </Link>
                              {person.isMentor && (
                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FFF0EB] text-[#D9674A]">
                                  Mentor
                                </span>
                              )}
                            </div>
                            
                            <p className="text-xs font-medium text-[#5E514B]">{person.title}</p>
                            
                            <div className="flex items-center gap-2 text-[11px] text-[#7E7068] mt-1">
                              <span className="flex items-center gap-1">
                                <MapPin size={12} className="text-[#0D4842]" />
                                {person.city}
                              </span>
                              <span>•</span>
                              <span>{person.mutualCount} ortak bağlantı</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Follow Button */}
                        <button
                          onClick={() => toggleFollow(person.id)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                            person.isFollowing
                              ? "bg-[#EAF3EC] text-[#0D4842] border border-[#C5E9D3] hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                              : "bg-[#0D4842] text-white hover:bg-[#093632]"
                          }`}
                        >
                          {person.isFollowing ? (
                            <>
                              <UserCheck size={14} />
                              <span>Takip Ediliyor</span>
                            </>
                          ) : (
                            <>
                              <UserPlus size={14} />
                              <span>Takip Et</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-[#5E514B] leading-relaxed line-clamp-2">
                        {person.bio}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {person.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#4A403A] border border-[#EAE2D8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 border-t border-[#F0E6DA] flex items-center justify-between">
                      <Link
                        href="/mesajlar"
                        className="text-xs font-bold text-[#0D4842] hover:underline flex items-center gap-1.5"
                      >
                        <MessageSquare size={14} />
                        <span>Mesaj Gönder</span>
                      </Link>

                      <Link
                        href="/profil"
                        className="text-xs font-bold text-[#7E7068] hover:text-[#1F1714] flex items-center gap-1"
                      >
                        <span>Profili Gör</span>
                        <ExternalLink size={12} />
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

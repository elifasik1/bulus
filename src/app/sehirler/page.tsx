"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, MapPin, Sparkles, Building2, Users } from "lucide-react";
import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";

export default function CitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allCities = [
    { name: "İstanbul", count: 124, emoji: "🏰", gradient: "from-[#E8D5C4] to-[#F5E6D8]", desc: "Boğaz kıyısında girişim ve teknoloji ekosistemi" },
    { name: "Ankara", count: 85, emoji: "🏛️", gradient: "from-[#D4E5D8] to-[#E8F0EA]", desc: "Başkentte akademi, kamu ve savunma sanayii topluluğu" },
    { name: "İzmir", count: 64, emoji: "⛵", gradient: "from-[#D1E4F0] to-[#E4EFF7]", desc: "Ege sıcaklığında tasarım ve yazılım buluşmaları" },
    { name: "Bursa", count: 42, emoji: "🏔️", gradient: "from-[#E0D8EC] to-[#EDE8F5]", desc: "Sanayi ve üretim odaklı proje iş birlikleri" },
    { name: "Antalya", count: 38, emoji: "🌴", gradient: "from-[#F5E0C8] to-[#FAF0E4]", desc: "Akdeniz'de dijital göçebe ve turizm fırsatları" },
    { name: "Eskişehir", count: 55, emoji: "🎓", gradient: "from-[#D8E8D0] to-[#E8F2E2]", desc: "Öğrenci kenti dinamizmi ve genç yetenekler" },
    { name: "Trabzon", count: 29, emoji: "🌲", gradient: "from-[#E2ECE9] to-[#F0F7F4]", desc: "Karadeniz bölgesel proje ve teknoloji topluluğu" },
    { name: "Adana", count: 31, emoji: "☀️", gradient: "from-[#FBE8DF] to-[#FDF3EE]", desc: "Güneyin tarım, girişimcilik ve enerji merkezi" },
    { name: "Kocaeli", count: 47, emoji: "🏭", gradient: "from-[#E5E9F0] to-[#F0F3F8]", desc: "Sanayi ve bilişim vadisi fırsatları" },
    { name: "Muğla", count: 26, emoji: "🏖️", gradient: "from-[#DEF2F6] to-[#EAF7FA]", desc: "Doğa ile iç içe uzaktan çalışma ağları" },
    { name: "Çanakkale", count: 22, emoji: "⚓", gradient: "from-[#E6ECF5] to-[#F1F5FA]", desc: "Tarihi dokuda genç araştırma ve topluluk çalışmaları" },
    { name: "Gaziantep", count: 35, emoji: "🏛️", gradient: "from-[#F7ECE1] to-[#FAF4EC]", desc: "Güneydoğuda ticaret ve inovasyon fırsatları" },
  ];

  const filteredCities = allCities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] flex flex-col">
      <AppHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-24 sm:pb-12 w-full space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white rounded-3xl p-8 border border-[#F0E6DA] shadow-xs">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EC] text-[#0D4842] text-xs font-bold mb-3">
              <MapPin size={14} />
              <span>Şehirlere Göre Buluşmalar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F1714]">
              Hangi şehirde buluşmak istersin?
            </h1>
            <p className="text-sm text-[#7E7068] mt-2">
              Şehrini seçerek sana en yakın fırsatları, etkinlikleri ve insanları keşfet.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7E7068]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Şehir ara..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] placeholder-[#A0948C] focus:outline-none focus:border-[#0D4842]"
            />
          </div>
        </div>

        {/* Featured Top Cities */}
        <div>
          <h2 className="text-xl font-bold text-[#1F1714] mb-4 flex items-center gap-2">
            <Sparkles size={18} className="text-[#0D4842]" />
            <span>Popüler Şehirler</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCities.slice(0, 6).map((city) => (
              <Link
                key={city.name}
                href={`/kesfet?sehir=${encodeURIComponent(city.name)}`}
                className="bg-white rounded-3xl p-6 border border-[#F0E6DA] hover:border-[#0D4842] shadow-xs hover:shadow-md transition-all group cursor-pointer flex items-center gap-5"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${city.gradient} flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform`}>
                  {city.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-[#1F1714] group-hover:text-[#0D4842] truncate">
                      {city.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAF3EC] text-[#0D4842] text-xs font-bold shrink-0">
                      {city.count} fırsat
                    </span>
                  </div>
                  <p className="text-xs text-[#7E7068] mt-1 line-clamp-2 leading-relaxed">
                    {city.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Cities Grid */}
        <div>
          <h2 className="text-xl font-bold text-[#1F1714] mb-4 flex items-center gap-2">
            <Building2 size={18} className="text-[#6E615A]" />
            <span>Tüm Şehirler ({filteredCities.length})</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredCities.map((city) => (
              <Link
                key={city.name}
                href={`/kesfet?sehir=${encodeURIComponent(city.name)}`}
                className="bg-white rounded-3xl p-5 border border-[#F0E6DA] hover:border-[#0D4842] shadow-xs hover:shadow-md transition-all text-center group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${city.gradient} flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  {city.emoji}
                </div>
                <h3 className="font-bold text-base text-[#1F1714] group-hover:text-[#0D4842]">
                  {city.name}
                </h3>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <MapPin size={11} className="text-[#0D4842]" />
                  <p className="text-xs text-[#7E7068] font-medium">{city.count} fırsat</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#FFF4EE] rounded-3xl p-8 border border-[#F8E3D8] text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#1F1714]">
            Aradığın şehri bulamadın mı?
          </h3>
          <p className="text-xs sm:text-sm text-[#7E7068]">
            Kendi şehrinde yeni bir buluşma veya fırsat başlatarak ilk adımı atabilirsin!
          </p>
          <div>
            <Link
              href="/firsat-olustur"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D4842] text-white font-semibold text-sm hover:bg-[#093632] transition-colors shadow-xs"
            >
              <Users size={16} />
              <span>Kendi Şehrinde Fırsat Paylaş</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

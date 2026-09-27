"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Send,
  MoreHorizontal,
  Briefcase,
  UserPlus,
  Sparkles,
  MapPin,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";
import Avatar from "@/components/ui/Avatar";

type Conversation = {
  id: number;
  name: string;
  role: string;
  city: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  opportunityId: number;
  opportunity: string;
  opportunityType: "Arıyor" | "Sunuyor";
};

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Cem Yılmaz",
    role: "ODTÜ · Bilgisayar Müh.",
    city: "İstanbul",
    avatar: "/brand/hero-illustration.png",
    lastMessage:
      "Test sürecimizle ilgili detayları paylaşabilirim.",
    time: "10 dk",
    unread: 2,
    opportunityId: 1,
    opportunity:
      "Mobil uygulamamı test edecek 20 kişi arıyorum",
    opportunityType: "Arıyor",
  },
  {
    id: 2,
    name: "Zeynep Demir",
    role: "Hacettepe · Yazılım",
    city: "Ankara",
    avatar: "/brand/hero-illustration.png",
    lastMessage:
      "FastAPI konusunda birlikte bakabiliriz.",
    time: "2 sa",
    opportunityId: 4,
    opportunity:
      "Backend geliştirmede Python/FastAPI mentörlüğü",
    opportunityType: "Sunuyor",
  },
  {
    id: 3,
    name: "Ahmet Kara",
    role: "Boğaziçi · Endüstri Müh.",
    city: "Ankara",
    avatar: "/brand/hero-illustration.png",
    lastMessage:
      "UI/UX tarafında seni projeye dahil etmek isteriz.",
    time: "Dün",
    opportunityId: 3,
    opportunity:
      "Sosyal etki projemiz için ekip arkadaşı arıyoruz",
    opportunityType: "Arıyor",
  },
];

export default function MessagesPage() {
  /*
   * Desktop'ta selectedId sürekli açık.
   * Mobilde null = konuşma listesi,
   * number = seçili konuşma.
   */
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const selectedConversation =
    conversations.find(
      (conversation) => conversation.id === selectedId
    ) ?? null;

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      conversation.opportunity
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      conversation.lastMessage
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!message.trim()) return;

    // Backend bağlandığında burada API çağrısı olacak.
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] flex flex-col">
      <AppHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 sm:pb-10">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2F1C31]">
              Mesajlar
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-[#7E7068]">
            İnsanlarla tanış, fırsatları konuş, birlikte üret.
          </p>
        </div>

        {/* =====================================================
            MESSAGES APP
        ====================================================== */}

        <div
          className="
            bg-white
            border border-[#F0E6DA]
            rounded-[28px]
            overflow-hidden
            shadow-xs
            min-h-[620px]
            flex
          "
        >

          {/* ===================================================
              LEFT — CONVERSATIONS
          =================================================== */}

          <aside
            className={`
              w-full md:w-[320px] lg:w-[350px]
              shrink-0
              border-r border-[#F0E6DA]
              flex flex-col
              ${
                selectedId !== null
                  ? "hidden md:flex"
                  : "flex"
              }
            `}
          >

            {/* Header */}
            <div className="p-4 border-b border-[#F0E6DA]">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-extrabold text-[#2F1C31]">
                  Konuşmalar
                </h2>

                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#F3EAF7] text-[#4B2E4D]">
                  {conversations.length}
                </span>
              </div>

              {/* Search */}
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0948C]"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Konuşma ara..."
                  className="
                    w-full
                    pl-9 pr-3 py-2.5
                    rounded-xl
                    bg-[#FAF7F2]
                    border border-[#EAE2D8]
                    text-xs text-[#2F1C31]
                    placeholder-[#A0948C]
                    focus:outline-none
                    focus:border-[#0D4842]
                  "
                />
              </div>
            </div>

            {/* Conversation list */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => {
                const isSelected =
                  conversation.id === selectedId;

                return (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() =>
                      setSelectedId(conversation.id)
                    }
                    className={`
                      w-full
                      text-left
                      px-4 py-4
                      border-b border-[#F5EEE7]
                      transition-colors
                      cursor-pointer
                      ${
                        isSelected
                          ? "bg-[#F7F0F9]"
                          : "hover:bg-[#FAF7F2]"
                      }
                    `}
                  >
                    <div className="flex gap-3">

                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <Avatar
                          src={conversation.avatar}
                          alt={conversation.name}
                          size="md"
                        />

                        <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-[#76B58B] border-2 border-white" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-[#2F1C31] truncate">
                            {conversation.name}
                          </span>

                          <span className="text-[9px] text-[#A0948C] shrink-0">
                            {conversation.time}
                          </span>
                        </div>

                        <p className="text-[10px] text-[#8A7C74] mt-0.5 truncate">
                          {conversation.role}
                        </p>

                        <p
                          className={`
                            text-[10px]
                            mt-2
                            truncate
                            ${
                              conversation.unread
                                ? "font-bold text-[#4B2E4D]"
                                : "text-[#7E7068]"
                            }
                          `}
                        >
                          {conversation.lastMessage}
                        </p>

                        <div className="mt-2">
                          <span
                            className={`
                              inline-flex
                              items-center
                              text-[8px]
                              font-bold
                              px-2 py-1
                              rounded-full
                              ${
                                conversation.opportunityType ===
                                "Arıyor"
                                  ? "bg-[#F3EAF7] text-[#5A3760]"
                                  : "bg-[#EAF3EC] text-[#296841]"
                              }
                            `}
                          >
                            {conversation.opportunityType}
                          </span>
                        </div>
                      </div>

                      {/* Unread */}
                      {conversation.unread && (
                        <div className="w-5 h-5 rounded-full bg-[#F7A695] text-[#4B2E4D] flex items-center justify-center text-[9px] font-extrabold shrink-0">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}

              {filteredConversations.length === 0 && (
                <div className="p-8 text-center">
                  <div className="mx-auto w-10 h-10 rounded-xl bg-[#F3EAF7] flex items-center justify-center text-[#6B4B73]">
                    <Search size={17} />
                  </div>

                  <p className="mt-3 text-xs font-bold text-[#5E514B]">
                    Konuşma bulunamadı.
                  </p>

                  <p className="mt-1 text-[10px] text-[#A0948C]">
                    Farklı bir isim veya kelime dene.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-[#F0E6DA] bg-[#FFFBF7]">
              <Link
                href="/kesfet"
                className="
                  flex items-center justify-center gap-2
                  w-full
                  px-4 py-2.5
                  rounded-xl
                  border border-[#EAE2D8]
                  text-[#4B2E4D]
                  text-xs font-bold
                  hover:bg-[#F7F0F9]
                  transition-colors
                "
              >
                <UserPlus size={14} />
                Yeni insanlarla tanış
              </Link>
            </div>
          </aside>

          {/* ===================================================
              RIGHT — CHAT
          =================================================== */}

          <section
            className={`
              flex-1
              flex-col
              min-w-0
              ${
                selectedId !== null
                  ? "flex"
                  : "hidden md:flex"
              }
            `}
          >

            {selectedConversation ? (
              <>
                {/* ============================================
                    CHAT HEADER
                ============================================= */}

                <div className="px-4 sm:px-5 py-3.5 border-b border-[#F0E6DA] flex items-center justify-between">

                  <div className="flex items-center gap-3 min-w-0">

                    {/* Mobile back */}
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      className="
                        md:hidden
                        flex
                        h-9 w-9
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        text-[#6E615A]
                        hover:bg-[#FAF7F2]
                      "
                      aria-label="Konuşmalara dön"
                    >
                      <ArrowLeft size={18} />
                    </button>

                    <div className="relative shrink-0">
                      <Avatar
                        src={selectedConversation.avatar}
                        alt={selectedConversation.name}
                        size="md"
                      />

                      <span className="absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full bg-[#76B58B] border-2 border-white" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-extrabold text-[#2F1C31] truncate">
                          {selectedConversation.name}
                        </h2>

                        <span className="hidden sm:inline-flex text-[9px] text-[#76A486] font-bold">
                          çevrimiçi
                        </span>
                      </div>

                      <p className="text-[10px] text-[#8A7C74] truncate">
                        {selectedConversation.role}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="
                      p-2
                      rounded-xl
                      hover:bg-[#FAF7F2]
                      text-[#7E7068]
                      cursor-pointer
                      shrink-0
                    "
                    aria-label="Daha fazla"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                {/* ============================================
                    OPPORTUNITY CONTEXT
                ============================================= */}

                <div className="mx-4 sm:mx-5 mt-4">
                  <div className="p-3.5 rounded-2xl bg-[#FAF2F0] border border-[#F0DED6]">

                    <div className="flex items-start gap-3">

                      <div className="w-9 h-9 rounded-xl bg-[#F7A695] text-[#5C3029] flex items-center justify-center shrink-0">
                        <Briefcase size={16} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#C96F59]">
                            Fırsat üzerinden tanıştınız
                          </span>
                        </div>

                        <p className="text-xs font-bold text-[#2F1C31] leading-relaxed">
                          {selectedConversation.opportunity}
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <Link
                            href={`/fırsat/${selectedConversation.opportunityId}`}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0D4842] hover:underline"
                          >
                            Fırsatı görüntüle
                            <ArrowRight size={11} />
                          </Link>

                          <span className="flex items-center gap-1 text-[9px] text-[#8A7C74]">
                            <MapPin size={10} />
                            {selectedConversation.city}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================
                    CHAT MESSAGES
                ============================================= */}

                <div className="flex-1 px-4 sm:px-5 py-6 space-y-4 overflow-y-auto">

                  {/* Date */}
                  <div className="flex justify-center">
                    <span className="text-[9px] font-semibold text-[#A0948C] bg-[#FAF7F2] px-3 py-1 rounded-full">
                      Bugün
                    </span>
                  </div>

                  {/* Their message */}
                  <div className="flex items-end gap-2 max-w-[82%] sm:max-w-[75%]">

                    <Avatar
                      src={selectedConversation.avatar}
                      alt={selectedConversation.name}
                      size="sm"
                    />

                    <div>
                      <div className="bg-[#F3EAF7] text-[#3E2A42] px-4 py-3 rounded-2xl rounded-bl-md">
                        <p className="text-xs leading-relaxed">
                          Merhaba Elif! 👋
                          <br />
                          Fırsat paylaşımımı gördüğünü fark ettim.
                          Test sürecimiz yaklaşık 15-20 dakika
                          sürüyor. İstersen detayları paylaşabilirim.
                        </p>
                      </div>

                      <span className="text-[9px] text-[#A0948C] ml-2 mt-1 block">
                        14:32
                      </span>
                    </div>
                  </div>

                  {/* Our message */}
                  <div className="flex justify-end">
                    <div className="max-w-[82%] sm:max-w-[75%]">

                      <div className="bg-[#0D4842] text-white px-4 py-3 rounded-2xl rounded-br-md">
                        <p className="text-xs leading-relaxed">
                          Merhaba Cem! 😊
                          <br />
                          Tabii, uygulamayı test etmek isterim.
                          Detayları paylaşabilirsin.
                        </p>
                      </div>

                      <span className="text-[9px] text-[#A0948C] mr-2 mt-1 block text-right">
                        14:35 · Görüldü
                      </span>
                    </div>
                  </div>

                  {/* Their second message */}
                  <div className="flex items-end gap-2 max-w-[82%] sm:max-w-[75%]">

                    <Avatar
                      src={selectedConversation.avatar}
                      alt={selectedConversation.name}
                      size="sm"
                    />

                    <div>
                      <div className="bg-[#F3EAF7] text-[#3E2A42] px-4 py-3 rounded-2xl rounded-bl-md">
                        <p className="text-xs leading-relaxed">
                          Harika! 🙌
                          <br />
                          Test bağlantısını ve kısa formu birazdan
                          göndereceğim.
                        </p>
                      </div>

                      <span className="text-[9px] text-[#A0948C] ml-2 mt-1 block">
                        14:37
                      </span>
                    </div>
                  </div>

                </div>

                {/* ============================================
                    MESSAGE COMPOSER
                ============================================= */}

                <div className="p-3 sm:p-4 border-t border-[#F0E6DA]">

                  <div className="flex items-end gap-2 p-2 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] focus-within:border-[#0D4842] transition-colors">

                    <textarea
                      value={message}
                      onChange={(e) =>
                        setMessage(e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (
                          e.key === "Enter" &&
                          !e.shiftKey
                        ) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                      rows={1}
                      placeholder="Bir mesaj yaz..."
                      className="
                        flex-1
                        bg-transparent
                        resize-none
                        outline-none
                        px-2 py-2
                        text-xs
                        text-[#2F1C31]
                        placeholder-[#A0948C]
                        max-h-24
                      "
                    />

                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={!message.trim()}
                      className="
                        w-9 h-9
                        rounded-xl
                        bg-[#0D4842]
                        text-white
                        flex items-center justify-center
                        hover:bg-[#093632]
                        disabled:opacity-30
                        disabled:cursor-not-allowed
                        transition-all
                        cursor-pointer
                        shrink-0
                      "
                      aria-label="Mesaj gönder"
                    >
                      <Send size={15} />
                    </button>
                  </div>

                  <p className="text-[9px] text-[#A0948C] mt-2 text-center">
                    Enter ile gönder · Shift + Enter ile yeni satır
                  </p>
                </div>
              </>
            ) : (
              /* ================================================
                 DESKTOP EMPTY / MOBILE FALLBACK
              ================================================= */

              <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-sm text-center">

                  <div className="mx-auto w-14 h-14 rounded-2xl bg-[#F3EAF7] text-[#6B4B73] flex items-center justify-center">
                    <Sparkles size={23} />
                  </div>

                  <h2 className="mt-5 text-lg font-extrabold text-[#4B2E4D]">
                    Bir konuşma seç
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#81746C]">
                    Soldaki konuşmalardan birini seçerek
                    tanışmaya devam edebilirsin.
                  </p>

                </div>
              </div>
            )}
          </section>
        </div>

        {/* Bottom message */}
        <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-[#9A8D85]">
          <Sparkles
            size={12}
            className="text-[#F7A695]"
          />

          <span>
            Buluş&apos;ta mesajlar bir fırsatla başlar,
            tanışıklığa dönüşür.
          </span>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
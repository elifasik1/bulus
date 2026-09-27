"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Check,
  CheckCheck,
  MessageCircle,
  Sparkles,
  UserPlus,
  Briefcase,
  Heart,
  Clock3,
  ArrowRight,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";
import ProfileSidebar from "@/components/profile/ProfileSidebar";

type NotificationType =
  | "message"
  | "opportunity"
  | "connection"
  | "match"
  | "saved";

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
  person?: string;
  actionLabel?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "message",
    title: "Cem Yılmaz sana mesaj gönderdi.",
    description:
      "Mobil uygulamamı test edecek 20 kişi arıyorum fırsatı hakkında seninle konuşmak istiyor.",
    time: "12 dk önce",
    unread: true,
    person: "Cem Yılmaz",
    actionLabel: "Mesaja git",
  },
  {
    id: 2,
    type: "opportunity",
    title: "Yeni bir fırsat sana uygun olabilir.",
    description:
      "İstanbul'da Frontend ve React becerilerine uygun yeni bir fırsat paylaşıldı.",
    time: "1 saat önce",
    unread: true,
    actionLabel: "Fırsatı keşfet",
  },
  {
    id: 3,
    type: "connection",
    title: "Zeynep Demir seni buldu.",
    description:
      "Profilini inceledi. Python / FastAPI konusunda birlikte çalışabileceğinizi düşünüyor.",
    time: "3 saat önce",
    unread: true,
    person: "Zeynep Demir",
    actionLabel: "Profili gör",
  },
  {
    id: 4,
    type: "match",
    title: "Bir eşleşme yakaladın. ✨",
    description:
      "Aradığın “Hackathon ekip arkadaşı” ihtiyacı için Ankara'da yeni bir fırsat var.",
    time: "Dün",
    actionLabel: "Eşleşmeyi gör",
  },
  {
    id: 5,
    type: "saved",
    title: "Kaydettiğin fırsat hâlâ aktif.",
    description:
      "Sosyal etki projesi için UI/UX tasarımcı arayan fırsat başvuru almaya devam ediyor.",
    time: "Dün",
    actionLabel: "Fırsatı gör",
  },
];

const iconConfig: Record<
  NotificationType,
  {
    icon: typeof Bell;
    bg: string;
    color: string;
  }
> = {
  message: {
    icon: MessageCircle,
    bg: "bg-[#F3E8F6]",
    color: "text-[#704B78]",
  },
  opportunity: {
    icon: Briefcase,
    bg: "bg-[#EAF3EC]",
    color: "text-[#0D4842]",
  },
  connection: {
    icon: UserPlus,
    bg: "bg-[#FFF0E9]",
    color: "text-[#C56E56]",
  },
  match: {
    icon: Sparkles,
    bg: "bg-[#EDE5F5]",
    color: "text-[#704B78]",
  },
  saved: {
    icon: Heart,
    bg: "bg-[#FFF0E9]",
    color: "text-[#C56E56]",
  },
};

function NotificationItem({
  notification,
}: {
  notification: Notification;
}) {
  const config = iconConfig[notification.type];
  const Icon = config.icon;

  return (
    <div
      className={`group relative p-4 sm:p-5 transition-colors ${
        notification.unread
          ? "bg-[#FFFAF7]"
          : "bg-white hover:bg-[#FFFCF9]"
      }`}
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-2xl ${config.bg} ${config.color} flex items-center justify-center shrink-0`}
        >
          <Icon size={19} strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {notification.unread && (
                  <span className="w-2 h-2 rounded-full bg-[#F7A695] shrink-0" />
                )}

                <h3 className="text-sm font-bold text-[#2F1C31] leading-snug">
                  {notification.title}
                </h3>
              </div>

              <p className="text-xs text-[#7E7068] leading-relaxed mt-1.5 max-w-2xl">
                {notification.description}
              </p>
            </div>

            <span className="text-[10px] text-[#A0948C] font-medium whitespace-nowrap shrink-0">
              {notification.time}
            </span>
          </div>

          {/* Action */}
          {notification.actionLabel && (
            <Link
              href={
                notification.type === "message"
                  ? "/mesajlar"
                  : notification.type === "connection"
                    ? "/profil"
                    : "/kesfet"
              }
              className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold text-[#0D4842] hover:text-[#093632] transition-colors"
            >
              {notification.actionLabel}
              <ArrowRight size={13} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623] flex flex-col">
      <AppHeader />

      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pb-24 sm:pb-12 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block shrink-0">
            <ProfileSidebar />
          </div>

          {/* Main */}
          <div className="flex-1 w-full max-w-4xl space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="/profil"
                  className="w-9 h-9 rounded-full bg-white border border-[#F0E6DA] flex items-center justify-center text-[#6E615A] hover:text-[#0D4842] hover:border-[#D9CBBE] transition-colors"
                  aria-label="Profile dön"
                >
                  <ArrowLeft size={17} />
                </Link>

                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-extrabold text-[#2F1C31]">
                      Bildirimler
                    </h1>

                    {unreadCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-[#F7A695] text-[#4B2E4D] text-[10px] font-extrabold">
                        {unreadCount} yeni
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#7E7068] mt-0.5">
                    Sana ulaşan fırsatları ve yeni bağlantıları kaçırma.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0D4842] hover:text-[#093632] transition-colors"
              >
                <CheckCheck size={15} />
                Tümünü okundu işaretle
              </button>
            </div>

            {/* Intro Card */}
            <div className="relative overflow-hidden bg-[#4B2E4D] rounded-3xl p-5 sm:p-6 text-white">
              <div className="absolute -right-10 -top-12 w-36 h-36 rounded-full bg-[#F7A695]/20" />
              <div className="absolute right-20 -bottom-20 w-32 h-32 rounded-full bg-[#DCC7EB]/10" />

              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F7A695] text-[#4B2E4D] flex items-center justify-center shrink-0">
                  <Bell size={22} />
                </div>

                <div>
                  <p className="text-sm font-extrabold">
                    Buluş'ta senin için hareket var. ✨
                  </p>
                  <p className="text-[11px] text-white/70 mt-1">
                    Yeni insanlar, fırsatlar ve sana uygun eşleşmeler burada
                    görünecek.
                  </p>
                </div>
              </div>
            </div>

            {/* Notifications Card */}
            <div className="bg-white rounded-3xl border border-[#F0E6DA] shadow-xs overflow-hidden">
              {/* Card header */}
              <div className="px-5 sm:px-6 py-4 border-b border-[#F0E6DA] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock3 size={15} className="text-[#0D4842]" />
                  <span className="text-xs font-extrabold text-[#2F1C31]">
                    Son bildirimler
                  </span>
                </div>

                <span className="text-[10px] font-medium text-[#A0948C]">
                  Son 7 gün
                </span>
              </div>

              {/* List */}
              <div className="divide-y divide-[#F0E6DA]">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>

            {/* Mobile mark all read */}
            <button
              type="button"
              className="sm:hidden w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-[#F0E6DA] text-[11px] font-bold text-[#0D4842]"
            >
              <Check size={15} />
              Tümünü okundu işaretle
            </button>

            {/* Footer CTA */}
            <div className="bg-[#FFF4EE] rounded-3xl border border-[#F3DED2] p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-[#4B2E4D]">
                    Yeni bir şey arıyor musun?
                  </p>
                  <p className="text-[11px] text-[#7E7068] mt-1">
                    Belki de aradığın insan bir fırsatın hemen arkasındadır.
                  </p>
                </div>

                <Link
                  href="/kesfet"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0D4842] text-white text-xs font-bold hover:bg-[#093632] transition-colors shrink-0"
                >
                  <Sparkles size={15} />
                  Keşfet
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}
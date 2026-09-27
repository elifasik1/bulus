"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  ShieldCheck,
  Lock,
  Bell,
  Sun,
  Moon,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  CheckCircle2,
  Key,
  Smartphone,
  Eye,
  EyeOff,
  Mail,
  Send,
  Sparkles,
  X,
  Laptop,
  Globe,
  Users,
  AlertCircle,
  Check,
  RefreshCw,
  QrCode,
  ShieldAlert,
  UserX,
  Sliders,
} from "lucide-react";
import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsPage() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Active modal state
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Security Form state
  const [securityTab, setSecurityTab] = useState<"password" | "2fa" | "sessions" | "activity">("password");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // 2FA state
  const [twoFactor, setTwoFactor] = useState(false);
  const [twoFactorType, setTwoFactorType] = useState<"authenticator" | "sms">("authenticator");
  const [showQrStep, setShowQrStep] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  // Privacy state
  const [privacyTab, setPrivacyTab] = useState<"visibility" | "permissions" | "blocked">("visibility");
  const [privacyMode, setPrivacyMode] = useState("Herkese Açık");
  const [showEmailInSearch, setShowEmailInSearch] = useState(false);
  const [showPhoneToFollowers, setShowPhoneToFollowers] = useState(true);
  const [hideOnlineStatus, setHideOnlineStatus] = useState(false);
  const [searchEngineIndexing, setSearchEngineIndexing] = useState(true);
  const [messagePermission, setMessagePermission] = useState("Herkes");
  const [blockedUsers, setBlockedUsers] = useState([
    { id: "1", name: "Spam Kullanıcı 1", date: "12 Ağustos 2026" },
    { id: "2", name: "Rahatsız Edici Hesap", date: "02 Eylül 2026" },
  ]);

  // Active Sessions state
  const [sessions, setSessions] = useState([
    { id: "1", device: "Chrome — Windows 11", location: "İstanbul, Türkiye", isCurrent: true, lastActive: "Şimdi aktif" },
    { id: "2", device: "Safari — iPhone 14 Pro", location: "İstanbul, Türkiye", isCurrent: false, lastActive: "2 saat önce" },
    { id: "3", device: "Firefox — macOS Sonoma", location: "Ankara, Türkiye", isCurrent: false, lastActive: "3 gün önce" },
  ]);

  // Notification toggles
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifPush, setNotifPush] = useState(true);
  const [notifOpportunities, setNotifOpportunities] = useState(true);
  const [notifMessages, setNotifMessages] = useState(true);

  // Support form state
  const [supportMessage, setSupportMessage] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Password validation & strength calculation
  const hasMinLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
  
  const strengthScore = [hasMinLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword) {
      showToast("Lütfen mevcut şifrenizi girin.");
      return;
    }
    if (strengthScore < 3) {
      showToast("Lütfen daha güçlü bir yeni şifre belirleyin.");
      return;
    }
    if (!passwordsMatch) {
      showToast("Yeni şifreler birbiriyle eşleşmiyor.");
      return;
    }

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setActiveModal(null);
    showToast("Şifreniz başarıyla güncellendi! 🔒");
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    setSupportMessage("");
    showToast("Destek talebiniz alındı! En kısa sürede yanıt vereceğiz. 📩");
  };

  const terminateSession = (id: string) => {
    setSessions(sessions.filter((s) => s.id !== id));
    showToast("Oturum sonlandırıldı.");
  };

  const terminateAllOtherSessions = () => {
    setSessions(sessions.filter((s) => s.isCurrent));
    showToast("Diğer tüm oturumlar kapatıldı. 🛡️");
  };

  const unblockUser = (id: string, name: string) => {
    setBlockedUsers(blockedUsers.filter((u) => u.id !== id));
    showToast(`${name} kullanıcısının engeli kaldırıldı.`);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#121110] text-[#2C2623] dark:text-[#F3EFEA] flex flex-col relative transition-colors duration-200">
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

          {/* Settings Menu Card */}
          <div className="flex-1 w-full bg-white dark:bg-[#1e1b18] rounded-3xl p-6 sm:p-8 border border-[#F0E6DA] dark:border-[#332e29] shadow-xs space-y-6">
            
            <div>
              <h1 className="text-2xl font-extrabold text-[#1F1714] dark:text-[#F3EFEA]">Ayarlar</h1>
              <p className="text-xs text-[#7E7068] dark:text-[#B5AAA0] mt-0.5">Hesabını, güvenliğini ve gizlilik tercihlerini yönet.</p>
            </div>

            {/* List of Functional Menu Items */}
            <div className="divide-y divide-[#F0E6DA] dark:divide-[#332e29] border-t border-[#F0E6DA] dark:border-[#332e29]">
              
              {/* 1. Profil Bilgileri */}
              <Link
                href="/profil"
                className="flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Profil Bilgileri</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Ad, biyografi, şehir ve portföyünü güncelle</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* 2. Hesap Güvenliği */}
              <button
                onClick={() => setActiveModal("security")}
                className="w-full text-left flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Hesap Güvenliği</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Şifre değiştirme, 2FA ve aktif cihazlar</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E3F4E9] text-[#296841]">Güvenli</span>
                  <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              {/* 3. Gizlilik */}
              <button
                onClick={() => setActiveModal("privacy")}
                className="w-full text-left flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <Lock size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Gizlilik Ayarları</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Profil görünürlüğü, iletişim ve engellenenler</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#7E7068] dark:text-[#B5AAA0]">{privacyMode}</span>
                  <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              {/* 4. Takip Ettiklerim & Bağlantılar */}
              <Link
                href="/baglantilar"
                className="flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <Users size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Takip Ettiklerim & Bağlantılar</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Takip ettiğin kullanıcılar, mentorlar ve önerilenler</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* 5. Bildirim Tercihleri */}
              <button
                onClick={() => setActiveModal("notifications")}
                className="w-full text-left flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <Bell size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Bildirim Tercihleri</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">E-posta, anlık bildirim ve bültenler</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 6. Görünüm (Koyu / Açık Mod) */}
              <button
                onClick={() => setActiveModal("theme")}
                className="w-full text-left flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Görünüm</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Açık / Koyu Tema Seçimi</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF7F2] dark:bg-[#2a2521] border border-[#EAE2D8] dark:border-[#332e29] text-[#1F1714] dark:text-[#F3EFEA]">
                    {theme === "light" ? "Açık Mod ☀️" : "Koyu Mod 🌙"}
                  </span>
                  <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>

              {/* 7. Yardım ve Destek */}
              <button
                onClick={() => setActiveModal("help")}
                className="w-full text-left flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Yardım ve Destek</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Sıkça sorulan sorular ve destek ekibi</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 8. Kullanım Koşulları */}
              <button
                onClick={() => setActiveModal("terms")}
                className="w-full text-left flex items-center justify-between py-4 hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] px-3 rounded-2xl transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] group-hover:bg-[#EAF3EC] text-[#0D4842] dark:text-[#8EBF9F] flex items-center justify-center transition-colors">
                    <FileText size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1F1714] dark:text-[#F3EFEA]">Kullanım Koşulları</span>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0]">Topluluk kuralları ve hizmet şartları</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#A0948C] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 9. Çıkış Yap */}
              <button
                onClick={() => setActiveModal("logout")}
                className="w-full flex items-center justify-between py-4 px-3 hover:bg-[#FFF0F0] dark:hover:bg-[#3b1c1c] rounded-2xl transition-colors text-red-600 dark:text-red-400 font-bold text-sm cursor-pointer mt-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F0] dark:bg-[#3b1c1c] text-red-600 dark:text-red-400 flex items-center justify-center">
                    <LogOut size={18} />
                  </div>
                  <span>Çıkış Yap</span>
                </div>
                <ChevronRight size={16} className="text-red-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>

          </div>

        </div>
      </main>

      {/* --- MODALS --- */}

      {/* 1. GELİŞMİŞ HESAP GÜVENLİĞİ MODALI */}
      {activeModal === "security" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Hesap Güvenliği"
          size="lg"
        >
          <div className="space-y-5 pt-1 text-left">
            
            {/* Security Tabs */}
            <div className="flex border-b border-[#EAE2D8] dark:border-[#332e29] gap-2 pb-2 overflow-x-auto scrollbar-none">
              {[
                { id: "password", label: "Şifre Değiştir", icon: Key },
                { id: "2fa", label: "2FA Doğrulama", icon: Smartphone },
                { id: "sessions", label: "Aktif Cihazlar", icon: Laptop },
                { id: "activity", label: "Güvenlik Günlüğü", icon: ShieldAlert },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = securityTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSecurityTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#0D4842] text-white shadow-xs"
                        : "bg-[#FAF7F2] dark:bg-[#2a2521] text-[#6E615A] dark:text-[#B5AAA0] hover:text-[#1F1714]"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: ŞİFRE DEĞİŞTİR */}
            {securityTab === "password" && (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                
                {/* Mevcut Şifre */}
                <div>
                  <label className="block text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA] mb-1">Mevcut Şifre</label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Mevcut şifrenizi girin"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] border border-[#EAE2D8] dark:border-[#332e29] text-xs focus:outline-none focus:border-[#0D4842]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-2.5 text-[#7E7068] hover:text-[#1F1714]"
                    >
                      {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Yeni Şifre */}
                <div>
                  <label className="block text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA] mb-1">Yeni Şifre</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Yeni şifrenizi girin"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] border border-[#EAE2D8] dark:border-[#332e29] text-xs focus:outline-none focus:border-[#0D4842]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-2.5 text-[#7E7068] hover:text-[#1F1714]"
                    >
                      {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Password Strength Bar & Checklist */}
                {newPassword.length > 0 && (
                  <div className="bg-[#FAF7F2] dark:bg-[#2a2521] p-3 rounded-2xl border border-[#EAE2D8] dark:border-[#332e29] space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#5E514B] dark:text-[#B5AAA0]">Şifre Gücü:</span>
                      <span className={`font-bold ${
                        strengthScore <= 1 ? "text-red-500" : strengthScore === 2 ? "text-amber-500" : strengthScore === 3 ? "text-blue-500" : "text-emerald-600"
                      }`}>
                        {strengthScore <= 1 ? "Zayıf ⚠️" : strengthScore === 2 ? "Orta 🟡" : strengthScore === 3 ? "Güçlü 🟢" : "Çok Güçlü 🔥"}
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-[#EAE2D8] dark:bg-[#332e29] rounded-full overflow-hidden flex">
                      <div
                        className={`h-full transition-all duration-300 ${
                          strengthScore <= 1 ? "bg-red-500 w-1/4" : strengthScore === 2 ? "bg-amber-500 w-2/4" : strengthScore === 3 ? "bg-blue-500 w-3/4" : "bg-emerald-600 w-full"
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
                      <div className={`flex items-center gap-1 ${hasMinLength ? "text-emerald-600 font-bold" : "text-[#7E7068]"}`}>
                        <Check size={12} className={hasMinLength ? "opacity-100" : "opacity-30"} />
                        <span>En az 8 karakter</span>
                      </div>
                      <div className={`flex items-center gap-1 ${hasUpper ? "text-emerald-600 font-bold" : "text-[#7E7068]"}`}>
                        <Check size={12} className={hasUpper ? "opacity-100" : "opacity-30"} />
                        <span>En az 1 büyük harf</span>
                      </div>
                      <div className={`flex items-center gap-1 ${hasNumber ? "text-emerald-600 font-bold" : "text-[#7E7068]"}`}>
                        <Check size={12} className={hasNumber ? "opacity-100" : "opacity-30"} />
                        <span>En az 1 rakam</span>
                      </div>
                      <div className={`flex items-center gap-1 ${hasSpecial ? "text-emerald-600 font-bold" : "text-[#7E7068]"}`}>
                        <Check size={12} className={hasSpecial ? "opacity-100" : "opacity-30"} />
                        <span>En az 1 özel karakter (!@#$)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Yeni Şifre Tekrar */}
                <div>
                  <label className="block text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA] mb-1">Yeni Şifre Tekrar</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Yeni şifrenizi tekrar yazın"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] border border-[#EAE2D8] dark:border-[#332e29] text-xs focus:outline-none focus:border-[#0D4842]"
                    required
                  />
                  {confirmPassword.length > 0 && (
                    <p className={`text-[11px] mt-1 font-bold ${passwordsMatch ? "text-emerald-600" : "text-red-500"}`}>
                      {passwordsMatch ? "✓ Şifreler eşleşiyor" : "✕ Şifreler uyuşmuyor"}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <Button size="sm" variant="ghost" onClick={() => setActiveModal(null)} type="button">
                    İptal
                  </Button>
                  <Button size="sm" variant="primary" type="submit">
                    Şifreyi Güncelle 🔒
                  </Button>
                </div>
              </form>
            )}

            {/* TAB 2: 2FA DOĞRULAMA */}
            {securityTab === "2fa" && (
              <div className="space-y-4">
                <div className="p-4 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-2xl border border-[#EAE2D8] dark:border-[#332e29] flex items-start gap-3">
                  <Smartphone size={24} className="text-[#0D4842] dark:text-[#8EBF9F] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">İki Adımlı Doğrulama (2FA)</p>
                    <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0] mt-0.5">
                      Giriş yaparken şifrenize ek olarak mobil cihazınızdan onay kodu istenmesini sağlar.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const next = !twoFactor;
                      setTwoFactor(next);
                      if (next) setShowQrStep(true);
                      showToast(next ? "2FA kurulumu başlatıldı! 🛡️" : "2FA devre dışı bırakıldı.");
                    }}
                    className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
                      twoFactor ? "bg-[#0D4842]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        twoFactor ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {twoFactor && (
                  <div className="space-y-3 p-4 bg-[#EAF3EC] dark:bg-[#1a2f26] rounded-2xl border border-[#C5E9D3] dark:border-[#295c47]">
                    <p className="text-xs font-bold text-[#0D4842] dark:text-[#8EBF9F] flex items-center gap-1.5">
                      <QrCode size={16} />
                      <span>Doğrulama Yöntemi</span>
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setTwoFactorType("authenticator")}
                        className={`p-3 rounded-xl border text-left text-xs font-bold cursor-pointer transition-all ${
                          twoFactorType === "authenticator"
                            ? "bg-[#0D4842] text-white border-[#0D4842]"
                            : "bg-white dark:bg-[#2a2521] text-[#1F1714] dark:text-[#F3EFEA] border-[#EAE2D8]"
                        }`}
                      >
                        Authenticator Uygulaması (Google/Authy)
                      </button>
                      <button
                        type="button"
                        onClick={() => setTwoFactorType("sms")}
                        className={`p-3 rounded-xl border text-left text-xs font-bold cursor-pointer transition-all ${
                          twoFactorType === "sms"
                            ? "bg-[#0D4842] text-white border-[#0D4842]"
                            : "bg-white dark:bg-[#2a2521] text-[#1F1714] dark:text-[#F3EFEA] border-[#EAE2D8]"
                        }`}
                      >
                        SMS SMS Onay Kodu (+90 *** *** 42)
                      </button>
                    </div>

                    {showQrStep && twoFactorType === "authenticator" && (
                      <div className="pt-2 text-center space-y-2 bg-white dark:bg-[#2a2521] p-4 rounded-xl border border-[#C5E9D3]">
                        <p className="text-[11px] font-bold text-[#1F1714] dark:text-[#F3EFEA]">
                          Aşağıdaki QR kodu Authenticator uygulamanızla taratın:
                        </p>
                        <div className="w-32 h-32 mx-auto bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex items-center justify-center font-mono text-[10px] text-gray-500 border">
                          [QR CODE SIMULATION]
                        </div>
                        <input
                          type="text"
                          maxLength={6}
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          placeholder="6 Haneli Kodu Girin"
                          className="w-48 text-center px-3 py-1.5 rounded-xl border text-xs font-mono tracking-widest"
                        />
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => {
                            setShowQrStep(false);
                            showToast("2FA Başarıyla Aktifleştirildi! 🎉");
                          }}
                        >
                          Kodu Doğrula ve Kaydet
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: AKTİF CİHAZLAR */}
            {securityTab === "sessions" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">Açık Oturumlar ({sessions.length})</p>
                  {sessions.length > 1 && (
                    <button
                      onClick={terminateAllOtherSessions}
                      className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
                    >
                      Diğer Tüm Oturumları Kapat
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  {sessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-3.5 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-2xl border border-[#EAE2D8] dark:border-[#332e29]"
                    >
                      <div className="flex items-center gap-3">
                        <Laptop size={18} className="text-[#0D4842] dark:text-[#8EBF9F]" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">{session.device}</span>
                            {session.isCurrent && (
                              <span className="text-[10px] font-bold px-2 py-0.5 bg-[#E3F4E9] text-[#296841] rounded-full">
                                Bu Cihaz
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-[#7E7068] dark:text-[#B5AAA0]">
                            {session.location} • {session.lastActive}
                          </p>
                        </div>
                      </div>

                      {!session.isCurrent && (
                        <button
                          onClick={() => terminateSession(session.id)}
                          className="text-xs font-semibold text-red-500 hover:text-red-700 px-2.5 py-1 rounded-xl bg-red-50 dark:bg-red-950/30 cursor-pointer"
                        >
                          Çıkış Yap
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: GÜVENLİK GÜNLÜĞÜ */}
            {securityTab === "activity" && (
              <div className="space-y-2 text-xs">
                <p className="font-bold text-[#1F1714] dark:text-[#F3EFEA]">Son Güvenlik Hareketleri</p>
                <div className="space-y-2">
                  {[
                    { action: "Giriş yapıldı (Chrome Windows)", date: "Bugün, 00:04", ip: "88.241.12.90" },
                    { action: "Şifre değiştirme talebi", date: "Dün, 19:42", ip: "88.241.12.90" },
                    { action: "Yeni cihaz eklendi (iPhone 14)", date: "08 Eylül 2026", ip: "176.240.5.11" },
                  ].map((log, idx) => (
                    <div key={idx} className="p-3 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-xl border border-[#EAE2D8] dark:border-[#332e29] flex justify-between items-center">
                      <div>
                        <p className="font-bold text-[#1F1714] dark:text-[#F3EFEA]">{log.action}</p>
                        <p className="text-[10px] text-[#7E7068] dark:text-[#B5AAA0]">{log.date}</p>
                      </div>
                      <span className="text-[10px] font-mono text-[#7E7068]">{log.ip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </Modal>
      )}

      {/* 2. GELİŞMİŞ GİZLİLİK MODALI */}
      {activeModal === "privacy" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Gizlilik Ayarları"
          size="lg"
        >
          <div className="space-y-5 pt-1 text-left">
            
            {/* Privacy Tabs */}
            <div className="flex border-b border-[#EAE2D8] dark:border-[#332e29] gap-2 pb-2">
              {[
                { id: "visibility", label: "Profil Görünürlüğü", icon: Eye },
                { id: "permissions", label: "İletişim & Arama İzinleri", icon: Sliders },
                { id: "blocked", label: "Engellenen Üyeler", icon: UserX },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = privacyTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setPrivacyTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#0D4842] text-white shadow-xs"
                        : "bg-[#FAF7F2] dark:bg-[#2a2521] text-[#6E615A] dark:text-[#B5AAA0] hover:text-[#1F1714]"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: PROFİL GÖRÜNÜRLÜĞÜ */}
            {privacyTab === "visibility" && (
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">Profilinizin Erişim Düzeyi</p>
                <div className="space-y-2.5">
                  {[
                    { title: "Herkese Açık", desc: "Profiliniz ve paylaşımlarınız tüm Buluş üyeleri ve ziyaretçiler tarafından görülebilir.", badge: "Önerilen 🌟", icon: Globe },
                    { title: "Sadece Üyeler", desc: "Yalnızca giriş yapmış Buluş üyeleri profilinizi inceleyebilir.", badge: "Topluluk 👥", icon: Users },
                    { title: "Gizli Mod", desc: "Profiliniz aramalarda ve listelerde görünmez. Yalnızca takip isteği kabul ettikleriniz görebilir.", badge: "Gizli 🔒", icon: Lock },
                  ].map((mode) => {
                    const Icon = mode.icon;
                    const isSelected = privacyMode === mode.title;
                    return (
                      <div
                        key={mode.title}
                        onClick={() => setPrivacyMode(mode.title)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? "border-[#0D4842] bg-[#EAF3EC] dark:bg-[#1a2f26] text-[#0D4842] dark:text-[#8EBF9F] ring-2 ring-[#0D4842]"
                            : "border-[#EAE2D8] dark:border-[#332e29] bg-[#FAF7F2] dark:bg-[#2a2521] text-[#5E514B]"
                        }`}
                      >
                        <Icon size={20} className="mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">{mode.title}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/40 text-[#0D4842] dark:text-[#8EBF9F]">
                              {mode.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#7E7068] dark:text-[#B5AAA0] mt-1">{mode.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: İLETİŞİM & ARAMA İZİNLERİ */}
            {privacyTab === "permissions" && (
              <div className="space-y-3">
                {[
                  { label: "E-posta adresim arama sonuçlarında görünsün", desc: "Üyeler e-posta adresinle seni arayabilir", state: showEmailInSearch, setter: setShowEmailInSearch },
                  { label: "Telefon numaramı takipçilerime göster", desc: "Sadece onayladığın takipçilerin erişebilir", state: showPhoneToFollowers, setter: setShowPhoneToFollowers },
                  { label: "Çevrimiçi (Online) durumumu gizle", desc: "Profilinde yeşil aktiflik noktasını kapatır", state: hideOnlineStatus, setter: setHideOnlineStatus },
                  { label: "Arama motorlarında indekslensin (Google)", desc: "Google aramalarında Buluş profilin listelenir", state: searchEngineIndexing, setter: setSearchEngineIndexing },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-2xl border border-[#EAE2D8] dark:border-[#332e29]">
                    <div>
                      <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">{item.label}</p>
                      <p className="text-[10px] text-[#7E7068] dark:text-[#B5AAA0]">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => item.setter(!item.state)}
                      className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
                        item.state ? "bg-[#0D4842]" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          item.state ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}

                <div className="p-3.5 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-2xl border border-[#EAE2D8] dark:border-[#332e29] space-y-1.5">
                  <label className="block text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">Kimler Direkt Mesaj Gönderebilir?</label>
                  <select
                    value={messagePermission}
                    onChange={(e) => setMessagePermission(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#1a1816] border border-[#EAE2D8] dark:border-[#332e29] text-xs focus:outline-none"
                  >
                    <option value="Herkes">Herkes (Tüm Buluş Üyeleri)</option>
                    <option value="Takip Ettiklerim">Sadece Takip Ettiklerim</option>
                    <option value="Hiç Kimse">Hiç Kimse (Mesajlar Kapalı)</option>
                  </select>
                </div>
              </div>
            )}

            {/* TAB 3: ENGELLENEN ÜYELER */}
            {privacyTab === "blocked" && (
              <div className="space-y-3">
                <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">Engellenen Kullanıcılar Listesi</p>
                {blockedUsers.length === 0 ? (
                  <p className="text-xs text-[#7E7068] italic py-4 text-center">Henüz engellenmiş bir kullanıcı bulunmuyor.</p>
                ) : (
                  <div className="space-y-2">
                    {blockedUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-xl border border-[#EAE2D8] dark:border-[#332e29]">
                        <div>
                          <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">{user.name}</p>
                          <p className="text-[10px] text-[#7E7068] dark:text-[#B5AAA0]">{user.date} tarihinde engellendi</p>
                        </div>
                        <button
                          onClick={() => unblockUser(user.id, user.name)}
                          className="text-xs font-semibold px-3 py-1 bg-white dark:bg-[#1a1816] border border-[#EAE2D8] dark:border-[#332e29] rounded-xl hover:bg-gray-50 cursor-pointer"
                        >
                          Engeli Kaldır
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  setActiveModal(null);
                  showToast("Gizlilik tercihleriniz başarıyla kaydedildi! 🛡️");
                }}
              >
                Değişiklikleri Kaydet
              </Button>
            </div>

          </div>
        </Modal>
      )}

      {/* 3. BİLDİRİM TERCİHLERİ MODALI */}
      {activeModal === "notifications" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Bildirim Tercihleri"
          size="md"
        >
          <div className="space-y-3 pt-2 text-left">
            {[
              { label: "E-posta Bildirimleri", desc: "Yeni mesaj ve başvuru güncellemeleri", state: notifEmail, setter: setNotifEmail },
              { label: "Anlık Bildirimler (Push)", desc: "Web tarayıcısı ve mobil bildirimleri", state: notifPush, setter: setNotifPush },
              { label: "Mesaj Bildirimleri", desc: "Sana yeni bir mesaj geldiğinde anında haber ver", state: notifMessages, setter: setNotifMessages },
              { label: "Haftalık Fırsat Bülteni", desc: "Öne çıkan yeni fırsat ve projeler", state: notifOpportunities, setter: setNotifOpportunities },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 bg-[#FAF7F2] dark:bg-[#2a2521] rounded-2xl border border-[#EAE2D8] dark:border-[#332e29]">
                <div>
                  <p className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">{item.label}</p>
                  <p className="text-[10px] text-[#7E7068] dark:text-[#B5AAA0]">{item.desc}</p>
                </div>
                <button
                  onClick={() => item.setter(!item.state)}
                  className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
                    item.state ? "bg-[#0D4842]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      item.state ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}

            <div className="pt-2 flex justify-end">
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  setActiveModal(null);
                  showToast("Bildirim tercihleriniz güncellendi! 🔔");
                }}
              >
                Kaydet
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* 4. GÖRÜNÜM (DARK / LIGHT MODE) MODALI */}
      {activeModal === "theme" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Görünüm Tercihi"
          size="sm"
        >
          <div className="space-y-4 pt-2 text-left">
            <p className="text-xs text-[#7E7068] dark:text-[#B5AAA0]">
              Uygulama temasını istediğiniz modda kullanabilirsiniz:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setTheme("light");
                  showToast("Açık Mod aktifleştirildi! ☀️");
                }}
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                  theme === "light"
                    ? "border-[#0D4842] bg-[#EAF3EC] dark:bg-[#1a2f26] ring-2 ring-[#0D4842]"
                    : "border-[#EAE2D8] dark:border-[#332e29] bg-[#FAF7F2] dark:bg-[#2a2521]"
                }`}
              >
                <Sun size={28} className="text-[#D99A10]" />
                <span className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">Açık Mod ☀️</span>
              </button>

              <button
                onClick={() => {
                  setTheme("dark");
                  showToast("Koyu Mod aktifleştirildi! 🌙");
                }}
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 cursor-pointer transition-all ${
                  theme === "dark"
                    ? "border-[#0D4842] bg-[#1F1714] text-white ring-2 ring-[#0D4842]"
                    : "border-[#EAE2D8] dark:border-[#332e29] bg-[#FAF7F2] dark:bg-[#2a2521]"
                }`}
              >
                <Moon size={28} className="text-[#3B65B5]" />
                <span className="text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA]">Koyu Mod 🌙</span>
              </button>
            </div>

            <Button
              size="sm"
              variant="primary"
              className="w-full"
              onClick={() => setActiveModal(null)}
            >
              Tamam
            </Button>
          </div>
        </Modal>
      )}

      {/* 5. YARDIM VE DESTEK MODALI */}
      {activeModal === "help" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Yardım ve Destek"
          size="md"
        >
          <div className="space-y-4 pt-2 text-left">
            <div className="bg-[#EAF3EC] dark:bg-[#1a2f26] p-3.5 rounded-2xl border border-[#C5E9D3] dark:border-[#295c47]">
              <p className="text-xs font-bold text-[#0D4842] dark:text-[#8EBF9F] flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>Bize Her Zaman Ulaşabilirsin</span>
              </p>
              <p className="text-[11px] text-[#296841] dark:text-[#A8DFB9] mt-0.5">
                Soruların veya önerilerin için destek ekibimize direkt mesaj gönderebilirsin.
              </p>
            </div>

            <form onSubmit={handleSupportSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#1F1714] dark:text-[#F3EFEA] mb-1">Mesajınız</label>
                <textarea
                  rows={4}
                  value={supportMessage}
                  onChange={(e) => setSupportMessage(e.target.value)}
                  placeholder="Nasıl yardımcı olabiliriz?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#2a2521] border border-[#EAE2D8] dark:border-[#332e29] text-xs text-[#1F1714] dark:text-[#F3EFEA] focus:outline-none focus:border-[#0D4842]"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button size="sm" variant="ghost" onClick={() => setActiveModal(null)} type="button">
                  İptal
                </Button>
                <Button size="sm" variant="primary" type="submit" rightIcon={<Send size={14} />}>
                  Gönder
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {/* 6. KULLANIM KOŞULLARI MODALI */}
      {activeModal === "terms" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Kullanım Koşulları & Saygı Sözleşmesi"
          size="lg"
        >
          <div className="space-y-3 pt-2 text-xs text-[#5E514B] dark:text-[#B5AAA0] leading-relaxed max-h-[350px] overflow-y-auto pr-1">
            <p className="font-bold text-[#1F1714] dark:text-[#F3EFEA]">1. Topluluk İlkeleri</p>
            <p>Buluş, samimi ve güvenli bir dayanışma platformudur. Tüm kullanıcılar birbirine karşı saygılı ve dürüst davranmakla yükümlüdür.</p>
            
            <p className="font-bold text-[#1F1714] dark:text-[#F3EFEA]">2. Fırsat ve Proje Paylaşımları</p>
            <p>Paylaşılan içeriklerin doğru, güncel ve insan odaklı olması esastır. Yanıltıcı veya ticari spam paylaşımlar engellenir.</p>

            <p className="font-bold text-[#1F1714] dark:text-[#F3EFEA]">3. Veri Gizliliği</p>
            <p>Kullanıcı bilgileri üçüncü taraflarla izin alınmaksızın paylaşılmaz. Detaylı KVKK metni için gizlilik politikamızı inceleyebilirsiniz.</p>
          </div>
          <div className="pt-3 border-t border-[#F0E6DA] dark:border-[#332e29] flex justify-end">
            <Button size="sm" variant="primary" onClick={() => setActiveModal(null)}>
              Anladım ve Kabul Ediyorum
            </Button>
          </div>
        </Modal>
      )}

      {/* 7. ÇIKIŞ YAP MODALI */}
      {activeModal === "logout" && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          title="Çıkış Yapılsın mı?"
          size="sm"
        >
          <div className="space-y-4 pt-2 text-center">
            <p className="text-xs text-[#7E7068] dark:text-[#B5AAA0]">
              Hesabınızdan çıkış yapmak istediğinize emin misiniz? Tekrar giriş yapana kadar bildirimleri göremeyeceksiniz.
            </p>
            <div className="flex justify-center gap-3">
              <Button size="sm" variant="ghost" onClick={() => setActiveModal(null)}>
                Vazgeç
              </Button>
              <Button
                size="sm"
                variant="primary"
                className="bg-red-600 hover:bg-red-700 text-white border-none"
                onClick={() => {
                  setActiveModal(null);
                  router.push("/giris");
                }}
              >
                Evet, Çıkış Yap
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <Footer />
      <MobileNav />
    </div>
  );
}

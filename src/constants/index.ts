import type {
  NavLink,
  OpportunityCategory,
  OpportunityCardData,
  HowItWorksStep,
  FAQItem,
} from "@/types";

/* ========================================
   Navigation
   ======================================== */

export const NAV_LINKS_PUBLIC: NavLink[] = [
  { label: "Akış", href: "/feed" },
  { label: "Keşfet", href: "/kesfet" },
  { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
  { label: "Fırsatlar", href: "#firsatlar" },
  { label: "Şehirler", href: "#sehirler" },
  { label: "Hakkımızda", href: "hakkimizda" },
];

export const NAV_LINKS_AUTH: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Keşfet", href: "/keshet" },
  { label: "İhtiyacım var", href: "/ihtiyacim-var" },
  { label: "Mesajlar", href: "/mesajlar" },
  { label: "Profil", href: "/profil" },
];

/* ========================================
   Opportunity Categories
   ======================================== */

export const OPPORTUNITY_CATEGORIES: OpportunityCategory[] = [
  { slug: "is", label: "İş", icon: "Briefcase" },
  { slug: "staj", label: "Staj", icon: "GraduationCap" },
  { slug: "proje", label: "Proje", icon: "FolderKanban" },
  { slug: "ekip-arkadasi", label: "Ekip Arkadaşı", icon: "Users" },
  { slug: "mentor", label: "Mentor", icon: "Heart" },
  { slug: "ev-oda", label: "Ev / Oda", icon: "Home" },
  { slug: "egitim", label: "Eğitim", icon: "BookOpen" },
  { slug: "kullanici-testi", label: "Kullanıcı Testi", icon: "Smartphone" },
  { slug: "etkinlik", label: "Etkinlik", icon: "Calendar" },
  { slug: "diger", label: "Diğer", icon: "MoreHorizontal" },
];

/* ========================================
   Example Opportunities (Landing Page)
   ======================================== */

export const EXAMPLE_OPPORTUNITIES: OpportunityCardData[] = [
  {
    id: "1",
    title: "Mobil uygulamamı test edecek 20 kişi arıyorum",
    description:
      "React Native ile geliştirdiğim üniversite öğrencilerine yönelik bir çalışma planlama uygulaması var. Beta test aşamasında geri bildirim verecek kullanıcılar arıyorum.",
    category: "kullanici-testi",
    location: "Online",
    author: {
      name: "Cem Yılmaz",
      university: "ODTÜ",
    },
    createdAt: "2 saat önce",
    tags: ["React Native", "Beta Test", "Mobil"],
    type: "need",
  },
  {
    id: "2",
    title: "Yeni mezun olarak İstanbul'da frontend fırsatı arıyorum",
    description:
      "Bilgisayar mühendisliği mezunuyum. React ve Next.js ile projeler geliştirdim. İstanbul'da frontend pozisyonu veya staj sonrası dönüşüm fırsatı arıyorum.",
    category: "is",
    location: "İstanbul",
    author: {
      name: "Elif Aşık",
      university: "İTÜ",
    },
    createdAt: "5 saat önce",
    tags: ["React", "Next.js", "Frontend"],
    type: "need",
  },
  {
    id: "3",
    title: "React projem için bir ekip arkadaşı arıyorum",
    description:
      "Öğrencilerin staj ve etkinlik bulmasını kolaylaştıran bir platform geliştiriyorum. Backend tarafında yardımcı olabilecek birini arıyorum.",
    category: "ekip-arkadasi",
    location: "Online",
    author: {
      name: "Ahmet Kara",
      university: "Boğaziçi",
    },
    createdAt: "1 gün önce",
    tags: ["React", "Node.js", "PostgreSQL"],
    type: "need",
  },
  {
    id: "4",
    title: "Backend alanında ilerlemek isteyen birine mentor olabilirim",
    description:
      "5 yıllık backend deneyimim var. Python, FastAPI ve veritabanı tasarımı konularında yeni başlayanlara rehberlik edebilirim. Haftada 1 saat görüşme yapabiliriz.",
    category: "mentor",
    location: "Online",
    author: {
      name: "Zeynep Demir",
    },
    createdAt: "3 saat önce",
    tags: ["Python", "FastAPI", "Mentorluk"],
    type: "offer",
  },
];

/* ========================================
   How It Works Steps
   ======================================== */

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Hesabını oluştur",
    description:
      "Kendini kısaca tanıt, şehrini ve ilgi alanlarını seç.",
    icon: "UserPlus",
  },
  {
    step: 2,
    title: "İhtiyacını veya desteğini paylaş",
    description:
      "Ne aradığını ya da ne sunabileceğini belirt.",
    icon: "MessageSquarePlus",
  },
  {
    step: 3,
    title: "Uygun insanları keşfet",
    description:
      "Şehrindeki veya ilgi alanlarına uygun insanları bul.",
    icon: "Search",
  },
  {
    step: 4,
    title: "İletişime geç ve gerçekleştir",
    description:
      "Mesajlaş, tanış, birlikte üret!",
    icon: "Handshake",
  },
];

/* ========================================
   FAQ
   ======================================== */

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "buluş. ücretsiz mi?",
    answer:
      "Evet, buluş. tamamen ücretsiz bir platformdur. İhtiyaçlarını paylaşmak, fırsat aramak ve insanlarla bağlantı kurmak için herhangi bir ücret ödemene gerek yok.",
  },
  {
    question: "Kimler kullanabilir?",
    answer:
      "Öğrenciler, yeni mezunlar, profesyoneller, girişimciler — kısacası bir ihtiyacı olan veya birine yardım edebilecek herkes. buluş. insanları buluşturmak için tasarlandı.",
  },
  {
    question: "Güvenli mi?",
    answer:
      "Kullanıcı güvenliği bizim önceliğimizdir. Profiller doğrulanır, içerikler denetlenir ve güven puanı sistemiyle topluluk kalitesi korunur.",
  },
  {
    question: "Şehir dışında da kullanabilir miyim?",
    answer:
      "Elbette! Online fırsatlar ve uzaktan çalışma imkânları da platformda mevcut. Şehir filtresi sadece bir tercih, zorunluluk değil.",
  },
  {
    question: "İlanlar nasıl doğrulanıyor?",
    answer:
      "Her paylaşım topluluk kurallarına uygunluk açısından incelenir. Kullanıcılar da şüpheli içerikleri bildirebilir. Güven puanı sistemi kaliteli etkileşimleri ödüllendirir.",
  },
];

/* ========================================
   Cities
   ======================================== */

export const FEATURED_CITIES = [
  { name: "İstanbul", opportunityCount: 0 },
  { name: "Ankara", opportunityCount: 0 },
  { name: "İzmir", opportunityCount: 0 },
  { name: "Bursa", opportunityCount: 0 },
  { name: "Antalya", opportunityCount: 0 },
  { name: "Eskişehir", opportunityCount: 0 },
];

/* ========================================
   Stats
   ======================================== */

export const COMMUNITY_STATS = [
  { label: "Kayıtlı Kullanıcı", value: "0+" },
  { label: "Paylaşılan Fırsat", value: "0+" },
  { label: "Gerçekleştirilen Bağlantı", value: "0+" },
];

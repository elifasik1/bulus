"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Edit3,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Heart,
  HeartHandshake,
  Link as LinkIcon,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  Trash2,
  Users,
  X,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";

interface ProfileData {
  name: string;
  title: string;
  city: string;
  bio: string;
  status: string;
  quote: string;
  about: string;
}

const initialProfile: ProfileData = {
  name: "Elif Aşık",
  title: "Bilgisayar Mühendisi",
  city: "İstanbul",
  bio: "kod yazmayı, yeni insanlarla tanışmayı ve birlikte üretmeyi seviyorum.",
  status: "Fırsatlara açığım",
  quote: "İyi fikirler daha güzel insanlarla mümkün. ♡",
  about:
    "Bilgisayar mühendisliği mezunuyum. Yazılım geliştirmeye, yeni teknolojiler öğrenmeye ve insanlarla birlikte üretmeye tutkuyla bağlıyım. Fikirleri gerçeğe dönüştürebileceğimiz ekiplerde yer almak ve aynı zamanda başkalarının yolculuğuna destek olmak istiyorum.",
};

const initialWanted = [
  {
    title: "Junior Backend fırsatı",
    category: "Kariyer",
  },
  {
    title: "Yapay zeka projelerinde rol",
    category: "Proje",
  },
  {
    title: "Hackathon ekip arkadaşı",
    category: "Takım",
  },
];

const initialOffered = [
  "Backend geliştirme",
  "Python / FastAPI",
  "Veritabanı tasarımı",
  "Proje desteği",
  "Uygulama testi",
  "Mentorluk",
];

const initialSkills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "React",
  "Next.js",
  "Git",
  "Docker",
  "Problem Çözme",
  "Takım Çalışması",
  "İletişim",
  "UI/UX Temelleri",
];

const projects = [
  {
    title: "StudyBuddy",
    description:
      "Üniversite öğrencileri için çalışma arkadaşı bulma platformu.",
    tags: ["Next.js", "PostgreSQL", "React"],
    image: "/brand/hero-illustration.png",
    background: "bg-[#F3EFFB]",
  },
  {
    title: "PathFind",
    description:
      "Öğrenciler için staj ve etkinlik keşfetme uygulaması.",
    tags: ["React Native", "Firebase", "UI/UX"],
    image: "/brand/feed-illustration.png",
    background: "bg-[#FFF4EA]",
  },
  {
    title: "MoodAI",
    description:
      "Duygu analizi ile günlük ruh hali takibi yapan yapay zeka projesi.",
    tags: ["Python", "FastAPI", "AI"],
    image: "/brand/saved-illustration.png",
    background: "bg-[#EAF3EC]",
  },
];

const connections = [
  {
    name: "Zeynep Kaya",
    role: "UI/UX Tasarımcısı",
    city: "İstanbul",
    image: "/brand/hero-illustration.png",
  },
  {
    name: "Can Yılmaz",
    role: "Fullstack Geliştirici",
    city: "Ankara",
    image: "/brand/feed-illustration.png",
  },
  {
    name: "Selin Şahin",
    role: "Yapay Zeka Araştırmacısı",
    city: "İstanbul",
    image: "/brand/profile-cat.png",
  },
];

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile);

  const [wanted, setWanted] = useState(initialWanted);
  const [offered, setOffered] = useState(initialOffered);
  const [skills, setSkills] = useState(initialSkills);

  const [isEditing, setIsEditing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const [newWanted, setNewWanted] = useState("");
  const [newOffered, setNewOffered] = useState("");
  const [newSkill, setNewSkill] = useState("");

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const addWanted = () => {
    if (!newWanted.trim()) return;

    setWanted([
      ...wanted,
      {
        title: newWanted.trim(),
        category: "Diğer",
      },
    ]);

    setNewWanted("");
    showToast("Aradığın fırsat eklendi.");
  };

  const addOffered = () => {
    if (!newOffered.trim()) return;

    if (!offered.includes(newOffered.trim())) {
      setOffered([...offered, newOffered.trim()]);
    }

    setNewOffered("");
    showToast("Sunabileceğin şey eklendi.");
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;

    if (!skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
    }

    setNewSkill("");
    showToast("Yeni beceri eklendi.");
  };

  const saveProfile = () => {
    setIsEditing(false);
    showToast("Profilin güncellendi. ✨");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      {/* Toast */}
      {toast && (
        <div className="fixed right-5 top-20 z-50 flex items-center gap-2 rounded-2xl bg-[#0D4842] px-5 py-3 text-xs font-bold text-white shadow-xl">
          <CheckCircle2 size={17} />
          {toast}
        </div>
      )}

      <main className="flex-1">
        {/* =====================================================
            PROFILE HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#FFF6EE]">
          <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#DCC7EB]/35" />
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#F7A695]/25" />

          <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
            <div className="flex justify-end">
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E2D5CB] bg-white px-4 py-2.5 text-xs font-bold text-[#4B2E4D] shadow-sm transition hover:bg-[#FAF7F2]"
                >
                  <Edit3 size={14} />
                  Profili düzenle
                </button>
              )}

              {isEditing && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setProfile(initialProfile);
                      setIsEditing(false);
                    }}
                    className="rounded-full border border-[#E2D5CB] bg-white px-4 py-2.5 text-xs font-bold text-[#756860]"
                  >
                    Vazgeç
                  </button>

                  <button
                    type="button"
                    onClick={saveProfile}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0D4842] px-4 py-2.5 text-xs font-bold text-white"
                  >
                    <Check size={14} />
                    Kaydet
                  </button>
                </div>
              )}
            </div>

            <div className="mt-7 grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
              {/* Intro */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                    Buluş. profili
                  </span>

                  <span className="h-1 w-1 rounded-full bg-[#C47E6E]" />

                  <span className="text-[10px] font-bold text-[#8D8078]">
                    Aktif üye
                  </span>
                </div>

                {isEditing ? (
                  <div className="mt-4 space-y-3">
                    <input
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-[#DCCFC5] bg-white px-4 py-3 text-2xl font-extrabold text-[#4B2E4D] outline-none focus:border-[#0D4842]"
                    />

                    <input
                      value={profile.title}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          title: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-[#DCCFC5] bg-white px-4 py-3 text-sm font-semibold text-[#675B54] outline-none focus:border-[#0D4842]"
                    />

                    <textarea
                      rows={2}
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          bio: e.target.value,
                        })
                      }
                      className="w-full resize-none rounded-xl border border-[#DCCFC5] bg-white px-4 py-3 text-sm text-[#675B54] outline-none focus:border-[#0D4842]"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#4B2E4D] sm:text-5xl">
                      {profile.name}
                    </h1>

                    <p className="mt-2 text-sm font-bold text-[#5F524B]">
                      {profile.title}
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#74675F]">
                      {profile.bio}
                    </p>
                  </>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#81746C]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#0D4842]" />
                    {profile.city}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <GraduationCap
                      size={14}
                      className="text-[#0D4842]"
                    />
                    Bilgisayar Mühendisliği
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#CDE3D3] bg-[#EAF3EC] px-3 py-2 text-[10px] font-extrabold text-[#296841]">
                    <span className="h-2 w-2 rounded-full bg-[#4C9469]" />
                    {profile.status}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E5DAD0] bg-white px-3 py-2 text-[10px] font-bold text-[#6E615A]">
                    <CheckCircle2 size={13} />
                    Profil tamamlandı
                  </span>
                </div>
              </div>

              {/* Photo */}
              <div className="flex flex-col items-center">
                <div className="relative h-44 w-44 overflow-hidden rounded-[2.5rem] border-4 border-white bg-[#DCC7EB] shadow-md sm:h-48 sm:w-48">
                  <Image
                    src="/brand/hero-illustration.png"
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute right-3 top-3 h-4 w-4 rounded-full border-2 border-white bg-[#4C9469]" />
                </div>

                <p className="mt-4 max-w-[190px] text-center text-sm leading-5 text-[#756860]">
                  “{profile.quote}”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BODY
        ====================================================== */}
        <div className="mx-auto max-w-5xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]">
            {/* =================================================
                MAIN
            ================================================== */}
            <div className="space-y-5">
              {/* ARIYORUM */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <SectionHeader
                  eyebrow="İhtiyaçlarım"
                  title="Arıyorum"
                  icon={Search}
                  iconBackground="bg-[#F1E8F5]"
                  iconColor="text-[#6B4B73]"
                />

                <p className="mt-2 text-xs leading-5 text-[#81746C]">
                  Şu sıralar hayatımda veya projelerimde
                  karşıma çıkmasını istediğim şeyler.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {wanted.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="group relative rounded-2xl border border-[#E6DBD2] bg-[#FAF7F2] p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                    >
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#C47E6E]">
                        {item.category}
                      </span>

                      <p className="mt-2 pr-5 text-sm font-extrabold leading-5 text-[#4B2E4D]">
                        {item.title}
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setWanted(
                            wanted.filter((_, i) => i !== index)
                          );
                          showToast("Aradığın fırsat kaldırıldı.");
                        }}
                        className="absolute right-3 top-3 hidden rounded-full p-1 text-[#A0948C] hover:text-red-500 group-hover:block"
                        aria-label="Kaldır"
                      >
                        <X size={13} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <input
                    value={newWanted}
                    onChange={(e) => setNewWanted(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addWanted();
                      }
                    }}
                    placeholder="Başka ne arıyorsun?"
                    className="min-w-0 flex-1 rounded-xl border border-[#E6DBD2] bg-[#FAF7F2] px-3 py-2.5 text-xs outline-none focus:border-[#0D4842]"
                  />

                  <button
                    type="button"
                    onClick={addWanted}
                    className="flex items-center gap-1.5 rounded-xl bg-[#F1E8F5] px-3.5 py-2.5 text-xs font-bold text-[#6B4B73]"
                  >
                    <Plus size={14} />
                    Ekle
                  </button>
                </div>
              </section>

              {/* SUNABİLİRİM */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <SectionHeader
                  eyebrow="Katkılarım"
                  title="Sunabilirim"
                  icon={HeartHandshake}
                  iconBackground="bg-[#EAF3EC]"
                  iconColor="text-[#296841]"
                />

                <p className="mt-2 text-xs leading-5 text-[#81746C]">
                  Deneyimimi, becerilerimi veya zamanımı
                  başkasının işine yarayacak şekilde paylaşabilirim.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {offered.map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-[#DCE8DE] bg-[#F2F8F3] px-3.5 py-2 text-xs font-bold text-[#38634A]"
                    >
                      {item}

                      <button
                        type="button"
                        onClick={() => {
                          setOffered(
                            offered.filter((_, i) => i !== index)
                          );
                          showToast("Sunabileceğin şey kaldırıldı.");
                        }}
                        className="text-[#7B9783] hover:text-red-500"
                        aria-label="Kaldır"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <input
                    value={newOffered}
                    onChange={(e) =>
                      setNewOffered(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addOffered();
                      }
                    }}
                    placeholder="Neyi paylaşabilirsin?"
                    className="min-w-0 flex-1 rounded-xl border border-[#E6DBD2] bg-[#FAF7F2] px-3 py-2.5 text-xs outline-none focus:border-[#0D4842]"
                  />

                  <button
                    type="button"
                    onClick={addOffered}
                    className="flex items-center gap-1.5 rounded-xl bg-[#EAF3EC] px-3.5 py-2.5 text-xs font-bold text-[#296841]"
                  >
                    <Plus size={14} />
                    Ekle
                  </button>
                </div>
              </section>

              {/* HAKKIMDA */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <SectionHeader
                  eyebrow="Biraz daha"
                  title="Hakkımda"
                  icon={Heart}
                  iconBackground="bg-[#FFF0EA]"
                  iconColor="text-[#D9674A]"
                />

                {isEditing ? (
                  <textarea
                    rows={6}
                    value={profile.about}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        about: e.target.value,
                      })
                    }
                    className="mt-5 w-full resize-none rounded-2xl border border-[#DCCFC5] bg-[#FAF7F2] p-4 text-sm leading-6 text-[#514640] outline-none focus:border-[#0D4842]"
                  />
                ) : (
                  <p className="mt-5 text-sm leading-7 text-[#514640]">
                    {profile.about}
                  </p>
                )}
              </section>

              {/* PROJECTS */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <SectionHeader
                    eyebrow="Ürettiklerim"
                    title="Projelerim"
                    icon={FolderKanban}
                    iconBackground="bg-[#F1E8F5]"
                    iconColor="text-[#6B4B73]"
                  />

                  <button
                    type="button"
                    className="hidden items-center gap-1 text-[10px] font-extrabold text-[#0D4842] sm:flex"
                  >
                    Proje ekle
                    <Plus size={13} />
                  </button>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {projects.map((project) => (
                    <article
                      key={project.title}
                      className="group overflow-hidden rounded-2xl border border-[#E7DDD3] bg-white transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div
                        className={`relative flex h-32 items-center justify-center overflow-hidden ${project.background}`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={150}
                          height={100}
                          className="h-24 w-auto object-contain transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-sm font-extrabold text-[#4B2E4D] group-hover:text-[#0D4842]">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-5 text-[#7E7068]">
                          {project.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#FAF7F2] px-2 py-1 text-[9px] font-bold text-[#756860]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* SKILLS */}
              <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
                <SectionHeader
                  eyebrow="Neler biliyorum?"
                  title="Becerilerim"
                  icon={CheckCircle2}
                  iconBackground="bg-[#EAF3EC]"
                  iconColor="text-[#296841]"
                />

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="group inline-flex items-center gap-2 rounded-full border border-[#E6DBD2] bg-[#FAF7F2] px-3.5 py-2 text-xs font-bold text-[#514640]"
                    >
                      {skill}

                      <button
                        type="button"
                        onClick={() => {
                          setSkills(
                            skills.filter((item) => item !== skill)
                          );
                          showToast(`"${skill}" kaldırıldı.`);
                        }}
                        className="text-[#A0948C] hover:text-red-500"
                        aria-label={`${skill} kaldır`}
                      >
                        <X size={11} />
                      </button>
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2">
                  <input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                    placeholder="Yeni bir beceri ekle..."
                    className="min-w-0 flex-1 rounded-xl border border-[#E6DBD2] bg-[#FAF7F2] px-3 py-2.5 text-xs outline-none focus:border-[#0D4842]"
                  />

                  <button
                    type="button"
                    onClick={addSkill}
                    className="flex items-center gap-1.5 rounded-xl bg-[#EAF3EC] px-3.5 py-2.5 text-xs font-bold text-[#296841]"
                  >
                    <Plus size={14} />
                    Ekle
                  </button>
                </div>
              </section>
            </div>

            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="space-y-5">
              {/* CONNECT */}
              <div className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1E8F5] text-[#6B4B73]">
                  <MessageCircle size={20} />
                </div>

                <h2 className="mt-4 text-lg font-extrabold text-[#4B2E4D]">
                  Elif&apos;le tanış
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#7E7068]">
                  Ortak bir fırsat, proje veya ilgi alanınız
                  varsa konuşmaya başlayabilirsiniz.
                </p>

                <Link
                  href="/mesajlar"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D4842] px-4 py-3.5 text-xs font-extrabold text-white transition hover:bg-[#093A36]"
                >
                  <Send size={15} />
                  Mesaj gönder
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* PROFILE STATS */}
              <div className="rounded-[2rem] bg-[#4B2E4D] p-5 text-white sm:p-6">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#F7A695]" />

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/50">
                    Buluş hikayesi
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <ProfileStat
                    icon={Users}
                    value="12"
                    label="bağlantı"
                  />

                  <ProfileStat
                    icon={HeartHandshake}
                    value="7"
                    label="kişiye yardımcı oldu"
                  />

                  <ProfileStat
                    icon={Star}
                    value="4.9"
                    label="güven puanı"
                  />
                </div>
              </div>

              {/* SOCIAL */}
              <div className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#C47E6E]">
                  Bağlantılar
                </p>

                <h3 className="mt-1 text-base font-extrabold text-[#4B2E4D]">
                  Beni başka yerde de bul
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <SocialButton
                    icon={LinkIcon}
                    label="GitHub"
                  />

                  <SocialButton
                    icon={ExternalLink}
                    label="Web"
                  />

                  <SocialButton
                    icon={Briefcase}
                    label="LinkedIn"
                  />
                </div>
              </div>

              {/* CONNECTIONS */}
              <div className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#C47E6E]">
                      İnsanlar
                    </p>

                    <h3 className="mt-1 text-base font-extrabold text-[#4B2E4D]">
                      Bağlantılarım
                    </h3>
                  </div>

                  <Link
                    href="/baglantilar"
                    className="text-[10px] font-extrabold text-[#0D4842]"
                  >
                    Tümü
                  </Link>
                </div>

                <div className="mt-4 space-y-3">
                  {connections.map((person) => (
                    <div
                      key={person.name}
                      className="flex items-center gap-3"
                    >
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl bg-[#F1E8F5]">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-xs font-extrabold text-[#4B2E4D]">
                          {person.name}
                        </p>

                        <p className="truncate text-[9px] text-[#81746C]">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MINI MESSAGE */}
              <div className="rounded-[2rem] bg-[#FFF6EE] p-5">
                <Heart
                  size={18}
                  className="text-[#C47E6E]"
                />

                <p className="mt-3 text-sm font-extrabold leading-6 text-[#4B2E4D]">
                  Burada herkesin verecek bir şeyi,
                  arayacak bir insanı var.
                </p>

                <p className="mt-2 text-[10px] font-semibold text-[#8A7C73]">
                  buluş.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

/* =============================================================
   SECTION HEADER
============================================================= */

function SectionHeader({
  eyebrow,
  title,
  icon: Icon,
  iconBackground,
  iconColor,
}: {
  eyebrow: string;
  title: string;
  icon: typeof Search;
  iconBackground: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBackground} ${iconColor}`}
      >
        <Icon size={18} />
      </div>

      <div>
        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
          {eyebrow}
        </p>

        <h2 className="mt-0.5 text-lg font-extrabold text-[#4B2E4D]">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* =============================================================
   PROFILE STAT
============================================================= */

function ProfileStat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
        <Icon size={16} className="text-[#F7A695]" />
      </div>

      <div>
        <p className="text-base font-extrabold">
          {value}
        </p>

        <p className="text-[10px] text-white/50">
          {label}
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   SOCIAL BUTTON
============================================================= */

function SocialButton({
  icon: Icon,
  label,
}: {
  icon: typeof LinkIcon;
  label: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-xl border border-[#E6DBD2] bg-[#FAF7F2] px-3 py-2.5 text-[10px] font-bold text-[#5E514B] transition hover:border-[#0D4842] hover:text-[#0D4842]"
    >
      <Icon size={13} />
      {label}
    </button>
  );
}
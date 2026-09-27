import Link from "next/link";
import {
  ArrowLeft,
  LockKeyhole,
  Database,
  UserRound,
  Eye,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";

const sections = [
  {
    icon: UserRound,
    title: "1. Hangi bilgileri topluyoruz?",
    content:
      "Buluş.'u kullanırken hesap oluşturmak için gerekli temel bilgileri, profilinde paylaşmayı seçtiğin bilgileri ve platformu kullanırken oluşturduğun içerikleri işleyebiliriz. Hangi bilgilerin zorunlu olduğu veya isteğe bağlı olduğu ilgili ekranlarda belirtilir.",
  },
  {
    icon: Database,
    title: "2. Bilgilerini neden kullanıyoruz?",
    content:
      "Bilgilerini hesabını oluşturmak ve yönetmek, profilini göstermek, fırsatları sunmak, kullanıcıların birbirleriyle iletişim kurmasını sağlamak ve platformun güvenli şekilde çalışmasına yardımcı olmak için kullanabiliriz.",
  },
  {
    icon: Eye,
    title: "3. Profil bilgilerin",
    content:
      "Buluş.'un temel amacı insanların birbirini bulabilmesidir. Bu nedenle profilinde herkese açık olarak paylaşmayı seçtiğin bilgiler, platformdaki diğer kullanıcılar tarafından görüntülenebilir. Profiline hangi bilgileri ekleyeceğine dikkat etmeni öneririz.",
  },
  {
    icon: LockKeyhole,
    title: "4. Güvenlik",
    content:
      "Bilgilerini korumak için uygun teknik ve organizasyonel önlemleri almaya çalışıyoruz. Bununla birlikte internet üzerinden gerçekleştirilen hiçbir sistemin mutlak güvenlik garantisi veremeyeceğini unutma.",
  },
];

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      <main className="px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-4xl">
          {/* Back */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#7E7068] transition hover:text-[#4B2E4D]"
          >
            <ArrowLeft size={16} />
            Ana sayfaya dön
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="font-handwriting text-xl text-[#2C6E49]">
              bilgilerin bize emanet ♡
            </span>

            <h1 className="mt-2 font-serif text-4xl font-extrabold leading-tight text-[#1F1714] sm:text-5xl">
              Gizlilik Politikası
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6E615A] sm:text-base">
              Buluş.'u kullanırken kişisel bilgilerinin nasıl ele alındığını
              mümkün olduğunca açık ve anlaşılır şekilde anlatmak istiyoruz.
            </p>

            <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#8A7971] ring-1 ring-[#EAE2D8]">
              Son güncelleme: 11 Eylül 2026
            </div>
          </header>

          {/* Main privacy card */}
          <div className="mb-5 overflow-hidden rounded-3xl bg-[#4B2E4D] p-6 text-white sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#F7A695]">
                <LockKeyhole size={23} />
              </div>

              <div>
                <p className="font-handwriting text-xl text-[#F7A695]">
                  kısa ve açık.
                </p>

                <p className="mt-2 text-sm leading-7 text-white/75 sm:text-base">
                  Kişisel bilgilerini yalnızca Buluş.'un çalışması ve sana
                  sunduğu deneyimin gerektirdiği amaçlar doğrultusunda
                  kullanmayı hedefliyoruz. Gereksiz veri toplamamaya ve
                  bilgilerinin güvenliğini korumaya önem veriyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.title}
                  className="rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F3EA] text-[#2C6E49]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h2 className="text-base font-extrabold text-[#1F1714] sm:text-lg">
                        {section.title}
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}

            <section className="rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-7">
              <h2 className="text-base font-extrabold text-[#1F1714] sm:text-lg">
                5. Mesajlar ve iletişim
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                Buluş.'ta kullanıcılar fırsatlar üzerinden birbirleriyle
                iletişim kurabilir. İletişim sırasında paylaştığın bilgilerin
                karşı taraf tarafından görülebileceğini göz önünde
                bulundurmalısın. Şifre, banka bilgileri veya hassas kişisel
                bilgilerini paylaşmamanı öneririz.
              </p>
            </section>

            <section className="rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-7">
              <h2 className="text-base font-extrabold text-[#1F1714] sm:text-lg">
                6. Üçüncü taraf hizmetleri
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                Platformun çalışması için kimlik doğrulama, barındırma,
                veritabanı, depolama veya benzeri hizmetler sağlayan üçüncü
                taraf servislerden yararlanabiliriz. Bu servislerle ilgili
                ayrıntılar, Buluş.'un teknik altyapısı kesinleştikçe bu
                politikada güncellenecektir.
              </p>
            </section>

            <section className="rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-7">
              <h2 className="text-base font-extrabold text-[#1F1714] sm:text-lg">
                7. Hakların ve iletişim
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                Kişisel verilerinle ilgili bir talebin, sorunun veya gizlilik
                konusunda bir endişen varsa bizimle iletişime geçebilirsin.
                Uygulanabilir mevzuat kapsamındaki hakların doğrultusunda
                taleplerini değerlendireceğiz.
              </p>
            </section>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-3xl bg-[#FFF0EB] p-6 text-center sm:p-8">
            <p className="font-handwriting text-xl text-[#D9674A]">
              daha fazlasını merak ediyorsan...
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-[#1F1714]">
              Bize ulaşabilirsin.
            </h2>

            <p className="mt-2 text-sm text-[#6E615A]">
              Gizlilikle ilgili soruların için buradayız.
            </p>

            <Link
              href="/iletisim"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4B2E4D] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#3C243E]"
            >
              İletişime geç
            </Link>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
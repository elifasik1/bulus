import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Users,
  MessageCircle,
  FileText,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";

const sections = [
  {
    icon: Users,
    title: "1. Buluş.'u kullanmak",
    content:
      "Buluş.'u kullanarak bu kullanım koşullarını kabul etmiş olursun. Platformu yalnızca yasal amaçlarla ve diğer kullanıcıların haklarına saygı göstererek kullanmalısın.",
  },
  {
    icon: FileText,
    title: "2. Paylaşılan içerikler",
    content:
      "Buluş.'ta paylaştığın fırsat, profil bilgileri ve diğer içeriklerin sana ait ve paylaşmaya yetkili olduğun bilgiler olmalıdır. Başka kişilerin haklarını ihlal eden, yanıltıcı veya hukuka aykırı içerikler paylaşmamalısın.",
  },
  {
    icon: MessageCircle,
    title: "3. İnsanlarla iletişim",
    content:
      "Buluş. insanların birbirleriyle tanışmasını ve fırsatlar üzerinden iletişim kurmasını sağlar. Diğer kullanıcılarla iletişiminde saygılı davranmalı; tehdit, taciz, spam, dolandırıcılık veya başka kullanıcıları yanıltmaya yönelik davranışlarda bulunmamalısın.",
  },
  {
    icon: ShieldCheck,
    title: "4. Güvenlik ve moderasyon",
    content:
      "Topluluğun güvenli ve faydalı kalabilmesi için kurallara aykırı içerikleri inceleyebilir, kaldırabilir veya gerekli durumlarda kullanıcıların platform erişimini sınırlandırabiliriz.",
  },
];

export default function KullanimKosullariPage() {
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
            <span className="font-handwriting text-xl text-[#D9674A]">
              birlikte daha iyi bir alan ♡
            </span>

            <h1 className="mt-2 font-serif text-4xl font-extrabold leading-tight text-[#1F1714] sm:text-5xl">
              Kullanım Koşulları
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6E615A] sm:text-base">
              Buluş.'u kullanırken hepimiz için güvenli, saygılı ve faydalı bir
              ortam oluşturabilmek için temel kurallarımızı burada bulabilirsin.
            </p>

            <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#8A7971] ring-1 ring-[#EAE2D8]">
              Son güncelleme: 11 Eylül 2026
            </div>
          </header>

          {/* Intro */}
          <div className="mb-5 rounded-3xl border border-[#EADBD6] bg-[#4B2E4D] p-6 text-white sm:p-8">
            <p className="font-handwriting text-xl text-[#F7A695]">
              önce insan. ♡
            </p>

            <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
              Buluş.'un temelinde insanların birbirine ulaşabilmesi var.
              Platformu kullanırken amacımızın yalnızca fırsat paylaşmak değil,
              güvenilir ve anlamlı bağlantılar kurmak olduğunu unutma.
            </p>
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EB] text-[#D9674A]">
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
                5. Fırsatların niteliği
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                Buluş.'ta paylaşılan fırsatlar farklı kullanıcılar tarafından
                oluşturulabilir. Bir fırsatla iletişime geçmeden veya herhangi
                bir karar vermeden önce paylaşılan bilgileri kendi değerlendirmen
                ve gerekli kontrolleri yapman önemlidir.
              </p>
            </section>

            <section className="rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-7">
              <h2 className="text-base font-extrabold text-[#1F1714] sm:text-lg">
                6. Hesabın
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                Hesabının güvenliğinden sen sorumlusun. Hesabına ait bilgileri
                başkalarıyla paylaşmamalı ve hesabın üzerinden gerçekleştirilen
                işlemlerin güvenliğini korumalısın.
              </p>
            </section>

            <section className="rounded-3xl border border-[#F0E6DA] bg-white p-6 shadow-xs sm:p-7">
              <h2 className="text-base font-extrabold text-[#1F1714] sm:text-lg">
                7. Koşullarda değişiklik
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6E615A]">
                Buluş. geliştikçe bu koşullarda güncellemeler yapabiliriz.
                Önemli değişiklikler olduğunda kullanıcılarımızı uygun
                kanallardan bilgilendirmeye çalışacağız.
              </p>
            </section>
          </div>

          {/* Bottom */}
          <div className="mt-10 rounded-3xl bg-[#E9F3EA] p-6 text-center sm:p-8">
            <p className="font-handwriting text-xl text-[#2C6E49]">
              bir sorunun mu var? ✨
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-[#1F1714]">
              Bizimle iletişime geçebilirsin.
            </h2>

            <p className="mt-2 text-sm text-[#6E615A]">
              Koşullarla ilgili aklına takılan bir şey varsa bize ulaş.
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
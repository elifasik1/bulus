import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Users,
  Compass,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      <main className="overflow-hidden">

        {/* Hero */}
        <section className="relative px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
          <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#DCC7EB]/30 blur-3xl" />
          <div className="absolute -right-20 top-32 h-64 w-64 rounded-full bg-[#F7A695]/20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#7E7068] transition hover:text-[#4B2E4D]"
            >
              <ArrowLeft size={16} />
              Ana sayfaya dön
            </Link>

            <div className="max-w-3xl">
              <span className="font-handwriting text-xl text-[#D9674A]">
                biz neden buradayız? ♡
              </span>

              <h1 className="mt-3 font-serif text-4xl font-extrabold leading-tight text-[#1F1714] sm:text-5xl lg:text-6xl">
                Çevren yoksa,
                <br />
                <span className="text-[#4B2E4D]">çevreni oluştur.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6E615A] sm:text-lg">
                Herkes aynı çevreyle başlamıyor. Bazen ihtiyacımız olan
                fırsat, bilgi veya insan sadece ulaşamadığımız kadar uzakta
                oluyor. Buluş. bu mesafeyi biraz olsun kapatmak için var.
              </p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-5">
                <span className="font-handwriting text-xl text-[#2C6E49]">
                  hepimiz aynı yerden başlamıyoruz.
                </span>

                <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#1F1714] sm:text-4xl">
                  Herkes aynı çevreyle başlamıyor.
                </h2>
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm leading-8 text-[#6E615A] sm:text-base">
                  Birinin staj bulmasını sağlayan tanıdığı olabilir. Bir
                  başkasının projesine destek olacak doğru insan zaten
                  çevresinde olabilir. Bir başkası ise ne aradığını biliyor
                  ama kime soracağını bilmiyor.
                </p>

                <p className="mt-5 text-sm leading-8 text-[#6E615A] sm:text-base">
                  Buluş. tam burada devreye giriyor. İnsanların sadece
                  kendilerini göstermek için değil, gerçekten bir şeye ihtiyaç
                  duyduklarında veya bir şey sunabildiklerinde bir araya
                  gelebileceği bir alan oluşturuyoruz.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* What is Bulus */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] bg-[#4B2E4D] p-7 text-white sm:p-10 lg:p-12">

              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

                <div className="lg:col-span-7">
                  <span className="font-handwriting text-xl text-[#F7A695]">
                    peki buluş. ne?
                  </span>

                  <h2 className="mt-2 font-serif text-3xl font-extrabold sm:text-4xl">
                    Bir ilan panosundan
                    <br />
                    biraz daha fazlası.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                    Buluş. insanların gerçek ihtiyaçlarını ve
                    sunabileceklerini paylaşabildiği bir fırsat ağı.
                    İşten staja, projeden mentorluğa, ekip arkadaşından
                    kullanıcı testine kadar birçok farklı şey burada bir
                    buluşma noktası olabilir.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:col-span-5">
                  <ValueCard
                    icon={Heart}
                    title="İhtiyacım var"
                    text="Bir fırsat veya insan ara."
                  />
                  <ValueCard
                    icon={Users}
                    title="Sunabilirim"
                    text="Bildiklerini ve deneyimini paylaş."
                  />
                  <ValueCard
                    icon={Compass}
                    title="Keşfet"
                    text="Yeni insanları ve fırsatları bul."
                  />
                  <ValueCard
                    icon={Sparkles}
                    title="Buluş"
                    text="Tanış, üret, birlikte ilerle."
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-[#FFF4EE] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <span className="font-handwriting text-2xl text-[#2C6E49]">
              küçük bir döngü. büyük bir etki.
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-extrabold text-[#1F1714] sm:text-4xl">
              Bugün aradığın insan,
              <br />
              yarın başkasının ihtiyacı olabilir.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6E615A] sm:text-base">
              Buluş.'ta insanlar sadece fırsat aramaz. Zamanla deneyimlerini,
              bilgilerini ve çevrelerini başkalarıyla paylaşmaya da başlar.
              Böylece topluluk büyüdükçe fırsatlar da büyür.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10">
              <span className="font-handwriting text-xl text-[#D9674A]">
                nasıl bir yer olsun istiyoruz?
              </span>

              <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#1F1714] sm:text-4xl">
                Buluş. bizim için ne demek?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ValueBlock
                number="01"
                title="İnsan önce gelir."
                text="Burada bir profilin arkasında gerçek bir insan olduğunu unutmuyoruz."
              />

              <ValueBlock
                number="02"
                title="Gerçek ihtiyaçlar."
                text="Gösteriş için değil, gerçekten bir şey aradığımızda veya sunabildiğimizde paylaşırız."
              />

              <ValueBlock
                number="03"
                title="Herkes katkı sağlayabilir."
                text="Bir fırsat ararken bile başkasına yardımcı olabileceğin bir şey mutlaka vardır."
              />

              <ValueBlock
                number="04"
                title="Çevre paylaşılabilir."
                text="İyi bir bağlantıyı sadece kendimize saklamak yerine birbirimize ulaştırabiliriz."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#E9F3EA] px-6 py-10 text-center sm:px-10">
            <span className="font-handwriting text-xl text-[#2C6E49]">
              şimdi sıra sende ✨
            </span>

            <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#1F1714] sm:text-4xl">
              Çevreni birlikte oluşturalım.
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#6E615A]">
              Aradığın insan sandığından daha yakın olabilir.
            </p>

            <Link
              href="/giris"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#4B2E4D] px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#3C243E]"
            >
              Buluş.'a katıl
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      <MobileNav />
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
      <Icon size={20} className="text-[#F7A695]" />

      <p className="mt-4 text-sm font-extrabold">{title}</p>

      <p className="mt-1 text-xs leading-5 text-white/60">{text}</p>
    </div>
  );
}

function ValueBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-[#F0E6DA] bg-white p-6">
      <span className="text-xs font-extrabold tracking-widest text-[#D9674A]">
        {number}
      </span>

      <h3 className="mt-3 text-lg font-extrabold text-[#1F1714]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#6E615A]">
        {text}
      </p>
    </div>
  );
}
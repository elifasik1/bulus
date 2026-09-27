"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Buluş. tam olarak ne?",
    answer:
      "Buluş., ihtiyacın olan insanı bulmanı sağlayan bir fırsat ağı. İş, staj, proje, mentorluk, ekip arkadaşı, kullanıcı testi, eğitim, ev arkadaşı gibi ihtiyaçlarını paylaşabilir; başkalarının sunduğu fırsatları keşfedebilirsin.",
  },
  {
    question: "Çevrem yoksa Buluş.'ta ne yapabilirim?",
    answer:
      "Zaten Buluş.'un çıkış noktası bu. Herkes aynı çevreyle başlamıyor. İhtiyacını açıkça paylaşarak seni tanımayan ama sana yardımcı olabilecek insanlara ulaşabilirsin.",
  },
  {
    question: "Buluş. bir iş ilanı sitesi mi?",
    answer:
      "Hayır. Buluş.'ta sadece şirketler ilan yayınlamaz. Öğrenciler, yeni mezunlar ve çalışanlar da gerçek ihtiyaçlarını ve sunabilecekleri şeyleri paylaşır. Bir fırsat bir iş olabilir; ama bir proje arkadaşı, mentor veya kullanıcı testçisi de olabilir.",
  },
  {
    question: "Ben de fırsat paylaşabilir miyim?",
    answer:
      'Evet. Bir şeye ihtiyacın varsa "Arıyorum", bir konuda yardımcı olabiliyorsan "Sunuyorum" diyerek paylaşabilirsin.',
  },
  {
    question: "Sadece iş ve staj mı var?",
    answer:
      "Hayır. Buluş.'ta bir proje için ekip arkadaşı, tez için katılımcı, uygulaman için test kullanıcısı, bir konuda mentor, ev arkadaşı veya birlikte öğrenebileceğin birini de arayabilirsin.",
  },
  {
    question: "Buluş.'ta insanlarla nasıl iletişime geçiyorum?",
    answer:
      "İlgini çeken bir fırsatı gördüğünde kişiyle iletişime geçebilir ve mesajlaşmaya başlayabilirsin. Çünkü Buluş.'ta amaç sadece bir ilana başvurmak değil, insanlarla tanışmak.",
  },
  {
    question: "Başka şehirdeki insanları da bulabilir miyim?",
    answer:
      "Evet. Kendi şehrindeki fırsatları keşfedebilir, farklı şehirlerdeki insanlara ve online fırsatlara da ulaşabilirsin.",
  },
  {
    question: "Bir fırsatı kaydedersem ne olur?",
    answer:
      "İlgini çeken fırsatı kaydedip daha sonra Kaydettiklerin alanından tekrar ulaşabilirsin. Böylece gördüğün her şeyi o anda değerlendirmek zorunda kalmazsın.",
  },
  {
    question: "Buluş.'ta profil neden önemli?",
    answer:
      "Çünkü burada sadece bir ilanla değil, bir insanla tanışıyorsun. Profilin; neler yaptığını, neler aradığını ve neler sunabileceğini karşı tarafa anlatan küçük bir tanışma alanı.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF6EE] px-4 py-20 sm:px-6 sm:py-28">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-24 top-20 h-48 w-48 rounded-full bg-[#DCC7EB]/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-56 w-56 rounded-full bg-[#F7A695]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#806D7E] shadow-sm ring-1 ring-[#eadbd6]">
            <MessageCircle className="h-4 w-4 text-[#F19A88]" />
            Merak ettiklerin
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#4B2E4D] sm:text-4xl lg:text-5xl">
            Aklında bir soru mu var?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#806D7E] sm:text-base">
            Buluş. hakkında en çok merak edilenleri burada cevapladık.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#DCC7EB] shadow-[0_10px_35px_rgba(75,46,77,0.08)]"
                    : "border-[#eadbd6] shadow-[0_4px_18px_rgba(75,46,77,0.035)] hover:border-[#d9c6d6]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-extrabold text-[#4B2E4D] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#4B2E4D] text-white"
                        : "bg-[#FFF0EC] text-[#806D7E]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#f0e6e2] px-5 pb-6 pt-4 sm:px-6">
                      <p className="text-sm leading-7 text-[#806D7E]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl bg-[#4B2E4D] px-6 py-8 text-center shadow-[0_15px_45px_rgba(75,46,77,0.15)] sm:px-10 sm:py-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7A695] text-[#4B2E4D]">
            <MessageCircle className="h-5 w-5" />
          </div>

          <h3 className="mt-5 text-xl font-extrabold text-white sm:text-2xl">
            Aklında hâlâ bir soru mu var?
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/70">
            Bize yaz, birlikte bulalım. ✨
          </p>

          <Link
            href="/iletisim"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#4B2E4D] transition hover:-translate-y-0.5 hover:bg-[#FFF6EE]"
          >
            Bize ulaş
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
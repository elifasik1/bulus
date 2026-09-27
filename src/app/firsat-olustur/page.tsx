"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Sparkles,
  Sprout,
  Search,
} from "lucide-react";

import AppHeader from "@/components/navigation/AppHeader";
import MobileNav from "@/components/navigation/MobileNav";
import Footer from "@/components/navigation/Footer";

type OpportunityType = "Arıyorum" | "Sunuyorum";

export default function CreateOpportunityPage() {
  const router = useRouter();

  const [type, setType] = useState<OpportunityType>("Arıyorum");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("İstanbul");
  const [workType, setWorkType] = useState("Fark etmez");
  const [expiryDate, setExpiryDate] = useState("");

  const isLooking = type === "Arıyorum";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Backend bağlantısı geldiğinde burada API isteği yapılacak.
    router.push("/feed");
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#2C2623]">
      <AppHeader />

      <main className="flex-1">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#FFF6EE]">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#DCC7EB]/35" />
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#F7A695]/25" />

          <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
            <button
              onClick={() => router.back()}
              className="mb-7 inline-flex items-center gap-1.5 text-xs font-bold text-[#756860] transition hover:text-[#4B2E4D]"
            >
              <ArrowLeft size={16} />
              Geri dön
            </button>

            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0D4842] shadow-sm">
                <Sparkles size={13} />
                Topluluğa bir şey bırak
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#4B2E4D] sm:text-5xl">
                Bir şey paylaş.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#74675F] sm:text-base">
                Bir ihtiyacın mı var, yoksa birine yardımcı
                olabileceğin bir şey mi? Burada paylaş,
                doğru insanla buluş.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM
        ====================================================== */}
        <div className="mx-auto max-w-4xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* TYPE SELECTOR */}
            <section className="rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                  İlk adım
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-[#4B2E4D] sm:text-2xl">
                  Sen hangisini yapıyorsun?
                </h2>

                <p className="mt-1 text-xs leading-5 text-[#81746C]">
                  İhtiyacını veya sunabileceğin şeyi seç.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <TypeCard
                  selected={type === "Arıyorum"}
                  onClick={() => setType("Arıyorum")}
                  icon={Search}
                  title="Arıyorum"
                  description="Bir şeye veya birine ihtiyacım var."
                  accent="purple"
                />

                <TypeCard
                  selected={type === "Sunuyorum"}
                  onClick={() => setType("Sunuyorum")}
                  icon={Sprout}
                  title="Sunuyorum"
                  description="Bir becerim, fırsatım veya desteğim var."
                  accent="green"
                />
              </div>
            </section>

            {/* DETAILS */}
            <section className="mt-4 rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                  Detaylar
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-[#4B2E4D]">
                  {isLooking ? "Neye ihtiyacın var?" : "Ne sunuyorsun?"}
                </h2>
              </div>

              <div className="space-y-5">
                {/* TITLE */}
                <div>
                  <label className="mb-2 block text-xs font-extrabold text-[#4A403A]">
                    Başlık
                  </label>

                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={
                      isLooking
                        ? "Örn. React projem için ekip arkadaşı arıyorum"
                        : "Örn. Frontend geliştirme konusunda mentorluk verebilirim"
                    }
                    className="w-full rounded-2xl border border-[#E8DED4] bg-[#FAF7F2] px-4 py-3.5 text-sm font-medium text-[#2C2623] outline-none transition placeholder:text-[#A49A92] focus:border-[#0D4842] focus:bg-white"
                  />

                  <p className="mt-1.5 text-[10px] text-[#9B8F87]">
                    İnsanların ilk göreceği şey bu olacak.
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-xs font-extrabold text-[#4A403A]">
                      Biraz daha anlat
                    </label>

                    <span className="text-[10px] font-medium text-[#A0948C]">
                      {description.length}/500
                    </span>
                  </div>

                  <textarea
                    required
                    rows={5}
                    maxLength={500}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={
                      isLooking
                        ? "Tam olarak ne aradığını, projeni veya ihtiyacını anlat..."
                        : "Neler yapabileceğini, kimlere yardımcı olabileceğini veya sunduğun fırsatı anlat..."
                    }
                    className="w-full resize-none rounded-2xl border border-[#E8DED4] bg-[#FAF7F2] px-4 py-3.5 text-sm font-medium leading-6 text-[#2C2623] outline-none transition placeholder:text-[#A49A92] focus:border-[#0D4842] focus:bg-white"
                  />
                </div>

                {/* CATEGORY */}
                <div>
                  <label className="mb-2 block text-xs font-extrabold text-[#4A403A]">
                    Kategori
                  </label>

                  <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#E8DED4] bg-[#FAF7F2] px-4 py-3.5 text-sm font-medium text-[#2C2623] outline-none transition focus:border-[#0D4842] focus:bg-white"
                  >
                    <option value="">Kategori seç</option>
                    <option value="İş">İş</option>
                    <option value="Staj">Staj</option>
                    <option value="Proje">Proje</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Ekip arkadaşı">Ekip arkadaşı</option>
                    <option value="Ev / Oda">Ev / Oda</option>
                    <option value="Eğitim">Eğitim</option>
                    <option value="Kullanıcı testi">
                      Kullanıcı testi
                    </option>
                    <option value="Etkinlik">Etkinlik</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
              </div>
            </section>

            {/* LOCATION */}
            <section className="mt-4 rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C47E6E]">
                  Nerede?
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-[#4B2E4D]">
                  İnsanlar seni nerede bulsun?
                </h2>
              </div>

              <div className="space-y-5">
                {/* CITY */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-xs font-extrabold text-[#4A403A]">
                    <MapPin size={14} className="text-[#0D4842]" />
                    Şehir
                  </label>

                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#E8DED4] bg-[#FAF7F2] px-4 py-3.5 text-sm font-medium text-[#2C2623] outline-none transition focus:border-[#0D4842] focus:bg-white"
                  >
                    <option value="İstanbul">İstanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Eskişehir">Eskişehir</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                {/* WORK TYPE */}
                <div>
                  <label className="mb-2 block text-xs font-extrabold text-[#4A403A]">
                    Nasıl buluşacaksınız?
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {["Online", "Yüz yüze", "Fark etmez"].map(
                      (option) => {
                        const selected = workType === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setWorkType(option)}
                            className={`rounded-2xl border px-3 py-3 text-xs font-bold transition ${
                              selected
                                ? "border-[#0D4842] bg-[#EAF3EC] text-[#0D4842]"
                                : "border-[#E8DED4] bg-[#FAF7F2] text-[#756860] hover:border-[#CDBEB3]"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* EXPIRY */}
            <section className="mt-4 rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1E8F5] text-[#6B4B73]">
                  <Clock3 size={18} />
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-extrabold text-[#4B2E4D]">
                    Ne kadar süre geçerli?
                  </h2>

                  <p className="mt-1 text-[11px] leading-5 text-[#81746C]">
                    İstersen fırsatın için bir bitiş tarihi
                    belirleyebilirsin.
                  </p>

                  <input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="mt-4 w-full rounded-2xl border border-[#E8DED4] bg-[#FAF7F2] px-4 py-3 text-sm font-medium text-[#2C2623] outline-none focus:border-[#0D4842] focus:bg-white"
                  />
                </div>
              </div>
            </section>

            {/* PREVIEW / INFO */}
            <section className="mt-4 rounded-[2rem] bg-[#4B2E4D] p-5 text-white sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7A695] text-[#4B2E4D]">
                  {isLooking ? (
                    <Search size={19} />
                  ) : (
                    <Sprout size={19} />
                  )}
                </div>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/50">
                    Paylaşımın
                  </p>

                  <h3 className="mt-1 text-base font-extrabold">
                    {isLooking
                      ? "Bir ihtiyacın, doğru insanın karşısına çıkacak."
                      : "Sunabileceğin şey, ona ihtiyacı olan kişiye ulaşacak."}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/60">
                    Buluş.'ta amaç ilan vermek değil;
                    insanların birbirini bulmasına yardımcı olmak.
                  </p>
                </div>
              </div>
            </section>

            {/* SUBMIT */}
            <div className="mt-5">
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0D4842] px-5 py-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#093A36] hover:shadow-md"
              >
                <span>Paylaş ve insanlarla buluş</span>

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="mt-3 text-center text-[10px] leading-5 text-[#9A8D85]">
                Paylaşımını daha sonra profilinden düzenleyebilir
                veya kaldırabilirsin.
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}

/* =============================================================
   TYPE CARD
============================================================= */

function TypeCard({
  selected,
  onClick,
  icon: Icon,
  title,
  description,
  accent,
}: {
  selected: boolean;
  onClick: () => void;
  icon: typeof Search;
  title: string;
  description: string;
  accent: "purple" | "green";
}) {
  const purple = accent === "purple";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-[1.5rem] border p-5 text-left transition-all ${
        selected
          ? purple
            ? "border-[#4B2E4D] bg-[#F4ECF7] shadow-sm"
            : "border-[#0D4842] bg-[#EAF3EC] shadow-sm"
          : "border-[#E8DED4] bg-[#FAF7F2] hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
      }`}
    >
      {selected && (
        <div
          className={`absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full ${
            purple
              ? "bg-[#4B2E4D] text-white"
              : "bg-[#0D4842] text-white"
          }`}
        >
          <Check size={13} strokeWidth={3} />
        </div>
      )}

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          purple
            ? "bg-[#DCC7EB] text-[#4B2E4D]"
            : "bg-[#C7DBC9] text-[#0D4842]"
        }`}
      >
        <Icon size={20} />
      </div>

      <h3 className="mt-4 text-base font-extrabold text-[#4B2E4D]">
        {title}
      </h3>

      <p className="mt-1 max-w-[220px] text-xs leading-5 text-[#776B64]">
        {description}
      </p>
    </button>
  );
}
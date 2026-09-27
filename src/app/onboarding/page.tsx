"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  GraduationCap,
  FolderKanban,
  Users,
  Heart,
  Home,
  BookOpen,
  Smartphone,
  MoreHorizontal,
  Code,
  FileText,
  Palette,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 State
  const [city, setCity] = useState("İstanbul");
  const [university, setUniversity] = useState("İstanbul Teknik Üniversitesi");
  const [department, setDepartment] = useState("Bilgisayar Mühendisliği");
  const [graduationYear, setGraduationYear] = useState("2025");

  // Step 2 State (Neler Arıyorsun?)
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(["Staj"]);

  // Step 3 State (Neler Sunabilirsin?)
  const [selectedOffers, setSelectedOffers] = useState<string[]>(["Teknik destek"]);

  const toggleSelection = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else router.push("/feed");
  };

  const needsList = [
    { label: "İş", icon: Briefcase },
    { label: "Staj", icon: GraduationCap },
    { label: "Proje", icon: FolderKanban },
    { label: "Ekip arkadaşı", icon: Users },
    { label: "Mentor", icon: Heart },
    { label: "Ev / Oda", icon: Home },
    { label: "Eğitim", icon: BookOpen },
    { label: "Kullanıcı / Testçi", icon: Smartphone },
    { label: "Diğer", icon: MoreHorizontal },
  ];

  const offersList = [
    { label: "Mentorluk", icon: Heart },
    { label: "Proje desteği", icon: FolderKanban },
    { label: "Bilgi paylaşımı", icon: BookOpen },
    { label: "CV inceleme", icon: FileText },
    { label: "Teknik destek", icon: Code },
    { label: "Tasarım", icon: Palette },
    { label: "Kullanıcı testi", icon: Smartphone },
    { label: "Eğitim verme", icon: GraduationCap },
    { label: "Diğer", icon: MoreHorizontal },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-10 border border-[#F0E6DA] shadow-sm relative">
        
        {/* Progress Bar Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-0 flex-1 max-w-xs">
            {/* Step 1 */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${step >= 1 ? "border-[#0D4842] bg-[#0D4842]" : "border-[#D5CEC6] bg-white"}`}>
              {step >= 1 && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div className={`flex-1 h-0.5 transition-all ${step >= 2 ? "bg-[#0D4842]" : "bg-[#D5CEC6]"} mx-1`} style={{ backgroundImage: step < 2 ? "repeating-linear-gradient(90deg, #D5CEC6, #D5CEC6 4px, transparent 4px, transparent 8px)" : undefined, backgroundColor: step < 2 ? "transparent" : undefined }} />
            {/* Step 2 */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${step >= 2 ? "border-[#0D4842] bg-[#0D4842]" : "border-[#D5CEC6] bg-white"}`}>
              {step >= 2 && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
            <div className={`flex-1 h-0.5 transition-all ${step >= 3 ? "bg-[#0D4842]" : "bg-[#D5CEC6]"} mx-1`} style={{ backgroundImage: step < 3 ? "repeating-linear-gradient(90deg, #D5CEC6, #D5CEC6 4px, transparent 4px, transparent 8px)" : undefined, backgroundColor: step < 3 ? "transparent" : undefined }} />
            {/* Step 3 */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${step >= 3 ? "border-[#0D4842] bg-[#0D4842]" : "border-[#D5CEC6] bg-white"}`}>
              {step >= 3 && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </div>
          <span className="text-xs font-bold text-[#7E7068] ml-4">{step}/3</span>
        </div>

        {/* STEP 1: Kişisel Bilgiler */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F1714]">
                Merhaba Elif! 👋
              </h1>
              <p className="text-sm text-[#7E7068] mt-1">
                Önce seni biraz tanıyalım.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#4A403A] mb-1.5">Şehrini seç</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] font-medium focus:outline-none focus:border-[#0D4842]"
                >
                  <option value="İstanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Bursa">Bursa</option>
                  <option value="Eskişehir">Eskişehir</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A403A] mb-1.5">Üniversiten</label>
                <input
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  placeholder="Üniversite adı..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] font-medium focus:outline-none focus:border-[#0D4842]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A403A] mb-1.5">Bölümün</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Bölüm adı..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] font-medium focus:outline-none focus:border-[#0D4842]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4A403A] mb-1.5">Mezuniyet yılın (opsiyonel)</label>
                <input
                  type="text"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  placeholder="Örn. 2025"
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] font-medium focus:outline-none focus:border-[#0D4842]"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button fullWidth size="lg" variant="primary" onClick={handleNext} rightIcon={<ArrowRight size={18} />}>
                Devam Et
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: Neler Arıyorsun? */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F1714]">
                Neler arıyorsun?
              </h1>
              <p className="text-sm text-[#7E7068] mt-1">
                Sana uygun fırsatları göstermek için ilgi alanlarını seç.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {needsList.map((item) => {
                const isSelected = selectedNeeds.includes(item.label);
                return (
                  <button
                    key={item.label}
                    onClick={() => toggleSelection(selectedNeeds, setSelectedNeeds, item.label)}
                    className={`
                      p-4 rounded-2xl border text-center flex flex-col items-center justify-center gap-2.5 transition-all cursor-pointer relative
                      ${
                        isSelected
                          ? "bg-[#F4F9F8] border-[#0D4842] text-[#0D4842] shadow-xs"
                          : "bg-[#FAF7F2] border-[#EAE2D8] text-[#6E615A] hover:bg-[#F5EFE8]"
                      }
                    `}
                  >
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#0D4842] text-white flex items-center justify-center text-[10px]">
                        <Check size={10} />
                      </span>
                    )}
                    <item.icon size={22} />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Button fullWidth size="lg" variant="primary" onClick={handleNext} rightIcon={<ArrowRight size={18} />}>
                Devam Et
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Neler Sunabilirsin? */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F1714]">
                Neler sunabilirsin?
              </h1>
              <p className="text-sm text-[#7E7068] mt-1">
                Başkalara nasıl yardımcı olabileceğini seç.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {offersList.map((item) => {
                const isSelected = selectedOffers.includes(item.label);
                return (
                  <button
                    key={item.label}
                    onClick={() => toggleSelection(selectedOffers, setSelectedOffers, item.label)}
                    className={`
                      p-4 rounded-2xl border text-center flex flex-col items-center justify-center gap-2.5 transition-all cursor-pointer relative
                      ${
                        isSelected
                          ? "bg-[#F4F9F8] border-[#0D4842] text-[#0D4842] shadow-xs"
                          : "bg-[#FAF7F2] border-[#EAE2D8] text-[#6E615A] hover:bg-[#F5EFE8]"
                      }
                    `}
                  >
                    {isSelected && (
                      <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#0D4842] text-white flex items-center justify-center text-[10px]">
                        <Check size={10} />
                      </span>
                    )}
                    <item.icon size={22} />
                    <span className="text-xs font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Button fullWidth size="lg" variant="primary" onClick={handleNext} rightIcon={<ArrowRight size={18} />}>
                Tamamla
              </Button>
            </div>

            <p className="text-center font-handwriting text-xl text-[#2C6E49] pt-2">
              Harika! Artık buluş. topluluğunun bir parçasısın. ♡
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

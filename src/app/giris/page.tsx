"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import { apiFetch } from "@/lib/supabase/api";
import { supabase } from "@/lib/supabase/client";
interface AuthPageProps {
  initialMode?: "login" | "register";
}

export default function AuthPage({
  initialMode = "login",
}: AuthPageProps) {
  const router = useRouter();

  const [isRegister, setIsRegister] = useState(
    initialMode === "register"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      /*
       * KAYIT
       */
      if (isRegister) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              city,
              university,
            },
          },
        });

        if (error) {
          setError(error.message);
          return;
        }

        /*
         * Supabase'te email doğrulama açıksa
         * kullanıcı oluşturulur fakat session hemen gelmez.
         */
        if (!data.session) {
          router.push("/giris?registered=true");
          return;
        }

        /*
         * Email doğrulama kapalıysa doğrudan
         * onboarding'e geçebiliriz.
         */
        router.push("/onboarding");
        return;
      }

      /*
       * GİRİŞ
       */
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (!data.session) {
        setError("Oturum oluşturulamadı. Lütfen tekrar deneyin.");
        return;
      }

      try {
        await apiFetch("/api/users/me");
        router.push("/profil");
      } catch {
        router.push("/onboarding");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Bir hata oluştu.");
      }
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (register: boolean) => {
    setIsRegister(register);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DA] shadow-sm text-center relative overflow-hidden">

        {/* Header Logo */}
        <div className="flex justify-center mb-3">
          <Logo size="lg" />
        </div>

        <h1 className="text-2xl font-extrabold text-[#1F1714]">
          {isRegister
            ? "Hesabını oluştur"
            : "Tekrar hoş geldin"}
        </h1>

        <p className="text-xs sm:text-sm text-[#7E7068] mt-1 mb-6">
          {isRegister
            ? "Yeni insanlarla tanış, fırsatları keşfet."
            : "Buluş'a kaldığın yerden devam et."}
        </p>

        {/* Tabs */}
        <div className="flex bg-[#FAF7F2] p-1 rounded-full border border-[#EAE2D8] mb-6">

          <button
            type="button"
            onClick={() => switchMode(true)}
            className={`
              flex-1 py-2 text-xs sm:text-sm font-semibold rounded-full
              transition-all cursor-pointer
              ${
                isRegister
                  ? "bg-white text-[#1F1714] shadow-xs"
                  : "text-[#7E7068] hover:text-[#1F1714]"
              }
            `}
          >
            Kayıt Ol
          </button>

          <button
            type="button"
            onClick={() => switchMode(false)}
            className={`
              flex-1 py-2 text-xs sm:text-sm font-semibold rounded-full
              transition-all cursor-pointer
              ${
                !isRegister
                  ? "bg-white text-[#1F1714] shadow-xs"
                  : "text-[#7E7068] hover:text-[#1F1714]"
              }
            `}
          >
            Giriş Yap
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-left text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Auth Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3.5 text-left"
        >

          {/* Ad Soyad */}
          {isRegister && (
            <div className="relative">
              <User
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7E7068]"
              />

              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ad Soyad"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] placeholder-[#A0948C] focus:outline-none focus:border-[#0D4842]"
              />
            </div>
          )}

          {/* E-posta */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7E7068]"
            />

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta"
              autoComplete={
                isRegister ? "email" : "username"
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] placeholder-[#A0948C] focus:outline-none focus:border-[#0D4842]"
            />
          </div>

          {/* Şifre */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7E7068]"
            />

            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
              autoComplete={
                isRegister ? "new-password" : "current-password"
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] placeholder-[#A0948C] focus:outline-none focus:border-[#0D4842]"
            />
          </div>

          {/* Kayıt alanları */}
          {isRegister && (
            <>
              {/* Şehir */}
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7E7068]"
                />

                <select
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] appearance-none focus:outline-none focus:border-[#0D4842]"
                >
                  <option value="">Şehir seçiniz</option>
                  <option value="istanbul">İstanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="izmir">İzmir</option>
                  <option value="bursa">Bursa</option>
                  <option value="antalya">Antalya</option>
                </select>
              </div>

              {/* Üniversite */}
              <div className="relative">
                <GraduationCap
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7E7068]"
                />

                <input
                  type="text"
                  value={university}
                  onChange={(e) =>
                    setUniversity(e.target.value)
                  }
                  placeholder="Üniversite (opsiyonel)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D8] text-sm text-[#1F1714] placeholder-[#A0948C] focus:outline-none focus:border-[#0D4842]"
                />
              </div>
            </>
          )}

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              fullWidth
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight size={18} />}
              disabled={loading}
            >
              {loading
                ? "İşleniyor..."
                : isRegister
                ? "Hesap Oluştur"
                : "Giriş Yap"}
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-[#EAE2D8]" />

          <span className="text-xs text-[#9E9088] font-medium">
            veya
          </span>

          <div className="flex-1 h-px bg-[#EAE2D8]" />
        </div>

        {/* SSO Buttons */}
        <div className="flex gap-3">

          <button
            type="button"
            className="flex-1 py-2.5 px-4 rounded-2xl border border-[#EAE2D8] bg-white hover:bg-[#FAF7F2] text-xs sm:text-sm font-semibold text-[#1F1714] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />

              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />

              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />

              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            Google ile devam et
          </button>

          <button
            type="button"
            className="w-12 h-11 rounded-2xl border border-[#EAE2D8] bg-white hover:bg-[#FAF7F2] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Apple ile giriş yap"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#1F1714"
            >
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
          </button>
        </div>

        {/* Bottom Switch Link */}
        <p className="text-xs text-[#7E7068] mt-6">
          {isRegister
            ? "Zaten hesabın var mı? "
            : "Henüz hesabın yok mu? "}

          <button
            type="button"
            onClick={() => switchMode(!isRegister)}
            className="text-[#0D4842] font-bold hover:underline cursor-pointer"
          >
            {isRegister ? "Giriş yap →" : "Kayıt ol →"}
          </button>
        </p>

        {/* Handwritten Accent */}
        <p className="font-handwriting text-xl text-[#6E615A] mt-6 pt-4 border-t border-[#F0E6DA]">
          Küçük adımlar büyük hikayeler başlatır. ♡
        </p>

      </div>
    </div>
  );
}
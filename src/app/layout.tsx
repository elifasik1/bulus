import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "buluş. — Çevren yoksa, çevreni oluştur.",
  description:
    "İnsanları ihtiyaçları, yetenekleri ve fırsatları üzerinden buluşturan yeni nesil fırsat ağı.",
  keywords: [
    "fırsat ağı",
    "staj",
    "iş",
    "proje",
    "ekip arkadaşı",
    "mentor",
    "buluş",
    "networking",
    "Türkiye",
  ],
  openGraph: {
    title: "buluş. — Çevren yoksa, çevreni oluştur.",
    description:
      "İnsanları ihtiyaçları, yetenekleri ve fırsatları üzerinden buluşturan yeni nesil fırsat ağı.",
    type: "website",
    locale: "tr_TR",
    siteName: "buluş.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-plus-jakarta)] bg-[#FAF7F2] dark:bg-[#121110] text-[#2C2623] dark:text-[#F3EFEA] transition-colors duration-200">
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


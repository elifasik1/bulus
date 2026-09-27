"use client";

import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { text: "text-lg", bSize: "text-2xl" },
  md: { text: "text-xl", bSize: "text-3xl" },
  lg: { text: "text-3xl", bSize: "text-4xl" },
};

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const { text: textClass, bSize } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="buluş. — Ana Sayfa"
    >
      {/* Cursive "b" logo with leaf accent */}
      <div className="relative shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-[#4B2E4D] text-[#FFF6EE] shadow-xs group-hover:scale-105 transition-transform">
        <span className={`font-handwriting ${bSize} font-bold leading-none select-none relative`}>
          b
          <span className="absolute -top-1 -right-1.5 text-[10px] text-[#F7A695]">
            🍃
          </span>
        </span>
      </div>

      {showText && (
        <span
          className={`
            ${textClass} font-extrabold tracking-tight text-[#2F1C31] dark:text-[#F3EFEA]
            group-hover:text-[#0D4842] dark:group-hover:text-[#8EBF9F] transition-colors
          `}
        >
          buluş<span className="text-[#F7A695]">.</span>
        </span>
      )}
    </Link>
  );
}

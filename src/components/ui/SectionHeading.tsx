import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  icon,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        mb-8 sm:mb-12
        ${align === "center" ? "text-center" : "text-left"}
        ${className}
      `}
    >
      {icon && (
        <div className={`mb-3 ${align === "center" ? "flex justify-center" : ""}`}>
          {icon}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-plum-700 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

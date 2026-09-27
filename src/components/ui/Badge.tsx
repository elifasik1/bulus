import type { ReactNode } from "react";
import type { BadgeVariant } from "@/types";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  plum: "bg-plum-100 text-plum-600",
  peach: "bg-peach-100 text-peach-700",
  lilac: "bg-lilac-100 text-lilac-700",
  sage: "bg-sage-100 text-sage-700",
  muted: "bg-plum-50 text-muted",
};

export default function Badge({ children, variant = "plum", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-full)]
        text-xs font-medium whitespace-nowrap
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

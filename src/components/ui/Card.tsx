import type { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const paddingClasses = {
  sm: "p-4",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
};

export default function Card({
  children,
  hover = false,
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-surface rounded-[var(--radius-xl)] shadow-soft border border-border/50
        ${paddingClasses[padding]}
        ${hover ? "transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }: CardSectionProps) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "", ...props }: CardSectionProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }: CardSectionProps) {
  return (
    <div className={`mt-4 pt-4 border-t border-border/50 ${className}`} {...props}>
      {children}
    </div>
  );
}

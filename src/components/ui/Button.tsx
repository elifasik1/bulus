import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0D4842] text-white hover:bg-[#093632] active:bg-[#062724] shadow-soft hover:shadow-card rounded-full",
  secondary:
    "bg-white text-[#1F1714] border border-[#E0D8CE] hover:bg-[#F5F0EB] active:bg-[#ECE5DC] rounded-full shadow-xs",
  ghost:
    "bg-transparent text-[#1F1714] hover:bg-[#F5F0EB] rounded-full",
  accent:
    "bg-[#F7A695] text-[#1F1714] hover:bg-[#F08060] active:bg-[#D9674A] shadow-soft hover:shadow-card rounded-full",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3.5 text-lg gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center font-semibold
          rounded-[var(--radius-lg)] transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

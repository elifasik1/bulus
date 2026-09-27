"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: ModalProps) {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    onClose();
    previousFocusRef.current?.focus();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`
          w-full ${sizeClasses[size]}
          bg-white dark:bg-[#1e1b18] text-[#1F1714] dark:text-[#F3EFEA]
          rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#F0E6DA] dark:border-[#332e29]
          relative max-h-[90vh] overflow-y-auto transform transition-all animate-slide-up
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#F0E6DA] dark:border-[#332e29] mb-4">
          {title && (
            <h2 className="text-lg font-extrabold text-[#1F1714] dark:text-[#F3EFEA]">
              {title}
            </h2>
          )}
          <button
            onClick={handleClose}
            className="ml-auto p-1.5 rounded-full text-[#7E7068] hover:text-[#1F1714] dark:hover:text-white hover:bg-[#FAF7F2] dark:hover:bg-[#2a2521] transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

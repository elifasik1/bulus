"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  className?: string;
}

export default function Dropdown({
  trigger,
  children,
  align = "left",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative inline-flex ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`
            absolute top-full mt-2 z-50
            min-w-[180px] py-1.5
            bg-surface rounded-[var(--radius-lg)] shadow-elevated
            border border-border/50 animate-slide-down
            ${align === "right" ? "right-0" : "left-0"}
          `}
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function DropdownItem({ children, onClick, className = "" }: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-2 text-left text-sm text-foreground
        hover:bg-plum-50 transition-colors cursor-pointer
        ${className}
      `}
      role="menuitem"
    >
      {children}
    </button>
  );
}

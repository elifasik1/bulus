/* ========================================
   buluş. Type Definitions
   ======================================== */

// ── UI Types ──

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";
export type BadgeVariant = "plum" | "peach" | "lilac" | "sage" | "muted";
export type AvatarSize = "sm" | "md" | "lg" | "xl";

// ── Opportunity Types ──

export type OpportunityCategorySlug =
  | "is"
  | "staj"
  | "proje"
  | "ekip-arkadasi"
  | "mentor"
  | "kullanici-testi"
  | "egitim"
  | "ev-oda"
  | "etkinlik"
  | "diger";

export interface OpportunityCategory {
  slug: OpportunityCategorySlug;
  label: string;
  icon: string;
}

export interface OpportunityCardData {
  id: string;
  title: string;
  description: string;
  category: OpportunityCategorySlug;
  location?: string;
  author: {
    name: string;
    avatar?: string;
    university?: string;
  };
  createdAt: string;
  tags?: string[];
  type: "need" | "offer";
}

// ── User Types ──

export interface UserCardData {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
  location?: string;
  university?: string;
  skills: string[];
  helpCount: number;
  trustScore: number;
}

// ── Navigation Types ──

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// ── Landing Page Types ──

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

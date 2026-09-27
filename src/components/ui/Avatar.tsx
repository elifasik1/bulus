import Image from "next/image";
import type { AvatarSize } from "@/types";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: AvatarSize;
  className?: string;
  showStatus?: boolean;
  isOnline?: boolean;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-xl",
};

const pixelSizes: Record<AvatarSize, number> = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
};

const statusSizeClasses: Record<AvatarSize, string> = {
  sm: "w-2.5 h-2.5 border",
  md: "w-3 h-3 border-2",
  lg: "w-3.5 h-3.5 border-2",
  xl: "w-4 h-4 border-2",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({
  src,
  alt,
  size = "md",
  className = "",
  showStatus = false,
  isOnline = false,
}: AvatarProps) {
  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={pixelSizes[size]}
          height={pixelSizes[size]}
          unoptimized
          className={`
            ${sizeClasses[size]} rounded-full object-cover
            ring-2 ring-cream-100
          `}
        />
      ) : (
        <div
          className={`
            ${sizeClasses[size]} rounded-full
            bg-lilac-200 text-plum-600
            flex items-center justify-center font-semibold
            ring-2 ring-cream-100
          `}
          aria-label={alt}
        >
          {getInitials(alt)}
        </div>
      )}
      {showStatus && (
        <span
          className={`
            absolute bottom-0 right-0 rounded-full border-surface
            ${statusSizeClasses[size]}
            ${isOnline ? "bg-sage-500" : "bg-muted/40"}
          `}
          aria-label={isOnline ? "Çevrimiçi" : "Çevrimdışı"}
        />
      )}
    </div>
  );
}

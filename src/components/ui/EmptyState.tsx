import type { ReactNode } from "react";
import { Inbox } from "lucide-react";
import Button from "./Button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-lilac-100 flex items-center justify-center mb-4">
        {icon ?? <Inbox size={28} className="text-lilac-500" />}
      </div>
      <h3 className="text-lg font-semibold text-plum-600 mb-2">{title}</h3>
      {description && (
        <p className="text-muted max-w-sm mb-6">{description}</p>
      )}
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

import { AlertTriangle } from "lucide-react";
import Button from "./Button";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorState({
  title = "Bir şeyler yanlış gitti",
  description = "Lütfen daha sonra tekrar deneyin.",
  onRetry,
  className = "",
}: ErrorStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}
      role="alert"
    >
      <div className="w-16 h-16 rounded-full bg-peach-100 flex items-center justify-center mb-4">
        <AlertTriangle size={28} className="text-peach-600" />
      </div>
      <h3 className="text-lg font-semibold text-plum-600 mb-2">{title}</h3>
      <p className="text-muted max-w-sm mb-6">{description}</p>
      {onRetry && (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          Tekrar Dene
        </Button>
      )}
    </div>
  );
}

interface LoadingStateProps {
  text?: string;
  className?: string;
}

export default function LoadingState({
  text = "Yükleniyor...",
  className = "",
}: LoadingStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 ${className}`}
      role="status"
      aria-label={text}
    >
      <div className="relative w-12 h-12 mb-4">
        <div className="absolute inset-0 rounded-full border-3 border-lilac-200" />
        <div className="absolute inset-0 rounded-full border-3 border-plum-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-sm text-muted">{text}</p>
    </div>
  );
}

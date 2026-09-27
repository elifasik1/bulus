
"use client";

import { forwardRef, useId } from "react";
import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = "", id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-plum-600">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full rounded-[var(--radius-md)] border bg-surface px-4 py-2.5
            text-foreground placeholder:text-muted/60
            transition-colors duration-200 resize-y min-h-[100px]
            focus:outline-none focus:ring-2 focus:ring-plum-300 focus:border-plum-400
            ${error ? "border-peach-500" : "border-border"}
            ${className}
          `}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-sm text-peach-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${textareaId}-hint`} className="text-sm text-muted">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

"use client";

import { forwardRef, useId } from "react";
import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, placeholder, className = "", id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-plum-600">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full appearance-none rounded-[var(--radius-md)] border bg-surface
              px-4 py-2.5 pr-10 text-foreground
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-plum-300 focus:border-plum-400
              ${error ? "border-peach-500" : "border-border"}
              ${className}
            `}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={
              error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            size={18}
          />
        </div>
        {error && (
          <p id={`${selectId}-error`} className="text-sm text-peach-600" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${selectId}-hint`} className="text-sm text-muted">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;

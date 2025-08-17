"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, placeholder, className = "", ...props }, ref) => {
    const hasError = Boolean(error);
    
    const selectClasses = [
      "w-full h-10 px-3 rounded-[var(--radius-md)] border text-sm transition-colors",
      "bg-[--color-bg-white-0] text-[--color-neutral-900]",
      "focus:outline-none focus:ring-2",
      "appearance-none cursor-pointer",
      hasError 
        ? "border-red-500 focus:ring-red-200" 
        : "border-[--color-neutral-300] focus:ring-[--color-primary-alpha-16]",
      props.disabled ? "opacity-60 cursor-not-allowed bg-[--color-neutral-50]" : "",
      className
    ].filter(Boolean).join(" ");

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[--color-neutral-900] mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          <select ref={ref} className={selectClasses} {...props}>
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value} 
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-[--color-neutral-500]"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {(error || helperText) && (
          <p className={`mt-1 text-xs ${hasError ? 'text-red-500' : 'text-[--color-neutral-600]'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

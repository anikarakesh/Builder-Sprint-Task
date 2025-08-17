"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = "", ...props }, ref) => {
    const hasError = Boolean(error);
    
    const inputClasses = [
      "w-full h-10 px-3 rounded-[var(--radius-md)] border text-sm transition-colors",
      "bg-[--color-bg-white-0] text-[--color-neutral-900] placeholder-[--color-neutral-500]",
      "focus:outline-none focus:ring-2",
      leftIcon ? "pl-10" : "",
      rightIcon ? "pr-10" : "",
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
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[--color-neutral-500]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[--color-neutral-500]">
              {rightIcon}
            </div>
          )}
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

TextInput.displayName = "TextInput";

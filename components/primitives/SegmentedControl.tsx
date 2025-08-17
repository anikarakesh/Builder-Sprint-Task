"use client";

import { useState, type ReactNode } from "react";

export interface SegmentedOption {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SegmentedControl({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  className = "",
  size = "md"
}: SegmentedControlProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || options[0]?.value || "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const sizeClasses = {
    sm: "h-8 text-xs",
    md: "h-10 text-sm", 
    lg: "h-12 text-base"
  };

  const containerClasses = [
    "inline-flex items-center p-1 rounded-[var(--radius-md)] bg-[--color-neutral-100]",
    sizeClasses[size],
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses} role="tablist">
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const isDisabled = option.disabled;

        const buttonClasses = [
          "relative flex items-center justify-center gap-2 px-3 rounded-[var(--radius-sm)]",
          "transition-all duration-200 font-medium",
          "focus:outline-none focus:ring-2 focus:ring-[--color-primary-alpha-16]",
          isSelected 
            ? "bg-[--color-static-white] text-[--color-neutral-900] shadow-sm" 
            : "text-[--color-neutral-600] hover:text-[--color-neutral-900]",
          isDisabled 
            ? "opacity-50 cursor-not-allowed" 
            : "cursor-pointer",
          !isDisabled && !isSelected ? "hover:bg-[--color-neutral-50]" : ""
        ].filter(Boolean).join(" ");

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            disabled={isDisabled}
            className={buttonClasses}
            onClick={() => !isDisabled && handleChange(option.value)}
          >
            {option.icon && (
              <span className="inline-flex items-center" aria-hidden>
                {option.icon}
              </span>
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

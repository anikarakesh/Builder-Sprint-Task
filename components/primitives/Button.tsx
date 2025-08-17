"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useCallback } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "outline";
export type ButtonColor = "blue" | "black";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  leftIcon?: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  copyText?: string;
  isLoading?: boolean;
}

function composeClassNames(
  variant: ButtonVariant,
  color: ButtonColor,
  disabled?: boolean,
  isLoading?: boolean,
): string {
  const base = [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-[var(--radius-md)]",
    "px-4",
    "h-10",
    "text-sm",
    "transition-colors",
    disabled || isLoading ? "opacity-60 cursor-not-allowed" : "",
  ];

  const colorMap = {
    blue: {
      primary: "bg-[--color-primary-base] text-[--color-static-white] hover:bg-[color:rgb(59_130_246_/_.9)]",
      secondary: "border border-[color:rgb(59_130_246_/_.35)] text-[--color-primary-base] hover:bg-[color:rgb(59_130_246_/_.08)]",
      tertiary: "text-[--color-primary-base] hover:underline",
      ghost: "text-[--color-neutral-900] hover:bg-[--color-neutral-100]",
      outline: "border border-[--color-neutral-300] text-[--color-neutral-900] hover:bg-[--color-neutral-100]",
    },
    black: {
      primary: "bg-[--color-static-black] text-[--color-static-white] hover:bg-[color:rgb(0_0_0_/_.85)]",
      secondary: "border border-[color:rgb(0_0_0_/_.25)] text-[--color-static-black] hover:bg-[color:rgb(0_0_0_/_.05)]",
      tertiary: "text-[--color-static-black] hover:underline",
      ghost: "text-[--color-neutral-900] hover:bg-[--color-neutral-100]",
      outline: "border border-[--color-neutral-300] text-[--color-neutral-900] hover:bg-[--color-neutral-100]",
    },
  } as const;

  const themed = colorMap[color][variant];
  return [...base, themed].filter(Boolean).join(" ");
}

export function Button({
  label,
  leftIcon,
  variant = "primary",
  color = "blue",
  copyText,
  isLoading,
  disabled,
  className = "",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const handleClick = useCallback<NonNullable<ButtonProps["onClick"]>>(
    async (event) => {
      if (copyText) {
        try {
          await navigator.clipboard.writeText(copyText);
        } catch {
          // ignore copy errors
        }
      }
      onClick?.(event);
    },
    [copyText, onClick],
  );

  const classes = [composeClassNames(variant, color, disabled, isLoading), className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      className={classes}
      onClick={handleClick}
      {...rest}
    >
      {leftIcon ? <span className="inline-flex items-center" aria-hidden>{leftIcon}</span> : null}
      {label ?? children}
    </button>
  );
}



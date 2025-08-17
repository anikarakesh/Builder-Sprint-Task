"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useCallback } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "outline";
export type ButtonColor = "blue" | "black";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  leftIcon?: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  copyText?: string;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

function composeClassNames(
  variant: ButtonVariant,
  color: ButtonColor,
  size: ButtonSize,
  disabled?: boolean,
  isLoading?: boolean,
): string {
  const base = [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-[var(--radius-md)]",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[--color-primary-base]",
    "focus-visible:ring-offset-2",
    disabled || isLoading ? "opacity-60 cursor-not-allowed" : "",
  ];

  // Size-specific styles
  const sizeMap = {
    sm: "gap-1.5 px-3 h-8 text-sm",
    md: "gap-2 px-4 h-10 text-sm", 
    lg: "gap-2 px-6 h-12 text-base",
  } as const;

  const colorMap = {
    blue: {
      primary: "bg-[--color-primary-base] text-[--color-static-white] hover:bg-[--color-primary-darker] shadow-sm hover:shadow-md",
      secondary: "border border-[--color-primary-base] text-[--color-primary-base] hover:bg-[--color-primary-alpha-10] bg-transparent",
      tertiary: "text-[--color-primary-base] hover:text-[--color-primary-darker] hover:underline bg-transparent",
      ghost: "text-[--color-neutral-700] hover:bg-[--color-neutral-100] hover:text-[--color-neutral-900] bg-transparent",
      outline: "border border-[--color-neutral-300] text-[--color-neutral-700] hover:bg-[--color-neutral-50] hover:border-[--color-neutral-400] bg-transparent",
    },
    black: {
      primary: "bg-[--color-static-black] text-[--color-static-white] hover:bg-[--color-neutral-800] shadow-sm hover:shadow-md",
      secondary: "border border-[--color-static-black] text-[--color-static-black] hover:bg-[--color-neutral-50] bg-transparent",
      tertiary: "text-[--color-static-black] hover:text-[--color-neutral-700] hover:underline bg-transparent",
      ghost: "text-[--color-neutral-700] hover:bg-[--color-neutral-100] hover:text-[--color-neutral-900] bg-transparent",
      outline: "border border-[--color-neutral-300] text-[--color-neutral-700] hover:bg-[--color-neutral-50] hover:border-[--color-neutral-400] bg-transparent",
    },
  } as const;

  const themed = colorMap[color][variant];
  const sized = sizeMap[size];
  return [...base, sized, themed].filter(Boolean).join(" ");
}

export function Button({
  label,
  leftIcon,
  variant = "primary",
  color = "blue",
  size = "md",
  copyText,
  isLoading,
  disabled,
  className = "",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLElement>) => {
      if (copyText) {
        try {
          await navigator.clipboard.writeText(copyText);
        } catch {
          // ignore copy errors
        }
      }
      onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
    },
    [copyText, onClick],
  );

  const classes = [composeClassNames(variant, color, size, disabled, isLoading), className]
    .filter(Boolean)
    .join(" ");

  // If an href is provided, render as a styled link to avoid nesting interactive elements
  const maybeHref = (rest as unknown as { href?: string }).href;
  if (typeof maybeHref === "string" && maybeHref.length > 0) {
    const { type: _type, href, target, rel, ...anchorRest } = { ...(rest as Record<string, unknown>), href: maybeHref } as unknown as {
      type?: string;
      href: string;
      target?: string;
      rel?: string;
      [key: string]: unknown;
    };

    const handleAnchorClick = useCallback(
      async (event: React.MouseEvent<HTMLElement>) => {
        if (disabled || isLoading) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        await handleClick(event);
      },
      [disabled, isLoading, handleClick],
    );

    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled || isLoading}
        onClick={handleAnchorClick}
        target={target}
        rel={rel}
        {...(anchorRest as Record<string, unknown>)}
      >
        {leftIcon ? <span className="inline-flex items-center" aria-hidden>{leftIcon}</span> : null}
        {label ?? children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      className={classes}
      onClick={handleClick as unknown as NonNullable<ButtonProps["onClick"]>}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {leftIcon ? <span className="inline-flex items-center" aria-hidden>{leftIcon}</span> : null}
      {label ?? children}
    </button>
  );
}



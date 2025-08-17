"use client";

import type { ReactNode, HTMLAttributes } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextColor = "primary" | "secondary" | "muted" | "error" | "success" | "warning";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  weight?: TextWeight;
  color?: TextColor;
  children: ReactNode;
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  children: ReactNode;
  as?: "p" | "span" | "div";
}

// Heading component
export function Heading({ 
  level = 1, 
  size, 
  weight = "semibold",
  color = "primary",
  className = "",
  children,
  ...props 
}: HeadingProps) {
  // Default size based on level if not specified
  const defaultSizes: Record<HeadingLevel, HeadingSize> = {
    1: "3xl",
    2: "2xl", 
    3: "xl",
    4: "lg",
    5: "md",
    6: "sm"
  };

  const actualSize = size || defaultSizes[level];

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl", 
    "2xl": "text-2xl",
    "3xl": "text-3xl"
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium", 
    semibold: "font-semibold",
    bold: "font-bold"
  };

  const colorClasses = {
    primary: "text-[--color-neutral-900]",
    secondary: "text-[--color-neutral-700]",
    muted: "text-[--color-neutral-500]",
    error: "text-red-600",
    success: "text-green-600",
    warning: "text-amber-600"
  } as const;

  const headingClasses = [
    sizeClasses[actualSize],
    weightClasses[weight],
    colorClasses[color],
    "leading-tight",
    className
  ].filter(Boolean).join(" ");

  const Tag = `h${level}` as any;

  return (
    <Tag className={headingClasses} {...props}>
      {children}
    </Tag>
  );
}

// Text component  
export function Text({ 
  size = "base",
  weight = "normal", 
  color = "primary",
  as = "p",
  className = "",
  children,
  ...props 
}: TextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm", 
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold", 
    bold: "font-bold"
  };

  const colorClasses = {
    primary: "text-[--color-neutral-900]",
    secondary: "text-[--color-neutral-700]", 
    muted: "text-[--color-neutral-500]",
    error: "text-red-600",
    success: "text-green-600",
    warning: "text-amber-600"
  } as const;

  const textClasses = [
    sizeClasses[size],
    weightClasses[weight], 
    colorClasses[color],
    "leading-relaxed",
    className
  ].filter(Boolean).join(" ");

  const Tag = as;

  return (
    <Tag className={textClasses} {...props}>
      {children}
    </Tag>
  );
}

// Convenience components
export function Label({ className = "", ...props }: Omit<TextProps, "size" | "weight">) {
  return <Text size="sm" weight="medium" className={`block ${className}`} {...props} />;
}

export function Caption({ className = "", ...props }: Omit<TextProps, "size" | "color">) {
  return <Text size="xs" color="muted" className={className} {...props} />;
}

"use client";

import type { ReactNode } from "react";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "outline";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLSpanElement>; // Add onClick prop
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  icon,
  onClick // Destructure onClick prop
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs h-5",
    md: "px-2.5 py-1 text-xs h-6",
    lg: "px-3 py-1.5 text-sm h-8"
  };

  const variantClasses = {
    default: "bg-[--color-neutral-100] text-[--color-neutral-700] border-[--color-neutral-200]",
    primary: "bg-[--color-primary-alpha-10] text-[--color-primary-base] border-[--color-primary-alpha-16]",
    success: "bg-green-50 text-green-700 border-green-200",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
    error: "bg-red-50 text-red-700 border-red-200",
    outline: "bg-transparent text-[--color-neutral-700] border-[--color-neutral-300]"
  };

  const badgeClasses = [
    "inline-flex items-center gap-1 rounded-[var(--radius-sm)] border font-medium",
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(" ");

  return (
    <span className={badgeClasses} onClick={onClick}> {/* Pass onClick to the span */}
      {icon && (
        <span className="inline-flex items-center" aria-hidden>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

// Status-specific badges for convenience
export function StatusBadge({ status, ...props }: { status: "active" | "inactive" } & Omit<BadgeProps, "variant" | "children">) {
  const statusConfig = {
    active: { variant: "success" as const, label: "Active" },
    inactive: { variant: "default" as const, label: "Inactive" }
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} {...props}>
      {config.label}
    </Badge>
  );
}

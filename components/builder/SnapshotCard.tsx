"use client";

import { Card } from "../primitives/Card";
import { Heading, Text } from "../primitives/Typography";
import { formatNumber, formatPercent } from "../../lib/utils";

export interface SnapshotCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    direction: "up" | "down";
    period: string;
  };
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  className?: string;
}

export function SnapshotCard({ 
  title, 
  value, 
  change, 
  icon, 
  variant = "default",
  className = "" 
}: SnapshotCardProps) {
  const variantClasses = {
    default: "border-[--color-neutral-200]",
    primary: "border-[--color-primary-base] bg-[--color-primary-alpha-10]",
    success: "border-green-200 bg-green-50",
    warning: "border-yellow-200 bg-yellow-50",
    error: "border-red-200 bg-red-50"
  };

  const valueFormatted = typeof value === "number" ? formatNumber(value) : value;

  return (
    <Card className={`p-6 ${variantClasses[variant]} ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon && (
              <div className="w-5 h-5 text-[--color-neutral-600]">
                {icon}
              </div>
            )}
            <Text size="sm" color="muted" className="font-medium">
              {title}
            </Text>
          </div>
          
          <Heading level={2} size="2xl" className="mb-1">
            {valueFormatted}
          </Heading>
          
          {change && (
            <div className="flex items-center gap-1">
              <div className={`flex items-center gap-1 text-sm ${
                change.direction === "up" ? "text-green-600" : "text-red-600"
              }`}>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className={change.direction === "down" ? "rotate-180" : ""}
                >
                  <polyline points="17,11 12,6 7,11"/>
                  <polyline points="12,18 12,6"/>
                </svg>
                <span className="font-medium">
                  {change.value > 0 ? "+" : ""}{formatPercent(change.value)}
                </span>
              </div>
              <Text size="sm" color="muted">
                vs {change.period}
              </Text>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

// Convenience components for specific metrics
export function ViewsCard({ views, change, ...props }: Omit<SnapshotCardProps, "title" | "value" | "icon"> & { views: number; change?: SnapshotCardProps["change"] }) {
  return (
    <SnapshotCard
      title="Total Views"
      value={views}
      change={change}
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      }
      {...props}
    />
  );
}

export function LeadsCard({ leads, change, ...props }: Omit<SnapshotCardProps, "title" | "value" | "icon"> & { leads: number; change?: SnapshotCardProps["change"] }) {
  return (
    <SnapshotCard
      title="Total Leads"
      value={leads}
      change={change}
      variant="primary"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      }
      {...props}
    />
  );
}

export function CTRCard({ ctr, change, ...props }: Omit<SnapshotCardProps, "title" | "value" | "icon"> & { ctr: number; change?: SnapshotCardProps["change"] }) {
  return (
    <SnapshotCard
      title="Click-through Rate"
      value={formatPercent(ctr)}
      change={change}
      variant="success"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11H1l8-8 8 8"/>
          <path d="M9 11v10"/>
        </svg>
      }
      {...props}
    />
  );
}

export function ConversionCard({ conversion, change, ...props }: Omit<SnapshotCardProps, "title" | "value" | "icon"> & { conversion: number; change?: SnapshotCardProps["change"] }) {
  return (
    <SnapshotCard
      title="Conversion Rate"
      value={formatPercent(conversion)}
      change={change}
      variant="warning"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      }
      {...props}
    />
  );
}

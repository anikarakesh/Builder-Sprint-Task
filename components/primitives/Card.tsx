import type { PropsWithChildren, ReactNode } from "react";

export type CardProps = PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}>;

export function Card({ header, footer, className = "", children }: CardProps) {
  return (
    <div className={`rounded-[var(--radius-lg)] border border-[--color-neutral-200] bg-[--color-bg-white-0] shadow-sm ${className}`}>
      {header ? <div className="px-4 py-3 border-b border-[--color-neutral-200]">{header}</div> : null}
      <div className="px-4 py-4">{children}</div>
      {footer ? <div className="px-4 py-3 border-t border-[--color-neutral-200]">{footer}</div> : null}
    </div>
  );
}



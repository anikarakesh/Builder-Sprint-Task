import type { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  className?: string;
}>;

export function Section({ title, subtitle, className = "", children }: SectionProps) {
  return (
    <section className={`py-10 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-lg font-semibold text-[--color-neutral-900]">{title}</h2>}
          {subtitle && <p className="text-sm text-[--color-neutral-600]">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}



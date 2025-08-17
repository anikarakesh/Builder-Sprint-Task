"use client";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-[--color-primary-base] text-white rounded-[var(--radius-md)] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[--color-primary-alpha-16]"
    >
      Skip to main content
    </a>
  );
}

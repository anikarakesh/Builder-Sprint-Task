import React from "react";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex items-center gap-1 text-[12px] md:text-[13px] text-[#525866]">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {idx > 0 ? (
              <svg
                className="mx-1 size-4 text-[#99a0ae]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7.05 4.55a1 1 0 0 1 1.4-.1l5 4.5a1 1 0 0 1 0 1.5l-5 4.5a1 1 0 0 1-1.3-1.5L11.4 10 7.15 6.05a1 1 0 0 1-.1-1.5z" />
              </svg>
            ) : null}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-[#0e121b] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-[#0e121b]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}



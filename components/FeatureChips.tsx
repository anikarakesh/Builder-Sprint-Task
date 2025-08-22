import React from "react";

type Chip = string | { label: string; icon?: React.ReactNode };

export default function FeatureChips({ items }: { items: Chip[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, idx) => {
        const isString = typeof it === "string";
        const label = isString ? it : it.label;
        const icon = isString ? null : it.icon ?? null;
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 rounded-full border border-[#e1e4ea] bg-white px-3 py-1.5 text-[12px] text-[#0e121b] shadow-sm"
          >
            {icon}
            {label}
          </span>
        );
      })}
    </div>
  );
}



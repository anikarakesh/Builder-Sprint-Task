import React from "react";

export default function FeatureChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-1 rounded-full border border-[#e1e4ea] bg-white px-2.5 py-1 text-[12px] text-[#0e121b]"
        >
          {it}
        </span>
      ))}
    </div>
  );
}



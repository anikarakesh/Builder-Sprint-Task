import React from "react";

type Attr = { icon?: React.ReactNode; label: string; value: string };

export default function PropertyAttributes({ items }: { items: Attr[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((a, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between rounded-[10px] border border-[#e1e4ea] bg-white px-3 py-2"
        >
          <div className="flex items-center gap-2 text-[12px] text-[#525866]">
            {a.icon}
            <span>{a.label}</span>
          </div>
          <div className="text-[13px] font-medium text-[#0e121b]">{a.value}</div>
        </div>
      ))}
    </div>
  );
}



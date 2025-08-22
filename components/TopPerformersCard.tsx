import React from "react";
import { IconChevronDown, IconMedal } from "./icons";

function ToggleTabs() {
  return (
    <div className="inline-flex items-center rounded-[10px] bg-[#f5f7fa] p-1 gap-1">
      <button className="px-2.5 py-1 rounded-md bg-white text-[14px] font-medium shadow-[0px_6px_10px_0px_rgba(14,18,27,0.06),0px_2px_4px_0px_rgba(14,18,27,0.03)]">Instagram</button>
      <button className="px-2.5 py-1 rounded-md text-[14px] text-[#99a0ae] font-medium">Youtube</button>
    </div>
  );
}

type Performer = { name: string; value: string; sub: string; active?: boolean };

const data: Performer[] = [
  { name: "Assetz", value: "3,500", sub: "18" },
  { name: "Assetz", value: "846", sub: "14" },
  { name: "Assetz", value: "200", sub: "17", active: true },
  { name: "Assetz", value: "24", sub: "15" },
];

export default function TopPerformersCard() {
  return (
    <div className="rounded-2xl border border-[#e1e4ea] shadow-sm bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconMedal className="size-6" />
          <div className="text-[16px] font-medium">Top Performers</div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-[#e1e4ea] shadow-sm px-2.5 py-1.5 text-[14px] text-[#525866]">
          <span>See All Listing</span>
        </button>
      </div>

      <div className="mt-4">
        <ToggleTabs />
      </div>

      <div className="mt-3 space-y-1">
        {data.map((p, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl py-2">
            <div className="size-10 rounded-full border border-[#e1e4ea] shadow-sm" />
            <div className="flex-1">
              <div className="text-[14px] font-medium text-[#0e121b]">{p.name}</div>
            </div>
            <div className="text-right">
              <div className="text-[14px] font-medium text-[#0e121b]">{p.value}</div>
              <div className="text-[12px] text-[#525866]">{p.sub}</div>
            </div>
            <button className="size-6 grid place-items-center rounded-md">
              <IconChevronDown className="-rotate-90" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



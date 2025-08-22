import React from "react";
import { IconChevronDown } from "./icons";

type Props = {
  titleLeft: string;
  titleRight?: string;
};

function ToggleTabs() {
  return (
    <div className="inline-flex items-center rounded-[10px] bg-[#f5f7fa] p-1 gap-1">
      <button className="px-2.5 py-1 rounded-md bg-white text-[14px] font-medium shadow-[0px_6px_10px_0px_rgba(14,18,27,0.06),0px_2px_4px_0px_rgba(14,18,27,0.03)]">Instagram</button>
      <button className="px-2.5 py-1 rounded-md text-[14px] text-[#99a0ae] font-medium">Youtube</button>
    </div>
  );
}

function CompactSelect({ label }: { label: string }) {
  return (
    <div className="relative inline-flex items-center rounded-lg border border-[#ebebeb] shadow-sm px-2.5 py-1.5 gap-1">
      <span className="text-[14px] text-neutral-900">{label}</span>
      <IconChevronDown className="size-5 text-neutral-600" />
    </div>
  );
}

export default function LineChartCard({ titleLeft }: Props) {
  return (
    <div className="rounded-2xl border border-[#ebebeb] shadow-sm bg-white p-4">
      <div className="flex items-center justify-between">
        <ToggleTabs />
        <div className="flex items-center gap-3">
          <CompactSelect label="Total Views" />
          <CompactSelect label="All Platforms" />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[24px] font-medium text-neutral-900">58.8M</div>
            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 bg-[#e0faec] text-[12px] font-medium text-[#1fc16b]">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 14l5-5 5 5" /></svg>
              0.48%
            </span>
          </div>
          <div className="relative rounded-md border border-[#ebebeb] overflow-hidden">
            <div className="grid grid-cols-3">
              {[
                { l: "1D", active: true },
                { l: "1W" },
                { l: "1M" },
              ].map((x, i) => (
                <div key={i} className={"px-3 py-1 text-[12px] font-medium " + (x.active ? "bg-[#f7f7f7] text-neutral-900" : "text-[#5c5c5c]")}>{x.l}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 relative h-[180px]">
          <div className="absolute inset-x-0 top-[70px] h-[2px] bg-gradient-to-r from-[#335cff] to-[#335cff]/0" />
          <div className="absolute inset-x-0 top-[70px] h-[2px] bg-gradient-to-r from-[#ff2d55] to-[#ff2d55]/0 transform rotate-180" />
          <div className="absolute left-1/2 top-[60px] -translate-x-1/2">
            <div className="bg-neutral-900 text-white text-[14px] px-2.5 py-1 rounded-md shadow">3982</div>
            <div className="w-3 h-1.5 mx-auto -mt-0.5" style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)", background: "#0e121b" }} />
          </div>
          <div className="absolute left-1/2 top-[76px] -translate-x-1/2 size-3 rounded-full bg-[#335cff] ring-2 ring-white shadow" />
          <div className="absolute bottom-2 left-0 right-0 flex justify-between text-[12px] text-[#525866]">
            {["20k","15k","10k","0","20k","15k","10k","0","20k","15k","10k","0","20k","15k"].map((t,i)=>(
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



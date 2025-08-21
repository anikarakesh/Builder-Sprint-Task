"use client";
import React from "react";
import ContentDivider from "./ContentDivider";

function Tabs() {
  return (
    <div className="flex w-full items-start justify-center gap-6 pb-3.5 pt-[22px]">
      <button className="relative flex cursor-pointer items-center justify-center gap-1.5 p-0">
        <span className="size-5 shrink-0" />
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Apartment</span>
        <span className="absolute -bottom-3.5 left-0 right-0 h-0">
          <div className="h-[2px] w-full bg-white" />
        </span>
      </button>
      <div className="flex items-center justify-center gap-1.5 opacity-60">
        <span className="size-5 shrink-0" />
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Holiday Homes</span>
      </div>
      <div className="flex items-center justify-center gap-1.5 opacity-60">
        <span className="size-5 shrink-0" />
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Resale Properties</span>
      </div>
      <div className="flex items-center justify-center gap-1.5 opacity-60">
        <span className="size-5 shrink-0" />
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Co-working Space</span>
      </div>
    </div>
  );
}

export default function HeroSearch() {
  return (
    <div className="relative h-[479px] w-[1420px] overflow-clip rounded-[20px]">
      <div className="absolute left-0 top-[-96px] flex h-[959.984px] w-[1440px] items-center justify-center">
        <div className="rotate-180">
          <div className="h-[1440px] w-[960px] bg-[url('http://localhost:3845/assets/32cf4f33fceb659e25fbb3fdeb486e6c8d3cacc9.png')] bg-[length:auto,cover] bg-[position:0%_0%,50%_50%] bg-[#00000066]" />
        </div>
      </div>

      <div className="absolute left-40 top-[140px] box-border flex w-[1120px] flex-col items-start justify-start gap-5 rounded-[17px] pb-[31px] pt-0 px-[34px]">
        <Tabs />

        <div className="relative box-border flex items-start justify-start gap-5 rounded-[87px] bg-white px-[34px] py-3.5 shadow-[0_21px_43px_0_rgba(0,0,0,0.10)]">
          <div className="flex w-[984px] items-center justify-start gap-5">
            <div className="w-[200px]">
              <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">City</label>
              <div className="flex items-center gap-2 overflow-clip rounded-[10px] pr-2.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
                <span className="text-[14px] text-[#0e121b]">Bengaluru</span>
                <span className="size-5 shrink-0" />
              </div>
            </div>
            <div className="flex h-8 w-0 items-center justify-center">
              <div className="-rotate-90">
                <div className="flex h-0 w-8 items-center justify-center gap-2">
                  <ContentDivider />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">Search</label>
              <div className="flex items-center gap-2 overflow-clip rounded-[10px] pr-2.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
                <span className="flex-1 text-[14px] text-[#99a0ae]">Search Destination</span>
              </div>
            </div>
            <div className="flex h-8 w-0 items-center justify-center">
              <div className="-rotate-90">
                <div className="flex h-0 w-8 items-center justify-center gap-2">
                  <ContentDivider />
                </div>
              </div>
            </div>
            <div className="w-[200px]">
              <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">Type</label>
              <div className="flex items-center gap-2 overflow-clip rounded-[10px] pr-2.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
                <span className="text-[14px] text-[#0e121b]">3 BHK</span>
                <span className="size-5 shrink-0" />
              </div>
            </div>
            <button className="size-10 shrink-0 rounded-full bg-[#0062e0] p-2" aria-label="Search" />
          </div>
        </div>
      </div>
    </div>
  );
}



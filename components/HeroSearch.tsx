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
    <section className="relative bg-black">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="relative h-[420px] overflow-clip rounded-[20px] md:h-[479px]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('http://localhost:3845/assets/32cf4f33fceb659e25fbb3fdeb486e6c8d3cacc9.png')] bg-cover bg-center opacity-90" />
          </div>
          <div className="absolute left-0 right-0 top-[80px] mx-auto w-full max-w-5xl px-4 md:top-[140px] md:px-[34px]">
            <Tabs />
            <div className="relative mt-2 box-border flex items-center justify-start gap-4 rounded-[20px] bg-white px-4 py-3.5 shadow-[0_21px_43px_0_rgba(0,0,0,0.10)] md:gap-5 md:rounded-[87px] md:px-[34px]">
              <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-[200px_1fr_200px_auto] md:gap-5">
                <div>
                  <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">City</label>
                  <div className="flex items-center gap-2 overflow-clip rounded-[10px] pr-2.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
                    <span className="text-[14px] text-[#0e121b]">Bengaluru</span>
                    <span className="size-5 shrink-0" />
                  </div>
                </div>
                <div className="hidden h-8 items-center justify-center md:flex">
                  <div className="-rotate-90">
                    <div className="flex h-0 w-8 items-center justify-center gap-2">
                      <ContentDivider />
                    </div>
                  </div>
                </div>
                <div className="order-last sm:order-none">
                  <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">Search</label>
                  <div className="flex items-center gap-2 overflow-clip rounded-[10px] pr-2.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
                    <input className="w-full flex-1 bg-transparent text-[14px] text-[#0e121b] placeholder-[#99a0ae] outline-none" placeholder="Search Destination" />
                  </div>
                </div>
                <div className="hidden h-8 items-center justify-center md:flex">
                  <div className="-rotate-90">
                    <div className="flex h-0 w-8 items-center justify-center gap-2">
                      <ContentDivider />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">Type</label>
                  <div className="flex items-center gap-2 overflow-clip rounded-[10px] pr-2.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]">
                    <span className="text-[14px] text-[#0e121b]">3 BHK</span>
                    <span className="size-5 shrink-0" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="size-10 shrink-0 rounded-full bg-[#0062e0] p-2" aria-label="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



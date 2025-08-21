"use client";
import React from "react";

// Simple ContentDivider component since it's imported but not defined
function ContentDivider() {
  return <div className="w-px h-4 bg-gray-300"></div>;
}

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
    <section className="relative bg-black w-full">
      {/* Full width container - removed max-width and padding constraints */}
      <div className="w-full">
        <div className="relative h-[420px] overflow-hidden md:h-[479px]">
          {/* Background image - now takes full width */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-90" 
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
              }}
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Content overlay */}
          <div className="absolute left-0 right-0 top-[80px] mx-auto w-full max-w-5xl px-4 md:top-[140px] md:px-[34px]">
            <Tabs />
            <div className="relative mt-2 box-border flex items-center justify-start gap-4 rounded-[20px] bg-white px-4 py-3.5 shadow-[0_21px_43px_0_rgba(0,0,0,0.10)] md:gap-5 md:rounded-[87px] md:px-[34px]">
              <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-[200px_1fr_200px_auto] md:gap-5">
                
                {/* City Field */}
                <div>
                  <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">City</label>
                  <div className="flex items-center gap-2 rounded-[10px] bg-gray-50 px-3 py-2.5 border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <span className="text-[14px] text-[#0e121b] flex-1">Bengaluru</span>
                    <svg className="size-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div className="hidden h-8 items-center justify-center md:flex">
                  <div className="-rotate-90">
                    <div className="flex h-0 w-8 items-center justify-center gap-2">
                      <ContentDivider />
                    </div>
                  </div>
                </div>

                {/* Enhanced Search Field */}
                <div className="order-last sm:order-none">
                  <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">Search</label>
                  <div className="flex items-center gap-2 rounded-[10px] bg-gray-50 px-3 py-2.5 border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
                    <svg className="size-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      className="w-full flex-1 bg-transparent text-[14px] text-[#0e121b] placeholder-[#99a0ae] outline-none" 
                      placeholder="Search Destination, Project, or Locality" 
                    />
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div className="hidden h-8 items-center justify-center md:flex">
                  <div className="-rotate-90">
                    <div className="flex h-0 w-8 items-center justify-center gap-2">
                      <ContentDivider />
                    </div>
                  </div>
                </div>

                {/* Type Field */}
                <div>
                  <label className="mb-1 block text-[14px] font-medium tracking-[-0.084px] text-[#0e121b]">Type</label>
                  <div className="flex items-center gap-2 rounded-[10px] bg-gray-50 px-3 py-2.5 border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <span className="text-[14px] text-[#0e121b] flex-1">3 BHK</span>
                    <svg className="size-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-end">
                  <button className="size-12 shrink-0 rounded-full bg-[#0062e0] hover:bg-[#0052cc] transition-colors p-3 shadow-lg hover:shadow-xl" aria-label="Search">
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
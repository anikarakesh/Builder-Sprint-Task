"use client";
import React from "react";

function Tabs() {
  return (
    <div className="flex w-full items-start justify-center gap-8 pb-6 pt-[32px]">
      <button className="relative flex cursor-pointer items-center justify-center gap-2 p-0">
        <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Apartment</span>
        <span className="absolute -bottom-6 left-0 right-0 h-0">
          <div className="h-[2px] w-full bg-white rounded-full" />
        </span>
      </button>
      <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
        <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Holiday Homes</span>
      </div>
      <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
        <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
        </svg>
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Resale Properties</span>
      </div>
      <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
        <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4zM4 9a2 2 0 100 4h12a2 2 0 100-4H4zM4 15a2 2 0 100 4h12a2 2 0 100-4H4z"/>
        </svg>
        <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Co-working Space</span>
      </div>
    </div>
  );
}

export default function HeroSearch() {
  return (
    <section className="relative bg-black w-full">
      <div className="w-full">
        <div className="relative h-[420px] overflow-hidden md:h-[479px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          </div>
          
          {/* Content overlay */}
          <div className="absolute left-0 right-0 top-[60px] mx-auto w-full max-w-4xl px-4 md:top-[100px] md:px-8">
            <Tabs />
            
            {/* Search Form */}
            <div className="relative mt-4 rounded-[28px] bg-white px-6 py-4 shadow-[0_10px_40px_0_rgba(0,0,0,0.15)]">
              <div className="grid w-full grid-cols-1 md:grid-cols-[200px_1fr_200px_auto] items-end gap-4 md:gap-6">
                
                {/* City Field */}
                <div className="w-full">
                  <label className="mb-2 block text-[13px] font-medium text-[#374151]">City</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-transparent text-[15px] font-medium text-[#1f2937] outline-none cursor-pointer pr-8">
                      <option>Bengaluru</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Chennai</option>
                    </select>
                    <svg className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Search Field - Takes center stage */}
                <div className="w-full md:col-span-1">
                  <label className="mb-2 block text-[13px] font-medium text-[#374151]">Search</label>
                  <div className="relative">
                    <input 
                      type="text"
                      className="w-full bg-transparent text-[15px] text-[#1f2937] placeholder-[#9ca3af] outline-none pr-10" 
                      placeholder="Search Destination, Project..."
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Type Field */}
                <div className="w-full">
                  <label className="mb-2 block text-[13px] font-medium text-[#374151]">Type</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-transparent text-[15px] font-medium text-[#1f2937] outline-none cursor-pointer pr-8">
                      <option>3 BHK</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>4 BHK</option>
                    </select>
                    <svg className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center md:justify-end">
                  <button className="size-12 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group" aria-label="Search">
                    <svg className="size-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
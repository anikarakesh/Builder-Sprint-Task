"use client";
import React, { useCallback, useState } from "react";
import PhoenixLogo from "./PhoenixLogo";
import { useRouter } from "next/navigation";
import { IconBell, IconChevronDown, IconSearch } from "./icons";
import Link from "next/link";

export default function ProjectsTopbar() {
  const router = useRouter();
  const [city, setCity] = useState<string>("Bengaluru");
  const [bhk, setBhk] = useState<string>("3 BHK");
  const [query, setQuery] = useState<string>("");

  const runSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (bhk) params.set("bhk", bhk);
    if (query.trim()) params.set("q", query.trim());
    router.push(`/projects/browse${params.toString() ? `?${params.toString()}` : ""}`);
  }, [router, city, bhk, query]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") runSearch();
    },
    [runSearch]
  );

  return (
    <header className="w-full bg-[#010101]">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="size-10 shrink-0 overflow-clip rounded-xl bg-[#0b0b0b] ring-1 ring-[#1a1a1a]">
              <PhoenixLogo />
            </div>
          </Link>
        </div>
    
        {/* Center: Search pill */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="w-full max-w-4xl rounded-[87px] border border-[#e1e4ea] bg-white px-3 py-2 shadow-[0px_21px_43px_0px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-[160px_1px_1fr_1px_140px_44px] items-center gap-2">
              {/* City select */}
              <div className="flex items-center">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full appearance-none rounded-full bg-transparent px-3 py-2 text-[14px] font-normal text-[#0e121b] outline-none"
                >
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Chennai</option>
                </select>
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-[#e1e4ea]" />

              {/* Query input */}
              <div className="flex items-center gap-2">
                <IconSearch className="size-4 text-[#99a0ae]" />
                <input
                  type="text"
                  placeholder="Search Destination"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="w-full bg-transparent text-[14px] text-[#0e121b] placeholder-[#99a0ae] outline-none"
                />
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-[#e1e4ea]" />

              {/* BHK select */}
              <div className="flex items-center">
                <select
                  value={bhk}
                  onChange={(e) => setBhk(e.target.value)}
                  className="w-full appearance-none rounded-full bg-transparent px-3 py-2 text-[14px] font-normal text-[#0e121b] outline-none"
                >
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4 BHK</option>
                </select>
              </div>

              {/* Search button */}
              <button
                onClick={runSearch}
                aria-label="Search"
                className="ml-auto grid place-items-center rounded-full bg-[#0062e0] p-2 text-white hover:bg-[#0456c1]"
              >
                <IconSearch className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-white/80 hover:bg-white/10">
            <IconBell className="size-5" />
          </button>
          <div className="hidden sm:flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1">
            <div className="grid size-8 place-items-center rounded-full bg-[#ffecc0] text-[#2a2000] text-[12px] font-medium">
              S
            </div>
            <span className="text-[14px] font-medium tracking-[-0.084px] text-white">Sophia</span>
            <IconChevronDown className="size-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}



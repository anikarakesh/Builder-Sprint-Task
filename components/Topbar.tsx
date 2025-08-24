"use client";
import React, { useCallback, useMemo, useState } from "react";
import PhoenixLogo from "./PhoenixLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  const [city, setCity] = useState<string>("Bengaluru");
  const [query, setQuery] = useState<string>("");

  const runSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (query.trim()) params.set("q", query.trim());
    router.push(`/projects${params.toString() ? `?${params.toString()}` : ""}`);
  }, [router, city, query]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runSearch();
    }
  }, [runSearch]);

  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="size-10 shrink-0 overflow-clip rounded-full bg-[#2b303b]">
              <PhoenixLogo />
            </div>
          </Link>
          <nav className="hidden items-center justify-center gap-1 sm:flex">
            <Link className="rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#335cff]" href="/projects">Projects</Link>
            <Link className="rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#838383] opacity-80" href="/dashboard">Builders</Link>
            <Link className="rounded-lg px-3 py-2 text*[14px] font-medium tracking-[-0.084px] text-[#838383] opacity-80" href="/partner">Partner with Us</Link>
          </nav>
        </div>

        {/* Inline search controls */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="w-full max-w-2xl rounded-full border border-[#e1e4ea] bg-white px-3 py-2 shadow-sm">
            <div className="grid grid-cols-[140px_1fr_104px] items-center gap-2">
              <div className="relative">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full appearance-none rounded-full bg-transparent px-3 py-2 text-[13px] font-medium text-[#0e121b] outline-none"
                >
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Chennai</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <svg className="size-4 text-[#99a0ae]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Destination, Project..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="w-full bg-transparent text-[13px] text-[#0e121b] placeholder-[#99a0ae] outline-none"
                />
              </div>
              <button onClick={runSearch} className="justify-self-end rounded-full bg-[#335cff] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#2749ff]">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-start gap-4 sm:flex">
          <Link href="/create-account" className="text-[14px] font-medium tracking-[-0.084px] text-[#838383]">Create Account</Link>
          <Link href="/login" className="text-[14px] font-medium tracking-[-0.084px] text-[#838383]">Login</Link>
        </div>
      </div>
    </header>
  );
}



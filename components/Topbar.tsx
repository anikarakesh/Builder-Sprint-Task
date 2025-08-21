"use client";
import React from "react";
import PhoenixLogo from "./PhoenixLogo";

export default function Topbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-5 md:px-8">
        <div className="flex items-center gap-6">
          <div className="size-10 shrink-0 overflow-clip rounded-full bg-[#2b303b]">
            <PhoenixLogo />
          </div>
          <nav className="hidden items-center justify-center gap-1 sm:flex">
            <a className="rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#335cff]" href="#">Projects</a>
            <a className="rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#838383] opacity-80" href="#">Builders</a>
            <a className="rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#838383] opacity-80" href="#">Partner with Us</a>
          </nav>
        </div>
        <div className="hidden items-center justify-start gap-4 sm:flex">
          <span className="text-[14px] font-medium tracking-[-0.084px] text-[#838383]">Create Account</span>
          <span className="text-[14px] font-medium tracking-[-0.084px] text-[#838383]">Login</span>
        </div>
      </div>
    </header>
  );
}



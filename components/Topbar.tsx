"use client";
import React from "react";
import PhoenixLogo from "./PhoenixLogo";

export default function Topbar() {
  return (
    <div className="absolute right-2.5 top-2.5 w-[1420px] box-border flex items-center justify-start gap-4 overflow-clip px-11 py-5">
      <div className="flex min-w-px min-h-px basis-0 grow items-center justify-start gap-6">
        <div className="size-10 shrink-0 overflow-clip rounded-full bg-[#2b303b]">
          <PhoenixLogo />
        </div>
        <nav className="flex items-start justify-center gap-1">
          <a className="shrink-0 rounded-lg bg-white/15 px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#335cff]" href="#">Projects</a>
          <a className="shrink-0 rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#838383] opacity-80" href="#">Builders</a>
          <a className="shrink-0 rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.084px] text-[#838383] opacity-80" href="#">Partner with Us</a>
        </nav>
      </div>
      <div className="flex items-center justify-start gap-4">
        <span className="text-[14px] font-medium tracking-[-0.084px] text-[#838383]">Create Account</span>
        <span className="text-[14px] font-medium tracking-[-0.084px] text-[#838383]">Login</span>
      </div>
    </div>
  );
}



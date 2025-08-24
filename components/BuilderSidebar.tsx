"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PhoenixLogo from "./PhoenixLogo";
import { IconCalendar, IconGrid, IconHeadphones, IconSettings } from "./icons";

type NavItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  href: string;
};

const mainItems: NavItem[] = [
  { key: "dashboard", label: "Dashboard", icon: <IconGrid className="text-neutral-600" />, href: "/dashboard" },
  { key: "listing", label: "Listing", icon: <IconCalendar className="text-neutral-600" />, href: "/projects/listing" },
  { key: "teams", label: "Teams", icon: (
    <svg viewBox="0 0 24 24" className="size-5 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  ), href: "/builders/teams" },
];

const supportItems: NavItem[] = [
  { key: "settings", label: "Settings", icon: <IconSettings className="text-neutral-600" />, href: "/builders/settings" },
  { key: "support", label: "Support", icon: <IconHeadphones className="text-neutral-600" />, href: "/builders/support" },
];

export default function BuilderSidebar() {
  const pathname = usePathname();
  return (
    <aside className="bg-white w-[272px] border-r border-[#ebebeb] min-h-screen flex flex-col">
      <div className="px-3 py-3">
        <Link href="/">
        <div className="flex items-center gap-3 rounded-[10px] p-3">
          <div className="size-10 rounded-full bg-[#7d52f4] overflow-clip">
            <PhoenixLogo />
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-medium text-neutral-900">Assetz</div>
          </div>
          <button className="size-8 grid place-items-center rounded-md border border-[#ebebeb] shadow-sm">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 9l4 4 4-4" />
              </svg>
            </button>
          </div>
        </Link>
      </div>

      <div className="px-5 py-5 space-y-6 flex-1">
        <div>
          <div className="px-1 text-[12px] font-medium uppercase text-neutral-400 tracking-[0.48px]">Main</div>
          <nav className="mt-2 space-y-1">
            {mainItems.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] " +
                    (active ? "bg-[#f7f7f7] text-neutral-900" : "text-[#5c5c5c] hover:bg-[#f7f7f7]")
                  }
                >
                  <span className="size-5 inline-flex items-center justify-center">{item.icon}</span>
                  <span className="font-medium tracking-[-0.084px]">{item.label}</span>
                  <span className="ml-auto size-5 inline-flex items-center justify-center text-neutral-400">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto">
          <nav className="space-y-1">
            {supportItems.map((item) => (
              <a
                key={item.key}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] text-[#5c5c5c] hover:bg-[#f7f7f7]"
                href="#"
              >
                <span className="size-5 inline-flex items-center justify-center">{item.icon}</span>
                <span className="font-medium tracking-[-0.084px]">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="px-3 py-3 border-t border-[#ebebeb]">
        <div className="flex items-center gap-3 rounded-[10px] p-3">
          <div className="size-10 rounded-full bg-[#c0d5ff]" />
          <div className="flex-1">
            <div className="text-[14px] font-medium text-neutral-900">Arthur Tylor</div>
            <div className="text-[12px] text-[#5c5c5c]">arthur@assetz.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}



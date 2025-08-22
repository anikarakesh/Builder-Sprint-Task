import React from "react";

export default function PropertyHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-[18px] md:text-[24px] font-medium tracking-[-0.2px] text-[#0e121b]">
          {title}
        </h1>
        <div className="mt-1 flex items-center gap-2 text-[12px] md:text-[13px] text-[#525866]">
          <svg
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          <span>{subtitle}</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <button className="rounded-full border border-[#e1e4ea] px-3 py-1.5 text-[13px] text-[#0e121b] hover:bg-[#f5f7fa]">
          Share
        </button>
        <button className="rounded-full border border-[#e1e4ea] px-3 py-1.5 text-[13px] text-[#0e121b] hover:bg-[#f5f7fa]">
          Bookmark
        </button>
      </div>
    </div>
  );
}



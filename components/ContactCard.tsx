import React from "react";

export default function ContactCard({ price }: { price: string }) {
  return (
    <aside className="sticky top-24 rounded-[12px] border border-[#e1e4ea] bg-white p-4 md:p-5 shadow-sm">
      <div className="text-[12px] text-[#525866]">Starting from</div>
      <div className="mt-1 text-[22px] md:text-[24px] font-semibold text-[#0e121b]">
        {price}
      </div>
      <button
        className="mt-4 w-full rounded-[10px] bg-[#0e121b] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#1a2233]"
        aria-label="Contact Seller"
      >
        Contact Seller
      </button>
      <div className="mt-2 text-center text-[11px] text-[#99a0ae] uppercase tracking-wide">
        Possession on January 25
      </div>
    </aside>
  );
}



import React from "react";

type Place = { name: string; distance: string };

const tabs = ["Nearest", "Metro", "Shopping", "Parks", "Food"];

export default function NeighbourhoodSection({ places }: { places: Place[] }) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-[12px] border border-[#e1e4ea] bg-white p-4">
          <div className="mb-3 text-[18px] md:text-[20px] font-medium text-[#0e121b]">
            Explore Neighbourhood
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                className={`rounded-[10px] border px-3 py-1.5 text-[12px] ${t === "Metro" ? "border-[#e1e4ea] bg-[#f5f7fa] text-[#0e121b]" : "border-[#e1e4ea] bg-white text-[#525866]"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="divide-y divide-[#e1e4ea]">
            {places.map((p, idx) => (
              <div key={idx} className="flex items-center justify-between px-1 py-3">
                <div className="text-[13px] text-[#0e121b]">{p.name}</div>
                <div className="text-[12px] text-[#525866]">{p.distance}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[360px] rounded-[12px] border border-[#e1e4ea] overflow-hidden bg-white">
          <div className="relative aspect-[4/3] w-full">
            <img
              src="https://maps.gstatic.com/tactile/pane/default_geocode-1x.png"
              alt="Map preview"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



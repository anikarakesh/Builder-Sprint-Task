import React from "react";

type Place = { name: string; distance: string };

export default function NeighbourhoodSection({ places }: { places: Place[] }) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-[12px] border border-[#e1e4ea] bg-white p-4">
          <div className="mb-3 text-[14px] font-medium text-[#0e121b]">
            Explore Neighbourhood
          </div>
          <div className="space-y-3">
            {places.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-[10px] border border-[#e1e4ea] bg-white px-3 py-2"
              >
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



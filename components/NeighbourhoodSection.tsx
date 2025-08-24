"use client";
import React, { useState } from "react";
import { IconAdd } from "./icons";

type Place = { name: string; distance: string };
type Amenity = { label: string; icon?: React.ReactNode };

type Tab = { key: string; label: string; icon: React.ReactNode };

const TABS: Tab[] = [
  {
    key: "nearest",
    label: "Nearest",
    icon: (
      <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),
  },
  {
    key: "metro",
    label: "Metro",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="5" y="2" width="14" height="16" rx="2" />
        <path d="M5 13h14M8 18l-2 3M16 18l2 3" />
      </svg>
    ),
  },
  {
    key: "shopping",
    label: "Shopping",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 2l3 7h6l3-7" />
        <path d="M6 9h12l-1 11H7L6 9z" />
      </svg>
    ),
  },
  {
    key: "parks",
    label: "Parks",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2v20M7 7l5-5 5 5M4 22h16" />
      </svg>
    ),
  },
  {
    key: "food",
    label: "Food",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 3h16M7 3v9a5 5 0 0010 0V3" />
      </svg>
    ),
  },
];

export default function NeighbourhoodSection({
  places,
  tabbedPlaces = {},
  mapImageUrl = "/map.png",
  description =
    "Claim your own piece of majestic living beneath the clouds. Welcome aboard Green Clouds, Kerala’s First Biophilic Sky Bungalows by Veegaland Homes. It is exceptionally unique and available only through exclusive invitation. These homes are designed for a discerning community of families who prioritise life, luxury and nature.",
  amenities: inputAmenities,
  price = "₹3.75 Cr",
  ctaText = "Contact Seller",
  possessionText = "Possession on January 25",
}: {
  places: Place[];
  tabbedPlaces?: Record<string, Place[]>;
  mapImageUrl?: string;
  description?: string;
  amenities?: Amenity[];
  price?: string;
  ctaText?: string;
  possessionText?: string;
}) {
  const [active, setActive] = useState<string>("metro");
  const displayed = (tabbedPlaces[active] && tabbedPlaces[active]!.length ? tabbedPlaces[active]! : places) as Place[];
  const amenities: Amenity[] =
    inputAmenities && inputAmenities.length
      ? inputAmenities
      : [
          { label: "8795 Sqft" },
          { label: "17 acres" },
          { label: "85% Open" },
          { label: "03 Bath" },
          { label: "03 Bath" },
          { label: "Gym" },
          { label: "80+ More" },
        ];
  return (
    <section className="w-full">
      <div className="mb-3 text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium text-[#0e121b]">Explore Neighbourhood</div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-[12px] border border-[#e1e4ea] bg-white p-4">

          {/* Segmented Tabs */}
          <div className="mb-3 inline-flex items-center gap-1 rounded-[10px] border border-[#e1e4ea] bg-[#f5f7fa] px-2 py-1">
            {TABS.map((t) => {
              const selected = active === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(t.key)}
                  className={(selected ? "bg-white text-[#0e121b] shadow-sm " : "text-[#525866] ") + "inline-flex items-center gap-2 rounded-[8px] px-2.5 py-1.5 text-[12px]"}
                >
                  <span className={"grid place-items-center rounded-full " + (selected ? "text-[#0e121b]" : "text-[#525866]")}>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Places List */}
          <div className="divide-y divide-[#e1e4ea] rounded-[10px]">
            {displayed.map((p, idx) => (
              <div key={idx} className="flex items-center justify-between px-2 py-3 hover:bg-[#f7f7fa] rounded-[10px]">
                <div className="flex items-center gap-3">
                  <span className="size-7 grid place-items-center rounded-full border border-[#e1e4ea] bg-white">
                    <svg viewBox="0 0 20 20" className="size-3.5 text-[#0e121b]" fill="currentColor" aria-hidden>
                      <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </span>
                  <div className="text-[13px] text-[#0e121b]">{p.name}</div>
                </div>
                <div className="text-[12px] text-[#525866]">{p.distance}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[360px] rounded-[12px] border border-[#e1e4ea] overflow-hidden bg-white">
          <div className="relative aspect-[4/3] w-full">
            <img src={mapImageUrl} alt="Map preview" className="absolute inset-0 size-full object-cover" />
          </div>
        </div>
      </div>

      {/* About Row */}
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[26px] text-[#525866]">
            {description}
          </p>

          {/* Amenities */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {amenities.map((a, i) => (
              <div key={i} className="bg-[#f5f7fa] rounded-[17px] px-3 py-4 flex items-center gap-2.5">
                <span className="size-10 rounded-full bg-white grid place-items-center border border-[#e1e4ea]">
                  {/* Generic dot icon */}
                  <svg viewBox="0 0 8 8" className="size-5 text-[#0e121b]" fill="currentColor" aria-hidden>
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span className="text-[16px] leading-[24px] font-medium text-[#0e121b]">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[360px]">
          <div className="bg-[#f5f7fa] rounded-[20px] p-8 pt-8 pb-8 md:p-8">
            <div className="text-[24px] leading-[32px] font-bold text-[#0e121b] text-center">{price}</div>
            <button type="button" className="mt-6 w-full rounded-[10px] bg-[#0062e0] text-white text-[14px] leading-[20px] font-medium py-[10px]">
              {ctaText}
            </button>
            <div className="mt-6 text-[12px] leading-[16px] text-[#525866] text-center uppercase tracking-[0.48px]">
              {possessionText}
            </div>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="mt-6 md:w-[700px]">
        {["Floor & Counter", "Fitting", "Wall & Ceiling"].map((t, i) => (
          <div key={t} className={(i === 1 ? "border-y " : i === 0 ? "border-t " : "border-b ") + "border-[#e1e4ea] bg-white h-12 flex items-center px-[14px]"}>
            <div className="flex-1 text-[14px] leading-[20px] font-medium text-[#0e121b]">{t}</div>
            <IconAdd size={20} className="text-[#0e121b]" />
          </div>
        ))}
      </div>
    </section>
  );
}

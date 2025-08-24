"use client";
import React, { useMemo, useState } from "react";
import Topbar from "../../../components/Topbar";
import PropertyGridSection from "../../../components/PropertyGridSection";

const imgRectangle14 = "/1.png";
const imgRectangle15 = "/2.png";
const imgRectangle16 = "/3.png";
const imgRectangle17 = "/4.png";
const imgImage2 = "/5.png";
const imgImage1 = "/6.png";

type Card = { imageUrl: string; badgeLogoUrl?: string; location: string; title: string; price: string; type: string; city: string };

const allCards: Card[] = [
  { imageUrl: imgRectangle14, badgeLogoUrl: imgImage2, location: "Marine Drive, Kochi", title: "3 & 4 BHK Apartments at Shobha Marina One", price: "₹3.85Cr", type: "3 BHK", city: "Kochi" },
  { imageUrl: imgRectangle15, badgeLogoUrl: imgImage1, location: "Begur, Bengaluru", title: "Assetz Canvas and Cove", price: "₹1.93Cr", type: "2 BHK", city: "Bengaluru" },
  { imageUrl: imgRectangle16, badgeLogoUrl: imgImage1, location: "Baner, Pune", title: "Premium Homes by X", price: "₹75L", type: "1 BHK", city: "Pune" },
  { imageUrl: imgRectangle17, badgeLogoUrl: imgImage2, location: "Powai, Mumbai", title: "Lakeview Residences", price: "₹2.1Cr", type: "3 BHK", city: "Mumbai" },
  { imageUrl: imgRectangle16, badgeLogoUrl: imgImage2, location: "Viman Nagar, Pune", title: "Skyline Heights", price: "₹1.1Cr", type: "2 BHK", city: "Pune" },
  { imageUrl: imgRectangle15, badgeLogoUrl: imgImage1, location: "Whitefield, Bengaluru", title: "Greenwood Apartments", price: "₹95L", type: "2 BHK", city: "Bengaluru" },
];

export default function BrowseProjectsPage() {
  const [city, setCity] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [q, setQ] = useState<string>("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return allCards.filter((c) => {
      const matchCity = city === "All" || c.city === city;
      const matchType = type === "All" || c.type === type;
      const matchQ = !query || c.title.toLowerCase().includes(query) || c.location.toLowerCase().includes(query);
      return matchCity && matchType && matchQ;
    });
  }, [city, type, q]);

  const cities = ["All", "Bengaluru", "Mumbai", "Delhi", "Chennai", "Pune", "Kochi"];
  const types = ["All", "1 BHK", "2 BHK", "3 BHK", "4 BHK"];

  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full border-b border-[#ebebeb]">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr_200px]">
            <div className="relative">
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full rounded-[10px] border border-[#e1e4ea] bg-white px-3 py-2 text-[14px] outline-none">
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-[10px] border border-[#e1e4ea] bg-white px-3 py-2">
              <svg className="size-4 text-[#99a0ae]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by project, locality..." className="w-full bg-transparent text-[14px] outline-none" />
            </div>
            <div className="relative">
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-[10px] border border-[#e1e4ea] bg-white px-3 py-2 text-[14px] outline-none">
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <PropertyGridSection title="Discover Properties" cards={filtered} />
      <PropertyGridSection title="Popular Properties in Pune" cards={allCards.filter((c) => c.city === "Pune").slice(0, 8)} />
      <PropertyGridSection title="Popular Properties in Kochi" cards={allCards.filter((c) => c.city === "Kochi").slice(0, 8)} />
    </main>
  );
}



import React from "react";
import PropertyCard from "./PropertyCard";

type Card = {
  imageUrl: string;
  badgeLogoUrl?: string;
  location: string;
  title: string;
  price: string;
};

export default function PropertyGridSection({ title, cards }: { title: string; cards: Card[] }) {
  return (
    <section className="relative">
      <div className="absolute left-40 top-0 flex items-center justify-center gap-2.5">
        <h2 className="text-[32px] font-medium tracking-[-0.16px] text-black">{title}</h2>
        <span className="size-9" />
      </div>

      <div className="absolute left-1/2 top-[80px] -translate-x-1/2">
        <div className="relative w-[1120px] leading-[0]">
          <div className="flex flex-wrap items-start justify-start gap-6">
            {cards.map((c, idx) => (
              <PropertyCard key={idx} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



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
    <section className="w-full py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-center gap-2.5">
          <h2 className="text-[28px] font-medium tracking-[-0.16px] text-black md:text-[32px]">{title}</h2>
          <span className="size-9" />
        </div>
        <div className="leading-[0]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards.map((c, idx) => (
              <PropertyCard key={idx} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



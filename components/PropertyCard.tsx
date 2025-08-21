import React from "react";

type PropertyCardProps = {
  imageUrl: string;
  badgeLogoUrl?: string;
  location: string;
  title: string;
  price: string;
};

export default function PropertyCard({ imageUrl, badgeLogoUrl, location, title, price }: PropertyCardProps) {
  return (
    <div className="relative w-full rounded-lg bg-white">
      <div className="relative w-full overflow-clip">
        <div className="w-full px-2 pb-0 pt-2">
          <div className="w-full rounded-lg bg-cover bg-center h-40 sm:h-44 md:h-48 lg:h-[180px]" style={{ backgroundImage: `url('${imageUrl}')` }} />
          {badgeLogoUrl ? (
            <div className="absolute right-1.5 top-1 h-[30px] w-[48px] bg-white sm:h-[34px] sm:w-[54px] md:h-[37px] md:w-[59px]" style={{ backgroundImage: `url('${badgeLogoUrl}')`, backgroundSize: "83.88% 61.43%,auto" }} />
          ) : null}
        </div>
        <div className="w-full">
          <div className="w-full p-3">
            <div className="inline-flex items-center justify-start gap-1.5 rounded-[20px] bg-black/5 px-[5px] py-0.5">
              <div className="size-3" />
              <span className="truncate text-[10px] font-medium text-black/60">{location}</span>
            </div>
            <div className="mt-3 min-h-[40px] text-[15px] font-medium leading-snug text-black line-clamp-2 md:min-h-[48px] md:text-[16px]">
              {title}
            </div>
            <div className="mt-3 flex w-full items-center justify-start gap-2.5">
              <div className="flex-1 text-[16px] font-extrabold text-[#0062e0] md:text-[18px]">{price}</div>
              <div className="size-[26px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-[-1px] rounded-[9px] border border-[#e7e7e7]" />
    </div>
  );
}



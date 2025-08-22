import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const img1 = "http://localhost:3845/assets/dde0c408dd3caa69db9e4633b12904a0d351a2af.png";
const img2 = "http://localhost:3845/assets/42685c46c278b54fd7f72b9ea14900173508dee6.png";
const img3 = "http://localhost:3845/assets/d133f05a44a09deb955a1b590c58e641313932a9.png";

export default function ListingPreviewDrawer({ open, onClose }: Props) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px]" onClick={onClose} />
      )}
      <aside className={
        "fixed top-0 right-0 h-full w-full max-w-[600px] bg-white z-50 shadow-xl transition-transform duration-300 " +
        (open ? "translate-x-0" : "translate-x-full")
      } aria-hidden={!open}>
        <div className="p-5 border-b border-[#e1e4ea] flex items-center justify-between">
          <div className="text-[18px] font-medium">Project Name</div>
          <div className="flex items-center gap-3">
            <button className="text-[14px] text-[#335cff] font-medium">Open Listing</button>
            <button onClick={onClose} className="size-8 grid place-items-center rounded-md border border-[#e1e4ea]">✕</button>
          </div>
        </div>

        <div className="px-5 pt-3 pb-4 border-b border-[#e1e4ea]">
          <div className="flex items-center gap-4 text-[14px]">
            <button className="pb-2 border-b-2 border-[#0062e0] text-[#0e121b] font-medium">Details</button>
            <button className="pb-2 text-[#525866]">Analytics</button>
          </div>
        </div>

        <div className="px-5 py-3">
          <div className="uppercase text-[12px] text-[#99a0ae] font-medium">Media</div>
          <div className="mt-2 flex items-center gap-1.5">
            {[img1, img2, img3, img2].map((src, i) => (
              <div key={i} className="w-[60px] h-12 rounded bg-center bg-cover" style={{ backgroundImage: `url('${src}')` }} />
            ))}
            <div className="w-[60px] h-12 rounded bg-[#f2f2f7] grid place-items-center text-[14px] text-[#525866] font-medium">+2</div>
          </div>

          <div className="mt-4 uppercase text-[12px] text-[#99a0ae] font-medium">Video Content</div>
          <div className="mt-2 flex items-center gap-1.5">
            {[img2, img3, img1].map((src, i) => (
              <div key={i} className="relative">
                <div className="w-[60px] h-12 rounded bg-center bg-cover" style={{ backgroundImage: `url('${src}')` }} />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="size-6 rounded-lg bg-white/90 border border-[#e1e4ea] grid place-items-center">▶</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 uppercase text-[12px] text-[#99a0ae] font-medium">Basic Info</div>
          <div className="mt-3 space-y-2 text-[14px]">
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Price</span><span className="font-medium text-[#0e121b]">3.75 Cr</span></div>
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Location</span><span className="font-medium text-[#0e121b]">Begur, South Bangalore</span></div>
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Builder</span><span className="font-medium text-[#0e121b]">Assetz Properties</span></div>
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Possession</span><span className="font-medium text-[#0e121b]">January 2025</span></div>
          </div>

          <div className="mt-5 uppercase text-[12px] text-[#99a0ae] font-medium">Description</div>
          <p className="mt-2 text-[14px] text-[#525866]">
            Claim your own piece of majestic living beneath the clouds. Welcome aboard Green Clouds, Kerala’s First
            Biophilic Sky Bungalows by Veegaland Homes.
          </p>

          <div className="mt-5 uppercase text-[12px] text-[#99a0ae] font-medium">Basic Info</div>
          <div className="mt-3 space-y-2 text-[14px]">
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Buildup Area</span><span className="font-medium text-[#0e121b]">8795 Sqft</span></div>
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Society</span><span className="font-medium text-[#0e121b]">17 Acres</span></div>
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Bedroom</span><span className="font-medium text-[#0e121b]">3</span></div>
            <div className="flex items-center gap-5"><span className="text-[#525866] flex-1">Bathroom</span><span className="font-medium text-[#0e121b]">2</span></div>
          </div>

          <div className="mt-5 uppercase text-[12px] text-[#99a0ae] font-medium">Amenities</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Gym",
              "Badminton",
              "Swimming Pool",
              "Play Area",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-md border border-[#e1e4ea] px-2 py-1 text-[12px] text-[#525866]">
                <span className="size-4 rounded-full bg-[#fb4ba3]" />{t}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}



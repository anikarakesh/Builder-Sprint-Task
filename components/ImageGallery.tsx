import React from "react";
import { IconGrid } from "./icons";

type GalleryImage = {
  src: string;
  alt?: string;
  withPlay?: boolean;
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [main, ...rest] = images;
  const thumbs = rest.slice(0, 3);

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4">
      {/* Main image */}
      <div className="col-span-3 md:col-span-2 overflow-hidden rounded-[12px] border border-[#e1e4ea]">
        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full bg-[#f5f7fa]">
          <img
            src={main?.src}
            alt={main?.alt || "Property image"}
            className="absolute inset-0 size-full object-cover"
          />
          <button
            type="button"
            className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-[#e1e4ea] bg-white/95 px-3 py-1.5 text-[12px] text-[#0e121b] shadow-sm backdrop-blur-sm"
            aria-label="Show All Photos"
          >
            <IconGrid size={16} className="text-[#0e121b]" />
            <span>Show All Photos</span>
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
        {thumbs[0] ? (
          <div className="relative overflow-hidden rounded-[12px] border border-[#e1e4ea] h-full col-start-1 row-start-1">
            <div className="relative h-full w-full bg-[#f5f7fa]">
              <img
                src={thumbs[0].src}
                alt={thumbs[0].alt || `Thumbnail 1`}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        ) : null}
        {thumbs[1] ? (
          <div className="relative overflow-hidden rounded-[12px] border border-[#e1e4ea] h-full col-start-1 row-start-2">
            <div className="relative h-full w-full bg-[#f5f7fa]">
              <img
                src={thumbs[1].src}
                alt={thumbs[1].alt || `Thumbnail 2`}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        ) : null}
        {thumbs[2] ? (
          <div className="relative overflow-hidden rounded-[12px] border border-[#e1e4ea] h-full row-span-2 col-start-2">
            <div className="relative h-full w-full bg-[#f5f7fa]">
              <img
                src={thumbs[2].src}
                alt={thumbs[2].alt || `Thumbnail 3`}
                className="absolute inset-0 size-full object-cover"
              />
              {thumbs[2].withPlay ? (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid size-10 place-items-center rounded-full bg-white/90 shadow">
                    <svg
                      viewBox="0 0 20 20"
                      fill="#0e121b"
                      className="size-5"
                      aria-hidden
                    >
                      <path d="M7 5v10l9-5-9-5z" />
                    </svg>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}



import React from "react";

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
        <div className="relative aspect-[16/10] w-full bg-[#f5f7fa]">
          <img
            src={main?.src}
            alt={main?.alt || "Property image"}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:flex flex-col gap-3 md:gap-4">
        {thumbs.map((t, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-[12px] border border-[#e1e4ea]"
          >
            <div className="relative aspect-[16/10] w-full bg-[#f5f7fa]">
              <img
                src={t.src}
                alt={t.alt || `Thumbnail ${idx + 1}`}
                className="absolute inset-0 size-full object-cover"
              />
              {t.withPlay ? (
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
        ))}
      </div>
    </div>
  );
}



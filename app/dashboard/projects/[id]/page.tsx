"use client";
import React, { useCallback, useState } from "react";
import BuilderSidebar from "../../../../components/BuilderSidebar";

export default function DashboardProjectDetailPage() {
  const [title, setTitle] = useState("Assetz Canvas and Cove");
  const [price, setPrice] = useState("₹3.75 Cr");
  const [description, setDescription] = useState("Craft your own piece of majestic living beneath the clouds...");
  const [images, setImages] = useState<string[]>(["/1.png", "/2.png", "/3.png"]);

  const onUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    const newUrls = Array.from(files).map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...newUrls]);
  }, []);

  const onDelete = useCallback((idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <BuilderSidebar />
        <div className="flex-1">
          <div className="bg-white px-8 py-5 border-b border-[#ebebeb] flex items-center gap-4">
            <div className="text-[18px] font-medium tracking-[-0.27px] text-neutral-900 flex-1">Project Detail</div>
            <button className="rounded-[10px] bg-[#335cff] text-white text-[14px] font-medium px-[10px] py-[10px] shadow-sm">Save</button>
          </div>

          <div className="px-8 py-5 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] text-[#374151] mb-1">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" />
              </div>
              <div>
                <label className="block text-[13px] text-[#374151] mb-1">Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" />
              </div>
              <div>
                <label className="block text-[13px] text-[#374151] mb-1">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" />
              </div>

              <div>
                <div className="text-[14px] font-medium mb-2">Amenities</div>
                <div className="flex flex-wrap gap-2">
                  {["Gym", "Pool", "Play Area", "Parking"].map((a) => (
                    <span key={a} className="rounded-md border border-[#e1e4ea] px-2 py-1 text-[12px] text-[#525866]">{a}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="text-[14px] font-medium mb-2">Gallery</div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((src, idx) => (
                  <div key={idx} className="relative">
                    <img src={src} alt="" className="h-24 w-full object-cover rounded" />
                    <button onClick={() => onDelete(idx)} className="absolute top-1 right-1 size-7 rounded-md border border-[#e1e4ea] bg-white">✕</button>
                  </div>
                ))}
                <label className="h-24 w-full border border-dashed border-[#cfd5e1] rounded grid place-items-center text-[12px] text-[#5c5c5c] cursor-pointer">
                  Upload
                  <input multiple onChange={onUpload} type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



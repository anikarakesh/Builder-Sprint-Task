"use client";
import React, { useCallback, useState } from "react";
import BuilderSidebar from "../../../components/BuilderSidebar";

type Asset = { id: string; type: "image" | "video" | "brochure"; name: string; url: string };

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>([]);

  const onUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: Asset["type"]) => {
    const files = e.target.files;
    if (!files || !files.length) return;
    const newOnes: Asset[] = Array.from(files).map((f) => ({ id: Math.random().toString(36).slice(2), type, name: f.name, url: URL.createObjectURL(f) }));
    setAssets((prev) => [...newOnes, ...prev]);
  }, []);

  const onDelete = useCallback((id: string) => setAssets((prev) => prev.filter((a) => a.id !== id)), []);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <BuilderSidebar />
        <div className="flex-1">
          <div className="bg-white px-8 py-5 border-b border-[#ebebeb] flex items-center gap-4">
            <div className="text-[18px] font-medium tracking-[-0.27px] text-neutral-900 flex-1">Assets</div>
          </div>
          <div className="px-8 py-5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="rounded-[10px] border border-dashed border-[#cfd5e1] p-4 text-center cursor-pointer text-[14px]">Upload Images
                <input className="hidden" accept="image/*" multiple type="file" onChange={(e) => onUpload(e, "image")} />
              </label>
              <label className="rounded-[10px] border border-dashed border-[#cfd5e1] p-4 text-center cursor-pointer text-[14px]">Upload Videos
                <input className="hidden" accept="video/*" multiple type="file" onChange={(e) => onUpload(e, "video")} />
              </label>
              <label className="rounded-[10px] border border-dashed border-[#cfd5e1] p-4 text-center cursor-pointer text-[14px]">Upload Brochures
                <input className="hidden" accept="application/pdf" multiple type="file" onChange={(e) => onUpload(e, "brochure")} />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {assets.map((a) => (
                <div key={a.id} className="rounded-[10px] border border-[#e1e4ea] overflow-hidden">
                  <div className="p-3 flex items-center justify-between text-[14px]">
                    <div className="truncate">{a.name}</div>
                    <button onClick={() => onDelete(a.id)} className="size-7 rounded-md border border-[#e1e4ea]">✕</button>
                  </div>
                  {a.type === "image" ? (
                    <img src={a.url} alt="" className="h-40 w-full object-cover" />
                  ) : a.type === "video" ? (
                    <video controls className="h-40 w-full object-cover" src={a.url} />
                  ) : (
                    <div className="p-3 text-[13px] text-[#525866]">PDF uploaded</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



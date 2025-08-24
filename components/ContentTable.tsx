"use client";
import React, { useMemo, useState } from "react";
import { IconKebab } from "./icons";

type Row = {
  avatar: string;
  name: string;
  platform: "Instagram" | "Youtube";
  views: string;
  likes: string;
  interactions: string;
  status: "Active" | "Completed";
};

const img = "/1.png";

export const contentRows: Row[] = Array.from({ length: 11 }).map((_, i) => ({
  avatar: img,
  name: "Project Name",
  platform: i % 2 ? "Youtube" : "Instagram",
  views: ["123k", "432k", "1.45M", "5.4M"][i % 4] || "123k",
  likes: ["34.5k", "12.4k", "4.5k"][i % 3] || "34.5k",
  interactions: ["1.5k", "2.3k", "4.3k"][i % 3] || "1.5k",
  status: i % 4 === 0 ? "Active" : "Completed",
}));

export type ContentTableOnSelect = (row: Row | null, index: number | null) => void;

export type PlatformFilter = "All" | Row["platform"];

export default function ContentTable({
  selectedIndex,
  onSelect,
  rows = contentRows,
  query = "",
  platformFilter = "All",
  onPlatformFilterChange,
  onView,
  onEdit,
}: {
  selectedIndex?: number | null;
  onSelect?: ContentTableOnSelect;
  rows?: Row[];
  query?: string;
  platformFilter?: PlatformFilter;
  onPlatformFilterChange?: (v: PlatformFilter) => void;
  onView?: (row: Row, index: number) => void;
  onEdit?: (row: Row, index: number) => void;
}) {
  const [sortKey, setSortKey] = useState<keyof Pick<Row, "name" | "views" | "likes" | "interactions">>("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const res = rows.filter((r) => {
      const matchesQuery = !q || r.name.toLowerCase().includes(q);
      const matchesPlatform = platformFilter === "All" || r.platform === platformFilter;
      return matchesQuery && matchesPlatform;
    });
    const toNumber = (v: string): number => {
      const m = /([\d.]+)\s*(M|K)?/i.exec(v);
      if (!m) return 0;
      const n = parseFloat(m[1] || "0");
      const unit = (m[2] || "").toUpperCase();
      if (unit === "M") return n * 1_000_000;
      if (unit === "K") return n * 1_000;
      return n;
    };
    const sorted = [...res].sort((a, b) => {
      let av: number | string = a[sortKey] as any;
      let bv: number | string = b[sortKey] as any;
      if (sortKey !== "name") {
        av = toNumber(String(av));
        bv = toNumber(String(bv));
      }
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [rows, query, platformFilter, sortKey, sortDir]);

  const setSort = (key: typeof sortKey) => {
    setSortDir((d) => (key === sortKey ? (d === "asc" ? "desc" : "asc") : "asc"));
    setSortKey(key);
  };
  return (
    <div className="bg-white rounded-2xl border border-[#ebebeb] shadow-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#ebebeb]">
        <div className="size-5 rounded-full border border-[#ebebeb] grid place-items-center">
          <div className="size-2 rounded-full bg-[#0e121b]" />
        </div>
        <div className="text-[14px] font-medium">Content</div>
        <div className="ml-auto">
          <select
            value={platformFilter}
            onChange={(e) => onPlatformFilterChange?.(e.target.value as PlatformFilter)}
            className="text-[14px] border border-[#ebebeb] rounded-lg px-2.5 py-1.5 shadow-sm"
          >
            <option value="All">All Platforms</option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">Youtube</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[12px] text-[#5c5c5c]">
            <tr className="border-b border-[#ebebeb]">
              <th className="px-4 py-2 cursor-pointer" onClick={() => setSort("name")}>Instructor</th>
              <th className="px-4 py-2">Platform</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => setSort("views")}>Views</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => setSort("likes")}>Likes</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => setSort("interactions")}>Interactions</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {filteredRows.map((r, idx) => {
              const active = selectedIndex === idx;
              return (
              <tr key={idx} className={"border-b border-[#ebebeb] cursor-pointer " + (active ? "bg-[#f7f7f7]" : "hover:bg-[#f7f7f7]")} onClick={() => onSelect && onSelect(r, idx)}>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt="" className="size-8 rounded-md object-cover" />
                    <div className="text-[14px]">{r.name}</div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="size-5 rounded-full bg-[#335cff] text-white grid place-items-center text-[10px]">{r.platform === "Instagram" ? "i" : "y"}</span>
                    <span>{r.platform}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{r.views}</td>
                <td className="px-4 py-2">{r.likes}</td>
                <td className="px-4 py-2">{r.interactions}</td>
                <td className="px-4 py-2">
                  <span className={
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[12px] " +
                    (r.status === "Active" ? "bg-[#e0faec] text-[#1fc16b]" : "bg-[#f5f7fa] text-[#5c5c5c]")
                  }>
                    <span className={"size-2 rounded-full " + (r.status === "Active" ? "bg-[#1fc16b]" : "bg-[#5c5c5c]")}></span>
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <div className="inline-flex items-center gap-2">
                    <button type="button" onClick={(e) => { e.stopPropagation(); onView?.(r, idx); }} className="text-[12px] text-[#335cff]">View</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); onEdit?.(r, idx); }} className="text-[12px] text-[#525866]">Edit</button>
                    <button className="text-[#5c5c5c]" onClick={(e) => e.stopPropagation()} aria-label="More">
                      <IconKebab />
                    </button>
                  </div>
                </td>
              </tr>
            );})}
          </tbody>
        </table>
      </div>
    </div>
  );
}



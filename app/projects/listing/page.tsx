"use client";
import React, { useMemo, useState } from "react";
import BuilderSidebar from "../../../components/BuilderSidebar";
import ListingHeader from "../../../components/ListingHeader";
import ContentTable, { contentRows, type PlatformFilter } from "../../../components/ContentTable";
import ListingPreviewDrawer from "../../../components/ListingPreviewDrawer";
import { useSearchParams } from "next/navigation";

export default function ListingPage() {
  const params = useSearchParams();
  const initialQuery = params?.get("q") || "";
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>("All");
  const [query, setQuery] = useState<string>(initialQuery);

  const selectedRow = useMemo(() => {
    const list = contentRows.filter((r) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || r.name.toLowerCase().includes(q);
      const matchesPlatform = platformFilter === "All" || r.platform === platformFilter;
      return matchesQuery && matchesPlatform;
    });
    if (selectedIndex == null || selectedIndex < 0 || selectedIndex >= list.length) return null;
    return list[selectedIndex];
  }, [selectedIndex, query, platformFilter]);
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <BuilderSidebar />
        <div className="flex-1">
          <ListingHeader
            defaultQuery={initialQuery}
            onSearch={(q) => setQuery(q)}
            onCreate={() => alert("Create flow coming soon")}
          />
          <div className="px-8 py-5">
            <ContentTable
              selectedIndex={selectedIndex}
              platformFilter={platformFilter}
              onPlatformFilterChange={setPlatformFilter}
              query={query}
              onView={(row) => alert(`Viewing ${row.name}`)}
              onEdit={(row) => alert(`Editing ${row.name}`)}
              onSelect={(_, idx) => {
                setSelectedIndex(idx);
                setOpen(true);
              }}
            />
          </div>
        </div>
      </div>
      <ListingPreviewDrawer open={open} onClose={() => setOpen(false)} selected={selectedRow}
      />
    </div>
  );
}



"use client";
import React, { useState } from "react";
import BuilderSidebar from "../../../components/BuilderSidebar";
import ListingHeader from "../../../components/ListingHeader";
import ContentTable from "../../../components/ContentTable";
import ListingPreviewDrawer from "../../../components/ListingPreviewDrawer";

export default function ListingPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <BuilderSidebar />
        <div className="flex-1">
          <ListingHeader />
          <div className="px-8 py-5">
            <ContentTable
              selectedIndex={selectedIndex}
              onSelect={(_, idx) => {
                setSelectedIndex(idx);
                setOpen(true);
              }}
            />
          </div>
        </div>
      </div>
      <ListingPreviewDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
}



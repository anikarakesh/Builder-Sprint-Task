import React from "react";

export default function ContentDivider({ orientation = "vertical" }: { orientation?: "vertical" | "horizontal" }) {
  if (orientation === "horizontal") {
    return <div className="h-px w-full bg-[#e1e4ea]" />;
  }
  return <div className="w-px h-8 bg-[#e1e4ea]" />;
}



import React from "react";
import { IconAdd } from "./icons";

export default function DashboardHeader() {
  return (
    <div className="bg-white px-8 py-5 border-b border-[#ebebeb] flex items-center justify-between">
      <div className="text-[18px] font-medium tracking-[-0.27px] text-neutral-900">Welcome back to Realtor 👋🏻</div>
      <button className="inline-flex items-center gap-2 rounded-[10px] bg-[#335cff] text-white text-[14px] font-medium px-[10px] py-[10px] shadow-sm">
        <IconAdd className="size-5" />
        <span>Create Request</span>
      </button>
    </div>
  );
}



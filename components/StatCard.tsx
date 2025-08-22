import React from "react";

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta?: string;
  spark?: React.ReactNode;
};

export default function StatCard({ icon, label, value, delta, spark }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#e1e4ea] shadow-sm p-5 flex flex-col">
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center justify-center rounded-full border border-[#e1e4ea] shadow-sm p-2">
          <span className="size-5 text-neutral-700">{icon}</span>
        </div>
        {spark}
      </div>
      <div className="mt-6">
        <div className="text-[14px] text-[#525866]">{label}</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-[32px] leading-10 font-medium tracking-[-0.16px] text-[#0e121b]">{value}</div>
          {delta && (
            <span className="text-[12px] rounded-full px-2 py-0.5 bg-[#c2f5da] text-[#0b4627] font-medium">{delta}</span>
          )}
        </div>
      </div>
    </div>
  );
}



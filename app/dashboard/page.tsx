import React from "react";
import BuilderSidebar from "../../components/BuilderSidebar";
import DashboardHeader from "../../components/DashboardHeader";
import StatCard from "../../components/StatCard";
import LineChartCard from "../../components/LineChartCard";
import TopPerformersCard from "../../components/TopPerformersCard";
import ReelsGrid from "../../components/ReelsGrid";
import { IconEye, IconThumbUp, IconMouse } from "../../components/icons";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <BuilderSidebar />
        <div className="flex-1">
          <DashboardHeader />

          <div className="px-8 py-5">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <StatCard icon={<IconEye className="size-5" />} label="Total Views" value="34.3M" delta="+2.3%" />
              <StatCard icon={<IconThumbUp className="size-5" />} label="Total Likes" value="343K" delta="+1.2%" />
              <StatCard icon={<IconMouse className="size-5" />} label="Total Leads" value="3.5K" delta="+2.3%" />
            </div>

            {/* Chart + Top Performers */}
            <div className="grid grid-cols-1 lg:grid-cols-[720px_352px] gap-5 mt-5">
              <LineChartCard titleLeft="Instagram" />
              <TopPerformersCard />
            </div>

            {/* Reels Grid */}
            <div className="mt-5">
              <ReelsGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


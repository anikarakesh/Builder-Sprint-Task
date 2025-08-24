import React from "react";
import Topbar from "../../components/Topbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-md px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Blog</h1>
          <p className="mt-4 text-[14px] text-[#525866]">Insights and stories about property markets, living, and investing.</p>
        </div>
      </section>
    </main>
  );
}



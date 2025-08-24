import React from "react";
import Topbar from "../../../components/Topbar";

export default function NewProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">New Projects</h1>
          <p className="mt-2 text-[14px] text-[#525866]">Explore the latest upcoming and newly launched projects.</p>
        </div>
      </section>
    </main>
  );
}



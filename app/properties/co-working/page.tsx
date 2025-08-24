import React from "react";
import Topbar from "../../../components/Topbar";

export default function CoworkingPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Co-Working Space</h1>
          <p className="mt-2 text-[14px] text-[#525866]">Flexible offices, shared workspaces, and managed desks.</p>
        </div>
      </section>
    </main>
  );
}



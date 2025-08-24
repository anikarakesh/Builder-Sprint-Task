import React from "react";
import Topbar from "../../../components/Topbar";

export default function HousingLoansPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-md px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Housing Loans</h1>
          <p className="mt-2 text-[14px] text-[#525866]">Get assistance with home financing and pre-approvals.</p>
        </div>
      </section>
    </main>
  );
}



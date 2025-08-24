import React from "react";
import Topbar from "../../components/Topbar";

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-md px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Terms and Conditions</h1>
          <div className="prose prose-sm max-w-none mt-6 text-[#374151]">
            <h2>Use of Service</h2>
            <p>By accessing our services, you agree to comply with these terms and applicable laws.</p>
            <h2>Accounts</h2>
            <p>You are responsible for safeguarding your account credentials and for activities under your account.</p>
            <h2>Limitations</h2>
            <p>We are not liable for indirect or consequential damages arising from the use of our services.</p>
            <h2>Changes</h2>
            <p>We may update these terms periodically. Continued use constitutes acceptance of the latest terms.</p>
            <h2>Contact</h2>
            <p>For questions, email legal@yourcompany.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}



import React from "react";
import Topbar from "../../components/Topbar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-md px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none mt-6 text-[#374151]">
            <p>Your privacy is important to us. This policy explains what data we collect and how we use it.</p>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly, like account details and inquiries, and usage information through cookies and analytics.</p>
            <h2>How We Use Information</h2>
            <p>We use the data to provide and improve our services, personalize content, and communicate updates.</p>
            <h2>Your Rights</h2>
            <p>You can request access, correction, or deletion of your data by contacting support.</p>
            <h2>Contact</h2>
            <p>For questions, email privacy@yourcompany.com.</p>
          </div>
        </div>
      </section>
    </main>
  );
}



"use client";
import React, { useCallback } from "react";
import Topbar from "../../components/Topbar";

export default function PartnerPage() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(`Thanks! We'll reach out to ${formData.get("email")}`);
  }, []);
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Partner with Us</h1>
          <p className="mt-2 text-[14px] text-[#525866]">Submit your details and our team will get in touch.</p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Name</label>
              <input name="name" required className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Company</label>
              <input name="company" className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="Company name" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Phone</label>
              <input name="phone" className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="+91 98765 43210" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Message</label>
              <textarea name="message" rows={5} className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="Tell us about your goals" />
            </div>
            <div className="md:col-span-2 flex items-center justify-end">
              <button className="inline-flex items-center gap-2 rounded-[10px] bg-[#335cff] text-white text-[14px] font-medium px-[14px] py-[10px] shadow-sm">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}



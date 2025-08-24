"use client";
import React, { useCallback } from "react";
import Topbar from "../../components/Topbar";
import Link from "next/link";

export default function CreateAccountPage() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(`Account created for ${formData.get("email")}`);
  }, []);
  return (
    <main className="min-h-screen w-full bg-white">
      <Topbar />
      <section className="w-full">
        <div className="mx-auto max-w-md px-4 md:px-8 py-8 md:py-10">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-neutral-900">Create Account</h1>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Full Name</label>
              <input name="name" required className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Password</label>
              <input name="password" type="password" required className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#374151] mb-1">Confirm Password</label>
              <input name="confirm" type="password" required className="w-full rounded-[10px] border border-[#e1e4ea] px-3 py-2 text-[14px] outline-none" placeholder="••••••••" />
            </div>
            <button className="w-full rounded-[10px] bg-[#335cff] text-white text-[14px] font-medium px-[14px] py-[10px] shadow-sm">Create Account</button>
            <p className="text-[13px] text-[#525866]">Already have an account? <Link className="text-[#335cff]" href="/login">Login</Link></p>
          </form>
        </div>
      </section>
    </main>
  );
}



import React from "react";

export default function FooterCTA() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="rounded-[20px] bg-white">
          <div className="pt-12">
            <div className="relative mb-10 flex w-full items-center justify-start gap-2.5 pb-[40px] md:pb-[60px]">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 border-b border-solid border-[#99a0ae]" />
              <h3 className="grow text-[36px] font-semibold tracking-[-0.56px] text-[#0e121b] md:text-[56px]">
                <span className="block leading-[44px] md:leading-[64px]">550+ People Managed Homes</span>
                <span className="leading-[44px] md:leading-[64px]">
                  in <span className="text-[#0062e0]">Goa</span> with Us
                </span>
              </h3>
              <button className="relative shrink-0 rounded-[10px] bg-[#0062e0] px-[14px] py-2 text-[14px] font-medium tracking-[-0.084px] text-white shadow-[0_1px_2px_rgba(14,18,27,0.24),0_0_0_1px_#335cff]">
                Talk to Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-10 py-[40px] md:grid-cols-4 md:py-[60px]">
              <div className="flex flex-col gap-7">
                <div className="text-[16px] font-semibold uppercase tracking-[-0.096px] text-[#0e121b]">Discover</div>
                <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
                  <span>Home</span>
                  <span>Properties</span>
                  <span>About Us</span>
                  <span>Blog</span>
                  <span>Contact</span>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="text-[16px] font-semibold uppercase tracking-[-0.096px] text-[#0e121b]">Properties</div>
                <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
                  <span>New Projects</span>
                  <span>Co-Working Space</span>
                  <span>Apartments</span>
                  <span>Holiday Homes</span>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="text-[16px] font-semibold uppercase tracking-[-0.096px] text-[#0e121b]">Services</div>
                <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
                  <span>Sell Your Property</span>
                  <span>Rent Your Property</span>
                  <span>Housing Loans</span>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="text-[16px] font-semibold uppercase tracking-[-0.096px] text-[#0e121b]">Address</div>
                <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
                  <span>
                    <span className="block">2nd Floor, Innerspace Business Centre</span>
                    <span>Chittethukara, Kakkanad 682030</span>
                  </span>
                  <span>Phone: +91 95 62 49 25 75</span>
                  <span>Email: me@realtorhadi.com</span>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col items-start justify-between gap-6 py-[40px] md:flex-row md:py-[60px]">
              <div className="pointer-events-none absolute inset-0 border-t border-solid border-[#e1e4ea]" />
              <div className="text-[16px] font-semibold uppercase tracking-[-0.096px] text-[#0e121b]">realtor.com © 2024 All rights reserved</div>
              <div className="flex items-center justify-end gap-8 md:w-[392px]">
                <span className="text-right text-[16px] font-medium text-[#525866]">Privacy Policy</span>
                <span className="text-right text-[16px] font-medium text-[#525866]">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



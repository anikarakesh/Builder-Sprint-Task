import React from "react";

export default function FooterCTA() {
  return (
    <section className="relative h-[740px] w-[1420px] rounded-[20px] bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 w-[1566.46px] -translate-x-[calc(50%-9px)] bg-gradient-to-b from-[#ffffff00] via-[#ffffffcc] via-[31.783%] to-[#ffffff] to-[79.051%] blur-[50px]" />
        </div>
      </div>
      <div className="absolute left-0 top-[617px] box-border flex w-[1420px] flex-col items-start justify-start px-[140px]">
        <div className="relative flex w-full items-center justify-start gap-2.5 pb-[60px]">
          <div className="pointer-events-none absolute inset-0 border-0 border-b border-solid border-[#99a0ae]" />
          <h3 className="basis-0 min-w-px min-h-px grow text-[56px] font-semibold tracking-[-0.56px] text-[#0e121b]">
            <span className="block leading-[64px]">550+ People Managed Homes</span>
            <span className="leading-[64px]">
              in <span className="text-[#0062e0]">Goa</span> with Us
            </span>
          </h3>
          <button className="relative shrink-0 rounded-[10px] bg-[#0062e0] px-[14px] py-2 text-[14px] font-medium tracking-[-0.084px] text-white shadow-[0_1px_2px_rgba(14,18,27,0.24),0_0_0_1px_#335cff]">
            Talk to Us
          </button>
        </div>
        <div className="relative flex w-full items-start justify-between py-[60px]">
          <div className="flex flex-col gap-7">
            <div className="text-[16px] font-semibold tracking-[-0.096px] text-[#0e121b] uppercase">Discover</div>
            <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
              <span>Home</span>
              <span>Properties</span>
              <span>About Us</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="text-[16px] font-semibold tracking-[-0.096px] text-[#0e121b] uppercase">Properties</div>
            <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
              <span>New Projects</span>
              <span>Co-Working Space</span>
              <span>Apartments</span>
              <span>Holiday Homes</span>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="text-[16px] font-semibold tracking-[-0.096px] text-[#0e121b] uppercase">Services</div>
            <div className="flex flex-col gap-4 text-[16px] font-medium text-[#525866]">
              <span>Sell Your Property</span>
              <span>Rent Your Property</span>
              <span>Housing Loans</span>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="text-[16px] font-semibold tracking-[-0.096px] text-[#0e121b] uppercase">Address</div>
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
        <div className="relative flex w-full items-start justify-between py-[60px]">
          <div className="pointer-events-none absolute inset-0 border-0 border-t border-solid border-[#e1e4ea]" />
          <div className="text-[16px] font-semibold tracking-[-0.096px] text-[#0e121b] uppercase">realtor.com © 2024 All rights reserved</div>
          <div className="flex w-[392px] items-center justify-end gap-8">
            <span className="text-right text-[16px] font-medium text-[#525866]">Privacy Policy</span>
            <span className="text-right text-[16px] font-medium text-[#525866]">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </section>
  );
}



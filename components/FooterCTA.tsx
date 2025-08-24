"use client"
import React from "react";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="rounded-[20px] bg-white overflow-hidden">
          {/* Hero Section with Background Image */}
          <div className="relative">
            {/* Background Image with Overlay */}
            <div className="h-[350px] md:h-[450px] relative">
              <img 
                src="/footer_figma_builder.png" 
                alt="Modern luxury home"
                className="w-full h-full object-cover rounded-t-[20px]"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80";
                }}
              />
              {/* White Overlay - only on image */}
              <div className="absolute inset-0 bg-white/20 rounded-t-[20px]" />
            </div>
          </div>
            
          {/* Content Section - Completely separate from image */}
          <div className="px-8 md:px-12 lg:px-16 py-8 md:py-12 bg-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Main Heading */}
              <div className="flex-1">
                <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#2c3e50] leading-tight tracking-tight">
                  <span className="block">550+ People Managed Homes</span>
                  <span className="block">
                    in <span className="text-[#007bff]">Goa</span> with Us
                  </span>
                </h2>
              </div>
              
              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Link href="/partner" className="bg-[#007bff] hover:bg-[#0056b3] text-white px-8 py-3 rounded-[12px] text-[16px] font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-lg">
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="px-8 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Discover Column */}
              <div className="space-y-6">
                <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#2c3e50]">
                  DISCOVER
                </h3>
                <div className="space-y-4">
                  <Link href="/" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Home</Link>
                  <Link href="/projects" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Properties</Link>
                  <Link href="/about" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">About Us</Link>
                  <Link href="/blog" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Blog</Link>
                  <Link href="/contact" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Contact</Link>
                </div>
              </div>

              {/* Properties Column */}
              <div className="space-y-6">
                <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#2c3e50]">
                  PROPERTIES
                </h3>
                <div className="space-y-4">
                  <Link href="/properties/new-projects" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">New Projects</Link>
                  <Link href="/properties/co-working" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Co-Working Space</Link>
                  <Link href="/properties/apartments" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Apartments</Link>
                  <Link href="/properties/holiday-homes" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Holiday Homes</Link>
                </div>
              </div>

              {/* Services Column */}
              <div className="space-y-6">
                <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#2c3e50]">
                  SERVICES
                </h3>
                <div className="space-y-4">
                  <Link href="/services/sell" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Sell Your Property</Link>
                  <Link href="/services/rent" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Rent Your Property</Link>
                  <Link href="/services/loans" className="block text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Housing Loans</Link>
                </div>
              </div>

              {/* Address Column */}
              <div className="space-y-6">
                <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#2c3e50]">
                  ADDRESS
                </h3>
                <div className="space-y-4 text-[16px] text-[#6c757d]">
                  <div>
                    <div>2nd Floor, Innerspace Business Centre</div>
                    <div>Chittethukara, Kakkanad 682030</div>
                  </div>
                  <div>
                    <strong>Phone:</strong> +91 95 62 49 25 75
                  </div>
                  <div>
                    <strong>Email:</strong>{' '}
                    <a 
                      href="mailto:me@realtorhadi.com" 
                      className="text-[#007bff] hover:underline"
                    >
                      me@realtorhadi.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#e9ecef] px-8 md:px-12 lg:px-16 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Copyright */}
              <div className="text-[16px] font-semibold text-[#2c3e50]">
                REALTOR.COM © 2024 ALL RIGHTS RESERVED
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <Link href="/privacy" className="text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="text-[16px] text-[#6c757d] hover:text-[#007bff] transition-colors duration-200">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
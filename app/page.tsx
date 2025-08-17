"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { SearchBar } from "@/components/primitives/SearchBar";
import { Heading, Text } from "@/components/primitives/Typography";
import { PopularSection } from "@/components/buyer/PopularSection";
import { useProjects } from "@/lib/hooks/useProjects";

export default function Home() {
  const { projects, loading } = useProjects();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const featuredProjects = projects.filter(p => p.featured && p.status === "active");
  const popularProjects = projects.filter(p => p.popular && p.status === "active");

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Navigate to buyers page with search query
      const searchParams = new URLSearchParams();
      searchParams.set('search', query.trim());
      router.push(`/buyers?${searchParams.toString()}`);
    } else {
      // If empty search, just go to buyers page
      router.push('/buyers');
    }
  };

  const stats = [
    { label: "Properties", value: "500+", description: "Premium properties across India" },
    { label: "Cities", value: "25+", description: "Major cities and growing" },
    { label: "Builders", value: "100+", description: "Verified and trusted partners" },
    { label: "Families", value: "10K+", description: "Happy homeowners" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary gradient orbs */}
          <div className="absolute -top-1/2 -right-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -bottom-1/2 -left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400/15 via-blue-400/10 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:3s]"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-300/10 to-transparent rounded-full blur-2xl animate-float-slow [animation-delay:1s]"></div>
          
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-b from-white/5 via-transparent to-white/5"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float-particle"></div>
          <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-particle [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle [animation-delay:4s]"></div>
        </div>
        <Container>
          <div className="text-center max-w-6xl mx-auto relative z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-blue-500/10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <Text size="sm" className="text-slate-700 font-semibold tracking-wide uppercase">Premium Real Estate Platform</Text>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse [animation-delay:1s]"></div>
            </div>

            <Heading level={1} className="mb-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight max-w-5xl mx-auto">
              <span className="block text-slate-900 mb-2">Find Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">Dream Property</span>
              <span className="block text-slate-800 text-4xl md:text-5xl lg:text-6xl font-light mt-4">with Luxury & Trust</span>
            </Heading>
            
            <Text size="xl" className="mb-16 max-w-4xl mx-auto leading-relaxed text-slate-600 text-lg md:text-xl font-light">
              Experience India's most sophisticated real estate platform. Discover luxury apartments, 
              premium homes, and exclusive properties from verified builders with unmatched service excellence.
            </Text>
            
            {/* Premium Search Bar */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                
                {/* Glass morphism search container */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-2 shadow-2xl shadow-blue-500/10 border border-white/30 hover:bg-white/95 transition-all duration-300">
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                      </svg>
                    </div>
                    <SearchBar 
                      placeholder="Search luxury properties, prime locations, or trusted builders..."
                      onSearch={handleSearch}
                      className="border-0 shadow-none text-lg py-2 bg-transparent placeholder-slate-500 text-slate-800 flex-1"
                    />

                  </div>
                </div>
              </div>
              
              {/* Luxury search suggestions */}
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <Text size="sm" className="mb-0 w-full text-center text-slate-500 font-medium">
                  Trending Searches:
                </Text>
                {["Luxury Penthouses Mumbai", "Waterfront Villas Goa", "Smart Homes Bangalore", "Heritage Properties Delhi"].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(suggestion)}
                    className="group px-5 py-2.5 text-sm bg-white/70 backdrop-blur-sm text-slate-700 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-slate-900 transition-all duration-300 border border-white/50 hover:border-blue-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <span className="group-hover:font-medium transition-all duration-300">{suggestion}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Luxury Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <Button 
                  href="/buyers"
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 min-w-[240px]"
                  leftIcon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  }
                >
                  Explore Properties
                </Button>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <Button 
                  href="/builder" 
                  className="relative bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl border border-white/50 hover:border-slate-200 transform hover:scale-105 transition-all duration-300 min-w-[240px]"
                  leftIcon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <line x1="10" y1="9" x2="8" y2="9"/>
                    </svg>
                  }
                >
                  List Property
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Luxury Stats Section */}
      <Section className="py-24 relative bg-gradient-to-b from-white to-slate-50/50">
        {/* Luxury background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          {/* Premium section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">Platform Excellence</Text>
            </div>
            <Heading level={2} className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Thousands</span>
            </Heading>
            <Text size="lg" className="text-slate-600 max-w-2xl mx-auto font-light">
              Leading India's premium real estate market with unmatched expertise and trust
            </Text>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glass morphism card */}
                <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 transition-all duration-500 transform group-hover:scale-[1.02]">
                  {/* Premium number display */}
                  <div className="mb-6">
                    <Heading level={3} className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500 leading-none">
                      {stat.value}
                    </Heading>
                  </div>
                  
                  <Heading level={4} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {stat.label}
                  </Heading>
                  
                  <Text size="sm" className="text-slate-600 leading-relaxed font-medium">
                    {stat.description}
                  </Text>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Premium Features Section */}
      <Section className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Luxury background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-l from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Premium Excellence</Text>
            </div>
            
            <Heading level={2} className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Why We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Different</span>
            </Heading>
            <Text size="xl" className="text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Experience unmatched luxury and trust with India's most sophisticated real estate platform, 
              where every detail is crafted for your success.
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-24 relative z-10">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                  </svg>
                ),
                title: "100% Verified Luxury",
                description: "Every premium property undergoes rigorous verification by our expert team, ensuring authenticity and quality that exceeds expectations.",
                gradient: "from-emerald-500 to-teal-600"
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                ),
                title: "Legal Excellence",
                description: "Comprehensive legal support and documentation services with our network of top legal experts, ensuring seamless and secure transactions.",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: "Concierge Service",
                description: "White-glove treatment with dedicated relationship managers, personalized consultations, and exclusive access to off-market properties.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                {/* Hover glow */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Main card */}
                <div className="relative h-full p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white/95 hover:-translate-y-4 transition-all duration-700 transform group-hover:scale-105">
                  {/* Icon with luxury styling */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-2xl shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  
                  <Heading level={3} className="text-2xl font-black text-slate-900 mb-6 group-hover:text-slate-800 transition-colors duration-300">
                    {feature.title}
                  </Heading>
                  
                  <Text className="text-slate-600 leading-relaxed font-medium text-base">
                    {feature.description}
                  </Text>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium Trust Badges */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/30 shadow-2xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Certifications & Awards</Text>
                </div>
                <Heading level={3} className="text-3xl font-black text-slate-900 mb-4">
                  Recognized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Excellence</span>
                </Heading>
                <Text className="text-slate-600 font-medium">
                  Trusted by industry leaders and certified by top organizations
                </Text>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                {[
                  { name: "Banking Partner", icon: "🏦", gradient: "from-blue-500 to-cyan-500" },
                  { name: "RERA Certified", icon: "🏛️", gradient: "from-green-500 to-emerald-500" },
                  { name: "ISO Certified", icon: "🌟", gradient: "from-purple-500 to-pink-500" },
                  { name: "Award Winner", icon: "🏆", gradient: "from-amber-500 to-orange-500" }
                ].map((badge, index) => (
                  <div key={index} className="group text-center">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${badge.gradient} rounded-2xl mx-auto flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-3xl`}>
                        {badge.icon}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <Text className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                      {badge.name}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Luxury Featured Properties */}
      <Section className="py-32 relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        {/* Premium background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-200/20 via-purple-200/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-200/15 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          {/* Luxury section header */}
          <div className="text-center mb-24 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
              <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Exclusive Collection</Text>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <Heading level={2} className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">Featured</span> Properties
            </Heading>
            
            <Text size="xl" className="text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Discover our handpicked collection of luxury properties from India's most prestigious builders, 
              each offering unparalleled elegance and exclusive amenities.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Trending Popular Properties */}
      <Section className="py-32 relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        {/* Luxury dark background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Floating particles for dark theme */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float-particle"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-particle [animation-delay:3s]"></div>
          <div className="absolute top-1/2 right-3/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle [animation-delay:1s]"></div>
        </div>
        
        <Container>
          {/* Premium dark section header */}
          <div className="text-center mb-24 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 animate-pulse">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <Text size="sm" className="text-white/90 font-bold uppercase tracking-wider">Trending Now</Text>
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            
            <Heading level={2} className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              <span className="block text-white/90 mb-2">Popular</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 animate-gradient-x">Properties</span>
            </Heading>
            
            <Text size="xl" className="text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Discover the most sought-after properties that are creating buzz in the market. 
              These exclusive listings are in high demand - secure your viewing today!
            </Text>
          </div>
          
          <div className="relative z-10">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl h-64 border border-white/20 shadow-2xl animate-pulse">
                      <div className="p-6 space-y-4">
                        <div className="h-32 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl"></div>
                        <div className="h-3 bg-white/20 rounded w-3/4"></div>
                        <div className="h-2 bg-white/10 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : popularProjects.length > 0 ? (
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <PopularSection
                    title=""
                    subtitle=""
                    projects={popularProjects}
                    loading={loading}
                    showViewAll={true}
                    viewAllLink="/buyers"
                    variant="compact"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <Text className="text-white/80 font-medium">No popular properties available at the moment.</Text>
                  <Text size="sm" className="text-white/60 mt-2">Stay tuned for the latest trending properties!</Text>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Premium City Highlights */}
      <Section className="py-32 relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        {/* Luxury background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-purple-300/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-tl from-purple-300/20 via-blue-300/10 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:4s]"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/15 to-transparent rounded-full blur-2xl animate-float-slow [animation-delay:2s]"></div>
        </div>
        
        <Container>
          <div className="text-center mb-24 relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Prime Locations</Text>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            
            <Heading level={2} className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">Premium</span> Cities
            </Heading>
            
            <Text size="xl" className="text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Discover luxury properties in India's most prestigious metropolitan cities. Each location offers 
              unique investment opportunities and world-class amenities in prime neighborhoods.
            </Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {[
              { name: "Mumbai", emoji: "🏙️", gradient: "from-blue-500 to-cyan-500", count: projects.filter(p => p.location.city === "Mumbai" && p.status === "active").length },
              { name: "Delhi", emoji: "🏛️", gradient: "from-purple-500 to-pink-500", count: projects.filter(p => p.location.city === "Delhi" && p.status === "active").length },
              { name: "Bangalore", emoji: "🌆", gradient: "from-green-500 to-emerald-500", count: projects.filter(p => p.location.city === "Bangalore" && p.status === "active").length },
              { name: "Pune", emoji: "🏞️", gradient: "from-orange-500 to-red-500", count: projects.filter(p => p.location.city === "Pune" && p.status === "active").length },
              { name: "Chennai", emoji: "🌊", gradient: "from-teal-500 to-blue-500", count: projects.filter(p => p.location.city === "Chennai" && p.status === "active").length }
            ].map((city, index) => (
              <Link key={city.name} href={`/buyers?city=${city.name.toLowerCase()}`}>
                <div 
                  className="group relative h-full"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Main card */}
                  <div className="relative h-full p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white/95 hover:-translate-y-4 transition-all duration-700 transform group-hover:scale-105 overflow-hidden">
                    {/* City icon with luxury styling */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${city.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-2xl shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {city.emoji}
                    </div>
                    
                    <div className="text-center">
                      <Heading level={4} className="text-2xl font-black text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                        {city.name}
                      </Heading>
                      
                      <div className="mb-4">
                        <Text className="text-slate-600 font-semibold text-lg">
                          {city.count}+ Properties
                        </Text>
                        <Text size="sm" className="text-slate-500">
                          Premium locations available
                        </Text>
                      </div>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Text className="text-blue-600 font-bold flex items-center justify-center gap-2">
                          Explore Now 
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                            <polyline points="9,18 15,12 9,6"/>
                          </svg>
                        </Text>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Premium Newsletter Subscription */}
      <Section className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        {/* Luxury background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 via-blue-200/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/20 via-purple-200/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Premium newsletter container */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
              
              {/* Main glass morphism container */}
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/30 overflow-hidden">
                {/* Luxury background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100/50 via-purple-100/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100/50 via-blue-100/30 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  {/* Premium badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/60 backdrop-blur-sm border border-white/40 rounded-full shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Exclusive Insights</Text>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <Heading level={2} className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                    <span className="block mb-4">Stay Ahead with</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">Premium</span> Market Intelligence
                  </Heading>
                  
                  <Text size="xl" className="text-slate-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                    Join India's most exclusive real estate community. Receive curated property alerts, 
                    insider market trends, and priority access to off-market luxury properties.
                  </Text>
                  
                  {/* Premium subscription form */}
                  <div className="max-w-2xl mx-auto mb-8">
                    <form className="relative">
                      {/* Form glow effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Form container */}
                      <div className="relative flex flex-col sm:flex-row gap-4 p-3 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl">
                        <div className="flex-1 relative">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                          </svg>
                          <input
                            type="email"
                            placeholder="Enter your email for exclusive access"
                            className="w-full h-16 pl-12 pr-6 rounded-2xl border-0 bg-transparent text-slate-800 placeholder-slate-500 focus:outline-none text-lg font-medium"
                            aria-label="Email address for premium newsletter subscription"
                          />
                        </div>
                        
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                          <button 
                            type="submit"
                            className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 border-0 whitespace-nowrap h-16"
                          >
                            Join Elite Club
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  
                  {/* Premium features */}
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {[
                      { icon: "⚡", title: "Instant Alerts", desc: "First access to new listings" },
                      { icon: "📊", title: "Market Analysis", desc: "Weekly trends & insights" },
                      { icon: "🏆", title: "VIP Access", desc: "Exclusive off-market deals" }
                    ].map((feature, index) => (
                      <div key={index} className="text-center p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30">
                        <div className="text-3xl mb-3">{feature.icon}</div>
                        <Text className="font-bold text-slate-800 mb-2">{feature.title}</Text>
                        <Text size="sm" className="text-slate-600">{feature.desc}</Text>
                      </div>
                    ))}
                  </div>
                  
                  <Text size="sm" className="text-slate-500 font-medium">
                    ✓ No spam, ever ✓ Unsubscribe anytime ✓ Premium privacy protection
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Luxury Call to Action */}
      <Section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:2s]"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-5xl mx-auto relative z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <Text size="sm" className="text-white/90 font-bold uppercase tracking-wider">Ready to Begin?</Text>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse [animation-delay:1s]"></div>
            </div>

            <Heading level={2} className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white mb-4">Your Dream Property</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 animate-gradient-x">Awaits You</span>
            </Heading>
            
            <Text size="xl" className="mb-16 max-w-3xl mx-auto leading-relaxed text-white/80 font-light text-lg md:text-xl">
              Join thousands of satisfied customers who found their perfect home through our platform. 
              Start your luxury real estate journey today with India's most trusted property experts.
            </Text>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-white/30 via-blue-200/30 to-white/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Button 
                  href="/buyers"
                  className="relative bg-white text-slate-900 hover:bg-blue-50 px-12 py-5 rounded-3xl font-black text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 min-w-[280px]"
                  leftIcon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  }
                >
                  Find Your Property
                </Button>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Button 
                  href="/builder" 
                  className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-12 py-5 rounded-3xl font-black text-xl transform hover:scale-105 transition-all duration-300 min-w-[280px]"
                  leftIcon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  }
                >
                  List Your Property
                </Button>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-white/80 font-medium">Expert Support</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-white mb-2">100%</div>
                <div className="text-white/80 font-medium">Verified Properties</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-white mb-2">10K+</div>
                <div className="text-white/80 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

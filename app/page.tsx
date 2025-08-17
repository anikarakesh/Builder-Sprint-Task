"use client";

import Link from "next/link";
import { useState } from "react";
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

  const featuredProjects = projects.filter(p => p.featured && p.status === "active");
  const popularProjects = projects.filter(p => p.popular && p.status === "active");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would trigger navigation to search results
    console.log("Searching for:", query);
  };

  const stats = [
    { label: "Properties", value: "500+", description: "Premium properties across India" },
    { label: "Cities", value: "25+", description: "Major cities and growing" },
    { label: "Builders", value: "100+", description: "Verified and trusted partners" },
    { label: "Families", value: "10K+", description: "Happy homeowners" }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-white-0)]">
      {/* Hero Section */}

      <section className="relative bg-[var(--color-bg-white-0)] py-20 lg:py-32 overflow-hidden">
        {/* Animated background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-[var(--color-blue-50)] to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[var(--color-primary-alpha-10)] to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow [animation-delay:2s]"></div>
        </div>
        <Container>
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <Heading level={1} size="3xl" className="mb-6 max-w-4xl mx-auto font-extrabold leading-tight tracking-tighter">
              Your Journey to the Perfect Property Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-base)] to-[var(--color-primary-darker)]">Here</span>
            </Heading>
            <Text size="xl" color="secondary" className="mb-12 max-w-3xl mx-auto leading-relaxed text-[var(--color-neutral-700)]">
              Explore luxury apartments and premium homes from India's most trusted builders.
              Seamlessly find your dream property with confidence.
            </Text>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-base)] to-[var(--color-primary-darker)] rounded-[var(--radius-2xl)] blur-2xl opacity-20 motion-safe:animate-pulse" aria-hidden></div>
                <div className="relative bg-white rounded-[var(--radius-2xl)] p-3 shadow-3xl border border-[var(--color-neutral-100)]">
                  <SearchBar 
                    placeholder="Search by city, project, builder, or property type..."
                    onSearch={handleSearch}
                    className="border-0 shadow-none text-lg py-3"
                  />
                </div>
              </div>
              
              {/* Quick search suggestions */}
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Text size="sm" color="muted" className="mb-0 w-full text-center text-[var(--color-neutral-500)]">
                  Popular searches:
                </Text>
                {["Luxury Villas Bangalore", "Apartments Mumbai", "Commercial Properties Delhi", "Affordable Homes Pune"].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(suggestion)}
                    className="px-4 py-2 text-sm bg-[var(--color-bg-weak-100)] text-[var(--color-neutral-700)] rounded-full hover:bg-[var(--color-primary-alpha-16)] hover:text-[var(--color-primary-base)] transition-all duration-300 border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-base)] shadow-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                href="/buyers"
                variant="primary" 
                color="blue" 
                size="lg"
                className="min-w-[200px] py-3.5 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                leftIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                }
              >
                Start Your Search
              </Button>
              <Button 
                href="/builder" 
                variant="outline" 
                color="blue" 
                size="lg"
                className="min-w-[200px] py-3.5 px-8 text-lg font-semibold border-2 hover:bg-[var(--color-blue-50)] transition-all duration-300"
              >
                List Your Property
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section className="py-20 bg-[var(--color-bg-white-0)] relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-neutral-100)] to-transparent"></div>
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-neutral-100)] to-transparent"></div>
        </div>
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="group space-y-4 p-8 rounded-[var(--radius-xl)] bg-[var(--color-bg-weak-50)] border border-[var(--color-neutral-100)] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform perspective-1000 rotate-x-0 group-hover:rotate-x-3">
                <Heading level={3} size="3xl" color="primary" className="text-[var(--color-primary-base)] group-hover:scale-105 transition-transform duration-300 font-extrabold">
                  {stat.value}
                </Heading>
                <Heading level={4} size="lg" className="mb-2 font-bold text-[var(--color-neutral-900)]">
                  {stat.label}
                </Heading>
                <Text size="sm" color="muted" className="leading-relaxed text-[var(--color-neutral-600)]">
                  {stat.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trust Indicators & Features */}
      <Section className="py-20 bg-[var(--color-bg-white-0)]">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} size="3xl" className="mb-4 font-extrabold">
              Why Choose Our Platform?
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl mx-auto text-[var(--color-neutral-700)]">
              Experience the difference with India's most trusted real estate platform
            </Text>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
                title: "100% Verified Listings",
                description: "Every property is thoroughly verified by our expert team before listing"
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    <polyline points="13 2 13 9 20 9"/>
                    <path d="M16 16H8"/>
                    <path d="M16 12H8"/>
                    <path d="M12 8H8"/>
                  </svg>
                ),
                title: "Legal Documentation",
                description: "Complete legal assistance and documentation support for hassle-free transactions"
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
                    <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                ),
                title: "Premium Experience",
                description: "Personalized service with dedicated relationship managers for every client"
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-[var(--radius-2xl)] bg-[var(--color-bg-weak-50)] border border-[var(--color-neutral-100)] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary-base)] to-[var(--color-primary-darker)] rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <Heading level={3} size="xl" className="mb-3 font-bold text-[var(--color-neutral-900)]">
                  {feature.title}
                </Heading>
                <Text color="secondary" className="leading-relaxed text-[var(--color-neutral-600)]">
                  {feature.description}
                </Text>
              </div>
            ))}
          </div>
          
          {/* Trust badges */}
          <div className="bg-[var(--color-bg-weak-50)] rounded-[var(--radius-2xl)] p-8 md:p-12 border border-[var(--color-neutral-100)] shadow-inner">
            <div className="text-center mb-10">
              <Text size="sm" color="muted" className="uppercase tracking-wider font-semibold text-[var(--color-neutral-500)]">
                Trusted by Leading Organizations
              </Text>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-center">
              {["Bank Partner", "RERA Certified", "ISO Certified", "Award Winner"].map((badge, index) => (
                <div key={index} className="text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-[var(--color-neutral-100)] rounded-[var(--radius-md)] mx-auto mb-3 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-neutral-600)]">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                    </svg>
                  </div>
                  <Text size="sm" color="muted" className="font-semibold text-[var(--color-neutral-700)]">
                    {badge}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Properties */}
      <Section className="py-20 relative bg-[var(--color-bg-white-0)]">
        <Container>
          {/* Section header with enhanced styling */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-alpha-10)] px-4 py-2 rounded-full mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary-base)]" aria-hidden focusable="false">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <Text size="sm" className="text-[var(--color-primary-base)] font-semibold uppercase tracking-wider">
                Our Top Picks
              </Text>
            </div>
            <Heading level={2} size="3xl" className="mb-4 font-extrabold">
              Featured Properties
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl mx-auto text-[var(--color-neutral-700)]">
              Handpicked premium properties from our top builders, curated just for you
            </Text>
          </div>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-[var(--color-bg-weak-50)] rounded-[var(--radius-xl)] h-80 motion-safe:animate-pulse shadow-md"></div>
              ))}
            </div>
          ) : featuredProjects.length > 0 ? (
            <PopularSection
              title=""
              subtitle=""
              projects={featuredProjects}
              loading={loading}
              showViewAll={true}
              viewAllLink="/buyers"
              variant="default"
            />
          ) : (
            <div className="text-center py-12">
              <Text color="muted">No featured properties available at the moment.</Text>
            </div>
          )}
        </Container>
      </Section>

      {/* Popular Properties */}
      <Section className="py-20 bg-[var(--color-bg-weak-50)] relative">
        <Container>
          {/* Section header with enhanced styling */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-alpha-10)] px-4 py-2 rounded-full mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary-base)]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <Text size="sm" className="text-[var(--color-primary-base)] font-semibold uppercase tracking-wider">
                Most Viewed
              </Text>
            </div>
            <Heading level={2} size="3xl" className="mb-4 font-extrabold">
              Popular Properties
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl mx-auto text-[var(--color-neutral-700)]">
              Most viewed and inquired properties this month, don't miss out!
            </Text>
          </div>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-[var(--radius-xl)] h-64 motion-safe:animate-pulse shadow-lg"></div>
              ))}
            </div>
          ) : popularProjects.length > 0 ? (
            <PopularSection
              title=""
              subtitle=""
              projects={popularProjects}
              loading={loading}
              showViewAll={true}
              viewAllLink="/buyers"
              variant="compact"
            />
          ) : (
            <div className="text-center py-12">
              <Text color="muted">No popular properties available at the moment.</Text>
            </div>
          )}
        </Container>
      </Section>

      {/* City Highlights */}
      <Section className="py-20 relative bg-[var(--color-bg-white-0)]">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[var(--color-blue-50)] to-transparent rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-[var(--color-primary-alpha-10)] to-transparent rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <Container>
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary-alpha-10)] px-4 py-2 rounded-full mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary-base)]" aria-hidden focusable="false">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <Text size="sm" className="text-[var(--color-primary-base)] font-semibold uppercase tracking-wider">
                Top Cities
              </Text>
            </div>
            <Heading level={2} size="3xl" className="mb-6 font-extrabold">
              Explore Properties by City
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl mx-auto leading-relaxed text-[var(--color-neutral-700)]">
              Discover the best residential projects in India's fastest-growing cities and unlock premium investment opportunities
            </Text>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"].map((city, index) => (
              <Link key={city} href={`/buyers?city=${city.toLowerCase()}`}>
                <div 
                  className="group relative p-8 rounded-[var(--radius-2xl)] bg-[var(--color-bg-weak-50)] border border-[var(--color-neutral-100)] hover:border-[var(--color-primary-base)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden transform perspective-1000 rotate-x-0 group-hover:rotate-x-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-alpha-10)] via-[var(--color-blue-50)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Subtle border animation */}
                  <div className="absolute inset-0 rounded-[var(--radius-2xl)] border-2 border-transparent group-hover:border-[var(--color-primary-base)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-blue-100)] to-[var(--color-blue-50)] rounded-full flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary-base)] group-hover:to-[var(--color-primary-darker)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md group-hover:shadow-lg text-white">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden focusable="false">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <Heading level={4} size="lg" className="mb-1 font-bold group-hover:text-[var(--color-primary-base)] transition-colors duration-300">
                      {city}
                    </Heading>
                    <Text size="sm" color="muted" className="group-hover:text-[var(--color-neutral-600)] transition-colors duration-300 mb-2">
                      {projects.filter(p => p.location.city === city && p.status === "active").length} Properties
                    </Text>
                    <Text size="sm" className="text-[var(--color-primary-base)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold flex items-center gap-1">
                      Explore Now 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9,18 15,12 9,6"/>
                      </svg>
                    </Text>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Subscription */}
      <Section className="py-20 bg-gradient-to-r from-[var(--color-bg-white-0)] to-[var(--color-bg-weak-50)]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-[var(--radius-2xl)] p-8 md:p-12 shadow-xl border border-[var(--color-neutral-100)] relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary-alpha-10)] to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-blue-100)] to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-base)] to-[var(--color-primary-darker)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                
                <Heading level={2} size="3xl" className="mb-4 font-extrabold">
                  Stay Updated with Market Insights
                </Heading>
                <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto text-[var(--color-neutral-700)]">
                  Get exclusive property alerts, market trends, and investment opportunities delivered to your inbox.
                </Text>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-14 px-5 rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-bg-white-0)] text-[var(--color-neutral-900)] placeholder-[var(--color-neutral-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-base)] focus:border-transparent text-base"
                    aria-label="Email address for newsletter subscription"
                  />
                  <Button variant="primary" color="blue" size="lg" className="whitespace-nowrap py-3.5 px-8 text-base font-semibold shadow-md hover:shadow-lg">
                    Subscribe Now
                  </Button>
                </form>
                
                <Text size="xs" color="muted" className="mt-4 text-[var(--color-neutral-500)]">
                  No spam, unsubscribe anytime. Your privacy is protected.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="py-24 bg-gradient-to-br from-[var(--color-primary-base)] via-[var(--color-primary-darker)] to-[var(--color-primary-dark)] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
      </Section>
    </div>
  );
}

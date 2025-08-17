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
    <div className="min-h-screen bg-[--color-bg-white-0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[--color-blue-50] to-[--color-bg-white-0] py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Heading level={1} size="3xl" className="mb-6 max-w-3xl mx-auto">
              Find Your Dream Property with India's Most Trusted Platform
            </Heading>
            <Text size="lg" color="secondary" className="mb-8 max-w-2xl mx-auto">
              Discover luxury apartments and premium homes from verified builders across India's top cities. 
              Your perfect home is just a search away.
            </Text>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar 
                placeholder="Search by location, builder, or property type..."
                onSearch={handleSearch}
                className="shadow-lg"
              />
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/buyers">
                <Button variant="primary" color="blue" className="text-base px-8 h-12">
                  Explore Properties
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </Button>
              </Link>
              <Link href="/builders">
                <Button variant="outline" color="blue" className="text-base px-8 h-12">
                  List Your Property
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section className="py-16 bg-[--color-bg-weak-50]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <Heading level={3} size="2xl" color="primary" className="text-[--color-primary-base]">
                  {stat.value}
                </Heading>
                <Heading level={4} size="lg" className="mb-1">
                  {stat.label}
                </Heading>
                <Text size="sm" color="muted">
                  {stat.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Properties */}
      {featuredProjects.length > 0 && (
        <Section className="py-16">
          <Container>
            <PopularSection
              title="Featured Properties"
              subtitle="Handpicked premium properties from our top builders"
              projects={featuredProjects}
              loading={loading}
              showViewAll={true}
              viewAllLink="/buyers"
              variant="default"
            />
          </Container>
        </Section>
      )}

      {/* Popular Properties */}
      {popularProjects.length > 0 && (
        <Section className="py-16 bg-[--color-bg-weak-50]">
          <Container>
            <PopularSection
              title="Popular Properties"
              subtitle="Most viewed and inquired properties this month"
              projects={popularProjects}
              loading={loading}
              showViewAll={true}
              viewAllLink="/buyers"
              variant="compact"
            />
          </Container>
        </Section>
      )}

      {/* City Highlights */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2} size="2xl" className="mb-4">
              Explore Properties by City
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
              Discover the best residential projects in India's fastest-growing cities
            </Text>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"].map((city) => (
              <Link key={city} href={`/buyers?city=${city.toLowerCase()}`}>
                <div className="group p-6 rounded-[--radius-lg] bg-[--color-bg-white-0] border border-[--color-neutral-200] hover:border-[--color-primary-base] hover:shadow-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-[--color-blue-100] rounded-[--radius-md] flex items-center justify-center mb-4 group-hover:bg-[--color-primary-alpha-16] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[--color-primary-base]">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <Heading level={4} size="md" className="mb-1">
                    {city}
                  </Heading>
                  <Text size="sm" color="muted">
                    {projects.filter(p => p.location.city === city && p.status === "active").length} Properties
                  </Text>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 bg-gradient-to-r from-[--color-primary-base] to-[--color-primary-darker] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={2} size="2xl" className="mb-4 text-white">
              Ready to Find Your Dream Home?
            </Heading>
            <Text size="lg" className="mb-8 text-white/90">
              Join thousands of satisfied homebuyers who found their perfect property through our platform. 
              Start your journey today.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyers">
                <Button variant="primary" color="black" className="text-base px-8 h-12 bg-white text-[--color-primary-base] hover:bg-gray-100">
                  Start Property Search
                </Button>
              </Link>
              <Link href="/builders">
                <Button variant="outline" className="text-base px-8 h-12 border-white text-white hover:bg-white/10">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

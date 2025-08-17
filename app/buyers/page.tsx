"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Heading, Text } from "../../components/primitives/Typography";
import { SearchBar } from "../../components/primitives/SearchBar";
import { FilterBar } from "../../components/buyer/FilterBar";
import { PropertyGrid } from "../../components/buyer/PropertyGrid";
import { PopularSection } from "../../components/buyer/PopularSection";
import { useProjects } from "../../lib/hooks/useProjects";
import { useAppState } from "../../lib/context/AppContext";
import { 
  filterProjects, 
  sortProjects, 
  getPopularProjects,
  getProjectsByCity,
  getUniqueCities,
  getUniquePropertyTypes,
  getUniqueConfigurations
} from "../../lib/utils";

function BuyersPageContent() {
  const { projects, cities, priceRanges, loading, error } = useProjects();
  const { state, dispatch } = useAppState();
  const searchParams = useSearchParams();
  
  // Handle URL search parameters
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      dispatch({ type: "SET_SEARCH_QUERY", payload: searchQuery });
    }
  }, [searchParams, dispatch]);
  
  // Extract filter data
  const uniqueCities = useMemo(() => getUniqueCities(projects), [projects]);
  const uniquePropertyTypes = useMemo(() => getUniquePropertyTypes(projects), [projects]);
  const uniqueConfigurations = useMemo(() => getUniqueConfigurations(projects), [projects]);
  
  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const filtered = filterProjects(projects, state.buyerFilters, state.searchQuery);
    return sortProjects(filtered, state.buyerSort);
  }, [projects, state.buyerFilters, state.searchQuery, state.buyerSort]);
  
  // Popular projects by city
  const popularProjects = useMemo(() => getPopularProjects(projects), [projects]);
  const mumbaiProjects = useMemo(() => getProjectsByCity(popularProjects, "Mumbai"), [popularProjects]);
  const puneProjects = useMemo(() => getProjectsByCity(popularProjects, "Pune"), [popularProjects]);
  const bangaloreProjects = useMemo(() => getProjectsByCity(popularProjects, "Bangalore"), [popularProjects]);

  const handleSearch = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                
                <Heading level={1} className="text-4xl font-black text-slate-900 mb-6">
                  Unable to Load Properties
                </Heading>
                
                <Text size="lg" className="text-slate-600 font-medium mb-8 leading-relaxed">
                  We're experiencing technical difficulties loading the property listings. 
                  Please try refreshing the page or contact our support team.
                </Text>
                
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8">
                  <Text size="sm" className="text-red-700 font-medium">
                    Error Details: {error}
                  </Text>
                </div>
                
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Luxury Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-purple-300/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-purple-300/20 via-blue-300/10 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:4s]"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"></div>
          <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-float-particle [animation-delay:2s]"></div>
        </div>

        <Container>
          <div className="text-center max-w-6xl mx-auto relative z-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Property Search</Text>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>

            <Heading level={1} className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8">
              <span className="block text-slate-900 mb-2">Find Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">Perfect</span>
              <span className="block text-slate-800 text-4xl md:text-5xl lg:text-6xl font-light mt-4">Property Today</span>
            </Heading>
            
            <Text size="xl" className="mb-16 max-w-4xl mx-auto leading-relaxed text-slate-600 text-lg md:text-xl font-light">
              Discover India's finest collection of luxury apartments, premium homes, and exclusive properties 
              from verified builders across the nation's most prestigious locations.
            </Text>
            
            {/* Premium Search Container */}
            <div className="max-w-4xl mx-auto mb-12">
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
                      placeholder="Search by location, builder, property name, or amenities..."
                      onSearch={handleSearch}
                      initialValue={state.searchQuery}
                      className="border-0 shadow-none text-lg py-2 bg-transparent placeholder-slate-500 text-slate-800 flex-1"
                    />
 
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: projects.length.toLocaleString(), label: "Properties", icon: "🏠" },
                { value: uniqueCities.length, label: "Cities", icon: "🏙️" },
                { value: "500+", label: "Builders", icon: "🏗️" },
                { value: "24/7", label: "Support", icon: "🛎️" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Filters Section */}
      <section className="relative py-8 bg-white/50 backdrop-blur-sm border-y border-white/30">
        <Container>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-xl">
              <FilterBar
                cities={uniqueCities}
                propertyTypes={uniquePropertyTypes}
                configurations={uniqueConfigurations}
                priceRanges={priceRanges}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Results Section */}
      <section className="py-16 relative">
        <Container>
          <div className="relative">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">
                    {state.searchQuery || Object.keys(state.buyerFilters).length > 0 ? "Search Results" : "All Properties"}
                  </Text>
                </div>
                
                <Heading level={2} className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  {state.searchQuery || Object.keys(state.buyerFilters).length > 0 
                    ? "Your Search Results" 
                    : "Browse All Properties"}
                </Heading>
                
                {!loading && (
                  <Text size="lg" className="text-slate-600 font-light">
                    {filteredProjects.length} premium {filteredProjects.length === 1 ? "property" : "properties"} 
                    {state.searchQuery && ` matching "${state.searchQuery}"`}
                  </Text>
                )}
              </div>
              
              {/* Premium Sort Dropdown */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 hover:opacity-100 transition duration-300"></div>
                <select
                  value={`${state.buyerSort.field}-${state.buyerSort.direction}`}
                  onChange={(e) => {
                    const [field, direction] = e.target.value.split("-");
                    dispatch({ 
                      type: "SET_BUYER_SORT", 
                      payload: { field, direction: direction as "asc" | "desc" }
                    });
                  }}
                  className="relative bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl px-6 py-3 text-slate-800 font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="title-asc">Name A-Z</option>
                  <option value="title-desc">Name Z-A</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="createdAt-desc">Newest First</option>
                  <option value="createdAt-asc">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Premium Properties Grid Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                <PropertyGrid 
                  projects={filteredProjects}
                  loading={loading}
                  variant="default"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Luxury Popular Properties Sections */}
      {!state.searchQuery && Object.keys(state.buyerFilters).length === 0 && (
        <div className="space-y-16 py-16">
          {/* Popular in Mumbai */}
          {mumbaiProjects.length > 0 && (
            <section className="relative">
              <Container>
                <div className="relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl animate-float-slow"></div>
                  </div>
                  <PopularSection
                    title="Popular in Mumbai"
                    subtitle="Luxury properties in India's financial capital - where dreams meet reality in the city that never sleeps"
                    projects={mumbaiProjects}
                    loading={loading}
                    viewAllLink="/buyers?city=Mumbai"
                    className="relative z-10"
                  />
                </div>
              </Container>
            </section>
          )}

          {/* Popular in Pune */}
          {puneProjects.length > 0 && (
            <section className="relative bg-gradient-to-r from-slate-50/50 via-white to-purple-50/30 py-16">
              <Container>
                <div className="relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-to-tl from-purple-200/40 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:2s]"></div>
                  </div>
                  <PopularSection
                    title="Popular in Pune"
                    subtitle="Modern homes in the IT hub of Maharashtra - where innovation meets luxury living"
                    projects={puneProjects}
                    loading={loading}
                    viewAllLink="/buyers?city=Pune"
                    className="relative z-10"
                  />
                </div>
              </Container>
            </section>
          )}

          {/* Popular in Bangalore */}
          {bangaloreProjects.length > 0 && (
            <section className="relative">
              <Container>
                <div className="relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-1/3 right-1/6 w-64 h-64 bg-gradient-to-bl from-green-200/40 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:4s]"></div>
                  </div>
                  <PopularSection
                    title="Popular in Bangalore"
                    subtitle="Premium apartments in India's Silicon Valley - tech-enabled luxury for the modern professional"
                    projects={bangaloreProjects}
                    loading={loading}
                    viewAllLink="/buyers?city=Bangalore"
                    className="relative z-10"
                  />
                </div>
              </Container>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

// Loading component for Suspense fallback
function BuyersPageLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <Text className="text-slate-600">Loading property listings...</Text>
        </div>
      </Container>
    </div>
  );
}

export default function BuyersPage() {
  return (
    <Suspense fallback={<BuyersPageLoading />}>
      <BuyersPageContent />
    </Suspense>
  );
}

"use client";

import { useState, useEffect, useMemo } from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Heading } from "../../components/primitives/Typography";
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

export default function BuyersPage() {
  const { projects, cities, priceRanges, loading, error } = useProjects();
  const { state, dispatch } = useAppState();
  
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
      <Container>
        <Section className="py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Properties</h1>
            <p className="text-[--color-neutral-600]">{error}</p>
          </div>
        </Section>
      </Container>
    );
  }

  return (
    <Container>
        {/* Hero Section */}
        <Section className="py-12 text-center">
          <Heading level={1} size="3xl" className="mb-4">
            Find Your Dream Property
          </Heading>
          <p className="text-xl text-[--color-neutral-600] mb-8 max-w-2xl mx-auto">
            Discover luxury apartments and premium homes from verified builders across India's top cities.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar
              placeholder="Search by location, builder, or property name..."
              onSearch={handleSearch}
              className="w-full"
            />
          </div>
        </Section>

        {/* Filters */}
        <Section>
          <FilterBar
            cities={uniqueCities}
            propertyTypes={uniquePropertyTypes}
            configurations={uniqueConfigurations}
            priceRanges={priceRanges}
          />
        </Section>

        {/* Results Section */}
        <Section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Heading level={2} size="xl">
                {state.searchQuery || Object.keys(state.buyerFilters).length > 0 
                  ? "Search Results" 
                  : "All Properties"}
              </Heading>
              {!loading && (
                <p className="text-[--color-neutral-600] mt-1">
                  {filteredProjects.length} {filteredProjects.length === 1 ? "property" : "properties"} found
                </p>
              )}
            </div>
            
            {/* Sort Options */}
            <select
              value={`${state.buyerSort.field}-${state.buyerSort.direction}`}
              onChange={(e) => {
                const [field, direction] = e.target.value.split("-");
                dispatch({ 
                  type: "SET_BUYER_SORT", 
                  payload: { field, direction: direction as "asc" | "desc" }
                });
              }}
              className="px-3 py-2 border border-[--color-neutral-300] rounded-[var(--radius-md)] bg-[--color-bg-white-0] text-sm"
            >
              <option value="title-asc">Name A-Z</option>
              <option value="title-desc">Name Z-A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
            </select>
          </div>

          <PropertyGrid 
            projects={filteredProjects}
            loading={loading}
            variant="default"
          />
        </Section>

        {/* Popular Properties Sections */}
        {!state.searchQuery && Object.keys(state.buyerFilters).length === 0 && (
          <>
            {/* Popular in Mumbai */}
            {mumbaiProjects.length > 0 && (
              <PopularSection
                title="Popular in Mumbai"
                subtitle="Luxury properties in India's financial capital"
                projects={mumbaiProjects}
                loading={loading}
                viewAllLink="/buyers?city=Mumbai"
              />
            )}

            {/* Popular in Pune */}
            {puneProjects.length > 0 && (
              <PopularSection
                title="Popular in Pune"
                subtitle="Modern homes in the IT hub of Maharashtra"
                projects={puneProjects}
                loading={loading}
                viewAllLink="/buyers?city=Pune"
              />
            )}

            {/* Popular in Bangalore */}
            {bangaloreProjects.length > 0 && (
              <PopularSection
                title="Popular in Bangalore"
                subtitle="Premium apartments in India's Silicon Valley"
                projects={bangaloreProjects}
                loading={loading}
                viewAllLink="/buyers?city=Bangalore"
              />
            )}
          </>
        )}
      </Container>
  );
}

"use client";

import { useState } from "react";
import { Button } from "../primitives/Button";
import { Select } from "../primitives/Select";
import { Badge } from "../primitives/Badge";
import { useAppState } from "../../lib/context/AppContext";
import type { PropertyFilters } from "../../lib/context/AppContext";

export interface FilterBarProps {
  cities: string[];
  propertyTypes: string[];
  configurations: string[];
  priceRanges: Array<{ label: string; min: number; max: number }>;
  className?: string;
}

export function FilterBar({ 
  cities, 
  propertyTypes, 
  configurations, 
  priceRanges,
  className = "" 
}: FilterBarProps) {
  const { state, dispatch } = useAppState();
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const filters = state.buyerFilters;
  const activeFilterCount = Object.keys(filters).filter(key => {
    const value = filters[key as keyof PropertyFilters];
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object" && value !== null) return true;
    return Boolean(value);
  }).length;

  const updateFilter = (key: keyof PropertyFilters, value: any) => {
    dispatch({ type: "SET_BUYER_FILTERS", payload: { [key]: value } });
  };

  const clearFilters = () => {
    dispatch({ type: "RESET_FILTERS", payload: "buyer" });
  };

  const toggleConfiguration = (config: string) => {
    const current = filters.configurations || [];
    const updated = current.includes(config)
      ? current.filter(c => c !== config)
      : [...current, config];
    updateFilter("configurations", updated);
  };

  const cityOptions = [
    { value: "", label: "All Cities" },
    ...cities.map(city => ({ value: city, label: city }))
  ];

  const propertyTypeOptions = [
    { value: "", label: "All Types" },
    ...propertyTypes.map(type => ({ value: type, label: type.charAt(0).toUpperCase() + type.slice(1) }))
  ];

  const priceRangeOptions = [
    { value: "", label: "Any Price" },
    ...priceRanges.map(range => ({ value: JSON.stringify(range), label: range.label }))
  ];

  return (
    <div className={`bg-[--color-bg-white-0] border border-[--color-neutral-200] rounded-[var(--radius-lg)] p-4 ${className}`}>
      {/* Quick Filters Row */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {/* City Filter */}
        <div className="min-w-[160px]">
          <Select
            options={cityOptions}
            value={filters.city || ""}
            onChange={(e) => updateFilter("city", e.target.value || undefined)}
            placeholder="Select City"
          />
        </div>

        {/* Property Type Filter */}
        <div className="min-w-[160px]">
          <Select
            options={propertyTypeOptions}
            value={filters.propertyType || ""}
            onChange={(e) => updateFilter("propertyType", e.target.value || undefined)}
            placeholder="Property Type"
          />
        </div>

        {/* Price Range Filter */}
        <div className="min-w-[160px]">
          <Select
            options={priceRangeOptions}
            value={filters.priceRange ? JSON.stringify(filters.priceRange) : ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                try {
                  const range = JSON.parse(value);
                  updateFilter("priceRange", { min: range.min, max: range.max });
                } catch {
                  updateFilter("priceRange", undefined);
                }
              } else {
                updateFilter("priceRange", undefined);
              }
            }}
            placeholder="Price Range"
          />
        </div>

        {/* Advanced Filters Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="ml-auto"
        >
          {showAdvanced ? "Less Filters" : "More Filters"}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={`transition-transform ${showAdvanced ? "rotate-180" : ""}`}
          >
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </Button>

        {/* Clear Filters */}
        {activeFilterCount > 0 && (
          <Button variant="ghost" onClick={clearFilters}>
            Clear ({activeFilterCount})
          </Button>
        )}
      </div>

      {/* Configuration Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-sm font-medium text-[--color-neutral-700] self-center mr-2">
          Configuration:
        </span>
        {configurations.map((config) => {
          const isSelected = filters.configurations?.includes(config);
          return (
            <button
              key={config}
              onClick={() => toggleConfiguration(config)}
              className={`px-3 py-1 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-[--color-primary-base] text-[--color-static-white]"
                  : "bg-[--color-neutral-100] text-[--color-neutral-700] hover:bg-[--color-neutral-200]"
              }`}
            >
              {config}
            </button>
          );
        })}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="border-t border-[--color-neutral-200] pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                Status
              </label>
              <div className="flex gap-2">
                {["active", "inactive"].map((status) => {
                  const isSelected = filters.status === status;
                  return (
                    <button
                      key={status}
                      onClick={() => updateFilter("status", isSelected ? undefined : status as "active" | "inactive")}
                      className={`px-3 py-1 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                        isSelected
                          ? "bg-[--color-primary-base] text-[--color-static-white]"
                          : "bg-[--color-neutral-100] text-[--color-neutral-700] hover:bg-[--color-neutral-200]"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Summary */}
      {activeFilterCount > 0 && (
        <div className="border-t border-[--color-neutral-200] pt-4 mt-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-[--color-neutral-700] self-center mr-2">
              Active Filters:
            </span>
            
            {filters.city && (
              <Badge variant="primary" className="cursor-pointer" onClick={() => updateFilter("city", undefined)}>
                {filters.city} ×
              </Badge>
            )}
            
            {filters.propertyType && (
              <Badge variant="primary" className="cursor-pointer" onClick={() => updateFilter("propertyType", undefined)}>
                {filters.propertyType} ×
              </Badge>
            )}
            
            {filters.priceRange && (
              <Badge variant="primary" className="cursor-pointer" onClick={() => updateFilter("priceRange", undefined)}>
                Price Range ×
              </Badge>
            )}
            
            {filters.configurations?.map((config) => (
              <Badge 
                key={config} 
                variant="primary" 
                className="cursor-pointer"
                onClick={() => toggleConfiguration(config)}
              >
                {config} ×
              </Badge>
            ))}
            
            {filters.status && (
              <Badge variant="primary" className="cursor-pointer" onClick={() => updateFilter("status", undefined)}>
                {filters.status} ×
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

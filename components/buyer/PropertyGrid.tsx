"use client";

import { PropertyCard } from "./PropertyCard";
import type { Project } from "../../lib/utils";

export interface PropertyGridProps {
  projects: Project[];
  loading?: boolean;
  variant?: "default" | "compact";
  className?: string;
}

// Skeleton loader for property cards
function PropertyCardSkeleton({ variant }: { variant?: "default" | "compact" }) {
  const isCompact = variant === "compact";
  
  return (
    <div className="rounded-[var(--radius-lg)] border border-[--color-neutral-200] bg-[--color-bg-white-0] animate-pulse">
      {/* Image skeleton */}
      <div className={`bg-[--color-neutral-200] rounded-t-[var(--radius-lg)] ${isCompact ? "h-40" : "h-48"}`} />
      
      {/* Content skeleton */}
      <div className={`p-4 space-y-3`}>
        {/* Title */}
        <div className="space-y-2">
          <div className={`bg-[--color-neutral-200] rounded ${isCompact ? "h-4" : "h-5"} w-3/4`} />
          <div className={`bg-[--color-neutral-200] rounded ${isCompact ? "h-3" : "h-4"} w-1/2`} />
        </div>
        
        {/* Location */}
        <div className={`bg-[--color-neutral-200] rounded ${isCompact ? "h-3" : "h-4"} w-2/3`} />
        
        {/* Price */}
        <div className="flex justify-between items-center">
          <div className={`bg-[--color-neutral-200] rounded ${isCompact ? "h-4" : "h-5"} w-1/3`} />
          <div className={`bg-[--color-neutral-200] rounded ${isCompact ? "h-3" : "h-4"} w-1/4`} />
        </div>
        
        {/* Configurations */}
        {!isCompact && (
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[--color-neutral-200] rounded h-6 w-12" />
            ))}
          </div>
        )}
        
        {/* Button */}
        <div className={`bg-[--color-neutral-200] rounded ${isCompact ? "h-8" : "h-10"} w-full`} />
      </div>
    </div>
  );
}

export function PropertyGrid({ projects, loading, variant = "default", className = "" }: PropertyGridProps) {
  const isCompact = variant === "compact";
  
  const gridClasses = [
    "grid gap-6",
    isCompact 
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    className
  ].filter(Boolean).join(" ");

  if (loading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: isCompact ? 8 : 6 }).map((_, i) => (
          <PropertyCardSkeleton key={i} variant={variant} />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-4 bg-[--color-neutral-100] rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[--color-neutral-400]">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[--color-neutral-900] mb-2">
            No properties found
          </h3>
          <p className="text-[--color-neutral-600]">
            Try adjusting your filters or search criteria to find more properties.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {projects.map((project) => (
        <PropertyCard
          key={project.id}
          project={project}
          variant={variant}
        />
      ))}
    </div>
  );
}

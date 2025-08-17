"use client";

import { PropertyCard } from "./PropertyCard";
import type { Project } from "../../lib/utils";

export interface PropertyGridProps {
  projects: Project[];
  loading?: boolean;
  variant?: "default" | "compact";
  className?: string;
}

// Premium skeleton loader for property cards
function PropertyCardSkeleton({ variant }: { variant?: "default" | "compact" }) {
  const isCompact = variant === "compact";
  
  return (
    <div className="group relative">
      {/* Skeleton glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl animate-pulse overflow-hidden">
        {/* Image skeleton */}
        <div className={`bg-gradient-to-br from-slate-200 to-slate-100 rounded-t-3xl ${isCompact ? "h-40" : "h-48"}`} />
        
        {/* Content skeleton */}
        <div className={`p-6 space-y-4`}>
          {/* Title */}
          <div className="space-y-3">
            <div className={`bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg ${isCompact ? "h-4" : "h-5"} w-3/4`} />
            <div className={`bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg ${isCompact ? "h-3" : "h-4"} w-1/2`} />
          </div>
          
          {/* Location */}
          <div className={`bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg ${isCompact ? "h-3" : "h-4"} w-2/3`} />
          
          {/* Price */}
          <div className="flex justify-between items-center">
            <div className={`bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg ${isCompact ? "h-4" : "h-5"} w-1/3`} />
            <div className={`bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg ${isCompact ? "h-3" : "h-4"} w-1/4`} />
          </div>
          
          {/* Configurations */}
          {!isCompact && (
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg h-6 w-12" />
              ))}
            </div>
          )}
          
          {/* Button */}
          <div className={`bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl ${isCompact ? "h-10" : "h-12"} w-full`} />
        </div>
      </div>
    </div>
  );
}

export function PropertyGrid({ projects, loading, variant = "default", className = "" }: PropertyGridProps) {
  const isCompact = variant === "compact";
  
  const gridClasses = [
    "grid",
    isCompact 
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
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
      <div className="text-center py-20">
        <div className="max-w-lg mx-auto">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-xl">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40"></div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            No Properties Found
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            We couldn't find any properties matching your criteria. 
            Try adjusting your filters or search terms to discover more options.
          </p>
          
          {/* Optional suggestions */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {["All Properties", "Popular Areas", "New Listings"].map((suggestion, index) => (
              <button
                key={index}
                className="px-4 py-2 text-sm bg-white/70 backdrop-blur-sm text-slate-700 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-slate-900 transition-all duration-300 border border-white/50 hover:border-blue-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                {suggestion}
              </button>
            ))}
          </div>
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

"use client";

import { Heading, Text } from "../primitives/Typography";
import { PropertyGrid } from "./PropertyGrid";
import { Button } from "../primitives/Button";
import type { Project } from "../../lib/utils";
import Link from "next/link";

export interface PopularSectionProps {
  title: string;
  subtitle?: string;
  projects: Project[];
  loading?: boolean;
  showViewAll?: boolean;
  viewAllLink?: string;
  variant?: "default" | "compact";
  className?: string;
}

export function PopularSection({
  title,
  subtitle,
  projects,
  loading,
  showViewAll = true,
  viewAllLink = "/buyers",
  variant = "compact",
  className = ""
}: PopularSectionProps) {
  const limitedProjects = projects.slice(0, variant === "compact" ? 8 : 6);

  return (
    <section className={`relative ${className}`}>
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-2xl animate-float-slow [animation-delay:3s]"></div>
      </div>

      {/* Premium Section Header */}
      {(title || subtitle) && (
        <div className="relative z-10 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-4">
              {title && (
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">Featured Collection</Text>
                  </div>
                  <Heading level={2} className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                    {title}
                  </Heading>
                </div>
              )}
              {subtitle && (
                <Text size="lg" className="text-slate-600 font-light leading-relaxed max-w-2xl">
                  {subtitle}
                </Text>
              )}
            </div>
            
            {/* Premium View All Button (Desktop) */}
            {showViewAll && projects.length > limitedProjects.length && (
              <div className="hidden lg:block">
                <Link href={viewAllLink}>
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Button 
                      variant="outline"
                      className="relative bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 border border-white/50 hover:border-slate-200 rounded-2xl px-8 py-3 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      leftIcon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                          <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                      }
                    >
                      <span className="flex items-center gap-2">
                        View All {projects.length} Properties
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                          <polyline points="9,18 15,12 9,6"/>
                        </svg>
                      </span>
                    </Button>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Premium Properties Grid Container */}
      <div className="relative z-10">
        {loading ? (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
              <PropertyGrid
                projects={limitedProjects}
                loading={loading}
                variant={variant}
                className="gap-8"
              />
            </div>
          </div>
        ) : projects.length > 0 ? (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
              <PropertyGrid
                projects={limitedProjects}
                loading={loading}
                variant={variant}
                className="gap-8"
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/30 shadow-xl max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <Heading level={3} className="text-2xl font-bold text-slate-900 mb-4">
                No Properties Available
              </Heading>
              <Text className="text-slate-600 font-medium mb-2">
                We're curating the perfect selection for you.
              </Text>
              <Text size="sm" className="text-slate-500">
                Please check back soon for our latest premium listings.
              </Text>
            </div>
          </div>
        )}
      </div>

      {/* Premium View All Button (Mobile) */}
      {showViewAll && projects.length > limitedProjects.length && (
        <div className="flex justify-center mt-12 lg:hidden relative z-10">
          <Link href={viewAllLink}>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Button 
                variant="outline"
                className="relative bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 border border-white/50 hover:border-slate-200 rounded-2xl px-10 py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[280px]"
                leftIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                }
              >
                <span className="flex items-center gap-2">
                  View All {projects.length} Properties
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </span>
              </Button>
            </div>
          </Link>
        </div>
      )}
    </section>
  );
}

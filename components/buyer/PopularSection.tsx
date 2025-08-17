"use client";

import { Heading } from "../primitives/Typography";
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
    <section className={`py-8 ${className}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Heading level={2} size="xl" className="mb-1">
            {title}
          </Heading>
          {subtitle && (
            <p className="text-[--color-neutral-600]">{subtitle}</p>
          )}
        </div>
        
        {showViewAll && projects.length > limitedProjects.length && (
          <Link href={viewAllLink}>
            <Button variant="outline">
              View All ({projects.length})
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </Button>
          </Link>
        )}
      </div>

      {/* Properties Grid */}
      <PropertyGrid
        projects={limitedProjects}
        loading={loading}
        variant={variant}
      />

      {/* View All Button (mobile) */}
      {showViewAll && projects.length > limitedProjects.length && (
        <div className="flex justify-center mt-8 md:hidden">
          <Link href={viewAllLink}>
            <Button variant="outline">
              View All Properties ({projects.length})
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

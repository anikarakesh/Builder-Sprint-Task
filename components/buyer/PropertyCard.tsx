"use client";

import { Card } from "../primitives/Card";
import { Badge } from "../primitives/Badge";
import { Button } from "../primitives/Button";
import { formatPrice, formatArea, type Project } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image";

export interface PropertyCardProps {
  project: Project;
  variant?: "default" | "compact";
  className?: string;
}

export function PropertyCard({ project, variant = "default", className = "" }: PropertyCardProps) {
  const isCompact = variant === "compact";
  const mainConfig = project.configurations[0]; // Use first configuration as primary
  
  return (
    <Card className={`group hover:shadow-lg transition-shadow duration-200 ${className}`}>
      {/* Image */}
      <div className={`relative overflow-hidden rounded-t-[var(--radius-lg)] ${isCompact ? "h-40" : "h-48"}`}>
        <Image
          src={project.images[0] || "/placeholder-property.jpg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={project.status === "active" ? "success" : "default"}>
            {project.status}
          </Badge>
        </div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="primary">Featured</Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className={`p-4 ${isCompact ? "space-y-2" : "space-y-3"}`}>
        {/* Title and Builder */}
        <div>
          <h3 className={`font-semibold text-[--color-neutral-900] ${isCompact ? "text-sm" : "text-lg"}`}>
            {project.title}
          </h3>
          <p className={`text-[--color-neutral-600] ${isCompact ? "text-xs" : "text-sm"}`}>
            by {project.builder}
          </p>
        </div>
        
        {/* Location */}
        <div className={`flex items-center gap-1 text-[--color-neutral-600] ${isCompact ? "text-xs" : "text-sm"}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{project.location.area}, {project.location.city}</span>
        </div>
        
        {/* Price and Area */}
        <div className={`flex items-center justify-between ${isCompact ? "text-sm" : "text-base"}`}>
          <div>
            <span className="font-semibold text-[--color-neutral-900]">
              {formatPrice(project.price.starting)}
            </span>
            <span className="text-[--color-neutral-600] text-sm ml-1">onwards</span>
          </div>
          {mainConfig && (
            <span className="text-[--color-neutral-600] text-sm">
              {formatArea(mainConfig.area)}
            </span>
          )}
        </div>
        
        {/* Configurations */}
        {!isCompact && (
          <div className="flex flex-wrap gap-1">
            {project.configurations.slice(0, 3).map((config) => (
              <Badge key={config.type} variant="outline" size="sm">
                {config.type}
              </Badge>
            ))}
            {project.configurations.length > 3 && (
              <Badge variant="outline" size="sm">
                +{project.configurations.length - 3} more
              </Badge>
            )}
          </div>
        )}
        
        {/* Key amenities */}
        {!isCompact && (
          <div className="flex flex-wrap gap-1 pt-2">
            {project.amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="text-xs text-[--color-neutral-600] bg-[--color-neutral-50] px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
            {project.amenities.length > 3 && (
              <span className="text-xs text-[--color-neutral-600] bg-[--color-neutral-50] px-2 py-1 rounded">
                +{project.amenities.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {/* Actions */}
        <div className={`flex gap-2 pt-2 ${isCompact ? "flex-col" : "flex-row"}`}>
          <Link href={`/buyers/${project.id}`} className="flex-1">
            <Button variant="primary" className="w-full" size={isCompact ? "sm" : "md"}>
              View Details
            </Button>
          </Link>
          {!isCompact && (
            <Button variant="outline" size="md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

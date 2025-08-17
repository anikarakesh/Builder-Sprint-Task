// Type imports
import type { PropertyFilters, SortConfig } from "../context/AppContext";

// Project type (from our JSON structure)
export interface Project {
  id: string;
  title: string;
  builder: string;
  builderId: string;
  location: {
    city: string;
    area: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  price: {
    starting: number;
    currency: string;
    pricePerSqft: number;
  };
  status: "active" | "inactive";
  category: string;
  propertyType: string;
  images: string[];
  thumbnails: string[];
  description: string;
  configurations: Array<{
    type: string;
    area: number;
    price: number;
    available: number;
    layout: string;
  }>;
  amenities: string[];
  specifications: {
    floors: number;
    totalUnits: number;
    possession: string;
    approvals: string[];
    constructionStatus: string;
  };
  metrics: {
    views: number;
    leads: number;
    ctr: number;
    inquiries: number;
    siteVisits: number;
  };
  nearbyFacilities: string[];
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  popular: boolean;
}

// Formatting utilities
export function formatPrice(price: number, currency: string = "INR"): string {
  if (currency === "INR") {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(1)}K`;
    }
    return `₹${price.toLocaleString()}`;
  }
  
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(price);
}

export function formatArea(area: number): string {
  return `${area.toLocaleString()} sq ft`;
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(dateString));
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
}

// Filtering utilities
export function filterProjects(projects: Project[], filters: PropertyFilters, searchQuery?: string): Project[] {
  return projects.filter(project => {
    // Search query filter
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const searchMatch = 
        project.title.toLowerCase().includes(query) ||
        project.location.city.toLowerCase().includes(query) ||
        project.location.area.toLowerCase().includes(query) ||
        project.builder.toLowerCase().includes(query);
      
      if (!searchMatch) return false;
    }

    // City filter
    if (filters.city && project.location.city !== filters.city) {
      return false;
    }

    // Property type filter
    if (filters.propertyType && project.propertyType !== filters.propertyType) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      if (project.price.starting < min || project.price.starting > max) {
        return false;
      }
    }

    // Configuration filter (if project has any of the selected configurations)
    if (filters.configurations && filters.configurations.length > 0) {
      const projectConfigTypes = project.configurations.map(config => config.type);
      const hasMatchingConfig = filters.configurations.some(configType => 
        projectConfigTypes.includes(configType)
      );
      if (!hasMatchingConfig) return false;
    }

    // Amenities filter (project must have all selected amenities)
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity => 
        project.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }

    // Status filter
    if (filters.status && project.status !== filters.status) {
      return false;
    }

    return true;
  });
}

// Sorting utilities
export function sortProjects(projects: Project[], sortConfig: SortConfig): Project[] {
  return [...projects].sort((a, b) => {
    let aValue: any;
    let bValue: any;

    // Get values based on sort field
    switch (sortConfig.field) {
      case "title":
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
        break;
      case "price":
        aValue = a.price.starting;
        bValue = b.price.starting;
        break;
      case "location":
        aValue = `${a.location.city} ${a.location.area}`.toLowerCase();
        bValue = `${b.location.city} ${b.location.area}`.toLowerCase();
        break;
      case "builder":
        aValue = a.builder.toLowerCase();
        bValue = b.builder.toLowerCase();
        break;
      case "leads":
        aValue = a.metrics.leads;
        bValue = b.metrics.leads;
        break;
      case "views":
        aValue = a.metrics.views;
        bValue = b.metrics.views;
        break;
      case "ctr":
        aValue = a.metrics.ctr;
        bValue = b.metrics.ctr;
        break;
      case "status":
        aValue = a.status;
        bValue = b.status;
        break;
      case "createdAt":
      case "updatedAt":
        aValue = new Date(a[sortConfig.field as keyof Pick<Project, "createdAt" | "updatedAt">]);
        bValue = new Date(b[sortConfig.field as keyof Pick<Project, "createdAt" | "updatedAt">]);
        break;
      default:
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
    }

    // Compare values
    let comparison = 0;
    if (aValue < bValue) {
      comparison = -1;
    } else if (aValue > bValue) {
      comparison = 1;
    }

    // Apply direction
    return sortConfig.direction === "desc" ? -comparison : comparison;
  });
}

// Search utilities
export function getPopularProjects(projects: Project[]): Project[] {
  return projects.filter(project => project.popular);
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectsByCity(projects: Project[], city: string): Project[] {
  return projects.filter(project => project.location.city === city);
}

// Utility to get unique values for filters
export function getUniqueValues<T>(items: T[], key: keyof T): Array<T[keyof T]> {
  const values = items.map(item => item[key]);
  return Array.from(new Set(values));
}

export function getUniqueCities(projects: Project[]): string[] {
  return getUniqueValues(projects, "location").map((loc: any) => loc.city);
}

export function getUniquePropertyTypes(projects: Project[]): string[] {
  return getUniqueValues(projects, "propertyType") as string[];
}

export function getUniqueAmenities(projects: Project[]): string[] {
  const allAmenities = projects.flatMap(project => project.amenities);
  return Array.from(new Set(allAmenities)).sort();
}

// Configuration utilities
export function getUniqueConfigurations(projects: Project[]): string[] {
  const allConfigs = projects.flatMap(project => 
    project.configurations.map(config => config.type)
  );
  return Array.from(new Set(allConfigs)).sort();
}

// Price range utilities
export function getPriceRange(projects: Project[]): { min: number; max: number } {
  if (projects.length === 0) return { min: 0, max: 0 };
  
  const prices = projects.map(project => project.price.starting);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// URL utilities
export function createProjectUrl(projectId: string, type: "buyer" | "builder" = "buyer"): string {
  return type === "buyer" ? `/buyers/${projectId}` : `/builder/projects/${projectId}`;
}

// Class name utility (similar to clsx)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

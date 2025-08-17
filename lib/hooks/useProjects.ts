"use client";

import { useState, useEffect } from "react";
import type { Project } from "../utils";

interface ProjectsData {
  projects: Project[];
  builders: Array<{
    id: string;
    name: string;
    description: string;
    established: number;
    totalProjects: number;
    certifications: string[];
  }>;
  cities: Array<{
    name: string;
    state: string;
    popularAreas: string[];
    avgPricePerSqft: number;
    totalProjects: number;
  }>;
  amenityCategories: Array<{
    category: string;
    amenities: string[];
  }>;
  priceRanges: Array<{
    label: string;
    min: number;
    max: number;
  }>;
}

export function useProjects() {
  const [data, setData] = useState<ProjectsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const response = await fetch("/projects.json");
        
        if (!response.ok) {
          throw new Error(`Failed to load projects: ${response.status}`);
        }
        
        const projectsData = await response.json();
        setData(projectsData);
        setError(null);
      } catch (err) {
        console.error("Error loading projects:", err);
        setError(err instanceof Error ? err.message : "Failed to load projects");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return {
    projects: data?.projects || [],
    builders: data?.builders || [],
    cities: data?.cities || [],
    amenityCategories: data?.amenityCategories || [],
    priceRanges: data?.priceRanges || [],
    loading,
    error
  };
}

// Convenience hooks for specific data
export function useProject(projectId: string) {
  const { projects, loading, error } = useProjects();
  const project = projects.find(p => p.id === projectId);
  
  return { project, loading, error };
}

export function useBuilder(builderId: string) {
  const { builders, loading, error } = useProjects();
  const builder = builders.find(b => b.id === builderId);
  
  return { builder, loading, error };
}

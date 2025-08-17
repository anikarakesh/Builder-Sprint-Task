"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "../primitives/Button";
import { Badge, StatusBadge } from "../primitives/Badge";
import { Heading, Text } from "../primitives/Typography";
import { Select } from "../primitives/Select";
import { useAppState } from "../../lib/context/AppContext";
import { sortProjects, filterProjects, formatPrice, formatNumber, formatPercent } from "../../lib/utils";
import type { Project, SortConfig } from "../../lib/utils";

export interface ProjectsTableProps {
  projects: Project[];
  loading?: boolean;
  className?: string;
  onEdit?: (projectId: string) => void;
  onView?: (projectId: string) => void;
}

interface TableColumn {
  key: string;
  label: string;
  sortable: boolean;
  align?: "left" | "center" | "right";
}

const columns: TableColumn[] = [
  { key: "title", label: "Project Name", sortable: true },
  { key: "location", label: "Location", sortable: true },
  { key: "status", label: "Status", sortable: true, align: "center" },
  { key: "leads", label: "Leads", sortable: true, align: "right" },
  { key: "views", label: "Views", sortable: true, align: "right" },
  { key: "ctr", label: "CTR", sortable: true, align: "right" },
  { key: "price", label: "Starting Price", sortable: true, align: "right" },
  { key: "actions", label: "Actions", sortable: false, align: "center" }
];

function TableSkeleton() {
  return (
    <div className="border border-[--color-neutral-200] rounded-[var(--radius-lg)] overflow-hidden">
      <div className="bg-[--color-neutral-50] p-4 border-b border-[--color-neutral-200]">
        <div className="h-5 bg-[--color-neutral-200] rounded w-1/4 animate-pulse" />
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="p-4 border-b border-[--color-neutral-200] last:border-b-0">
          <div className="grid grid-cols-8 gap-4">
            {Array.from({ length: 8 }).map((_, j) => (
              <div key={j} className="h-4 bg-[--color-neutral-200] rounded animate-pulse" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectsTable({ 
  projects, 
  loading, 
  className = "",
  onEdit,
  onView 
}: ProjectsTableProps) {
  const { state, dispatch } = useAppState();
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  
  const sortConfig = state.builderSort;

  // Filter projects by status
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(project => project.status === statusFilter);
    }
    
    return filtered;
  }, [projects, statusFilter]);

  // Sort projects
  const sortedProjects = useMemo(() => {
    return sortProjects(filteredProjects, sortConfig);
  }, [filteredProjects, sortConfig]);

  const handleSort = (field: string) => {
    const newDirection = 
      sortConfig.field === field && sortConfig.direction === "asc" 
        ? "desc" 
        : "asc";
    
    dispatch({
      type: "SET_BUILDER_SORT",
      payload: { field, direction: newDirection }
    });
  };

  const getSortIcon = (field: string) => {
    if (sortConfig.field !== field) {
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
          <path d="M8 9l4-4 4 4"/>
          <path d="M16 15l-4 4-4-4"/>
        </svg>
      );
    }
    
    return sortConfig.direction === "asc" ? (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l4-4 4 4"/>
      </svg>
    ) : (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 15l-4 4-4-4"/>
      </svg>
    );
  };

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className={className}>
      {/* Table Header with Filters */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Heading level={2} size="xl">Projects</Heading>
          <Text color="muted" className="mt-1">
            Manage and track your property listings
          </Text>
        </div>
        
        <div className="flex items-center gap-4">
          <Select
            options={[
              { value: "all", label: "All Status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" }
            ]}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "all" | "active" | "inactive")}
            className="min-w-[150px]"
          />
          
          <Button variant="primary">
            Add New Project
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <Text color="muted">
          {sortedProjects.length} {sortedProjects.length === 1 ? "project" : "projects"} 
          {statusFilter !== "all" && ` (${statusFilter})`}
        </Text>
      </div>

      {/* Table */}
      <div className="border border-[--color-neutral-200] rounded-[var(--radius-lg)] overflow-hidden">
        {sortedProjects.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[--color-neutral-100] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[--color-neutral-400]">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <Heading level={3} size="lg" className="mb-2">
              No projects found
            </Heading>
            <Text color="muted">
              {statusFilter !== "all" 
                ? `No ${statusFilter} projects to display.`
                : "Get started by adding your first project."
              }
            </Text>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead className="bg-[--color-neutral-50] border-b border-[--color-neutral-200]">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className={`px-4 py-3 text-left text-sm font-semibold text-[--color-neutral-900] ${
                        column.align === "center" ? "text-center" : 
                        column.align === "right" ? "text-right" : ""
                      }`}
                    >
                      {column.sortable ? (
                        <button
                          onClick={() => handleSort(column.key)}
                          className="flex items-center gap-2 hover:text-[--color-primary-base] transition-colors"
                        >
                          {column.label}
                          {getSortIcon(column.key)}
                        </button>
                      ) : (
                        column.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {sortedProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-[--color-neutral-200] last:border-b-0 hover:bg-[--color-neutral-50] transition-colors"
                  >
                    {/* Project Name */}
                    <td className="px-4 py-4">
                      <div>
                        <Link 
                          href={`/builder/projects/${project.id}`}
                          className="font-medium text-[--color-neutral-900] hover:text-[--color-primary-base] transition-colors"
                        >
                          {project.title}
                        </Link>
                        <Text size="sm" color="muted" className="mt-1">
                          by {project.builder}
                        </Text>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-4 py-4">
                      <Text>{project.location.area}, {project.location.city}</Text>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4 text-center">
                      <StatusBadge status={project.status} />
                    </td>

                    {/* Leads */}
                    <td className="px-4 py-4 text-right">
                      <Text weight="semibold">{formatNumber(project.metrics.leads)}</Text>
                    </td>

                    {/* Views */}
                    <td className="px-4 py-4 text-right">
                      <Text>{formatNumber(project.metrics.views)}</Text>
                    </td>

                    {/* CTR */}
                    <td className="px-4 py-4 text-right">
                      <Text>{formatPercent(project.metrics.ctr)}</Text>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-4 text-right">
                      <Text weight="semibold">{formatPrice(project.price.starting)}</Text>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          onClick={() => onView?.(project.id)}
                          className="p-2 h-8 w-8"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => onEdit?.(project.id)}
                          className="p-2 h-8 w-8"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

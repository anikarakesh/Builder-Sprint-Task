"use client";

import { useState, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import { Container } from "../../../../components/layout/Container";
import { Section } from "../../../../components/layout/Section";
import { Heading, Text } from "../../../../components/primitives/Typography";
import { Button } from "../../../../components/primitives/Button";
import { Badge } from "../../../../components/primitives/Badge";
import { Card } from "../../../../components/primitives/Card";
import { TextInput } from "../../../../components/primitives/TextInput";
import { Select } from "../../../../components/primitives/Select";
import { useProject } from "../../../../lib/hooks/useProjects";
import { useAppState } from "../../../../lib/context/AppContext";
import { formatPrice, formatArea } from "../../../../lib/utils";
import Link from "next/link";

interface BuilderProjectDetailProps {
  params: {
    projectId: string;
  };
}

export default function BuilderProjectDetailPage({ params }: BuilderProjectDetailProps) {
  const { project, loading, error } = useProject(params.projectId);
  const { state, dispatch } = useAppState();
  const router = useRouter();
  
  const [editMode, setEditMode] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  
  // Get project edits from app state
  const projectEdits = state.projectEdits[params.projectId] || {};
  const isDirty = state.dirtyProjects.has(params.projectId);
  
  // Get current values (either edited or original)
  const currentValues = project ? { ...project, ...projectEdits } : null;

  const updateField = (field: string, value: any) => {
    dispatch({
      type: "UPDATE_PROJECT_FIELD",
      payload: { projectId: params.projectId, field, value }
    });
  };

  const handleSave = async () => {
    setSaveLoading(true);
    
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    dispatch({
      type: "SAVE_PROJECT_CHANGES",
      payload: { projectId: params.projectId }
    });
    
    setSaveLoading(false);
    setEditMode(false);
  };

  const handleDiscard = () => {
    dispatch({
      type: "DISCARD_PROJECT_CHANGES",
      payload: { projectId: params.projectId }
    });
    setEditMode(false);
  };

  if (loading) {
    return (
      <Container>
        <Section className="py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-[--color-neutral-200] rounded w-1/3" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-6 bg-[--color-neutral-200] rounded" />
                <div className="h-4 bg-[--color-neutral-200] rounded w-3/4" />
                <div className="h-32 bg-[--color-neutral-200] rounded" />
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-[--color-neutral-200] rounded" />
                <div className="h-32 bg-[--color-neutral-200] rounded" />
              </div>
            </div>
          </div>
        </Section>
      </Container>
    );
  }

  if (error || !project || !currentValues) {
    notFound();
  }

  return (
    <Container>
      {/* Header */}
      <Section className="py-6 border-b border-[--color-neutral-200]">
        <div className="flex items-center justify-between">
          <div>
            <nav className="flex items-center space-x-2 text-sm mb-4">
              <Link href="/builder" className="text-[--color-primary-base] hover:underline">
                Dashboard
              </Link>
              <span className="text-[--color-neutral-400]">/</span>
              <Link href="/builder/projects" className="text-[--color-primary-base] hover:underline">
                Projects
              </Link>
              <span className="text-[--color-neutral-400]">/</span>
              <span className="text-[--color-neutral-600]">{currentValues.title}</span>
            </nav>
            
            <div className="flex items-center gap-4">
              <Heading level={1} size="2xl">{currentValues.title}</Heading>
              <Badge variant={currentValues.status === "active" ? "success" : "default"}>
                {currentValues.status}
              </Badge>
              {isDirty && <Badge variant="warning">Unsaved Changes</Badge>}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => window.open(`/buyers/${project.id}`, '_blank')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Preview
            </Button>
            
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit Project
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={handleDiscard} disabled={saveLoading}>
                  Cancel
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleSave} 
                  disabled={!isDirty}
                  isLoading={saveLoading}
                >
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <Card>
              <Heading level={2} size="lg" className="mb-6">Basic Information</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    Project Title
                  </label>
                  {editMode ? (
                    <TextInput
                      value={currentValues.title}
                      onChange={(e) => updateField("title", e.target.value)}
                      placeholder="Enter project title"
                    />
                  ) : (
                    <Text>{currentValues.title}</Text>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    Builder Name
                  </label>
                  {editMode ? (
                    <TextInput
                      value={currentValues.builder}
                      onChange={(e) => updateField("builder", e.target.value)}
                      placeholder="Enter builder name"
                    />
                  ) : (
                    <Text>{currentValues.builder}</Text>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    City
                  </label>
                  {editMode ? (
                    <TextInput
                      value={currentValues.location.city}
                      onChange={(e) => updateField("location", { ...currentValues.location, city: e.target.value })}
                      placeholder="Enter city"
                    />
                  ) : (
                    <Text>{currentValues.location.city}</Text>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    Area
                  </label>
                  {editMode ? (
                    <TextInput
                      value={currentValues.location.area}
                      onChange={(e) => updateField("location", { ...currentValues.location, area: e.target.value })}
                      placeholder="Enter area"
                    />
                  ) : (
                    <Text>{currentValues.location.area}</Text>
                  )}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    Status
                  </label>
                  {editMode ? (
                    <Select
                      options={[
                        { value: "active", label: "Active" },
                        { value: "inactive", label: "Inactive" }
                      ]}
                      value={currentValues.status}
                      onChange={(e) => updateField("status", e.target.value)}
                    />
                  ) : (
                    <Badge variant={currentValues.status === "active" ? "success" : "default"}>
                      {currentValues.status}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card>
              <Heading level={2} size="lg" className="mb-6">Project Description</Heading>
              {editMode ? (
                <textarea
                  value={currentValues.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[--color-primary-alpha-16] resize-vertical"
                  placeholder="Enter project description..."
                />
              ) : (
                <Text className="leading-relaxed">{currentValues.description}</Text>
              )}
            </Card>

            {/* Pricing */}
            <Card>
              <Heading level={2} size="lg" className="mb-6">Pricing</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    Starting Price (₹)
                  </label>
                  {editMode ? (
                    <TextInput
                      type="number"
                      value={currentValues.price.starting}
                      onChange={(e) => updateField("price", { 
                        ...currentValues.price, 
                        starting: parseInt(e.target.value) || 0 
                      })}
                      placeholder="Enter starting price"
                    />
                  ) : (
                    <Text weight="semibold" size="lg">
                      {formatPrice(currentValues.price.starting)}
                    </Text>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--color-neutral-900] mb-2">
                    Price per Sq Ft (₹)
                  </label>
                  {editMode ? (
                    <TextInput
                      type="number"
                      value={currentValues.price.pricePerSqft}
                      onChange={(e) => updateField("price", { 
                        ...currentValues.price, 
                        pricePerSqft: parseInt(e.target.value) || 0 
                      })}
                      placeholder="Enter price per sq ft"
                    />
                  ) : (
                    <Text>₹{currentValues.price.pricePerSqft.toLocaleString()}/sq ft</Text>
                  )}
                </div>
              </div>
            </Card>

            {/* Configurations */}
            <Card>
              <Heading level={2} size="lg" className="mb-6">Available Configurations</Heading>
              
              <div className="space-y-4">
                {currentValues.configurations.map((config, index) => (
                  <div key={index} className="p-4 border border-[--color-neutral-200] rounded-[var(--radius-md)]">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Text size="sm" color="muted">Type</Text>
                        <Text weight="semibold">{config.type}</Text>
                      </div>
                      <div>
                        <Text size="sm" color="muted">Area</Text>
                        <Text>{formatArea(config.area)}</Text>
                      </div>
                      <div>
                        <Text size="sm" color="muted">Price</Text>
                        <Text>{formatPrice(config.price)}</Text>
                      </div>
                      <div>
                        <Text size="sm" color="muted">Available</Text>
                        <Text color={config.available > 5 ? "success" : "warning"}>
                          {config.available} units
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Metrics */}
            <Card>
              <Heading level={3} size="md" className="mb-4">Performance Metrics</Heading>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Text color="muted">Total Views</Text>
                  <Text weight="semibold">{currentValues.metrics.views.toLocaleString()}</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text color="muted">Leads Generated</Text>
                  <Text weight="semibold">{currentValues.metrics.leads.toLocaleString()}</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text color="muted">Click-through Rate</Text>
                  <Text weight="semibold">{currentValues.metrics.ctr.toFixed(1)}%</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text color="muted">Inquiries</Text>
                  <Text weight="semibold">{currentValues.metrics.inquiries.toLocaleString()}</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text color="muted">Site Visits</Text>
                  <Text weight="semibold">{currentValues.metrics.siteVisits.toLocaleString()}</Text>
                </div>
              </div>
            </Card>

            {/* Project Status */}
            <Card>
              <Heading level={3} size="md" className="mb-4">Project Status</Heading>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Text color="muted">Featured</Text>
                  <Badge variant={currentValues.featured ? "primary" : "outline"}>
                    {currentValues.featured ? "Yes" : "No"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Text color="muted">Popular</Text>
                  <Badge variant={currentValues.popular ? "success" : "outline"}>
                    {currentValues.popular ? "Yes" : "No"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Text color="muted">Total Floors</Text>
                  <Text weight="semibold">{currentValues.specifications.floors}</Text>
                </div>
                <div className="flex items-center justify-between">
                  <Text color="muted">Total Units</Text>
                  <Text weight="semibold">{currentValues.specifications.totalUnits}</Text>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <Heading level={3} size="md" className="mb-4">Quick Actions</Heading>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                  Manage Images
                </Button>
                
                <Button variant="outline" className="w-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  Download Reports
                </Button>
                
                <Button variant="outline" className="w-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16,6 12,2 8,6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                  </svg>
                  Export Data
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </Container>
  );
}
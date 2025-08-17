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
import { ImageGalleryManager } from "../../../../components/builder/ImageGalleryManager";
import { useProject } from "../../../../lib/hooks/useProjects";
import { useAppState } from "../../../../lib/context/AppContext";
import { formatPrice, formatArea } from "../../../../lib/utils";
import Link from "next/link";

export default function BuilderProjectDetailPage({ params }: any) {
  const { project, loading, error } = useProject(params.projectId);
  const { state, dispatch } = useAppState();
  const router = useRouter();
  
  const [editMode, setEditMode] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  
  // Mock images data - in a real app, this would come from the project data
  const [projectImages, setProjectImages] = useState<Array<{
    id: string;
    url: string;
    caption?: string;
    file?: File;
    isUploading?: boolean;
  }>>([
    {
      id: "img-1",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      caption: "Living Room"
    },
    {
      id: "img-2", 
      url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
      caption: "Kitchen"
    },
    {
      id: "img-3",
      url: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&h=600&fit=crop", 
      caption: "Bedroom"
    }
  ]);
  
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <Container>
          <div className="py-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-xl">
                <div className="animate-pulse space-y-8">
                  {/* Header skeleton */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full w-1/4" />
                    <div className="h-10 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl w-1/2" />
                    <div className="h-6 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full w-1/3" />
                  </div>
                  
                  {/* Content skeleton */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                          <div className="h-6 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full w-1/3" />
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded w-2/3" />
                              <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-100 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded w-2/3" />
                              <div className="h-8 bg-gradient-to-r from-slate-200 to-slate-100 rounded-xl" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Sidebar skeleton */}
                    <div className="space-y-6">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                          <div className="h-5 bg-gradient-to-r from-slate-200 to-slate-100 rounded w-2/3" />
                          {Array.from({ length: 4 }).map((_, j) => (
                            <div key={j} className="flex justify-between items-center">
                              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded w-1/2" />
                              <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-100 rounded w-1/4" />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !project || !currentValues) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Premium Header Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-purple-300/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-purple-300/20 via-blue-300/10 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:4s]"></div>
        </div>

        <Container>
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="space-y-6">
                    {/* Premium Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm">
                      <Link href="/builder" className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        </svg>
                        Dashboard
                      </Link>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                        <polyline points="9,18 15,12 9,6"/>
                      </svg>
                      <Link href="/builder/projects" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300">
                        Projects
                      </Link>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                        <polyline points="9,18 15,12 9,6"/>
                      </svg>
                      <span className="text-slate-900 font-semibold">{currentValues.title}</span>
                    </nav>
                    
                    {/* Premium Project Title */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 flex-wrap">
                        <Heading level={1} className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                          {currentValues.title}
                        </Heading>
                        <div className="flex items-center gap-3">
                          <Badge variant={currentValues.status === "active" ? "success" : "default"}>
                            {currentValues.status}
                          </Badge>
                          {isDirty && (
                            <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 border border-orange-200 rounded-full">
                              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                              <Text size="sm" className="text-orange-700 font-medium">Unsaved Changes</Text>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Text size="lg" className="text-slate-600 font-light">
                        {editMode ? "Edit mode active - Make your changes and save when ready" : "Manage and monitor your property listing performance"}
                      </Text>
                    </div>
                  </div>
                  
                  {/* Premium Action Buttons */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                      <Button
                        variant="outline"
                        onClick={() => window.open(`/buyers/${project.id}`, '_blank')}
                        className="relative bg-white/90 backdrop-blur-sm hover:bg-white border-white/50 hover:border-slate-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        Preview Live
                      </Button>
                    </div>
                    
                    {!editMode ? (
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                        <Button 
                          variant="primary" 
                          onClick={() => setEditMode(true)}
                          className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                          Edit Project
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="ghost" 
                          onClick={handleDiscard} 
                          disabled={saveLoading}
                          className="hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all duration-300"
                        >
                          Cancel
                        </Button>
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                          <Button 
                            variant="primary" 
                            onClick={handleSave} 
                            disabled={!isDirty}
                            isLoading={saveLoading}
                            className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                          >
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Content Section */}
      <section className="py-16 relative">
        <Container>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-blue-500/3 rounded-3xl blur-3xl"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Premium Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Premium Basic Information */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10,9 9,9 8,9"/>
                        </svg>
                      </div>
                      <Heading level={2} size="lg" className="text-slate-900 font-black">Basic Information</Heading>
                    </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                </div>

                {/* Premium Description */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="10" y1="13" x2="18" y2="13"/>
                          <line x1="10" y1="17" x2="18" y2="17"/>
                          <line x1="10" y1="9" x2="12" y2="9"/>
                        </svg>
                      </div>
                      <Heading level={2} size="lg" className="text-slate-900 font-black">Project Description</Heading>
                    </div>
              {editMode ? (
                <textarea
                  value={currentValues.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-[var(--color-neutral-300)] rounded-[var(--radius-md)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-alpha-16)] resize-vertical"
                  placeholder="Enter project description..."
                />
              ) : (
                <Text className="leading-relaxed">{currentValues.description}</Text>
              )}
                  </Card>
                </div>

                {/* Premium Pricing */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23"/>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                      </div>
                      <Heading level={2} size="lg" className="text-slate-900 font-black">Pricing</Heading>
                    </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-2">
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
                </div>

                {/* Premium Image Gallery Management */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-pink-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21,15 16,10 5,21"/>
                        </svg>
                      </div>
                      <Heading level={2} size="lg" className="text-slate-900 font-black">Image Gallery</Heading>
                    </div>
                    
                    <ImageGalleryManager
                      images={projectImages}
                      onImagesChange={setProjectImages}
                      maxImages={25}
                      className="mt-6"
                    />
                  </Card>
                </div>

                {/* Premium Configurations */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9,22 9,12 15,12 15,22"/>
                        </svg>
                      </div>
                      <Heading level={2} size="lg" className="text-slate-900 font-black">Available Configurations</Heading>
                    </div>
              
              <div className="space-y-4">
                {currentValues.configurations.map((config, index) => (
                  <div key={index} className="p-4 border border-[var(--color-neutral-200)] rounded-[var(--radius-md)]">
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
              </div>

              {/* Premium Sidebar */}
              <div className="space-y-8">
                {/* Premium Performance Metrics */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                        </svg>
                      </div>
                      <Heading level={3} size="md" className="text-slate-900 font-black">Performance Metrics</Heading>
                    </div>
              
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
                </div>

                {/* Premium Project Status */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22,4 12,14.01 9,11.01"/>
                        </svg>
                      </div>
                      <Heading level={3} size="md" className="text-slate-900 font-black">Project Status</Heading>
                    </div>
              
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
                </div>

                {/* Premium Quick Actions */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Card className="relative bg-white/80 backdrop-blur-xl border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9,11 12,14 22,4"/>
                          <path d="M21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11"/>
                        </svg>
                      </div>
                      <Heading level={3} size="md" className="text-slate-900 font-black">Quick Actions</Heading>
                    </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full hover:bg-slate-50 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Import Floor Plans
                </Button>
                
                <Button variant="outline" className="w-full hover:bg-slate-50 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  Analytics Report
                </Button>
                
                <Button variant="outline" className="w-full hover:bg-slate-50 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="16,12 12,8 8,12"/>
                    <line x1="12" y1="16" x2="12" y2="8"/>
                  </svg>
                  Promote Listing
                </Button>
              </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
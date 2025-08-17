"use client";

import { useState, useMemo } from "react";
import { notFound } from "next/navigation";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { Heading, Text } from "../../../components/primitives/Typography";
import { Button } from "../../../components/primitives/Button";
import { Badge } from "../../../components/primitives/Badge";
import { SegmentedControl } from "../../../components/primitives/SegmentedControl";
import { Card } from "../../../components/primitives/Card";
import { PopularSection } from "../../../components/buyer/PopularSection";
import { useProject, useProjects } from "../../../lib/hooks/useProjects";
import { 
  formatPrice, 
  formatArea, 
  formatDate,
  getProjectsByCity,
  getPopularProjects
} from "../../../lib/utils";
import Image from "next/image";
import Link from "next/link";



export default function ProjectDetailPage({ params }: any) {
  const { project, loading, error } = useProject(params.projectId);
  const { projects } = useProjects();
  const [selectedConfig, setSelectedConfig] = useState<string>("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Related projects (same city, different project)
  const relatedProjects = useMemo(() => {
    if (!project) return [];
    const popularInCity = getPopularProjects(
      getProjectsByCity(projects, project.location.city)
    );
    return popularInCity.filter(p => p.id !== project.id);
  }, [projects, project]);

  // Set default selected configuration
  useState(() => {
    if (project && project.configurations.length > 0 && !selectedConfig) {
      setSelectedConfig(project.configurations[0].type);
    }
  });

  const selectedConfiguration = project?.configurations.find(
    config => config.type === selectedConfig
  ) || project?.configurations[0];

  if (loading) {
    return (
      <Container>
        <Section className="py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-[var(--color-neutral-200)] rounded w-1/3 mb-4" />
            <div className="h-64 bg-[var(--color-neutral-200)] rounded mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-6 bg-[var(--color-neutral-200)] rounded w-3/4" />
                <div className="h-4 bg-[var(--color-neutral-200)] rounded w-full" />
                <div className="h-4 bg-[var(--color-neutral-200)] rounded w-2/3" />
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-[var(--color-neutral-200)] rounded" />
                <div className="h-32 bg-[var(--color-neutral-200)] rounded" />
              </div>
            </div>
          </div>
        </Section>
      </Container>
    );
  }

  if (error || !project) {
    notFound();
  }

  return (
    <Container>
        {/* Breadcrumb */}
        <Section className="py-4 border-b border-[var(--color-neutral-200)]">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/buyers" className="text-[var(--color-primary-base)] hover:underline">
              Properties
            </Link>
            <span className="text-[var(--color-neutral-400)]">/</span>
            <Link href={`/buyers?city=${project.location.city}`} className="text-[var(--color-primary-base)] hover:underline">
              {project.location.city}
            </Link>
            <span className="text-[var(--color-neutral-400)]">/</span>
            <span className="text-[var(--color-neutral-600)]">{project.title}</span>
          </nav>
        </Section>

        {/* Main Content */}
        <Section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div>
                {/* Main Image */}
                <div className="relative h-96 rounded-[var(--radius-lg)] overflow-hidden mb-4">
                  <Image
                    src={project.images[selectedImageIndex] || "/placeholder-property.jpg"}
                    alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImageIndex(prev => 
                          prev === 0 ? project.images.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15,18 9,12 15,6"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => setSelectedImageIndex(prev => 
                          prev === project.images.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9,18 15,12 9,6"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-20 h-20 rounded-[var(--radius-md)] overflow-hidden flex-shrink-0 ${
                          selectedImageIndex === index ? "ring-2 ring-[var(--color-primary-base)]" : ""
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Description */}
              <div>
                <Heading level={2} size="lg" className="mb-4">About This Project</Heading>
                <Text className="text-[var(--color-neutral-700)] leading-relaxed">
                  {project.description}
                </Text>
              </div>

              {/* Specifications */}
              <Card>
                <Heading level={3} size="md" className="mb-4">Project Specifications</Heading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Text size="sm" color="muted">Total Floors</Text>
                    <Text weight="semibold">{project.specifications.floors}</Text>
                  </div>
                  <div>
                    <Text size="sm" color="muted">Total Units</Text>
                    <Text weight="semibold">{project.specifications.totalUnits}</Text>
                  </div>
                  <div>
                    <Text size="sm" color="muted">Possession</Text>
                    <Text weight="semibold">{formatDate(project.specifications.possession + "-01")}</Text>
                  </div>
                  <div>
                    <Text size="sm" color="muted">Status</Text>
                    <Text weight="semibold">{project.specifications.constructionStatus}</Text>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[var(--color-neutral-200)]">
                  <Text size="sm" color="muted" className="mb-2">Approvals</Text>
                  <div className="flex flex-wrap gap-2">
                    {project.specifications.approvals.map((approval) => (
                      <Badge key={approval} variant="outline" size="sm">
                        {approval}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Amenities */}
              <Card>
                <Heading level={3} size="md" className="mb-4">Amenities</Heading>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {project.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 p-2 rounded bg-[var(--color-neutral-50)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 flex-shrink-0">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      <Text size="sm">{amenity}</Text>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Nearby Facilities */}
              <Card>
                <Heading level={3} size="md" className="mb-4">Explore Neighbourhood</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Text weight="semibold" className="mb-3">Nearby Facilities</Text>
                    <div className="space-y-2">
                      {project.nearbyFacilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary-base)] flex-shrink-0">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Text weight="semibold" className="mb-3">Location Map</Text>
                    <div className="h-48 bg-[var(--color-neutral-100)] rounded-[var(--radius-md)] flex items-center justify-center">
                      <Text color="muted">Map view placeholder</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Summary and Actions */}
            <div className="space-y-6">
              {/* Project Summary */}
              <Card>
                <div className="space-y-4">
                  <div>
                    <Heading level={1} size="xl" className="mb-1">{project.title}</Heading>
                    <Text color="secondary" className="mb-2">by {project.builder}</Text>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-neutral-600)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{project.location.area}, {project.location.city}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={project.status === "active" ? "success" : "default"}>
                      {project.status}
                    </Badge>
                    {project.featured && <Badge variant="primary">Featured</Badge>}
                    {project.popular && <Badge variant="outline">Popular</Badge>}
                  </div>

                  <div>
                    <Text size="sm" color="muted">Starting from</Text>
                    <Heading level={2} size="xl" color="primary">
                      {formatPrice(project.price.starting)}
                    </Heading>
                    <Text size="sm" color="muted">
                      ₹{project.price.pricePerSqft.toLocaleString()}/sq ft
                    </Text>
                  </div>
                </div>
              </Card>

              {/* Configuration Selection */}
              <Card>
                <Heading level={3} size="md" className="mb-4">Choose Configuration</Heading>
                
                <SegmentedControl
                  options={project.configurations.map(config => ({
                    value: config.type,
                    label: config.type
                  }))}
                  value={selectedConfig}
                  onChange={setSelectedConfig}
                  className="mb-4"
                />

                {selectedConfiguration && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Text size="sm" color="muted">Area</Text>
                        <Text weight="semibold">{formatArea(selectedConfiguration.area)}</Text>
                      </div>
                      <div>
                        <Text size="sm" color="muted">Price</Text>
                        <Text weight="semibold">{formatPrice(selectedConfiguration.price)}</Text>
                      </div>
                    </div>
                    <div>
                      <Text size="sm" color="muted">Available Units</Text>
                      <Text weight="semibold" color={selectedConfiguration.available > 5 ? "success" : "warning"}>
                        {selectedConfiguration.available} units available
                      </Text>
                    </div>
                  </div>
                )}
              </Card>

              {/* Contact Actions */}
              <Card>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full">
                    Schedule Site Visit
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Request Callback
                  </Button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[var(--color-neutral-200)] text-center">
                  <Text size="sm" color="muted">
                    Interested? Get personalized assistance
                  </Text>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Related Properties */}
        {relatedProjects.length > 0 && (
          <PopularSection
            title={`More Properties in ${project.location.city}`}
            subtitle="Similar properties you might be interested in"
            projects={relatedProjects}
            viewAllLink={`/buyers?city=${project.location.city}`}
          />
        )}
      </Container>
  );
}

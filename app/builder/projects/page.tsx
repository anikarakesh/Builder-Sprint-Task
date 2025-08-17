"use client";

import { useRouter } from "next/navigation";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { ProjectsTable } from "../../../components/builder/ProjectsTable";
import { useProjects } from "../../../lib/hooks/useProjects";

export default function BuilderProjectsPage() {
  const { projects, loading, error } = useProjects();
  const router = useRouter();

  const handleEditProject = (projectId: string) => {
    router.push(`/builder/projects/${projectId}`);
  };

  const handleViewProject = (projectId: string) => {
    // Open in new tab to view as buyer would see it
    window.open(`/buyers/${projectId}`, '_blank');
  };

  if (error) {
    return (
      <Container>
        <Section className="py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Projects</h1>
            <p className="text-[--color-neutral-600]">{error}</p>
          </div>
        </Section>
      </Container>
    );
  }

  return (
    <Container>
      <Section className="py-8">
        <ProjectsTable
          projects={projects}
          loading={loading}
          onEdit={handleEditProject}
          onView={handleViewProject}
        />
      </Section>
    </Container>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { Heading, Text } from "../../../components/primitives/Typography";
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                    <line x1="15" y1="15" x2="9" y2="9"/>
                    <line x1="9" y1="15" x2="15" y2="9"/>
                  </svg>
                </div>
                
                <Heading level={1} className="text-4xl font-black text-slate-900 mb-6">
                  Projects Unavailable
                </Heading>
                
                <Text size="lg" className="text-slate-600 font-medium mb-8 leading-relaxed">
                  We're unable to load your project listings at the moment. 
                  Please try refreshing the page or contact support if the issue persists.
                </Text>
                
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8">
                  <Text size="sm" className="text-red-700 font-medium">
                    Error: {error}
                  </Text>
                </div>
                
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Reload Projects
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Luxury Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-purple-300/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-purple-300/20 via-blue-300/10 to-transparent rounded-full blur-3xl animate-float-slow [animation-delay:4s]"></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"></div>
          <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-float-particle [animation-delay:2s]"></div>
        </div>

        <Container>
          <div className="relative z-10">
            {/* Premium Header */}
            <div className="text-center">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg mb-8">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Project Management</Text>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>

              <Heading level={1} className="text-5xl md:text-6xl font-black leading-tight max-w-4xl mx-auto mb-8">
                <span className="block text-slate-900 mb-2">Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">Property Portfolio</span>
              </Heading>
              
              <Text size="xl" className="text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                Manage, edit, and track all your property listings in one comprehensive 
                dashboard designed for modern builders and developers.
              </Text>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { value: projects.length.toString(), label: "Total Projects", icon: "🏠" },
                  { value: projects.filter(p => p.status === "active").length.toString(), label: "Active", icon: "✅" },
                  { value: projects.filter(p => p.featured).length.toString(), label: "Featured", icon: "⭐" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Projects Table Section */}
      <section className="py-16 relative">
        <Container>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
              <ProjectsTable
                projects={projects}
                loading={loading}
                onEdit={handleEditProject}
                onView={handleViewProject}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

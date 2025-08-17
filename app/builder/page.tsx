"use client";

import { useMemo } from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { Heading, Text } from "../../components/primitives/Typography";
import { SnapshotCard, ViewsCard, LeadsCard, CTRCard, ConversionCard } from "../../components/builder/SnapshotCard";
import { LineChart, TrendChart } from "../../components/builder/LineChart";
import { PropertyCard } from "../../components/buyer/PropertyCard";
import { useProjects } from "../../lib/hooks/useProjects";

export default function BuilderDashboardPage() {
  const { projects, loading, error } = useProjects();

  // Calculate overall metrics
  const overallMetrics = useMemo(() => {
    if (projects.length === 0) {
      return {
        totalViews: 0,
        totalLeads: 0,
        avgCTR: 0,
        conversionRate: 0,
        activeProjects: 0
      };
    }

    const totalViews = projects.reduce((sum, p) => sum + p.metrics.views, 0);
    const totalLeads = projects.reduce((sum, p) => sum + p.metrics.leads, 0);
    const totalInquiries = projects.reduce((sum, p) => sum + p.metrics.inquiries, 0);
    const avgCTR = projects.reduce((sum, p) => sum + p.metrics.ctr, 0) / projects.length;
    const conversionRate = totalViews > 0 ? (totalLeads / totalViews) * 100 : 0;
    const activeProjects = projects.filter(p => p.status === "active").length;

    return {
      totalViews,
      totalLeads,
      avgCTR,
      conversionRate,
      activeProjects,
      totalInquiries
    };
  }, [projects]);

  // Generate trend data (mock data for demo)
  const trendData = useMemo(() => {
    const dates = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return date.toISOString().split('T')[0];
    });

    return {
      views: dates.map((date, i) => ({
        date,
        value: Math.floor(Math.random() * 200) + 100 + (i * 5)
      })),
      leads: dates.map((date, i) => ({
        date,
        value: Math.floor(Math.random() * 20) + 10 + (i * 0.5)
      }))
    };
  }, []);

  // Recent projects (last 3 added)
  const recentProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  }, [projects]);

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
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                
                <Heading level={1} className="text-4xl font-black text-slate-900 mb-6">
                  Dashboard Error
                </Heading>
                
                <Text size="lg" className="text-slate-600 font-medium mb-8 leading-relaxed">
                  We're unable to load your dashboard data at the moment. 
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
                  Reload Dashboard
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
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="space-y-6">
                {/* Premium badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Builder Portal</Text>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                </div>

                <Heading level={1} className="text-5xl md:text-6xl font-black leading-tight max-w-4xl">
                  <span className="block text-slate-900 mb-2">Builder</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">Dashboard</span>
                </Heading>
                
                <Text size="xl" className="text-slate-600 max-w-3xl font-light leading-relaxed">
                  Monitor your property performance, track analytics, and manage your listings 
                  with our comprehensive builder dashboard designed for success.
                </Text>
              </div>
              
              {/* Premium Last Updated */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-xl">
                  <Text size="sm" className="text-slate-500 font-medium uppercase tracking-wider mb-2">Last Updated</Text>
                  <Text className="text-slate-900 font-black text-xl">{new Date().toLocaleDateString()}</Text>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Text size="sm" className="text-green-600 font-medium">Live Data</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium KPI Cards */}
      <section className="py-16 relative">
        <Container>
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-sm mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">Performance Metrics</Text>
              </div>
              <Heading level={2} className="text-4xl font-black text-slate-900 mb-4">
                Key Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Indicators</span>
              </Heading>
              <Text size="lg" className="text-slate-600 font-light max-w-2xl mx-auto">
                Track your property performance with real-time analytics and insights
              </Text>
            </div>

            {/* Premium KPI Cards Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <ViewsCard 
                    views={overallMetrics.totalViews}
                    change={{
                      value: 12.5,
                      direction: "up",
                      period: "last month"
                    }}
                  />
                  <LeadsCard 
                    leads={overallMetrics.totalLeads}
                    change={{
                      value: 8.2,
                      direction: "up", 
                      period: "last month"
                    }}
                  />
                  <CTRCard 
                    ctr={overallMetrics.avgCTR}
                    change={{
                      value: -2.1,
                      direction: "down",
                      period: "last month"
                    }}
                  />
                  <ConversionCard 
                    conversion={overallMetrics.conversionRate}
                    change={{
                      value: 5.7,
                      direction: "up",
                      period: "last month"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Charts Section */}
      <section className="py-16 relative bg-gradient-to-r from-slate-50/50 via-white to-purple-50/30">
        <Container>
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-sm mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                </svg>
                <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">Analytics Trends</Text>
              </div>
              <Heading level={2} className="text-4xl font-black text-slate-900 mb-4">
                Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Trends</span>
              </Heading>
              <Text size="lg" className="text-slate-600 font-light max-w-2xl mx-auto">
                Visualize your property performance over time with detailed trend analysis
              </Text>
            </div>

            {/* Premium Charts Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Views Trend */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                      <TrendChart
                        data={trendData.views}
                        title="Daily Views (Last 30 Days)"
                        color="var(--color-primary-base)"
                      />
                    </div>
                  </div>
                  
                  {/* Leads Trend */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                      <TrendChart
                        data={trendData.leads}
                        title="Daily Leads (Last 30 Days)"
                        color="var(--color-blue-600)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Quick Stats */}
      <section className="py-16 relative">
        <Container>
          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-sm mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M9 11H1l6-6 6 6h-8z"/>
                  <path d="M9 20h4"/>
                  <path d="M12 17v3"/>
                </svg>
                <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">Quick Overview</Text>
              </div>
              <Heading level={2} className="text-4xl font-black text-slate-900 mb-4">
                Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
              </Heading>
            </div>

            {/* Premium Stats Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <SnapshotCard
                    title="Active Projects"
                    value={overallMetrics.activeProjects}
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      </svg>
                    }
                  />
                  <SnapshotCard
                    title="Total Inquiries"
                    value={overallMetrics.totalInquiries || 0}
                    variant="success"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    }
                  />
                  <SnapshotCard
                    title="Avg. Response Time"
                    value="2.5 hrs"
                    variant="warning"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Recent Projects */}
      {recentProjects.length > 0 && (
        <section className="py-16 relative bg-gradient-to-r from-slate-50/50 via-white to-blue-50/30">
          <Container>
            <div className="relative">
              {/* Section Header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-full shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <Text size="sm" className="text-slate-600 font-semibold uppercase tracking-wider">Latest Projects</Text>
                  </div>
                  <Heading level={2} className="text-4xl font-black text-slate-900 leading-tight">
                    Recently Added <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
                  </Heading>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <a
                    href="/builder/projects"
                    className="relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl border border-white/50 hover:border-slate-200 transform hover:scale-105 transition-all duration-300"
                  >
                    View All Projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Premium Projects Grid */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentProjects.map((project) => (
                      <PropertyCard
                        key={project.id}
                        project={project}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Premium Quick Actions */}
      <section className="py-16 relative">
        <Container>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/30 shadow-2xl text-center">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 via-purple-100/30 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 via-blue-100/30 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-8">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                  <Text size="sm" className="text-slate-700 font-bold uppercase tracking-wider">Quick Actions</Text>
                </div>
                
                <Heading level={3} className="text-4xl font-black text-slate-900 mb-6">
                  Manage Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Portfolio</span>
                </Heading>
                
                <Text size="lg" className="text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Take control of your property listings, engage with potential buyers, and maximize your reach 
                  with our comprehensive management tools designed for builders.
                </Text>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <a
                      href="/builder/projects"
                      className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9,22 9,12 15,12 15,22"/>
                      </svg>
                      Manage Projects
                    </a>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <a
                      href="/builder/projects"
                      className="relative inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 hover:text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl border border-white/50 hover:border-slate-200 transform hover:scale-105 transition-all duration-300 min-w-[200px]"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                      </svg>
                      Add New Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

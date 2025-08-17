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
      <Container>
        <Section className="py-12">
          <div className="text-center">
            <Heading level={1} size="2xl" className="mb-4 text-red-600">
              Error Loading Dashboard
            </Heading>
            <Text color="muted">{error}</Text>
          </div>
        </Section>
      </Container>
    );
  }

  return (
    <Container>
      {/* Header */}
      <Section className="py-8 border-b border-[var(--color-neutral-200)]">
        <div className="flex items-center justify-between">
          <div>
            <Heading level={1} size="2xl">Builder Dashboard</Heading>
            <Text color="muted" className="mt-2">
              Track your property performance and manage listings
            </Text>
          </div>
          <div className="text-right">
            <Text size="sm" color="muted">Last updated</Text>
            <Text weight="semibold">{new Date().toLocaleDateString()}</Text>
          </div>
        </div>
      </Section>

      {/* KPI Cards */}
      <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </Section>

      {/* Charts Section */}
      <Section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Views Trend */}
          <TrendChart
            data={trendData.views}
            title="Daily Views (Last 30 Days)"
            color="var(--color-primary-base)"
          />
          
          {/* Leads Trend */}
          <TrendChart
            data={trendData.leads}
            title="Daily Leads (Last 30 Days)"
            color="var(--color-blue-600)"
          />
        </div>
      </Section>

      {/* Quick Stats */}
      <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </Section>

      {/* Recent Projects */}
      {recentProjects.length > 0 && (
        <Section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <Heading level={2} size="xl">Recently Added Projects</Heading>
            <a
              href="/builder/projects"
              className="text-[var(--color-primary-base)] hover:underline text-sm font-medium"
            >
              View all projects →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <PropertyCard
                key={project.id}
                project={project}
                variant="compact"
              />
            ))}
          </div>
        </Section>
      )}

      {/* Quick Actions */}
      <Section className="py-8">
        <div className="bg-[var(--color-bg-weak-50)] rounded-[var(--radius-lg)] p-8 text-center">
          <Heading level={3} size="lg" className="mb-4">
            Quick Actions
          </Heading>
          <Text color="muted" className="mb-6 max-w-2xl mx-auto">
            Manage your properties and engage with potential buyers to maximize your reach.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/builder/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary-base)] text-black rounded-[var(--radius-md)] hover:bg-[var(--color-primary-darker)] transition-colors"
            >
              Manage Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </a>
            <a
              href="/builder/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] rounded-[var(--radius-md)] hover:bg-[var(--color-neutral-50)] transition-colors"
            >
              Add New Project
            </a>
          </div>
        </div>
      </Section>
    </Container>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { LandingPageViewerModal } from './components/LandingPageViewerModal';
import { ContactModal } from './components/ContactModal';
import { ToolsTicker } from './components/ToolsTicker';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import {
  FUNNEL_PROJECTS,
  WEBSITE_PROJECTS,
  ALL_PROJECTS
} from './data/projects';
import { Project, ProjectCategory } from './types';

export default function App() {
  const [viewerProject, setViewerProject] = useState<Project | null>(null);
  const [viewerList, setViewerList] = useState<Project[]>(FUNNEL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactService, setContactService] = useState('Sales Funnel');
  const [activeTab, setActiveTab] = useState<'All' | 'Funnels' | 'Websites'>('All');

  const handleOpenContact = (defaultService?: string) => {
    if (defaultService) {
      setContactService(defaultService);
    }
    setIsContactOpen(true);
  };

  const handleRequestSimilar = (title: string, category: string) => {
    setContactService(category);
    setIsContactOpen(true);
  };

  const handleFilterCategory = (category: ProjectCategory) => {
    if (category === 'Funnels' || category === 'Websites') {
      setActiveTab(category);
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      handleOpenContact('AIGC Video');
    }
  };

  const handleViewWork = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans relative selection:bg-sky-500/30 selection:text-sky-200">
      {/* Navigation Top Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContact('Custom AI Roadmap')}
          onViewWork={handleViewWork}
        />

        {/* Selected Work Section */}
        <section id="portfolio" className="py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            {/* Header Lockup */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-3 tracking-tight">
                  Selected work
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-xl">
                  Sales-ready concept demonstrations that show how each solution can work in practice.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-full self-start md:self-auto">
                {(['All', 'Funnels', 'Websites'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-sky-400 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* When Tab is 'All' or 'Funnels': Show Funnels */}
            {(activeTab === 'All' || activeTab === 'Funnels') && (
              <div className="mb-20">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    Funnels
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {FUNNEL_PROJECTS.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={(proj) => {
                        setViewerList(FUNNEL_PROJECTS);
                        setViewerProject(proj);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* When Tab is 'All' or 'Websites': Show Websites */}
            {(activeTab === 'All' || activeTab === 'Websites') && (
              <div className="mb-12">
                <div className="mb-8">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    Websites
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {WEBSITE_PROJECTS.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={(proj) => {
                        setViewerList(WEBSITE_PROJECTS);
                        setViewerProject(proj);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tools Ribbon */}
        <ToolsTicker />

        {/* About Section */}
        <AboutSection onOpenContact={() => handleOpenContact('AI Strategy Session')} />

        {/* Services Section */}
        <ServicesSection
          onFilterCategory={handleFilterCategory}
          onOpenContact={(svc) => handleOpenContact(svc)}
        />

        {/* CTA Section */}
        <CtaSection onOpenContact={() => handleOpenContact('New Project Consultation')} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact('General Inquiry')} />

      {/* Full Landing Page & Website Image Viewer Lightbox (Direct view, no form) */}
      <LandingPageViewerModal
        project={viewerProject}
        projectsList={viewerList}
        onClose={() => setViewerProject(null)}
        onSelectProject={(proj) => setViewerProject(proj)}
      />

      {/* Project Case Study Modal (for any supplementary modal needs) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilar}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={contactService}
      />
    </div>
  );
}

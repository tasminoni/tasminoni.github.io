import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import HeroSection from './sections/HeroSection';
import TechServices from './sections/TechServices';
import HowIWork from './sections/HowIWork';
import CodeRules from './sections/CodeRules';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceMatrix from './sections/ExperienceMatrix';
import FAQSection from './sections/FAQSection';
import ContactFooter from './sections/ContactFooter';
import ProjectModal from './components/ProjectModal';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenCertificate = (image, title) => {
    setSelectedCertificate({ image, title });
  };

  return (
    <div className="min-h-screen bg-void text-paper selection:bg-crimson selection:text-white relative">
      {/* Theme-Matched Cyberpunk Initial Page Loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <PageLoader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Global Navbar */}
      <Navbar />

      {/* Main Single-Page App Content */}
      <main>
        {/* [ 01 / 08 ] Hero Section */}
        <HeroSection />

        {/* [ 02 / 08 ] Capabilities & Tech Stack */}
        <TechServices />

        {/* [ 03 / 08 ] How I Work: The Sprint Protocol */}
        <HowIWork />

        {/* [ 04 / 08 ] The Code Rules: Manifesto */}
        <CodeRules />

        {/* [ 05 / 08 ] Featured Projects & Client Work */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* [ 06 / 08 ] Career & Education Matrix */}
        <ExperienceMatrix onOpenCertificate={handleOpenCertificate} />

        {/* [ 07 / 08 ] FAQ Accordion */}
        <FAQSection />

        {/* [ 08 / 08 ] Massive CTA & Contact Footer */}
        <ContactFooter />
      </main>

      {/* System Inspection Modal for Deep Architecture Review */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Certificate Preview Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCertificate)}
        image={selectedCertificate?.image}
        title={selectedCertificate?.title}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}


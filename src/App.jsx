import React, { lazy, Suspense, useState } from 'react';
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
import AboutSection from './sections/AboutSection';

const SceneBackground = lazy(() => import('./components/SceneBackground'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenCertificate = (image, title) => {
    setSelectedCertificate({ image, title });
  };

  return (
    <div className="min-h-screen bg-void text-paper selection:bg-crimson selection:text-white relative">
      {!isLoading && <Suspense fallback={null}><SceneBackground /></Suspense>}
      {isLoading && <PageLoader onLoadingComplete={() => setIsLoading(false)} />}

      <div id="home-content" tabIndex={-1} data-intro-pending={isLoading}>
      {/* Global Navbar */}
      <Navbar ready={!isLoading} />

      {/* Main Single-Page App Content */}
      <main>
        {/* [ 01 / 09 ] Hero Section */}
        <HeroSection ready={!isLoading} />

        {/* [ 02 / 09 ] About Me */}
        <AboutSection />

        {/* [ 03 / 09 ] Capabilities & Tech Stack */}
        <TechServices />

        {/* [ 04 / 09 ] How I Work: The Sprint Protocol */}
        <HowIWork />

        {/* [ 05 / 09 ] The Code Rules: Manifesto */}
        <CodeRules />

        {/* [ 06 / 09 ] Featured Projects & Client Work */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* [ 07 / 09 ] Career & Education Matrix */}
        <ExperienceMatrix onOpenCertificate={handleOpenCertificate} />

        {/* [ 08 / 09 ] FAQ Accordion */}
        <FAQSection />

        {/* [ 09 / 09 ] Massive CTA & Contact Footer */}
        <ContactFooter />
      </main>
      </div>

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

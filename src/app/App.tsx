import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Services } from '@/app/components/Services';
import { Projects } from '@/app/components/Projects';
import { Process } from '@/app/components/Process';
import { TestimonialsSlider } from '@/app/components/TestimonialsSlider';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { PrivacyPolicy } from '@/app/pages/PrivacyPolicy';
import { TermsOfService } from '@/app/pages/TermsOfService';
import { Sitemap } from '@/app/pages/Sitemap';
import {
  ResidentialConstruction,
  CommercialConstruction,
  RenovationRestoration,
  GeneralContracting,
  InteriorFinishing,
  SiteDevelopment,
} from '@/app/pages/ServicePages';

type PageType =
  | 'home'
  | 'privacy'
  | 'terms'
  | 'sitemap'
  | 'residential'
  | 'commercial'
  | 'renovation'
  | 'contracting'
  | 'interior'
  | 'sitedevelopment';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    handleNavigate('home');
  };

  const handleContact = () => {
    handleNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Render different pages based on currentPage
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBack} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBack} />;
  }

  if (currentPage === 'sitemap') {
    return <Sitemap onBack={handleBack} onNavigate={handleNavigate} />;
  }

  if (currentPage === 'residential') {
    return <ResidentialConstruction onBack={handleBack} onContact={handleContact} />;
  }

  if (currentPage === 'commercial') {
    return <CommercialConstruction onBack={handleBack} onContact={handleContact} />;
  }

  if (currentPage === 'renovation') {
    return <RenovationRestoration onBack={handleBack} onContact={handleContact} />;
  }

  if (currentPage === 'contracting') {
    return <GeneralContracting onBack={handleBack} onContact={handleContact} />;
  }

  if (currentPage === 'interior') {
    return <InteriorFinishing onBack={handleBack} onContact={handleContact} />;
  }

  if (currentPage === 'sitedevelopment') {
    return <SiteDevelopment onBack={handleBack} onContact={handleContact} />;
  }

  // Home page
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <TestimonialsSlider />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
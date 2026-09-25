import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import CompareModal from './components/CompareModal';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './pages/HomePage';
import SpecificationsPage from './pages/SpecificationsPage';
import DeploymentCorridorsPage from './pages/DeploymentCorridorsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('specifications') || hash === '#specs') {
        return 'specifications';
      }
      if (hash.includes('corridors') || hash.includes('deployment')) {
        return 'corridors';
      }
    }
    return 'home';
  });

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [preselectedModel, setPreselectedModel] = useState(null);

  // Sync with browser hash change (back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('specifications') || hash === '#specs') {
        setCurrentPage('specifications');
      } else if (hash.includes('corridors') || hash.includes('deployment')) {
        setCurrentPage('corridors');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenQuote = (modelId = null) => {
    setPreselectedModel(modelId);
    setIsQuoteOpen(true);
  };

  const handleNavigate = (page, sectionId = null) => {
    if (page === 'specifications') {
      setCurrentPage('specifications');
      window.location.hash = '#specifications';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'corridors' || page === 'deployment') {
      setCurrentPage('corridors');
      window.location.hash = '#deployment-corridors';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (window.location.hash.includes('specifications') || window.location.hash.includes('corridor') || window.location.hash.includes('deployment')) {
        history.pushState(null, '', window.location.pathname);
      }

      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-on-surface flex flex-col selection:bg-primary-container selection:text-white font-sans pb-16 lg:pb-0">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={(modelId) => handleOpenQuote(modelId)}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'specifications' ? (
          <SpecificationsPage
            onOpenQuote={(modelId) => handleOpenQuote(modelId)}
            onNavigateToHome={(sectionId) => handleNavigate('home', sectionId)}
          />
        ) : currentPage === 'corridors' ? (
          <DeploymentCorridorsPage
            onOpenQuote={(modelId) => handleOpenQuote(modelId)}
            onNavigateToHome={(sectionId) => handleNavigate('home', sectionId)}
          />
        ) : (
          <HomePage
            onOpenQuote={(modelId) => handleOpenQuote(modelId)}
            onOpenCompare={() => setIsCompareOpen(true)}
            onNavigateToSpecs={() => handleNavigate('specifications')}
            onNavigateToCorridors={() => handleNavigate('corridors')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Mobile-Centric Fixed Bottom Navigation Bar */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedModel={preselectedModel}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onSelectQuote={(modelId) => handleOpenQuote(modelId)}
      />
    </div>
  );
}

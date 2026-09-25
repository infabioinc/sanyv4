import React, { useState, useEffect } from 'react';
import { Truck, Cpu, FileSpreadsheet, Calculator, MessageSquare, Phone, MessageCircle } from 'lucide-react';

export default function MobileBottomNav({ currentPage = 'home', onNavigate, onOpenQuote }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [showQuickContact, setShowQuickContact] = useState(false);

  useEffect(() => {
    if (currentPage === 'specifications') {
      setActiveSection('specs');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = [
        { id: 'hero', name: 'hero' },
        { id: 'models', name: 'models' },
        { id: 'performance', name: 'tech' },
        { id: 'tco-calculator', name: 'tco' }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (id) => {
    setShowQuickContact(false);

    if (id === 'specs-tabbed' || id === 'specifications' || id === 'specs') {
      if (onNavigate) {
        onNavigate('specifications');
        return;
      }
    }

    if (id === 'corridors' || id === 'deployment' || id === 'deployment-corridors') {
      if (onNavigate) {
        onNavigate('corridors');
        return;
      }
    }

    if (onNavigate) {
      onNavigate('home', id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Floating Quick Action Contacts Popover */}
      {showQuickContact && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden animate-fadeIn"
          onClick={() => setShowQuickContact(false)}
        >
          <div 
            className="fixed bottom-20 right-4 z-50 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 space-y-3 w-64 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100 flex justify-between items-center">
              <span>Instant Fleet Support</span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            </div>

            <a
              href="tel:+918001234567"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-600 font-semibold text-xs transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold">Call EV Specialist</div>
                <div className="text-[10px] text-slate-500">Toll Free: 1800-SANY-EV</div>
              </div>
            </a>

            <a
              href="https://wa.me/918001234567?text=Hi%2C%20I%20am%20interested%20in%20SANY%20Electric%20Trucks%20for%20our%20fleet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-semibold text-xs transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold">WhatsApp Direct</div>
                <div className="text-[10px] text-slate-500">Instant Brochure &amp; Quotes</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Modern Fixed Bottom App-Style Bar */}
      <aside 
        aria-label="Mobile Navigation Bar"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="grid grid-cols-5 h-16 items-center px-1">
          {/* 1. Models */}
          <button
            onClick={() => scrollToSection('models')}
            className={`flex flex-col items-center justify-center h-full w-full py-1.5 transition-all cursor-pointer ${
              activeSection === 'models' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className={`p-1 rounded-md transition-colors ${activeSection === 'models' ? 'bg-blue-50 text-blue-600' : ''}`}>
              <Truck className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Models</span>
          </button>

          {/* 2. Specs */}
          <button
            onClick={() => scrollToSection('specs-tabbed')}
            className={`flex flex-col items-center justify-center h-full w-full py-1.5 transition-all cursor-pointer ${
              activeSection === 'specs' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className={`p-1 rounded-md transition-colors ${activeSection === 'specs' ? 'bg-blue-50 text-blue-600' : ''}`}>
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Specs</span>
          </button>

          {/* 3. Global Network */}
          <button
            onClick={() => scrollToSection('global-presence')}
            className={`flex flex-col items-center justify-center h-full w-full py-1.5 transition-all cursor-pointer ${
              activeSection === 'network' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className={`p-1 rounded-md transition-colors ${activeSection === 'network' ? 'bg-blue-50 text-blue-600' : ''}`}>
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Network</span>
          </button>

          {/* 4. Manufacturing */}
          <button
            onClick={() => scrollToSection('manufacturing')}
            className={`flex flex-col items-center justify-center h-full w-full py-1.5 transition-all cursor-pointer ${
              activeSection === 'plant' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <div className={`p-1 rounded-md transition-colors ${activeSection === 'plant' ? 'bg-blue-50 text-blue-600' : ''}`}>
              <Calculator className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 tracking-tight font-medium">Plant</span>
          </button>

          {/* 5. Quote CTA */}
          <button
            onClick={() => onOpenQuote()}
            className="flex flex-col items-center justify-center h-full w-full py-1 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 bg-sany-red text-white rounded-full flex items-center justify-center shadow-md shadow-blue-600/30 group-active:scale-95 transition-transform">
              <MessageSquare className="w-4 h-4 fill-white" />
            </div>
            <span className="text-[10px] mt-0.5 text-blue-600 font-bold tracking-tight">Quote</span>
          </button>
        </div>
      </aside>
    </>
  );
}

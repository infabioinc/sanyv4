import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Zap, 
  BatteryCharging, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Factory, 
  Calculator, 
  ArrowRight,
  Scale,
  Search
} from 'lucide-react';
import SanyLogo from './SanyLogo';

export default function Navbar({ currentPage = 'home', onNavigate, onOpenQuote, onOpenCompare }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'models' | 'tech' | 'why' | 'network' | null
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const handleNavClick = (id) => {
    setActiveMegaMenu(null);
    setMobileOpen(false);

    if (id === 'specs-tabbed' || id === 'specifications' || id === 'performance') {
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

    if (id === 'technology' || id === 'tech' || id === 'advantage') {
      if (onNavigate) {
        onNavigate('home', 'technology');
        return;
      }
    }

    if (onNavigate) {
      onNavigate('home', id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header 
        className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 transition-all shadow-xs"
        onMouseLeave={handleMouseLeave}
      >
        {/* ========================================================================= */}
        {/* TIER 1: TOP BRAND & UTILITY BAR (White background matching Volvo reference)*/}
        {/* ========================================================================= */}
        <div className="w-full bg-white px-6 sm:px-12 md:px-16 lg:px-20 border-b border-slate-100">
          
          {/* Top Country Selector */}
          <div className="flex justify-end pt-1.5 pb-0.5 text-[11px] font-medium text-slate-500">
            <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
              <Globe className="w-3 h-3 text-slate-400" />
              <span>India</span>
            </div>
          </div>

          {/* Main Brand Row: Logo (Left) + Search & CTA (Right) */}
          <div className="flex items-center justify-between py-2 sm:py-3 gap-4">
            
            {/* SANY Brand Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center text-left focus:outline-none group cursor-pointer shrink-0"
              aria-label="SANY Home"
            >
              <SanyLogo className="h-3.5 sm:h-4 w-auto transition-transform group-hover:scale-105" />
            </button>

            {/* Right: Search Box + Request Quote + Mobile Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              
              {/* Rounded Rectangle Search Bar (Exact Volvo Reference Match) */}
              <div className="flex items-center gap-2 border border-slate-300 rounded-lg px-3.5 py-1.5 text-xs text-slate-800 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 w-44 sm:w-64 transition-all">
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none w-full text-xs font-normal"
                />
              </div>

              {/* Request Quote Button */}
              <button
                onClick={() => onOpenQuote()}
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#252d37] hover:bg-[#12171d] active:bg-[#0b0f14] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
              >
                <span>Request Quote</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-1.5 text-slate-700 hover:text-blue-600 lg:hidden rounded-lg hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIER 2: SUB-NAVIGATION BAR (Light Gray background matching Volvo reference) */}
        {/* ========================================================================= */}
        <div className="w-full bg-[#f2f4f7] border-b border-slate-200 px-6 sm:px-12 md:px-16 lg:px-20 hidden lg:block">
          <nav className="flex items-center gap-8 xl:gap-10 text-xs xl:text-[13px] font-medium text-slate-700">
            
            {/* 1. MODELS */}
            <div 
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('models')}
            >
              <button
                onClick={() => handleNavClick('models')}
                className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer py-0.5 ${
                  currentPage === 'home' && !activeMegaMenu ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                <span>Models</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'models' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* 2. SPECIFICATIONS */}
            <button
              onClick={() => handleNavClick('specifications')}
              className={`py-2.5 transition-colors cursor-pointer ${
                currentPage === 'specifications'
                  ? 'font-bold text-blue-600'
                  : 'hover:text-blue-600'
              }`}
            >
              Specifications
            </button>

            {/* 4. WHY SANY */}
            <div 
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('why')}
            >
              <button
                onClick={() => handleNavClick('why-electric')}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-0.5 ${
                  activeMegaMenu === 'why' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                <span>Why SANY</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'why' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* 5. DEPLOYMENT CORRIDORS (Dedicated Page) */}
            <button
              onClick={() => handleNavClick('corridors')}
              className={`py-2.5 transition-colors cursor-pointer whitespace-nowrap ${
                currentPage === 'corridors'
                  ? 'font-bold text-blue-600'
                  : 'hover:text-blue-600'
              }`}
            >
              Deployment Corridors
            </button>

            {/* 6. NETWORK */}
            <div 
              className="relative py-2.5"
              onMouseEnter={() => handleMouseEnter('network')}
            >
              <button
                onClick={() => handleNavClick('global-presence')}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-0.5 ${
                  activeMegaMenu === 'network' ? 'text-blue-600' : 'hover:text-blue-600'
                }`}
              >
                <span>Network</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'network' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>
            </div>

          </nav>
        </div>

        {/* ========================================================================= */}
        {/* CLEAN, PROFESSIONAL MEGA MENU PANELS */}
        {/* ========================================================================= */}
        
        {/* 1. MODELS MEGA MENU */}
        {activeMegaMenu === 'models' && (
          <div 
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50"
            onMouseEnter={() => handleMouseEnter('models')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-7">
              <div className="grid grid-cols-12 gap-5 items-stretch">
                
                {/* SANY 5565E */}
                <div 
                  onClick={() => handleNavClick('sany-5565e')}
                  className="col-span-3 p-4 bg-slate-900 text-white border border-blue-500/40 hover:border-blue-400 transition-all cursor-pointer group flex flex-col justify-between rounded-lg"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Long Range Flagship</span>
                      <span className="text-xs font-extrabold text-white">55T GCW</span>
                    </div>
                    <h4 className="text-base font-bold text-white uppercase group-hover:text-blue-400 transition-colors">
                      SANY 5565E Long Range
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 mb-3">
                      480 kW • 462 kWh • 315 km Certified Range
                    </p>
                    <div className="h-36 w-full flex items-center justify-center bg-slate-950 border border-blue-500/30 p-1 overflow-hidden rounded">
                      <img 
                        src="/images/sany-5565e-highway.jpg" 
                        alt="SANY 5565E" 
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400 pt-3 flex items-center gap-1">
                    <span>View 5565E Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* SANY 5550E */}
                <div 
                  onClick={() => handleNavClick('sany-5550e')}
                  className="col-span-3 p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group flex flex-col justify-between rounded-lg"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Flagship 500 HP</span>
                      <span className="text-xs font-extrabold text-slate-900">55T GCW</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                      SANY 5550E Heavy 
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      500 HP • 376 kWh • 2,800 Nm • 55–60 Min Charge
                    </p>
                    <div className="h-36 w-full flex items-center justify-center bg-white border border-slate-100 p-1 overflow-hidden rounded">
                      <img 
                        src="/images/sany-5550e-facility.jpg" 
                        alt="SANY 5550E" 
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.src = "/images/why-sany-electric-hero.jpg"; }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 pt-3 flex items-center gap-1">
                    <span>View 5550E Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* SANY 5538E */}
                <div 
                  onClick={() => handleNavClick('sany-5538e')}
                  className="col-span-3 p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group flex flex-col justify-between rounded-lg"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Fast DC Charging</span>
                      <span className="text-xs font-extrabold text-slate-900">55T GCW</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                      SANY 5538E Standard
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      380 HP • 282 kWh • 55–60 Min DC Charge
                    </p>
                    <div className="h-36 w-full flex items-center justify-center bg-white border border-slate-100 p-1 overflow-hidden rounded">
                      <img 
                        src="/images/sany-5538e-highway.jpg" 
                        alt="SANY 5538E" 
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.src = "/images/why-sany-electric-hero.jpg"; }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 pt-3 flex items-center gap-1">
                    <span>View 5538E Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Quick Model Navigation Links */}
                <div className="col-span-3 p-4 bg-white border border-slate-200 flex flex-col justify-between space-y-3 rounded-lg">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Fleet Tools
                    </span>
                    <h4 className="text-base font-bold text-slate-900 uppercase mb-3">
                      Compare & Select
                    </h4>
                    <div className="space-y-2 text-xs">
                      <button
                        onClick={() => handleNavClick('specs-tabbed')}
                        className="w-full text-left p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 font-bold text-slate-800 hover:text-blue-600 flex justify-between items-center transition-colors cursor-pointer"
                      >
                        <span>Specifications Matrix</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                      {onOpenCompare && (
                        <button
                          onClick={() => {
                            setActiveMegaMenu(null);
                            onOpenCompare();
                          }}
                          className="w-full text-left p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 font-bold text-slate-800 hover:text-blue-600 flex justify-between items-center transition-colors cursor-pointer"
                        >
                          <span>Compare 5550E vs 5538E</span>
                          <Scale className="w-3.5 h-3.5 text-blue-600" />
                        </button>
                      )}
                      <button
                        onClick={() => handleNavClick('tco-calculator')}
                        className="w-full text-left p-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 font-bold text-slate-800 hover:text-blue-600 flex justify-between items-center transition-colors cursor-pointer"
                      >
                        <span>Calculate Fleet TCO Savings</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveMegaMenu(null);
                      onOpenQuote();
                    }}
                    className="w-full bg-sany-red hover:bg-sany-red-hover text-white text-xs font-bold uppercase tracking-wider py-2.5 text-center transition-colors"
                  >
                    Request Fleet Quote
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. TECHNOLOGY MEGA MENU */}
        {/* 3. WHY SANY MEGA MENU */}
        {activeMegaMenu === 'why' && (
          <div 
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50"
            onMouseEnter={() => handleMouseEnter('why')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-7">
              <div className="grid grid-cols-3 gap-6">
                
                <div 
                  onClick={() => handleNavClick('why-electric')}
                  className="p-5 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <h4 className="text-sm font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                    Planetary Transition
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    138 tonnes annual CO₂ reduction and 52,500 L annual diesel savings per vehicle.
                  </p>
                  <span className="text-xs font-bold text-blue-600 mt-3 inline-flex items-center gap-1">
                    <span>Explore Transition Impact</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <div 
                  onClick={() => handleNavClick('advantage')}
                  className="p-5 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <h4 className="text-sm font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                    The SANY Advantage
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Benchmark metric verification comparing SANY EV vs Diesel & Generic EV trucks.
                  </p>
                  <span className="text-xs font-bold text-blue-600 mt-3 inline-flex items-center gap-1">
                    <span>View Benchmark Matrix</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <div 
                  onClick={() => handleNavClick('cases')}
                  className="p-5 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <h4 className="text-sm font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                    Real-World Deployments
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Operational data from 350+ automated port haulers and extreme iron mining fleets.
                  </p>
                  <span className="text-xs font-bold text-blue-600 mt-3 inline-flex items-center gap-1">
                    <span>View Case Studies</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 4. NETWORK MEGA MENU */}
        {activeMegaMenu === 'network' && (
          <div 
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl z-50"
            onMouseEnter={() => handleMouseEnter('network')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-7">
              <div className="grid grid-cols-3 gap-6">
                
                <div 
                  onClick={() => handleNavClick('manufacturing')}
                  className="p-5 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Factory className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                      Chakan Plant, Pune
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dedicated heavy commercial electric truck manufacturing and test track facility in India.
                  </p>
                </div>

                <div 
                  onClick={() => handleNavClick('global-presence')}
                  className="p-5 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                      Global Footprint
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    World's largest population of 45,000+ EV trucks deployed across 30+ countries.
                  </p>
                </div>

                <div 
                  onClick={() => handleNavClick('tco-calculator')}
                  className="p-5 bg-slate-50 border border-slate-200 hover:border-blue-500 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors">
                      Fleet TCO Calculator
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Interactive operational cost and diesel fuel savings calculator over 5 years.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

      </header>

      {/* ========================================================================= */}
      {/* RICH TOUCH-OPTIMIZED MOBILE MENU DRAWER */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn" 
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-5/6 max-w-sm h-full bg-white shadow-2xl z-50 p-5 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                <SanyLogo className="h-4 w-auto" />
                <button 
                  onClick={() => setMobileOpen(false)} 
                  className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Contact Bar for Mobile */}
              <div className="grid grid-cols-2 gap-2 mb-4 p-2 bg-slate-50 border border-slate-200 rounded-lg">
                <a
                  href="tel:+918001234567"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-white border border-slate-200 text-slate-800 rounded text-xs font-bold shadow-xs active:bg-slate-100"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Call OEM Hub</span>
                </a>
                <a
                  href="https://wa.me/918001234567?text=Hi%20SANY%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20SANY%20Electric%20Trucks."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-sany-red text-white rounded text-xs font-bold shadow-xs active:bg-blue-700"
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Navigation Links Accordion */}
              <div className="space-y-1">
                {/* 1. Models Accordion */}
                <div className="border-b border-slate-100 pb-1">
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === 'models' ? null : 'models')}
                    className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-blue-600">●</span>
                      <span>EV Truck Lineup</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === 'models' ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>
                  {mobileAccordion === 'models' && (
                    <div className="bg-slate-50 p-2.5 rounded-lg space-y-2 mb-2 text-xs border border-slate-200/80 animate-fadeIn">
                      <button 
                        onClick={() => handleNavClick('sany-5565e')}
                        className="w-full text-left p-2.5 bg-slate-900 border border-blue-500/40 rounded font-medium text-white flex justify-between items-center shadow-xs"
                      >
                        <div>
                          <div className="font-bold text-white">SANY 5565E Long Range</div>
                          <div className="text-[11px] text-blue-400 font-semibold">480 kW • 462 kWh • 315 km Range</div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                      </button>
                      <button 
                        onClick={() => handleNavClick('sany-5550e')}
                        className="w-full text-left p-2.5 bg-white border border-slate-200 rounded font-medium text-slate-800 flex justify-between items-center shadow-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900">SANY 5550E Flagship</div>
                          <div className="text-[11px] text-blue-600 font-semibold">500 HP • 376 kWh • 55–60 Min Charge</div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                      <button 
                        onClick={() => handleNavClick('sany-5538e')}
                        className="w-full text-left p-2.5 bg-white border border-slate-200 rounded font-medium text-slate-800 flex justify-between items-center shadow-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900">SANY 5538E Standard</div>
                          <div className="text-[11px] text-slate-600 font-semibold">380 HP • 282 kWh • 55–60 Min DC</div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. Direct Links */}
                <button
                  onClick={() => handleNavClick('specs-tabbed')}
                  className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm border-b border-slate-100"
                >
                  <span>Technical Specifications Matrix</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => handleNavClick('performance')}
                  className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm border-b border-slate-100"
                >
                  <span>Performance &amp; Fast Charging</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => handleNavClick('tco-calculator')}
                  className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm border-b border-slate-100"
                >
                  <span>Fleet TCO &amp; ROI Calculator</span>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">62% Savings</span>
                </button>

                <button
                  onClick={() => handleNavClick('why-electric')}
                  className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm border-b border-slate-100"
                >
                  <span>Why SANY Goes Electric</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => handleNavClick('corridors')}
                  className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm border-b border-slate-100 text-blue-600"
                >
                  <span>Deployment Corridors</span>
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                </button>

                <button
                  onClick={() => handleNavClick('global-presence')}
                  className="w-full text-left py-2.5 px-2 flex items-center justify-between font-bold text-slate-800 text-sm border-b border-slate-100"
                >
                  <span>Global Footprint (50+ Countries)</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              {onOpenCompare && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCompare();
                  }}
                  className="w-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider py-3 text-center rounded flex items-center justify-center gap-2"
                >
                  <Scale className="w-4 h-4 text-blue-600" />
                  <span>Compare 5550E vs 5538E</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider py-3.5 text-center shadow-md rounded flex items-center justify-center gap-2"
              >
                <span>Request Fleet Quote Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

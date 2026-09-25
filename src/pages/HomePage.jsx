import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Zap,
  Battery,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Truck,
  Gauge,
  Cpu,
  Layers,
  Award,
  Settings,
  Building2,
  PhoneCall,
  Download,
  Eye,
  SlidersHorizontal,
  Calculator,
  Play,
  X
} from 'lucide-react';
import { TRUCKS, COMPARISON_DATA, SANY_INTELLIGENT_PILLARS } from '../data/trucksData';
import RangeSimulator from '../components/RangeSimulator';
import SanyShowcase from '../components/SanyShowcase';
import TcoCalculator from '../components/TcoCalculator';
import TechHotspots from '../components/TechHotspots';
import GlobalPresenceSection from '../components/GlobalPresenceSection';

export default function HomePage({ onOpenQuote, onOpenCompare, onNavigateToSpecs, onNavigateToCorridors }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modelFilter, setModelFilter] = useState('all');
  const [selectedSpotlightModel, setSelectedSpotlightModel] = useState('sany-5550e');
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const heroVideoRef = useRef(null);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isPillarPaused, setIsPillarPaused] = useState(false);

  useEffect(() => {
    if (isPillarPaused) return;
    const timer = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPillarPaused]);

  const showcaseTrucks = [
    {
      id: '5565e',
      num: '01',
      name: 'SANY 5565E',
      tag: 'LONG RANGE TRANSPORT',
      subtitle: 'Intercity Industrial Freight Flagship',
      desc: 'Engineered for heavy industrial transport and long-haul intercity freight routes with maximum operational uptime.',
      image: '/images/sany-5565e-coastal.jpg',
      alt: 'SANY 5565E Long Range Electric Truck',
      specsPills: ['55T Gross Combination', '480 kW Peak Power', 'Sub-Zero Thermal Resilience']
    },
    {
      id: '5550e',
      num: '02',
      name: 'SANY 5550E',
      tag: 'HEAVY DUTY TRANSPORT',
      subtitle: 'High-Torque Port & Industrial Hauler',
      desc: 'Built for high-volume commercial logistics, port terminal haulage, and extreme industrial duty cycles.',
      image: '/images/sany-5550e-facility.jpg',
      alt: 'SANY 5550E Heavy Duty Electric Truck',
      specsPills: ['55T Heavy Combination', '2,800 Nm Instant Torque', '55-60 Min Dual-Gun DC']
    },
    {
      id: '5538e',
      num: '03',
      name: 'SANY 5538E',
      tag: 'REGIONAL & FLEET LOGISTICS',
      subtitle: 'High-Turnaround Multi-Shift Tractor',
      desc: 'Optimized for regional fleet distribution routes and continuous multi-shift turnaround operations.',
      image: '/images/sany-5538e-highway.jpg',
      alt: 'SANY 5538E Regional Logistics Truck',
      specsPills: ['55T Fleet Distribution', 'High Energy Efficiency', 'Chakan Factory Tested']
    }
  ];

  const nextTruck = () => {
    setShowcaseIndex((prev) => (prev + 1) % showcaseTrucks.length);
  };

  const prevTruck = () => {
    setShowcaseIndex((prev) => (prev - 1 + showcaseTrucks.length) % showcaseTrucks.length);
  };

  const toggleHeroVideo = () => {
    if (heroVideoRef.current) {
      if (heroVideoRef.current.paused) {
        heroVideoRef.current.play();
        setIsHeroVideoPlaying(true);
      } else {
        heroVideoRef.current.pause();
        setIsHeroVideoPlaying(false);
      }
    }
  };

  const heroSlides = [
    {
      id: 0,
      eyebrow: 'COMMERCIAL ELECTRIC HEAVY HAULERS',
      titleLine1: 'Smarter Power,',
      titleHighlight: 'Stronger Performance.',
      description: 'Commercial heavy-duty electric trucks engineered for extreme payloads, sub-zero cold start, and lowest total cost of ownership across global routes.',
      image: '/images/sany-5565e-highway.jpg',
      exploreTarget: 'models'
    },
    {
      id: 1,
      eyebrow: 'SANY 5550E & 5538E SERIES',
      titleLine1: 'Powering The',
      titleHighlight: 'Next Mile.',
      description: 'India\'s only dedicated OEM electric heavy-duty hauler line manufactured at our state-of-the-art Chakan, Pune facility.',
      image: '/images/why-sany-electric-hero.jpg',
      exploreTarget: 'sany-5550e'
    },
    {
      id: 2,
      eyebrow: 'HEAVY INDUSTRIAL ELECTRIFICATION',
      titleLine1: 'Zero Emissions,',
      titleHighlight: 'Maximum Uptime.',
      description: 'Built from the ground up for continuous industrial operations, heavy freight reliability, and maximum daily productivity.',
      image: '/images/sany-5565e-coastal.jpg',
      exploreTarget: 'specs-tabbed'
    }
  ];


  const categories = ['All', 'Heavy Duty', 'Special Purpose'];

  const filteredTrucks = activeCategory === 'All'
    ? TRUCKS
    : TRUCKS.filter((t) => t.category === activeCategory);

  const currentTruck = TRUCKS.find((t) => t.id === selectedSpotlightModel) || TRUCKS[0];

  const angleViews = [
    {
      id: 'highway',
      label: 'Highway In-Action',
      src: '/images/hero-highway.jpg',
      caption: 'SANY 5550E 55-Tonne Electric Combination on High-Speed Freight Corridor'
    },
    {
      id: 'front',
      label: 'Direct Front View',
      src: '/images/sany-daylight-front.png',
      caption: 'High-Roof Aerodynamic Cab with SANY Front Grille & Matrix LED Array'
    },
    {
      id: 'side',
      label: 'Side Profile & Container',
      src: '/images/sany-daylight-side.png',
      caption: 'Full Combination: 4000mm Wheelbase, High-Capacity Battery Pack & SANY Container'
    },
    {
      id: 'rear',
      label: 'Rear Container Doors',
      src: '/images/sany-daylight-rear.png',
      caption: 'Port Terminal Rear Profile with SANY Mudguards & Tri-Axle Bogie Assembly'
    }
  ];

  const scrollToSection = (id) => {
    if (id === 'specs-tabbed' || id === 'specifications') {
      if (onNavigateToSpecs) {
        onNavigateToSpecs();
        return;
      }
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-800 antialiased">
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Full-Height 100vh with Stats Bar docked at the very bottom) */}
      {/* ========================================================================= */}
      <section id="hero" className="relative h-[calc(100vh-113px)] min-h-[600px] flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Continuous Auto-Playing Cinematic Video Background (poster keeps it premium before load) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-sany-ink">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-highway.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source
              src="/images/hero-sany.mp4"
              type="video/mp4"
            />
            <source
              src="/images/Semi-truck_accelerates_down_highway_202608271145.mp4"
              type="video/mp4"
            />
          </video>
          {/* Cinematic gradient scrim — depth + text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-sany-ink/85 via-sany-ink/10 to-sany-ink/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sany-ink/70 via-transparent to-transparent"></div>
        </div>

        {/* Floating Circular Video Pause/Play Control (Exact Volvo Reference Match) */}
        <button
          onClick={toggleHeroVideo}
          className="absolute bottom-20 sm:bottom-24 right-6 sm:right-12 z-30 w-11 h-11 rounded-full bg-slate-950/85 hover:bg-slate-900 border border-white/25 text-white flex items-center justify-center transition-all shadow-xl cursor-pointer group"
          title={isHeroVideoPlaying ? "Pause Video" : "Play Video"}
          aria-label={isHeroVideoPlaying ? "Pause Video" : "Play Video"}
        >
          {isHeroVideoPlaying ? (
            <span className="text-xs font-black tracking-tighter">❚❚</span>
          ) : (
            <Play className="w-4 h-4 fill-white ml-0.5" />
          )}
        </button>

        {/* Restrained cinematic headline — bottom-left, lets the film breathe */}
        <div className="relative z-20 w-full flex-1 flex items-end">
          <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20 pb-10 sm:pb-14">
            <div className="max-w-2xl">
              <span className="eyebrow text-white/90">
                <span className="w-6 h-px bg-sany-red"></span>
                Commercial Electric Heavy Haulers
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
                Smarter power.<br />Stronger performance.
              </h1>
              <p className="mt-5 max-w-xl text-sm sm:text-base text-white/75 leading-relaxed">
                Heavy-duty electric trucks engineered for extreme payloads and the lowest total cost of ownership — built for the next mile of Indian freight.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection('models')}
                  className="btn-red px-6 py-3 text-sm cursor-pointer"
                >
                  Explore models
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenQuote && onOpenQuote()}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded border border-white/35 text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Request a quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SANY GLOBAL MILESTONES PROOF BAR (Full-Width, Minimal Clean Design) */}
        <div className="relative z-20 w-full bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-xs py-3 sm:py-3.5 shrink-0">
          <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              
              {/* Metric 1 */}
              <div>
                <div className="text-lg sm:text-xl font-display font-bold text-[#252d37] tracking-tight">
                  Global No. 1
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">
                  Heavy EV Manufacturer
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="text-lg sm:text-xl font-display font-bold text-slate-900 tracking-tight">
                  45,000+
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">
                  EV Trucks Delivered
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="text-lg sm:text-xl font-display font-bold text-[#252d37] tracking-tight">
                  Two Variants
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">
                  Dedicated 55T Lineup
                </div>
              </div>

              {/* Metric 4 */}
              <div>
                <div className="text-lg sm:text-xl font-display font-bold text-slate-900 tracking-tight">
                  Chakan, Pune
                </div>
                <div className="text-xs font-medium text-slate-600 mt-0.5">
                  Manufacturing Plant
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive "Watch Film" High-Definition Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
            <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E60012] animate-pulse"></span>
                  <h3 className="text-white text-sm sm:text-base font-bold tracking-wide">
                    SANY Heavy-Duty Electric Trucks — Commercial Road Run
                  </h3>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                  src="/images/Semi-truck_accelerates_down_highway_202608271145.mp4"
                >
                  Your browser does not support video playback.
                </video>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* ========================================================================= */}
      {/* 2. EXPLORE OUR TRUCKS (Exact Volvo Reference Grid with Studio Cutouts)     */}
      {/* ========================================================================= */}
      <section id="models" className="w-full bg-white pt-24 sm:pt-28 pb-2 border-b border-slate-200 scroll-mt-20 overflow-hidden">
        {/* Intro — minimal, left-aligned (Volvo electric range) */}
        <div className="max-w-3xl px-6 sm:px-12 md:px-16 lg:px-20">
          <span className="eyebrow"><span className="w-6 h-px bg-sany-red"></span>The Electric Range</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-sany-ink tracking-tight leading-[1.05]">
            Our electric truck range
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            We're here to make your shift to electric as smooth as possible — from choosing the right 55-tonne hauler for your duty cycle to charging, range and uptime. Our team will be your single point of contact.
          </p>
        </div>

        {/* Alternating editorial model blocks */}
        <div className="mt-16 sm:mt-20">
          {[
            { id: '5538e', name: 'SANY 5538E', tag: 'High-Turnaround Multi-Shift Tractor', desc: 'Optimised for regional fleet distribution, continuous multi-shift turnaround and the lowest per-kilometre operating cost.', image: '/images/sany-hero-mountain.jpg' },
            { id: '5550e', name: 'SANY 5550E', tag: 'High-Torque Port & Industrial Hauler', desc: 'Built for high-volume commercial logistics, port terminal haulage and extreme industrial duty cycles with 2,800 Nm instant torque.', image: '/images/sany-hero-yard.jpg' },
            { id: '5565e', name: 'SANY 5565E', tag: 'Intercity Industrial Freight Flagship', desc: 'Engineered for heavy industrial transport and long-haul intercity routes with maximum uptime and sub-zero thermal resilience.', image: '/images/sany-hero-bridge.jpg' },
          ].map((m, i) => (
            <div key={m.id} className="grid grid-cols-1 lg:grid-cols-2 items-stretch border-t border-slate-100 first:border-t-0">
              <div className={`relative min-h-[300px] sm:min-h-[440px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={m.image} alt={m.name} className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              <div className={`flex items-center px-6 sm:px-12 md:px-16 lg:px-20 py-12 lg:py-0 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="max-w-md">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-sany-ink tracking-tight leading-[1.05]">{m.name}</h3>
                  <div className="mt-2 text-sm font-semibold text-slate-800">{m.tag}</div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  <button onClick={() => onNavigateToSpecs && onNavigateToSpecs()} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sany-ink uppercase tracking-wider group cursor-pointer">
                    <span>Discover {m.name}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 TECHNOLOGY: PROPRIETARY EV ARCHITECTURE                               */}
      {/* ========================================================================= */}
      <section id="technology" className="w-full pt-0 pb-0 bg-white border-b border-slate-200 scroll-mt-20 overflow-hidden relative">
        <span id="tech" className="sr-only"></span>
        <span id="advantage" className="sr-only"></span>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: text, generous whitespace (Volvo editorial) */}
          <div className="flex items-center px-6 sm:px-12 md:px-16 lg:px-20 py-8 lg:py-10">
            <div className="max-w-xl lg:ml-auto lg:pr-14 space-y-5">
              <span className="eyebrow"><span className="w-6 h-px bg-sany-red"></span>Proprietary EV Architecture</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sany-ink tracking-tight leading-[1.05]">
                Engineered for 55-Tonne Duty Cycles
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every kilowatt, component, and thermal loop is built from the ground up for extreme Indian operating conditions, continuous multi-shift operations, and maximum daily productivity.
              </p>
              <button
                onClick={() => onNavigateToSpecs && onNavigateToSpecs()}
                className="inline-flex items-center gap-2 text-sm font-bold text-sany-ink uppercase tracking-wider group cursor-pointer pt-1"
              >
                <span>Explore Technical Specifications</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          {/* Right: full truck image (never cropped), flush to the top line */}
          <div className="relative w-full overflow-hidden bg-white flex items-center">
            <img src="/images/sany-5565e-coastal.jpg" alt="SANY 5565E heavy-duty electric truck" className="w-full h-auto block" />
          </div>
        </div>

        {/* Subsystem cards — joined edge-to-edge (Volvo Trucks/Services style) */}
        <div className="w-full">

          {/* Interactive Engineering Split Architecture Showcase */}
          {(() => {
            const architecturePillars = [
              {
                id: 'powertrain',
                step: '01',
                icon: Zap,
                eyebrow: 'HIGH-TORQUE PROPULSION',
                title: 'Dual PMSM & 6-Speed AMT',
                desc: '480 kW synchronous drive with 3,000 Nm instant torque for heavy 55T haulage.',
                image: '/images/tech-architecture.jpg',
                metricLabel: 'PEAK TORQUE',
                metricVal: '3,000 Nm',
                color: '#E60012',
                chips: ['480 kW (650 HP)', '25%+ Gradeability', 'Zero RPM Max Torque']
              },
              {
                id: 'battery',
                step: '02',
                icon: Battery,
                eyebrow: 'ENERGY PLATFORM',
                title: 'Liquid-Chilled LFP Cells',
                desc: 'High-density LFP packs with active thermal management from -20°C to 52°C.',
                image: '/images/tech-battery-pack.jpeg',
                metricLabel: 'BATTERY PACK',
                metricVal: 'Up to 462 kWh',
                color: '#E60012',
                chips: ['Multi-Loop Liquid Thermal', '4,000+ Cycles', 'Sub-Zero Preheating']
              },
              {
                id: 'charging',
                step: '03',
                icon: Clock,
                eyebrow: 'DEPOT TURNAROUND',
                title: 'Dual-Gun CCS2 Fast Charge',
                desc: 'Simultaneous dual-gun DC charging in 55–60 mins with 5-level regenerative braking.',
                image: '/images/tech-charging-swap.jpg',
                metricLabel: 'TURNAROUND',
                metricVal: '55–60 Mins',
                color: '#E60012',
                chips: ['Dual-Gun DC Charging', '25% Descent Recovery', 'Dual CCS2 Euro Ports']
              },
              {
                id: 'chassis',
                step: '04',
                icon: Shield,
                eyebrow: 'STRUCTURAL INTEGRITY',
                title: '300mm Reinforced Frame',
                desc: 'Heavy-duty ladder frame with parabolic leaf springs and 360° ADAS vision.',
                image: '/images/tech-chassis-frame.jpg',
                metricLabel: 'STEEL FRAME',
                metricVal: '300×80×15 mm',
                color: '#E60012',
                chips: ['Parabolic Leaf Springs', 'High-Tensile Ladder Frame', '360° Panoramic ADAS']
              }
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {architecturePillars.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onNavigateToSpecs && onNavigateToSpecs()}
                    className="group relative overflow-hidden bg-sany-ink min-h-[400px] sm:min-h-[460px] flex flex-col justify-end cursor-pointer"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover brightness-[0.62] group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sany-ink via-sany-ink/45 to-sany-ink/10" />
                    <div className="relative z-10 p-6 sm:p-8">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-sm font-extrabold text-white/70">{p.step}</span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{p.eyebrow}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-sm text-white/70 mt-2.5 max-w-md leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="mt-6">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:gap-2.5 transition-all">
                          <span>Detailed specs</span>
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CLOSING BAND: TALK TO SANY (Volvo "find a dealer" style) */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[440px] sm:min-h-[540px] flex items-center justify-center overflow-hidden">
        <img src="/images/hero-highway.jpg" alt="SANY heavy-duty electric truck" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sany-ink/70"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <span className="eyebrow justify-center text-white/90"><span className="w-6 h-px bg-sany-red"></span>Talk to SANY</span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
            You're never far from a SANY expert
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
            Get a tailored fleet quotation, book a plant visit at Chakan, or arrange a trial for your duty cycle. Our commercial EV team is your single point of contact.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => onOpenQuote && onOpenQuote()} className="btn-red px-6 py-3 text-sm cursor-pointer">
              Request a quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => onNavigateToSpecs && onNavigateToSpecs()} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded border border-white/35 text-white hover:bg-white/10 transition-colors cursor-pointer">
              View specifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Globe2, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Gauge, 
  Thermometer, 
  Clock, 
  MapPin, 
  Truck,
  TrendingDown,
  Building2,
  FileText
} from 'lucide-react';

export default function DeploymentCorridorsPage({ onOpenQuote, onNavigateToHome }) {
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Deployment Corridors | SANY Heavy Electric Trucks';
    return () => {
      document.title = 'SANY Electric Trucks | Powering The Next Mile';
    };
  }, []);

  const corridors = [
    {
      id: 'europe',
      region: 'EUROPE',
      category: 'europe',
      flag: '🇪🇺',
      corridor: 'Rotterdam – Ruhr Valley Corridor',
      application: 'Intercity Container Freight',
      routeDistance: '450 km Daily Loop',
      ambientTemp: '-15°C to +35°C',
      fleetSize: '120+ Active Trucks',
      dieselSaved: '1.4M Litres / Year',
      uptime: '98.6%',
      chargingMethod: '300 kW Dual-Gun DC (45 min turnaround)',
      desc: 'Zero-emission heavy long-haul combinations operating daily across Germany, Netherlands, and Scandinavian freight corridors connecting maritime deep-sea ports with heavy inland industrial zones.',
      image: '/images/sany-5565e-coastal.jpg',
      stat: '450 km Daily Routes',
      highlights: [
        'Multi-national customs & freight line reliability',
        'Continuous high-speed autobahn cruise at 80 km/h loaded',
        'Direct connection between Maasvlakte II and Ruhr industrial basin'
      ]
    },
    {
      id: 'middle-east',
      region: 'MIDDLE EAST',
      category: 'me',
      flag: '🇦🇪',
      corridor: 'Jebel Ali – GCC Industrial Grid',
      application: 'High-Temperature Port Logistics',
      routeDistance: '380 km Daily Inter-Terminal',
      ambientTemp: 'Up to 52°C Ambient',
      fleetSize: '85+ Active Trucks',
      dieselSaved: '980,000 Litres / Year',
      uptime: '99.1%',
      chargingMethod: 'Dual liquid-chilled DC fast charging',
      desc: 'Proven 50°C+ ambient thermal resilience in UAE port terminal haulage and high-density industrial logistics chains with heavy container loads operating 24 hours a day.',
      image: '/images/sany-5550e-facility.jpg',
      stat: '50°C Certified',
      highlights: [
        'Active liquid cooling prevents battery thermal degradation',
        'High-efficiency heat pump cab insulation for driver comfort',
        'Continuous 3-shift 24/7 round-the-clock drayage turnaround'
      ]
    },
    {
      id: 'south-asia',
      region: 'SOUTH & SE ASIA',
      category: 'asia',
      flag: '🇮🇳',
      corridor: 'Chakan – JNPT Port & Singapore Terminals',
      application: 'Heavy Port & Steel Drayage',
      routeDistance: '320 km Daily Round-Trip',
      ambientTemp: '12°C to 45°C Monsoon & Heat',
      fleetSize: '250+ Active Trucks',
      dieselSaved: '2.8M Litres / Year',
      uptime: '98.9%',
      chargingMethod: 'Chakan Supercharging Depot + Terminal DC',
      desc: 'Built locally at SANY Chakan facility for high-uptime container haulage, cement logistics, and heavy manufacturing corridors traversing the Western Ghats gradient climbs.',
      image: '/images/sany-app-port-container.jpg',
      stat: 'Chakan OEM Hub',
      highlights: [
        'Manufactured at SANY Chakan, Pune facility with local spares',
        'Regenerative braking recovers up to 25% on downhill ghat descents',
        'Heavy 55-tonne combination tested across steel coil transport'
      ]
    },
    {
      id: 'americas',
      region: 'AMERICAS & GLOBAL',
      category: 'americas',
      flag: '🇧🇷',
      corridor: 'Santos Intermodal & Resource Routes',
      application: 'Industrial Bulk & Mining Freight',
      routeDistance: '520 km Intermodal Run',
      ambientTemp: '5°C to 40°C Variable',
      fleetSize: '110+ Active Trucks',
      dieselSaved: '1.9M Litres / Year',
      uptime: '98.4%',
      chargingMethod: 'Dedicated high-megawatt industrial hub',
      desc: 'Heavy industrial tippers and modular haulers engineered for extreme payloads, continuous multi-shift cycles, and lowest total cost of ownership across resource corridors.',
      image: '/images/sany-app-steel-industrial.jpg',
      stat: '55-Tonne Payloads',
      highlights: [
        'High-torque electric drivetrain tackles heavy resource gradients',
        'Heavy-duty reinforced chassis built for unpaved access roads',
        'Zero tailpipe emissions inside enclosed processing facilities'
      ]
    }
  ];

  const filteredCorridors = selectedRegion === 'all'
    ? corridors
    : corridors.filter(c => c.category === selectedRegion);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20 sm:pt-24 pb-20">
      
      {/* ========================================================================= */}
      {/* 1. BREADCRUMB & HEADER BAR                                                */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#f8fafc] border-b border-slate-200 py-3">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <button 
              onClick={() => onNavigateToHome()}
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-semibold text-slate-700 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 font-bold">Deployment Corridors</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#252d37] hover:bg-[#12171d] px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-2xs uppercase tracking-wider"
            >
              <span>Request Route Analysis</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO / PAGE TITLE (Full Width, Moderate Elegant Font Size)             */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 w-full px-6 sm:px-12 md:px-16 lg:px-20">
        <div className="max-w-4xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-bold text-[#252d37] uppercase tracking-widest">
            <Globe2 className="w-3 h-3" />
            <span>GLOBAL FLEET DEPLOYMENT &amp; CASE STUDIES</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
            Proven Across Extreme Commercial Duty Cycles
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 max-w-3xl">
            Explore validated commercial heavy electric routes operating around the globe. From high-throughput European maritime gateways to 50°C+ desert industrial zones, SANY electric trucks deliver continuous uptime, maximum payload capacity, and substantial operating cost reductions.
          </p>
        </div>

        {/* Region Filter Switcher Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-xl w-fit shadow-2xs">
          {[
            { id: 'all', label: 'All Regions' },
            { id: 'europe', label: 'Europe (Rotterdam / Ruhr)' },
            { id: 'me', label: 'Middle East (Jebel Ali / GCC)' },
            { id: 'asia', label: 'South & SE Asia (Chakan / JNPT)' },
            { id: 'americas', label: 'Americas (Santos Intermodal)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedRegion(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedRegion === tab.id
                  ? 'bg-[#252d37] text-white shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORRIDORS DETAILED SHOWCASE LIST – Alternating Image / Content Layout  */}
      {/* ========================================================================= */}
      <section className="w-full px-6 sm:px-12 md:px-16 lg:px-20 space-y-12 sm:space-y-16">
        {filteredCorridors.map((card, idx) => {
          const isImageLeft = idx % 2 === 0;
          return (
            <div
              key={card.id}
              className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>

                {/* ── IMAGE SIDE ── */}
                <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[360px] lg:h-[440px] bg-slate-950 overflow-hidden flex items-center justify-center shrink-0">
                  {/* Ambient blurred backdrop */}
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-45 scale-110 pointer-events-none select-none"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />

                  {/* Foreground uncropped image */}
                  <img
                    src={card.image}
                    alt={card.corridor}
                    className="relative z-0 w-full h-full object-contain object-center select-none"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none z-[1]" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 z-10">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-2xs">
                      <span className="tracking-wider uppercase">{card.region}</span>
                    </div>
                    <div className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-slate-200">
                      <span>{card.application}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-blue-400 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span>Active Route</span>
                  </div>

                  {/* Bottom corridor name */}
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10 text-white">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#252d37] uppercase block drop-shadow-sm">
                      VALIDATED CORRIDOR
                    </span>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white font-display drop-shadow-md">
                      {card.corridor}
                    </h3>
                  </div>

                  {/* Charging method bottom-right */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200">
                    <Zap className="w-3 h-3 text-blue-400" />
                    <span>{card.chargingMethod}</span>
                  </div>
                </div>

                {/* ── CONTENT SIDE ── */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-white lg:w-1/2 space-y-5">

                  {/* Mobile: show application tag */}
                  <div className="inline-block sm:hidden text-xs font-semibold text-[#252d37] uppercase tracking-wider">
                    {card.application}
                  </div>

                  {/* Corridor name repeated on mobile since image overlay may be small */}
                  <div className="lg:hidden space-y-0.5">
                    <span className="text-[9px] font-bold tracking-widest text-[#252d37] uppercase block">VALIDATED CORRIDOR</span>
                    <h3 className="text-base font-bold tracking-tight text-slate-900">{card.corridor}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  {/* 4 Stat Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2.5">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">DAILY LOOP</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">{card.routeDistance}</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">TEMPERATURE</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">{card.ambientTemp}</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">FLEET UPTIME</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-600 block mt-0.5">{card.uptime}</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">DIESEL SAVED</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-600 block mt-0.5">{card.dieselSaved}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-1">
                    <button
                      onClick={() => onOpenQuote(card.corridor)}
                      className="inline-flex items-center gap-1.5 bg-[#252d37] hover:bg-[#12171d] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all shadow-2xs cursor-pointer"
                    >
                      <span>Request Route Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ========================================================================= */}
      {/* 4. BOTTOM ROUTE FEASIBILITY CTA (Full Width)                              */}
      {/* ========================================================================= */}
      <section className="w-full px-6 sm:px-12 md:px-16 lg:px-20 mt-16 sm:mt-20">
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-bold text-[#252d37] uppercase tracking-widest block">
              CUSTOM ROUTE FEASIBILITY SIMULATION
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-display">
              Have a Specific Heavy Haulage Corridor in Mind?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our engineering team simulates real-world battery sizing, payload dynamics, terrain gradients, and optimal depot charger placements for your exact route. Get a verified TCO and payload analysis within 48 hours.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 bg-[#252d37] hover:bg-[#12171d] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-md cursor-pointer"
              >
                <span>Request Corridor Feasibility Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigateToHome()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all cursor-pointer"
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>

          {/* Decorative background glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-sany-red/20 to-transparent pointer-events-none" />
        </div>
      </section>

    </div>
  );
}

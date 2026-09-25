import React from 'react';
import { Check, Leaf, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function WhyElectricFold({ onOpenQuote, onNavigateToSpecs }) {
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
    }
  };

  return (
    <section 
      id="why-electric" 
      className="py-20 bg-white border-b border-slate-200 scroll-mt-20 relative overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP LEFT: SECTION HEADING & LEAD */}
        {/* ========================================================================= */}
        <div className="max-w-3xl">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1.5">
            WHY SANY GOES ELECTRIC
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight uppercase leading-tight">
            MOVING INDUSTRY.{' '}
            <span className="text-blue-600 font-bold">MOVING THE PLANET.</span>
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            SANY is electrifying heavy-duty transport to help businesses move more efficiently while supporting the global transition toward lower-carbon mobility.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. MIDDLE: FULL WIDTH RECTANGULAR VIDEO SHOWCASE (UNCROPPED) */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-none overflow-hidden border border-slate-200 shadow-xl bg-slate-950 aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/why-sany-electric-hero.jpg"
            className="w-full h-full object-contain object-center block"
          >
            <source src="/images/Semi-truck_driving_on_road_202608291009_gwr_video_mvp.mp4" type="video/mp4" />
          </video>
          
          {/* Top Left Floating Tag (Compact Size) */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-900/85 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-md">
            <Zap className="w-3 h-3 text-blue-400 shrink-0" />
            <span>100% Electric Zero-Emission Freight</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BELOW VIDEO: STRATEGIC IMPACT & BENCHMARKS DASHBOARD */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Left Column: Strategic Impact Matrix (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1">
                Strategic Impact Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight">
                BUILT FOR BUSINESS.{' '}
                <span className="text-slate-500 font-semibold block sm:inline">BETTER FOR THE PLANET.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Business Impact */}
              <div className="bg-white border border-slate-200 rounded-none p-4 sm:p-5 shadow-sm">
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>BUSINESS IMPACT</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Lower Operating Costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Peak Fleet Efficiency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Smart CAN-Bus Telematics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Maximized Heavy Duty Uptime</span>
                  </li>
                </ul>
              </div>

              {/* Global Impact */}
              <div className="bg-white border border-slate-200 rounded-none p-4 sm:p-5 shadow-sm">
                <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4" />
                  <span>GLOBAL IMPACT</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Lower Carbon Footprint</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Cleaner Industrial Mobility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Energy Grid Transition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Sustainable Logistics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Performance Benchmarks & CTAs (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-none p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">
                Verified Performance Metrics
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight">
                PROVEN TRANSITION BENCHMARKS
              </h3>
            </div>

            {/* 3 Stats Grid */}
            <div className="bg-white border border-slate-200 rounded-none p-5 shadow-sm">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    138 <span className="text-blue-600 text-base sm:text-lg font-bold">t</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
                    Annual CO₂ reduction
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-3 sm:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    52,500 <span className="text-blue-600 text-base sm:text-lg font-bold">L</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
                    Annual fuel saved
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-3 sm:pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    50 <span className="text-blue-600 text-base sm:text-lg font-bold">min</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-1 leading-snug">
                    Fast charge time
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button 
                onClick={onOpenQuote}
                className="flex-1 bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all shadow-sm flex items-center justify-center gap-2 rounded-none cursor-pointer"
              >
                <span>Request Fleet Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => scrollToSection('specs-tabbed')}
                className="flex-1 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-all shadow-sm rounded-none cursor-pointer text-center"
              >
                View Technical Specs
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

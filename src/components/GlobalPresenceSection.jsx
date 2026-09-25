import React from 'react';
import { 
  Globe2, 
  BatteryCharging, 
  Handshake, 
  Factory, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function GlobalPresenceSection({ onOpenQuote, onNavigateToCorridors }) {
  return (
    <section id="global-presence" className="w-full bg-slate-50 text-slate-900 border-b border-slate-200 scroll-mt-20 overflow-hidden py-12 sm:py-16">
      
      {/* Full-Width Container */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20">
        
        {/* Minimal Header */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-1">
            <span className="text-[11px] font-bold tracking-widest text-[#252d37] uppercase block">
              GLOBAL INFRASTRUCTURE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 font-display">
              Powering Progress Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              30,000+ electric commercial trucks across 50+ countries backed by 24/7 global telematics.
            </p>
          </div>

          {/* Minimal Quick Actions */}
          <div className="flex items-center gap-4 shrink-0">
            {onNavigateToCorridors && (
              <button
                onClick={onNavigateToCorridors}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>Deployment Corridors</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={() => onOpenQuote && onOpenQuote('global')}
              className="inline-flex items-center gap-1.5 bg-[#252d37] hover:bg-[#12171d] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-2xs cursor-pointer"
            >
              <span>Explore Fleet</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Full-Width Panoramic Map Display */}
        <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group">
          
          {/* Subtle Corner Live Telemetry Status */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200 text-[11px] tracking-wide">Live Global Telematics</span>
          </div>

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-slate-300">
            <span className="text-[#252d37] font-bold">50+ REGIONS</span>
            <span className="text-slate-600">•</span>
            <span>1.2B+ KM LOGGED</span>
          </div>

          {/* Panoramic Map Image */}
          <img
            src="/images/global-map-new.jpg"
            alt="SANY Global Operational Fleet Footprint Map"
            className="w-full h-[260px] sm:h-[340px] md:h-[400px] object-cover object-center"
          />
        </div>

        {/* Minimal 4-Pillar Metric Bar across Full Width */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          
          {/* Stat 1 */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-2xs">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
              30,000+
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Electric Trucks
            </div>
            <div className="text-[11px] text-slate-500">
              Commercial fleet in operation
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-2xs">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
              50+
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Countries
            </div>
            <div className="text-[11px] text-slate-500">
              Global operational footprint
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-2xs">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
              400+
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Service Hubs
            </div>
            <div className="text-[11px] text-slate-500">
              Authorized service &amp; parts outlets
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 shadow-2xs">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display tracking-tight">
              25+
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Global Plants
            </div>
            <div className="text-[11px] text-slate-500">
              Including Chakan, Pune Facility
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

import React from 'react';
import { ArrowRight, Zap, Gauge, Truck } from 'lucide-react';

export default function PerformanceFold({ onNavigateToSpecs }) {
  const pillars = [
    {
      id: 'fast-charge',
      title: 'DC Fast Charging',
      stat: '55–60 Min',
      statSub: 'Full Depot Turnaround',
      desc: 'Dual-gun CCS2 DC fast charging replenishes the battery pack rapidly between shifts for continuous daily fleet operations.',
      img: '/images/performance-battery-swap.jpg',
      icon: Zap
    },
    {
      id: 'torque',
      title: 'Instant Axle Torque',
      stat: '2,800 Nm',
      statSub: 'From Zero RPM',
      desc: 'Dual permanent magnet motors deliver instantaneous torque for seamless hill starts under 55-tonne gross payload.',
      img: '/images/sany-torque-power-highway.jpg',
      icon: Gauge
    },
    {
      id: 'payload',
      title: 'GCW Capacity',
      stat: '55 Tonnes',
      statSub: 'Heavy Duty Rating',
      desc: 'High-tensile double reinforced steel frame built specifically for ports, cement, steel, and heavy logistics corridors.',
      img: '/images/sany-load-drivetrain-logistics.jpg',
      icon: Truck
    }
  ];

  return (
    <section id="performance" className="w-full bg-white border-b border-slate-200 scroll-mt-20">
      
      {/* Minimal Full-Width Header */}
      <div className="w-full border-t border-b border-slate-200 px-6 sm:px-12 lg:px-16 py-12 lg:py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              ENGINEERED FOR EXTREME UPTIME
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase font-display">
              PERFORMANCE THAT <span className="text-blue-600">POWERS YOUR FLEET.</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-xl font-normal">
              High-efficiency electric commercial powertrains built for maximum uptime and lowest operating cost.
            </p>
          </div>

          {onNavigateToSpecs && (
            <button
              onClick={onNavigateToSpecs}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-colors cursor-pointer py-1 group shrink-0"
            >
              <span>Explore All Specifications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {/* Minimal 3-Column Full-Width Edge-to-Edge Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.id} className="flex flex-col justify-between bg-white group">
              
              {/* Full-Bleed Clean Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200">
                <img 
                  src={pillar.img} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                
                {/* Floating Clean Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-slate-900/90 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none backdrop-blur-xs border border-white/10 shadow-sm flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
                    <span>{pillar.title}</span>
                  </span>
                </div>
              </div>

              {/* Minimal Text Content */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                    {pillar.stat}
                  </div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">
                    {pillar.statSub}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {onNavigateToSpecs && (
                  <div className="pt-2">
                    <button
                      onClick={onNavigateToSpecs}
                      className="text-xs font-bold text-slate-900 group-hover:text-blue-600 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

import React, { useState } from 'react';
import { ArrowRight, Truck, Zap, CheckCircle2, ShieldCheck, Factory, Anchor, Layers, Mountain, Package } from 'lucide-react';

export default function CaseStudiesSection({ onOpenQuote }) {
  const applications = [
    {
      id: 'port-container',
      category: 'Port Logistics',
      badge: 'PORT & INTERMODAL TERMINALS',
      title: 'Container Freight & Intermodal Port Haulage',
      subtitle: 'Zero-Emission 24/7 Port Logistics with 5-Minute Turnaround',
      image: '/images/sany-app-port-container.jpg',
      icon: Anchor,
      desc: 'SANY 55T electric tractors operate continuously in port freight stations and container terminals. Rapid DC fast charging enables non-stop round-the-clock shift cycles while eliminating harmful diesel emissions in dense port airsheds.',
      stats: [
        { label: 'Cargo Volume Moved', value: '3.2M+ Tonnes', highlight: false },
        { label: 'Fleet Operational Uptime', value: '98.4%', highlight: true },
        { label: 'Turnaround Energy Replenishment', value: '55–60 Min DC Fast Charge', highlight: false },
        { label: 'Tailpipe Emissions Offset', value: '100% Zero Emission', highlight: true }
      ],
      features: [
        '55–60 Minute DC Fast Charging',
        '24/7 Continuous Dual-Shift Port Operations',
        'Full 55-Tonne GCW Articulated Container Semi-Trailer Support'
      ]
    },
    {
      id: 'cement-logistics',
      category: 'Cement & Construction',
      badge: 'CEMENT & BULK MATERIALS',
      title: 'Bagged & Bulk Cement Supply Chain Logistics',
      subtitle: 'Heavy Palletized Cargo & High-Torque Factory Distribution',
      image: '/images/sany-app-cement-logistics.jpg',
      icon: Factory,
      desc: 'Transporting heavy bagged cement and construction supplies from manufacturing kilns directly to regional trade hubs. Instant 2,800 Nm electric torque delivers smooth starts under maximum gross vehicle weight, cutting per-ton operating costs by 45%.',
      stats: [
        { label: 'Gross Combination Weight (GCW)', value: '55,000 kg (55T)', highlight: false },
        { label: 'Operating TCO Reduction', value: '-45% vs Diesel', highlight: true },
        { label: 'Daily Delivery Capacity', value: '440+ km / Day', highlight: false },
        { label: 'Harsh Dust Sealing', value: 'IP69K Protected', highlight: true }
      ],
      features: [
        'High-Payload 4-Axle Side-Wall Semi-Trailer Integration',
        'Dust-Proof & Moisture-Sealed Powertrain Enclosure',
        'Multi-Loop BMS for Heavy Start-Stop Delivery Cycles'
      ]
    },
    {
      id: 'mining-tipper',
      category: 'Mining & Quarry',
      badge: 'MINING & QUARRY OPERATIONS',
      title: 'Extreme Gradient Mining & Overburden Hardox Tipper',
      subtitle: 'Heavy Ore Extraction with Downhill Regenerative Energy Harvesting',
      image: '/images/sany-app-mining-tipper.jpg',
      icon: Mountain,
      desc: 'Engineered for extreme mining haul roads and rugged quarry terrain. Heavy Hardox tipper trailers carry abrasive aggregate and iron ore across steep 30%+ inclines, harvesting up to 35% kinetic energy back into the battery on downhill descent.',
      stats: [
        { label: 'Peak Axle Torque', value: '3,200 Nm', highlight: true },
        { label: 'Downhill Regen Recovery', value: 'Up to 35% Energy Back', highlight: true },
        { label: 'Chassis Tensile Strength', value: '780 MPa Reinforced Frame', highlight: false },
        { label: 'Maximum Gradient Capacity', value: '35% Steep Incline', highlight: false }
      ],
      features: [
        'Planetary Hub Axle Reduction for Steep Incline Traction',
        'Heavy-Duty Hydraulic Tipper PTO Integration',
        'Underbody Armored Battery Casing Shielding'
      ]
    },
    {
      id: 'steel-industrial',
      category: 'Steel & Heavy Cargo',
      badge: 'STEEL MILLS & HEAVY CARGO',
      title: 'Heavy Steel Coil Freight & High-Load Corridors',
      subtitle: 'Concentrated Weight Transportation Across Dedicated Freight Highways',
      image: '/images/sany-app-steel-industrial.jpg',
      icon: Layers,
      desc: 'Designed for concentrated heavy cargo such as rolled steel coils, industrial machinery, and structural beams. SANY’s double-reinforced triple 8mm chassis frame prevents deflection while delivering 440+ km range with full payload.',
      stats: [
        { label: 'Operating Range with Full Load', value: '440+ km (Multi-Shift)', highlight: true },
        { label: 'Heavy Haul Motor Output', value: '480 kW Dual PMSM', highlight: true },
        { label: 'Frame Reinforcement', value: '300x80x15 mm Double Frame', highlight: false },
        { label: 'Driver Safety & ADAS', value: 'FCW + LDW + ESC', highlight: false }
      ],
      features: [
        'Built for Heavy Duty Hauls & High Point-Load Stability',
        'Active Liquid Thermal Cooling Loop for Sustained Highway Speeds',
        'Dual-Gun DC Ultra-Fast Depot Charging'
      ]
    }
  ];

  return (
    <div id="cases" className="scroll-mt-20">
      {/* ========================================================================= */}
      {/* CASE STUDIES & APPLICATIONS HEADER */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 border border-blue-200 bg-blue-50/80 px-3 py-1 rounded text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 bg-sany-red rounded-full animate-pulse"></span>
              <span className="uppercase tracking-wider">Commercial Application Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase mb-3">
              PROVEN ACROSS HEAVY APPLICATIONS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base border-l-2 border-blue-600 pl-4 leading-relaxed">
              Real-world performance data from over 45,000+ SANY heavy-duty electric trucks deployed across ports, cement plants, mining corridors, and steel logistics routes globally.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 DETAILED APPLICATION CASE STUDY CARDS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={app.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  {/* Image Column: 16:9 ratio ensures complete truck & trailer visibility with 0 cropping and 0 black bars */}
                  <div className={`lg:col-span-7 relative w-full aspect-[16/9] overflow-hidden bg-slate-100 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-sany-red text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded shadow-md z-10 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{app.badge}</span>
                    </span>
                    <div className="absolute bottom-3 left-3 sm:bottom-3 sm:left-4 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 text-[10px] sm:text-[11px] font-mono text-white border border-slate-700/80 rounded shadow">
                      <span className="text-blue-400 font-bold">APPLICATION //</span> {app.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 p-5 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                        {app.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                        {app.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {app.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                        {app.desc}
                      </p>
                    </div>

                    {/* 2x2 Key Specs Grid for Sleek Balanced Alignment */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                      {app.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <span className="text-[10px] font-semibold text-slate-500 block uppercase tracking-wide truncate">
                            {stat.label}
                          </span>
                          <span className={`text-xs sm:text-sm font-black block ${stat.highlight ? 'text-blue-600' : 'text-slate-900'}`}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-1.5">
                      {app.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={onOpenQuote}
                      className="w-full bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider py-3 sm:py-3.5 px-5 rounded transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <span>Request Application Data Pack</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TRUSTED TECHNOLOGY ECOSYSTEM & FINAL CTA */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
          {/* Header & Main Call to Action */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-none">
              <span className="w-2 h-2 rounded-full bg-sany-red animate-pulse"></span>
              <span>Accelerate Your Fleet Transition</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-slate-900 leading-tight">
              READY TO START YOUR FLEET <span className="text-[#E60012]">SUCCESS STORY?</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Consult with SANY commercial EV engineers to model route feasibility, charging depot requirements, and customized fleet economics for your transport operations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto bg-sany-red hover:bg-sany-red-hover text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-none transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 group"
              >
                <span>REQUEST FLEET PROPOSAL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-none transition-colors shadow-sm"
              >
                TALK TO AN EV SPECIALIST
              </button>
            </div>
          </div>

          {/* 3 Fleet Transition Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2.5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-none bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono text-sm font-bold">
                01
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Route &amp; TCO Modeling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full telemetry simulation of your specific transport corridors, calculating exact payload capacity and energy ROI.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2.5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-none bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono text-sm font-bold">
                02
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Depot Power Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turnkey high-speed dual-gun DC fast charging architecture deployed directly at your depot.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2.5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-none bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono text-sm font-bold">
                03
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Guaranteed Fleet SLA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24/7 cloud telemetry diagnostics with rapid on-site mobile support units and 98% first-pass spare parts availability.
              </p>
            </div>
          </div>

          {/* Technology Partners */}
          <div className="border-t border-slate-200 pt-12 max-w-5xl mx-auto space-y-6">
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 block">
                Global Engineering &amp; Component Partners
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 p-4 text-center rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="text-lg font-black text-slate-900 tracking-widest">CATL</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">LFP Cell-To-Pack Battery</div>
              </div>

              <div className="bg-white border border-slate-200 p-4 text-center rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="text-lg font-black text-slate-900 tracking-widest">BOSCH</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">E-Axle &amp; Stability Controls</div>
              </div>

              <div className="bg-white border border-slate-200 p-4 text-center rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="text-lg font-black text-slate-900 tracking-widest">SIEMENS</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Megawatt Power Inverters</div>
              </div>

              <div className="bg-white border border-slate-200 p-4 text-center rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="text-lg font-black text-slate-900 tracking-widest">ABB</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Depot DC Charging Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

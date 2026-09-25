import React, { useState } from 'react';
import { Gauge, BatteryCharging, Cog, Ruler, Truck, ArrowRight, Layers, SlidersHorizontal } from 'lucide-react';

export default function DetailedSpecsTabbed({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('performance');

  const tabs = [
    { id: 'performance', label: 'PERFORMANCE', icon: Gauge },
    { id: 'energy', label: 'ENERGY & CHARGING', icon: BatteryCharging },
    { id: 'drivetrain', label: 'DRIVETRAIN', icon: Cog },
    { id: 'dimensions', label: 'DIMENSIONS', icon: Ruler },
    { id: 'chassis', label: 'CHASSIS & CABIN', icon: Truck },
  ];

  const specData = {
    performance: [
      { label: 'GCW (Gross Combination Wt)', sany5565: '55,000 kgs (55T)', sany5550: '55,000 kgs (55T)', sany5538: '55,000 kgs (55T)' },
      { label: 'Maximum Motor Power', sany5565: '480 kW (650 HP)', sany5550: '500 HP (360 kW)', sany5538: '380 HP (360 kW)' },
      { label: 'Maximum Torque', sany5565: '3,000 Nm @ 3,000 rpm', sany5550: '2,800 Nm @ 3,000 rpm', sany5538: '2,800 Nm @ 3,000 rpm' },
      { label: 'Certified Range', sany5565: '315 km (Govt Certified)', sany5550: '350 - 400 km (Operating)', sany5538: '280 - 330 km (Operating)' },
      { label: 'Transmission', sany5565: '6-Speed AMT [ 6F + 1R ]', sany5550: '6-Speed AMT [ 6F + 1R ]', sany5538: '6-Speed AMT [ 6F + 1R ]' },
    ],
    energy: [
      { label: 'Battery Pack Capacity', sany5565: '462 kWh (Ultra Long-Range)', sany5550: '376 kWh (Largest in Class)', sany5538: '282 kWh (Optimized Energy)' },
      { label: 'Cell Chemistry & BMS', sany5565: 'High-Density LFP (Multi-Loop BMS)', sany5550: 'High-Density LFP (Multi-Loop BMS)', sany5538: 'High-Density LFP (Intelligent BMS)' },
      { label: 'Fast Charging (20% to 100%)', sany5565: '55–60 mins (Dual CCS2 DC)', sany5550: '55–60 mins (CCS2 DC Fast Charge)', sany5538: '55–60 mins (CCS2 DC Fast Charge)' },
      { label: 'Fast Charging', sany5565: '55–60 Mins (20-100%)', sany5550: '55–60 Mins (20-100%)', sany5538: '55–60 Mins (20-100%)' },
      { label: 'Energy Regeneration', sany5565: '5-Level Braking Energy Harvesting', sany5550: '5-Level Braking Energy Harvesting', sany5538: '5-Level Braking Energy Harvesting' },
    ],
    drivetrain: [
      { label: 'Motor Architecture', sany5565: 'Liquid-Cooled Synchronous PMSM', sany5550: 'Permanent Magnet Synchronous (PMSM)', sany5538: 'Permanent Magnet Synchronous (PMSM)' },
      { label: 'Continuous Rated Power', sany5565: '480 kW Peak Liquid-Cooled', sany5550: '360 kW Liquid-Cooled Drive', sany5538: '360 kW Liquid-Cooled Drive' },
      { label: 'AMT Gearbox', sany5565: '6-Speed Heavy Automated', sany5550: '6-Speed Intelligent Automated', sany5538: '6-Speed Intelligent Automated' },
      { label: 'Dynamic Stability', sany5565: 'Electronic Stability Control (ESC)', sany5550: 'Electronic Stability Control (ESC)', sany5538: 'Electronic Stability Control (ESC)' },
      { label: 'Thermal Management', sany5565: 'Active Multi-Loop Thermal Loop', sany5550: 'Active Pre-Heating & Cooling Loop', sany5538: 'Active Pre-Heating & Cooling Loop' },
    ],
    dimensions: [
      { label: 'Wheelbase', sany5565: '4,000 mm', sany5550: '4,000 mm', sany5538: '4,000 mm' },
      { label: 'Overall Vehicle Length (L)', sany5565: '6,465 mm', sany5550: '6,465 mm', sany5538: '6,465 mm' },
      { label: 'Overall Vehicle Height (H)', sany5565: '3,715 mm', sany5550: '3,715 mm', sany5538: '3,715 mm' },
      { label: 'Tyre Specification', sany5565: '295 / 90 R 20 Radial Tyres', sany5550: '295 / 90 R 20 Radial Tyres', sany5538: '295 / 90 R 20 Radial Tyres' },
      { label: 'Front & Rear Overhang', sany5565: 'Optimized Heavy Articulation', sany5550: 'Optimized for Heavy Articulation', sany5538: 'Optimized for Heavy Articulation' },
    ],
    chassis: [
      { label: 'Chassis Frame', sany5565: '300x80x15mm Double-Reinforced Frame', sany5550: '300x80x15mm Double-Reinforced (Triple 8mm)', sany5538: '300x80x15mm Double-Reinforced (Triple 8mm)' },
      { label: 'Suspension Assembly', sany5565: 'Front 3 Leaf / Rear 4+3 Leaf', sany5550: 'Front 3 Leaf / Rear 4+3 Leaf Springs', sany5538: 'Front 3 Leaf / Rear 4+3 Leaf Springs' },
      { label: 'Cabin Specification', sany5565: 'High Roof RHD AC Sleeper + ADAS', sany5550: 'High Roof RHD AC Sleeper Cabin', sany5538: 'High Roof RHD AC Sleeper Cabin' },
      { label: 'Driver Ergonomics', sany5565: '4-Way Ergonomic Pneumatic Seat', sany5550: 'Self-Adjusting Back & 4-Way Adjustable Seat', sany5538: 'Self-Adjusting Back & 4-Way Adjustable Seat' },
      { label: 'Active Safety & ADAS', sany5565: '4-Way 360° Cam, FCW & LDW', sany5550: '4-Way 360° Cameras, FCW & LDW', sany5538: '4-Way 360° Cameras, FCW & LDW' },
    ]
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-10 shadow-sm overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1">
            Technical Verification Matrix
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase">
            DETAILED SPECIFICATIONS
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Compare official OEM parameters and commercial engineering benchmarks across SANY 5565E, 5550E, and 5538E.
          </p>
        </div>

        <button
          onClick={() => onOpenQuote()}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 active:text-blue-800 uppercase tracking-wider flex items-center gap-1.5 transition-colors py-1 cursor-pointer"
        >
          <span>Download Technical Data Sheet</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar scroll-smooth border-b border-slate-100">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-sany-red text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {/* Card 1: SANY 5565E Long Range */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-colors shadow-xs">
          <div>
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">LONG RANGE FLAGSHIP</span>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">SANY 5565E</h4>
              </div>
              <div className="w-16 h-12 rounded overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                <img src="/images/sany-5565e-highway.jpg" alt="SANY 5565E" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-slate-200/80 text-xs">
              {specData[activeTab].map((row, idx) => (
                <div key={idx} className="py-2.5 flex justify-between gap-2">
                  <span className="text-slate-600 font-medium">{row.label}</span>
                  <strong className="text-blue-600 text-right font-bold">{row.sany5565}</strong>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenQuote('sany-5565e')}
            className="mt-6 w-full bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors text-center rounded shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Inquire SANY 5565E</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: SANY 5550E */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-xs">
          <div>
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">FLAGSHIP 500 HP</span>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">SANY 5550E</h4>
              </div>
              <div className="w-16 h-12 rounded overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                <img src="/images/sany-daylight-side.png" alt="SANY 5550E" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-slate-200/80 text-xs">
              {specData[activeTab].map((row, idx) => (
                <div key={idx} className="py-2.5 flex justify-between gap-2">
                  <span className="text-slate-600 font-medium">{row.label}</span>
                  <strong className="text-slate-900 text-right font-bold">{row.sany5550}</strong>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenQuote('sany-5550e')}
            className="mt-6 w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors text-center rounded shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Inquire SANY 5550E</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 3: SANY 5538E */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-400 transition-colors shadow-xs">
          <div>
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">STANDARD 380 HP</span>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">SANY 5538E</h4>
              </div>
              <div className="w-16 h-12 rounded overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                <img src="/images/sany-5538e-highway.jpg" alt="SANY 5538E" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-slate-200/80 text-xs">
              {specData[activeTab].map((row, idx) => (
                <div key={idx} className="py-2.5 flex justify-between gap-2">
                  <span className="text-slate-600 font-medium">{row.label}</span>
                  <strong className="text-slate-900 text-right font-bold">{row.sany5538}</strong>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onOpenQuote('sany-5538e')}
            className="mt-6 w-full bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors text-center rounded shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Inquire SANY 5538E</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

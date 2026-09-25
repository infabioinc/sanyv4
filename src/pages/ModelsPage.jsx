import React, { useState } from 'react';
import { Table, Zap, ArrowRight, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import { TRUCKS } from '../data/trucksData';

export default function ModelsPage({ onOpenQuote, onOpenCompare }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedTruck, setExpandedTruck] = useState(null);

  const categories = ['All', 'Long Range', 'Heavy Duty', 'Special Purpose'];

  const filteredTrucks = selectedCategory === 'All'
    ? TRUCKS
    : TRUCKS.filter((t) => t.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page Header */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold block mb-2">
              SANY Zero-Emission Range
            </span>
            <h1 className="font-headline-lg text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
              EV TRUCK RANGE
            </h1>
            <p className="text-on-surface-variant font-body-md mt-2 max-w-xl">
              Engineered for extreme torque, uncompromising payloads, and lowest operating cost across heavy-duty operations.
            </p>
          </div>

          <button
            onClick={onOpenCompare}
            className="bg-surface-container-high hover:bg-primary-container text-white border border-primary/40 font-label-technical text-xs uppercase px-6 py-3.5 rounded font-bold tracking-widest transition-all duration-300 flex items-center gap-2 self-start md:self-auto shadow-[0_0_20px_rgba(0,102,255,0.25)]"
          >
            <Table className="w-4 h-4" />
            COMPARE SPECS MATRIX
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-3 mt-8 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-label-technical text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary-container text-white font-bold shadow-[0_0_20px_rgba(0,102,255,0.5)] border border-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-white hover:border-white/20 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Truck Stack Grid */}
      <section className="space-y-12 mb-20">
        {filteredTrucks.map((truck, idx) => {
          const isExpanded = expandedTruck === truck.id;
          const isOdd = idx % 2 === 1;

          return (
            <div
              key={truck.id}
              className="group relative bg-surface-container-low rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_45px_rgba(0,102,255,0.2)] flex flex-col lg:flex-row"
            >
              {/* Truck Image */}
              <div className={`lg:w-7/12 h-[340px] sm:h-[420px] lg:h-auto relative overflow-hidden bg-black/40 ${isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
                <img
                  src={truck.image}
                  alt={truck.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary-container text-white text-xs font-label-technical uppercase px-4 py-1.5 rounded font-bold tracking-widest shadow-[0_0_20px_rgba(0,102,255,0.6)]">
                    {truck.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent lg:hidden" />
              </div>

              {/* Truck Specs & Details */}
              <div className={`lg:w-5/12 p-8 lg:p-10 flex flex-col justify-between ${isOdd ? 'lg:order-1 lg:border-r border-white/5' : 'lg:order-2 lg:border-l border-white/5'}`}>
                <div>
                  <span className="text-xs font-label-technical text-primary uppercase tracking-widest block mb-1">
                    {truck.category} Application
                  </span>
                  <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-white mb-2">
                    {truck.name}
                  </h2>
                  <p className="text-sm font-body-md text-on-surface-variant mb-6">
                    {truck.tagline}
                  </p>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-container-high/60 border border-white/5 mb-6">
                    <div>
                      <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-0.5">RANGE (FULL PAYLOAD)</span>
                      <span className="font-headline-md text-2xl font-bold text-white">{truck.range}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-0.5">BATTERY PACK</span>
                      <span className="font-headline-md text-2xl font-bold text-white">{truck.battery}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-0.5">MAX GROSS PAYLOAD</span>
                      <span className="font-headline-md text-2xl font-bold text-white">{truck.payload}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-0.5">FAST CHARGE (10-80%)</span>
                      <span className="font-headline-md text-2xl font-bold text-primary">{truck.chargeTime}</span>
                    </div>
                  </div>

                  {/* Expanded Features List */}
                  {isExpanded && (
                    <div className="p-4 rounded-lg bg-surface-container-highest/60 border border-primary/20 mb-6 animate-fadeIn">
                      <h4 className="text-xs font-label-technical text-primary uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        Key Engineering Capabilities:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-on-surface-variant">
                        {truck.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-xs font-mono">
                        <div><span className="text-on-surface-variant">Motor Power:</span> <strong className="text-white">{truck.motorPower}</strong></div>
                        <div><span className="text-on-surface-variant">Max Torque:</span> <strong className="text-primary">{truck.torque}</strong></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setExpandedTruck(isExpanded ? null : truck.id)}
                    className="flex-1 border border-white/20 hover:border-primary text-white font-label-technical text-xs uppercase py-3 rounded text-center transition-colors font-bold tracking-wider"
                  >
                    {isExpanded ? 'Hide Details' : 'View Full Details'}
                  </button>
                  <button
                    onClick={onOpenQuote}
                    className="bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase px-6 py-3 rounded font-bold tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Compare CTA Section */}
      <section className="bg-surface-container-high rounded-2xl p-8 md:p-14 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-container/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold block mb-2">
            Side-by-Side Analysis
          </span>
          <h3 className="font-headline-lg text-2xl md:text-4xl font-extrabold text-white uppercase mb-3">
            FIND THE RIGHT POWER FOR YOUR FLEET
          </h3>
          <p className="text-sm text-on-surface-variant font-body-md">
            Analyze complete technical specifications side-by-side to determine which SANY commercial electric truck meets your operational route demands.
          </p>
        </div>
        <button
          onClick={onOpenCompare}
          className="relative z-10 bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase py-4 px-8 rounded font-bold tracking-widest transition-colors flex items-center gap-2 shadow-[0_0_25px_rgba(0,102,255,0.4)] shrink-0"
        >
          COMPARE ALL MODELS
          <Table className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}

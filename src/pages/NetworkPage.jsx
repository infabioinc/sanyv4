import React, { useState } from 'react';
import { Globe, MapPin, Wrench, ShieldCheck, Headphones, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

export default function NetworkPage({ onOpenQuote }) {
  const [activeRegion, setActiveRegion] = useState('all');

  const regions = [
    {
      id: 'apac',
      name: 'Asia Pacific (APAC)',
      hub: 'Shanghai & Singapore Command Centers',
      deployed: '18,500+ Electric Trucks',
      stations: '420 Megawatt DC Fast Charging Depots',
      engineers: '4,200 Certified Field Techs',
      specialty: 'High-density port automation, metro last-mile corridors, and mining haulage.'
    },
    {
      id: 'europe',
      name: 'Europe & Nordic',
      hub: 'Frankfurt & Stockholm Engineering Centers',
      deployed: '4,800+ Electric Trucks',
      stations: '150 MCS Megawatt Corridors',
      engineers: '1,800 Certified Field Techs',
      specialty: 'Cold-climate Arctic operations, cross-border freight compliance, and zero-emission city logistics.'
    },
    {
      id: 'americas',
      name: 'Americas',
      hub: 'Atlanta & Sao Paulo Service Hubs',
      deployed: '3,200+ Electric Trucks',
      stations: '95 Rapid DC Depot Hubs',
      engineers: '1,400 Certified Field Techs',
      specialty: 'Intermodal drayage, distribution centers, and heavy industrial quarry operations.'
    }
  ];

  const filteredRegions = activeRegion === 'all'
    ? regions
    : regions.filter((r) => r.id === activeRegion);

  return (
    <div className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header */}
      <section className="mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 border border-white/10 bg-surface-container/50 backdrop-blur-md px-4 py-1.5 rounded">
            <Globe className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '12s' }} />
            <span className="font-label-technical text-xs text-primary uppercase tracking-widest font-bold">
              Global Support Infrastructure
            </span>
          </div>
          <h1 className="font-headline-lg text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            GLOBAL PRESENCE & REACH
          </h1>
          <p className="text-on-surface-variant font-body-md text-base md:text-lg leading-relaxed">
            Operating across 85+ countries with dedicated commercial EV technical hubs, 24/7 telemetry monitoring centers, and guaranteed under-24-hour parts dispatch.
          </p>
        </div>
      </section>

      {/* Global Infrastructure Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-surface-container-low p-6 rounded-xl border border-white/10">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest block mb-2">OPERATIONAL REACH</span>
          <div className="font-headline-md text-3xl md:text-4xl font-extrabold text-white mb-1">85+</div>
          <span className="text-xs text-on-surface-variant">Countries Worldwide</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-white/10">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest block mb-2">FIELD ENGINEERS</span>
          <div className="font-headline-md text-3xl md:text-4xl font-extrabold text-white mb-1">8,000+</div>
          <span className="text-xs text-on-surface-variant">Factory Certified</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-white/10">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest block mb-2">PARTS DISPATCH</span>
          <div className="font-headline-md text-3xl md:text-4xl font-extrabold text-primary mb-1">&lt; 24h</div>
          <span className="text-xs text-on-surface-variant">Guaranteed SLA</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-white/10">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest block mb-2">EV KM DRIVEN</span>
          <div className="font-headline-md text-3xl md:text-4xl font-extrabold text-white mb-1">250M+</div>
          <span className="text-xs text-on-surface-variant">Commercial Kilometers</span>
        </div>
      </section>

      {/* Regional Tabs */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8 overflow-x-auto hide-scrollbar pb-2 border-b border-white/10">
          <button
            onClick={() => setActiveRegion('all')}
            className={`font-label-technical text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all ${
              activeRegion === 'all'
                ? 'bg-primary-container text-white font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            All Territories
          </button>
          <button
            onClick={() => setActiveRegion('apac')}
            className={`font-label-technical text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all ${
              activeRegion === 'apac'
                ? 'bg-primary-container text-white font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Asia Pacific
          </button>
          <button
            onClick={() => setActiveRegion('europe')}
            className={`font-label-technical text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all ${
              activeRegion === 'europe'
                ? 'bg-primary-container text-white font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Europe & Nordic
          </button>
          <button
            onClick={() => setActiveRegion('americas')}
            className={`font-label-technical text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all ${
              activeRegion === 'americas'
                ? 'bg-primary-container text-white font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Americas
          </button>
        </div>

        {/* Regional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredRegions.map((region) => (
            <div
              key={region.id}
              className="bg-surface-container-low rounded-2xl p-8 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between blue-glow-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 border border-primary/30 text-primary flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-white uppercase">{region.name}</h3>
                    <span className="text-[11px] font-label-technical text-primary">{region.hub}</span>
                  </div>
                </div>

                <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                  {region.specialty}
                </p>

                <div className="space-y-3 p-4 rounded-xl bg-surface-container-high/60 border border-white/5 text-xs mb-6">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Active Fleet:</span>
                    <strong className="text-white font-mono">{region.deployed}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Fast Depots:</span>
                    <strong className="text-white font-mono">{region.stations}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Certified Engineers:</span>
                    <strong className="text-primary font-mono">{region.engineers}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full bg-surface-container hover:bg-primary-container text-white border border-white/20 hover:border-primary font-label-technical text-xs uppercase py-3 rounded text-center transition-all duration-300 font-semibold tracking-wider"
              >
                Contact Regional Hub
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 24/7 Field Support Banner */}
      <section className="bg-surface-container-high rounded-2xl p-8 md:p-14 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-primary text-xs font-label-technical uppercase font-bold tracking-widest mb-2">
            <Headphones className="w-4 h-4" />
            24/7 Fleet Emergency Dispatch
          </div>
          <h3 className="font-headline-lg text-2xl md:text-3xl font-black text-white uppercase mb-3">
            Immediate Field Service Within 4 Hours
          </h3>
          <p className="text-sm text-on-surface-variant font-body-md">
            Our global mobile maintenance vehicles are equipped with on-site DC mobile fast chargers, diagnostic CAN tools, and OEM replacement modules.
          </p>
        </div>
        <button
          onClick={onOpenQuote}
          className="bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase px-8 py-4 rounded font-bold tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.4)] shrink-0"
        >
          CONNECT WITH TECHNICAL SUPPORT
        </button>
      </section>
    </div>
  );
}

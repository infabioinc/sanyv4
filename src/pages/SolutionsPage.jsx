import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, Server, BatteryCharging, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SolutionsPage({ onOpenQuote, setTab }) {
  const [telemetry, setTelemetry] = useState({
    activeUnits: 12450,
    globalUptime: 99.94,
    powerDispatched: 842.6,
    avgEfficiency: 1.18
  });

  // Simulated live telemetry updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        activeUnits: prev.activeUnits + (Math.random() > 0.6 ? 1 : 0),
        powerDispatched: Number((prev.powerDispatched + 0.05).toFixed(1)),
        globalUptime: Number((99.9 + Math.random() * 0.05).toFixed(2))
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Header Section with Live Status */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/15 border border-primary/40 text-primary text-xs font-label-technical uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Turnkey Fleet Solutions
          </div>
          <h1 className="font-headline-lg text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            SOLUTIONS & SUPPORT
          </h1>
          <p className="text-on-surface-variant font-body-md text-base md:text-lg leading-relaxed mb-8">
            Complete end-to-end electric transition: from ultra-high-power depot megawatt charging stations and infrastructure to real-time predictive CAN-bus telemetry.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setTab('models')}
              className="bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase px-8 py-3.5 rounded font-bold tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.4)]"
            >
              Explore Applications
            </button>
            <button
              onClick={() => setTab('network')}
              className="bg-surface-container-high hover:bg-surface-container-highest border border-white/20 text-white font-label-technical text-xs uppercase px-8 py-3.5 rounded font-bold tracking-widest transition-colors"
            >
              Support Network
            </button>
          </div>
        </div>

        {/* Live Telemetry Panel */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-8 rounded-2xl border border-primary/40 box-glow-blue relative overflow-hidden">
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Activity className="w-5 h-5 text-primary animate-pulse" />
                <span className="font-label-technical text-xs uppercase tracking-widest text-primary font-bold">
                  LIVE CLOUD TELEMETRY
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 font-mono text-[10px] uppercase font-bold border border-blue-500/30">
                SYSTEM OPTIMAL
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <div className="p-4 rounded-xl bg-surface-container-highest/60 border border-white/5">
                <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-1">
                  Global Active Units
                </span>
                <span className="font-headline-md text-2xl font-bold text-white font-mono">
                  {telemetry.activeUnits.toLocaleString()}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-highest/60 border border-white/5">
                <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-1">
                  Fleet Cloud Uptime
                </span>
                <span className="font-headline-md text-2xl font-bold text-primary font-mono">
                  {telemetry.globalUptime}%
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-highest/60 border border-white/5">
                <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-1">
                  MWh Dispatched Today
                </span>
                <span className="font-headline-md text-2xl font-bold text-white font-mono">
                  {telemetry.powerDispatched} <span className="text-xs text-on-surface-variant">MWh</span>
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-highest/60 border border-white/5">
                <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase mb-1">
                  Avg Consumption
                </span>
                <span className="font-headline-md text-2xl font-bold text-white font-mono">
                  {telemetry.avgEfficiency} <span className="text-xs text-on-surface-variant">kWh/km</span>
                </span>
              </div>
            </div>

            <div className="p-3 rounded bg-primary-container/10 border border-primary/20 text-xs font-mono text-primary flex items-center justify-between">
              <span>● Encrypted 5G CAN-bus Stream</span>
              <span>120 ms latency</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of SANY Commercial Solutions */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div className="bg-surface-container-low p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/30 text-primary flex items-center justify-center mb-6">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white mb-2 uppercase">
              Megawatt Depot Charging
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Modular 360 kW - 1.2 MW high-power DC dispensing stations with automated liquid-cooled cables and smart grid peak-shaving.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-label-technical text-primary font-semibold">
            MCS 3.0 Standard Ready →
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/30 text-primary flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white mb-2 uppercase">
              55–60 Minute Fast Charge
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              High-power DC fast charging stations for continuous 24/7 port corridors and mining pit loops without extended downtime.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-label-technical text-primary font-semibold">
            Zero Charge Waiting →
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/30 text-primary flex items-center justify-center mb-6">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white mb-2 uppercase">
              Predictive Telemetry AI
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Real-time thermal cell analytics, brake wear prediction, state-of-health forecasting, and automatic driver eco-coaching.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-label-technical text-primary font-semibold">
            5G Fleet Integration →
          </div>
        </div>

        <div className="bg-surface-container-low p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/30 text-primary flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white mb-2 uppercase">
              8-Year Fleet Warranty
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Comprehensive battery capacity guarantee retaining &gt;80% state of health over 800,000 km, backed by global service hubs.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/10 text-xs font-label-technical text-primary font-semibold">
            Guaranteed TCO Protection →
          </div>
        </div>
      </section>

      {/* Deployment Consultation CTA */}
      <section className="bg-surface-container-high rounded-2xl p-8 md:p-14 border border-white/10 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold block">
            End-to-End Infrastructure Design
          </span>
          <h3 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-white uppercase">
            Let SANY Engineers Design Your EV Depot
          </h3>
          <p className="text-sm text-on-surface-variant font-body-md">
            We evaluate utility grid capacity, transformer sizing, automated charging schedules, and optimal fleet staging for zero operational interruption.
          </p>
          <button
            onClick={onOpenQuote}
            className="bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase px-8 py-4 rounded font-bold tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.4)] inline-flex items-center gap-2"
          >
            REQUEST DEPOT INFRASTRUCTURE STUDY
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { ShieldCheck, Cpu, Battery, Wrench, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { COMPARISON_DATA } from '../data/trucksData';

export default function WhySanyPage({ onOpenQuote, onOpenCompare }) {
  return (
    <div className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page Header */}
      <section className="mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold block mb-2">
            The SANY Engineering Advantage
          </span>
          <h1 className="font-headline-lg text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            WHY SANY ELECTRIC
          </h1>
          <p className="text-on-surface-variant font-body-md text-base md:text-lg leading-relaxed">
            30+ years of heavy industrial machinery leadership engineered directly into dedicated commercial EV powertrains. Not a retrofit — built from the ground up for maximum duty cycle.
          </p>
        </div>
      </section>

      {/* Engineering Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        {/* Large Bento Card: Chassis */}
        <div className="md:col-span-8 bg-surface-container-low rounded-2xl p-8 md:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-colors">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary-container/20 border border-primary/30 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold">
                Structural Integrity
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-white uppercase mb-4">
              Unified High-Tensile Steel Heavy Axle Chassis
            </h3>
            <p className="text-sm text-on-surface-variant font-body-md leading-relaxed max-w-2xl mb-8">
              Built with 780 MPa ultra-high strength alloy steel, reinforced torsional crossmembers, and integrated battery casing forming an ultra-rigid cell-to-chassis structural unit capable of handling 65-tonne mining loads without flex.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">TORSIONAL RIGIDITY</span>
              <span className="font-headline-md text-xl font-bold text-white">+42% <span className="text-xs text-primary font-normal">vs standard</span></span>
            </div>
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">CHASSIS WARRANTY</span>
              <span className="font-headline-md text-xl font-bold text-white">10 <span className="text-xs text-on-surface-variant font-normal">Years</span></span>
            </div>
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">IMPACT SHIELDING</span>
              <span className="font-headline-md text-xl font-bold text-primary">IP69K</span>
            </div>
          </div>
        </div>

        {/* Bento Card: Thermal Battery */}
        <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-8 border border-white/10 flex flex-col justify-between group hover:border-primary/40 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary-container/20 border border-primary/30 text-primary">
                <Battery className="w-6 h-6" />
              </div>
              <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold">
                Thermal Control
              </span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white uppercase mb-3">
              Extreme Climate Active Heating & Cooling
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Maintains optimal 25°C cell core temperatures whether idling at -40°C in Swedish iron mines or climbing 35% grades in +50°C Australian quarries.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-[10px] font-label-technical text-primary uppercase font-bold block mb-1">OPERATIONAL WINDOW</span>
            <span className="font-mono text-lg font-bold text-white">-40°C to +55°C</span>
          </div>
        </div>

        {/* Bento Card: Powertrain */}
        <div className="md:col-span-6 bg-surface-container-low rounded-2xl p-8 border border-white/10 flex flex-col justify-between group hover:border-primary/40 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary-container/20 border border-primary/30 text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold">
                Propulsion Tech
              </span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white uppercase mb-3">
              Dual PMSM Direct Drive (96.5% Efficiency)
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Eliminates mechanical transmission friction with synchronized dual permanent magnet electric motors delivering up to 2,800 Nm instant continuous torque directly to the driven axles.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">ENERGY CONVERSION</span>
              <span className="font-mono text-lg font-bold text-primary">96.5% Eff.</span>
            </div>
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">BRAKE REGEN</span>
              <span className="font-mono text-lg font-bold text-white">Up to 35%</span>
            </div>
          </div>
        </div>

        {/* Bento Card: Global Support */}
        <div className="md:col-span-6 bg-surface-container-low rounded-2xl p-8 border border-white/10 flex flex-col justify-between group hover:border-primary/40 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-primary-container/20 border border-primary/30 text-primary">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold">
                Fleet Lifecycle
              </span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-white uppercase mb-3">
              24/7 Global Field Engineers & Parts Dispatch
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Guaranteed 4-hour technical response time and 99% parts availability across 8,000+ certified service engineers in APAC, Europe, and the Americas.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between">
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">PARTS DISPATCH</span>
              <span className="font-mono text-lg font-bold text-white">&lt; 24 Hours</span>
            </div>
            <div>
              <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">BATTERY WARRANTY</span>
              <span className="font-mono text-lg font-bold text-primary">8 Yrs / 800k km</span>
            </div>
          </div>
        </div>
      </section>

      {/* SANY vs Competitors Benchmark Table */}
      <section className="bg-surface-container-low rounded-2xl p-8 md:p-12 border border-white/10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold block mb-1">
              Technical Verification
            </span>
            <h3 className="font-headline-lg text-2xl md:text-4xl font-extrabold text-white uppercase">
              SANY vs Commercial Industry Standard
            </h3>
          </div>
          <button
            onClick={onOpenQuote}
            className="bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase px-6 py-3 rounded font-bold tracking-wider transition-colors shadow-[0_0_20px_rgba(0,102,255,0.3)]"
          >
            Request Full Specs Pack
          </button>
        </div>

        <div className="border border-white/10 rounded-xl overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[600px]">
            <thead>
              <tr className="bg-surface-container-high text-xs font-label-technical uppercase tracking-wider text-on-surface-variant border-b border-white/10">
                <th className="p-5">Engineering Parameter</th>
                <th className="p-5 text-primary bg-primary-container/10 border-x border-primary/20">SANY Electric Architecture</th>
                <th className="p-5 text-on-surface-variant">Standard Competitor Retrofit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-xs md:text-sm">
              {COMPARISON_DATA.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 font-sans font-medium text-white">{item.metric}</td>
                  <td className="p-5 font-bold text-primary bg-primary-container/5 border-x border-primary/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item.sany}
                  </td>
                  <td className="p-5 text-on-surface-variant">{item.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Action Banner */}
      <div className="text-center bg-surface-container-high/40 p-10 rounded-xl border border-white/5">
        <h4 className="font-headline-md text-2xl font-bold text-white mb-2 uppercase">
          Ready to Calculate Your Fleet's TCO Savings?
        </h4>
        <p className="text-sm text-on-surface-variant max-w-lg mx-auto mb-6">
          Our engineering team provides route-by-route kWh consumption modelling, charger infrastructure plans, and government subsidy filings.
        </p>
        <button
          onClick={onOpenQuote}
          className="bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase px-8 py-4 rounded font-bold tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.4)] inline-flex items-center gap-2"
        >
          SCHEDULE ENGINEERING CONSULTATION
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

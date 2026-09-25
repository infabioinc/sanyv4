import React, { useState } from 'react';
import { CheckCircle2, XCircle, ShieldAlert, Cpu, Wrench, Headset, ArrowRight, Zap, Layers, Sparkles } from 'lucide-react';

export default function SanyAdvantageSection({ onOpenQuote, onOpenCompare }) {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  const comparisonData = [
    {
      metric: 'GCW Load Rating',
      sany: '55,000 kg (Full 55T Heavy Tractor)',
      genericEv: '40,000 - 45,000 kg',
      diesel: '55,000 kg (High Diesel Fuel Cost)',
      highlight: true
    },
    {
      metric: 'Turnaround Replenishment',
      sany: '55–60 Min DC Fast Charge',
      genericEv: '3 - 5 Hours (Slow Charge Only)',
      diesel: '15 - 20 Mins (Diesel Pump)',
      highlight: true
    },
    {
      metric: 'Energy Cost / Operating km',
      sany: '₹4.20 / km (Over 60% Savings)',
      genericEv: '₹6.50 / km (Unoptimized)',
      diesel: '₹28.50+ / km (Diesel Fuel)',
      highlight: true
    },
    {
      metric: 'Predictive Fleet Telematics',
      sany: 'Integrated AI & Real-Time Battery IoT',
      genericEv: 'Basic GPS Tracker',
      diesel: 'Manual Logbooks / Third-Party OBD',
      highlight: false
    },
    {
      metric: 'Extreme Heavy Duty Chassis',
      sany: '300x80x15mm Reinforced (Triple 8mm)',
      genericEv: 'Standard Light Frame (Non-Heavy)',
      diesel: 'Standard Double-Frame',
      highlight: false
    }
  ];

  return (
    <section id="advantage" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6">
          <div>
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1">
              Competitive Metric Verification
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase">
              THE SANY <span className="text-[#E60012]">ADVANTAGE</span>
            </h2>
            <p className="text-slate-600 mt-1.5 text-xs sm:text-sm md:text-base max-w-2xl">
              Engineered for immense torque and uncompromising uptime. Discover why SANY is the definitive choice for heavy-duty industrial electrification.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SANY VS THE COMPETITION (Cards on Mobile, Table on Desktop) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">Benchmark Analysis</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">SANY EV vs The Competition</h3>
            </div>
            <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold rounded border border-blue-200">
              Verified OEM Operational Data
            </span>
          </div>

          {/* Mobile Card-Based Comparison View */}
          <div className="block md:hidden p-3.5 space-y-3 bg-slate-50/50">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs space-y-2">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-1.5 flex justify-between items-center">
                  <span>{row.metric}</span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 bg-blue-50 border border-blue-200 rounded flex items-start gap-2 text-blue-900">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase block">SANY Heavy EV</span>
                      <strong className="font-extrabold">{row.sany}</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-0.5 text-[11px]">
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-600">
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Generic EV</span>
                      <span>{row.genericEv}</span>
                    </div>
                    <div className="p-2 bg-slate-50 border border-slate-200 rounded text-slate-600">
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Diesel Truck</span>
                      <span>{row.diesel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Full Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 text-xs font-semibold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 w-1/4">Parameter</th>
                  <th className="py-4 px-6 text-blue-700 bg-blue-50/50 border-x border-blue-100">SANY Heavy EV</th>
                  <th className="py-4 px-6 text-slate-600">Generic EV Retrofit</th>
                  <th className="py-4 px-6 text-slate-600">Legacy Diesel Truck</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">{row.metric}</td>
                    <td className="py-4 px-6 font-bold text-blue-600 bg-blue-50/30 border-x border-blue-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{row.sany}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-500">{row.genericEv}</td>
                    <td className="py-4 px-6 text-slate-500">{row.diesel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. ZERO COMPROMISE SUPPORT & SERVICE NETWORK */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Global Fleet Support Network
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  Zero Compromise Support
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Downtime is not an option in commercial freight. SANY's predictive telemetry streams real-time diagnostic data to our 24/7 technical command center, ensuring parts and certified engineers are mobilized before disruptions occur.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Headset className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-800">24/7 Dedicated Commercial EV Diagnostic Command</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-800">98% First-Pass Spare Parts Availability Across Hubs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-800">Factory-Trained Mobile Field Technicians &amp; Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-100 rounded-xl p-2 sm:p-3 border border-slate-200 relative overflow-hidden group shadow-md">
                <img
                  src="/images/sany-support-team.jpg"
                  alt="SANY Official Heavy EV Service & Telematics Diagnostic Bay"
                  className="w-full h-60 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 border border-slate-700/80 text-[10px] sm:text-xs text-slate-300 flex justify-between items-center rounded shadow-md gap-2">
                  <span className="truncate"><strong>Service:</strong> SANY Certified Diagnostics</span>
                  <span className="text-blue-400 font-bold shrink-0 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/30 text-[9px] sm:text-xs">98.4% SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


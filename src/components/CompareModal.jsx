import React, { useState } from 'react';
import { X, Check, Table, Zap } from 'lucide-react';
import { TRUCKS } from '../data/trucksData';

export default function CompareModal({ isOpen, onClose, onSelectQuote }) {
  const [selectedMobileModel, setSelectedMobileModel] = useState('both'); // 'sany-5550e' | 'sany-5538e' | 'both'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white border border-slate-300 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
              <Table className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-wide uppercase leading-tight">
                SANY EV TECHNICAL BENCHMARK
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider">
                Side-by-Side Model Comparison (5550E vs 5538E)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto pb-safe">
          {/* Mobile Model Selection Chips */}
          <div className="flex sm:hidden gap-1.5 p-1 bg-slate-100 rounded-lg mb-3">
            <button
              onClick={() => setSelectedMobileModel('both')}
              className={`flex-1 py-1.5 text-xs font-bold rounded ${selectedMobileModel === 'both' ? 'bg-sany-red text-white shadow-xs' : 'text-slate-700'}`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setSelectedMobileModel('sany-5550e')}
              className={`flex-1 py-1.5 text-xs font-bold rounded ${selectedMobileModel === 'sany-5550e' ? 'bg-sany-red text-white shadow-xs' : 'text-slate-700'}`}
            >
              5550E (500 HP)
            </button>
            <button
              onClick={() => setSelectedMobileModel('sany-5538e')}
              className={`flex-1 py-1.5 text-xs font-bold rounded ${selectedMobileModel === 'sany-5538e' ? 'bg-sany-red text-white shadow-xs' : 'text-slate-700'}`}
            >
              5538E (380 HP)
            </button>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[550px] sm:min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 text-[11px] sm:text-xs font-bold uppercase text-slate-600 border-b border-slate-200">
                  <th className="p-3 sm:p-4">SPECIFICATION</th>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <th key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 text-slate-900">
                      <div className="text-sm sm:text-base font-extrabold">{truck.name}</div>
                      <div className="text-[10px] sm:text-[11px] text-blue-600 font-semibold">{truck.badge}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Gross Combination Wt (GCW)</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 font-extrabold text-slate-900">
                      {truck.gcw}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Motor Power (PMSM)</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 font-bold text-blue-600">
                      {truck.motorPower}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Maximum Torque</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 font-bold text-slate-900">
                      {truck.torque}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Battery Capacity</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 font-bold text-blue-600">
                      {truck.battery}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Transmission</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 text-slate-900">
                      {truck.transmission}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Fast Charging (20-100%)</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 text-slate-900">
                      {truck.chargeTime}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">DC Fast Charging</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200 font-bold text-blue-600">
                      {truck.charging}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-slate-600 bg-slate-50/50">Action</td>
                  {TRUCKS.filter(t => selectedMobileModel === 'both' || t.id === selectedMobileModel).map((truck) => (
                    <td key={truck.id} className="p-3 sm:p-4 border-l border-slate-200">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectQuote(truck.id);
                        }}
                        className="w-full bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs uppercase py-2.5 rounded font-bold transition-colors shadow-xs cursor-pointer"
                      >
                        Inquire {truck.badge}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


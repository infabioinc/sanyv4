import React, { useState } from 'react';
import { Gauge, Zap, Mountain, Thermometer, BatteryCharging, ArrowRight } from 'lucide-react';

export default function RangeSimulator({ onOpenQuote }) {
  const [selectedBattery, setSelectedBattery] = useState('462'); // 462, 376, or 282
  const [payloadTonnes, setPayloadTonnes] = useState(35); // 0 to 55 tonnes
  const [terrain, setTerrain] = useState('highway'); // highway, rolling, mining
  const [temp, setTemp] = useState(25); // -20 to 50 C
  const [regenLevel, setRegenLevel] = useState(3); // 1 to 5

  // Calculations
  const baseKwh = Number(selectedBattery) || 462;

  // Consumption factors
  let terrainFactor = 1.0;
  if (terrain === 'rolling') terrainFactor = 1.18;
  if (terrain === 'mining') terrainFactor = 1.45;

  const payloadFactor = 0.75 + (payloadTonnes / 55) * 0.55; // 0.75 (empty) to 1.30 (full 55T)

  let tempFactor = 1.0;
  if (temp < 0) tempFactor = 1.15; // cold penalty
  if (temp > 40) tempFactor = 1.08; // AC heat penalty

  const regenBenefit = (regenLevel * 0.04); // up to 20% back

  const estimatedConsumption = (1.05 * payloadFactor * terrainFactor * tempFactor * (1 - regenBenefit)).toFixed(2);
  const estimatedRange = Math.round(baseKwh / Number(estimatedConsumption));
  const regenEnergyKwh = Math.round(baseKwh * regenBenefit);

  const payloadPresets = [
    { label: '0T Bobtail', val: 0 },
    { label: '25T Standard', val: 25 },
    { label: '55T Max GCW', val: 55 }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 mb-2">
            <Gauge className="w-3.5 h-3.5" />
            <span>Real-World Performance Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Dynamic Route Range &amp; Energy Estimator
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Simulate realistic payload, terrain, and weather variables with SANY's 5-level regenerative braking system.
          </p>
        </div>

        {/* Battery Selection Pills */}
        <div className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto p-1 bg-slate-100 rounded-lg border border-slate-200 gap-1">
          <button
            onClick={() => setSelectedBattery('462')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedBattery === '462'
                ? 'bg-sany-red text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5565E (462 kWh)
          </button>
          <button
            onClick={() => setSelectedBattery('376')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedBattery === '376'
                ? 'bg-sany-red text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5550E (376 kWh)
          </button>
          <button
            onClick={() => setSelectedBattery('282')}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
              selectedBattery === '282'
                ? 'bg-sany-red text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            5538E (282 kWh)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Payload Weight Slider */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>Gross Payload Loaded:</span>
              <span className="text-blue-600 bg-white px-2.5 py-0.5 rounded border border-slate-200 text-xs sm:text-sm font-black">
                {payloadTonnes} Tonnes ({payloadTonnes === 0 ? 'Unladen' : payloadTonnes >= 50 ? 'Full 55T' : 'Medium'})
              </span>
            </div>

            {/* Quick Touch Payload Presets */}
            <div className="flex gap-1.5 mb-2 overflow-x-auto no-scrollbar">
              {payloadPresets.map((p) => (
                <button
                  key={p.val}
                  type="button"
                  onClick={() => setPayloadTonnes(p.val)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    payloadTonnes === p.val
                      ? 'bg-sany-red text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <input
              type="range"
              min="0"
              max="55"
              step="5"
              value={payloadTonnes}
              onChange={(e) => setPayloadTonnes(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 touch-pan-x"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>0T (Bobtail)</span>
              <span>25T (Urban)</span>
              <span>55T (Full GCW)</span>
            </div>
          </div>

          {/* Terrain Buttons */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">Route Topography:</label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: 'highway', label: 'Flat Expressway', desc: '0-2% Grade' },
                { id: 'rolling', label: 'Rolling Intercity', desc: '3-6% Grade' },
                { id: 'mining', label: 'Mining / Incline', desc: '8-15% Grade' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTerrain(t.id)}
                  className={`p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    terrain === t.id
                      ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block leading-tight">{t.label}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 5-Level Regen Braking Slider */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>5-Level Energy Regeneration:</span>
              <span className="text-blue-600 bg-white px-2.5 py-0.5 rounded border border-slate-200 text-xs sm:text-sm font-black">
                Level {regenLevel} ({regenLevel * 4}% Harvested)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={regenLevel}
              onChange={(e) => setRegenLevel(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 touch-pan-x"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Level 1 (Coast)</span>
              <span>Level 3 (Balanced)</span>
              <span>Level 5 (Max Downhill)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Result Output Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-sany-red to-sany-red-hover text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex justify-between items-center border-b border-blue-400/30 pb-3">
              <span className="text-xs font-bold tracking-wider uppercase text-blue-200">
                Estimated Performance
              </span>
              <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                {selectedBattery === '462' ? 'SANY 5565E' : (selectedBattery === '376' ? 'SANY 5550E' : 'SANY 5538E')}
              </span>
            </div>

            <div>
              <span className="text-xs text-blue-200 uppercase tracking-wider block mb-0.5">
                Estimated Real-World Range:
              </span>
              <div className="text-3xl sm:text-5xl font-black tracking-tight">
                {estimatedRange} <span className="text-xl sm:text-2xl font-bold text-blue-200">km</span>
              </div>
              <p className="text-xs text-blue-100 mt-1">
                Per single 100% charge cycle under specified payload &amp; route.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-3 border-t border-blue-400/30 text-xs">
              <div className="p-2.5 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-blue-200 block text-[11px] mb-0.5">Energy Economy</span>
                <span className="text-sm sm:text-base font-bold">{estimatedConsumption} kWh / km</span>
              </div>
              <div className="p-2.5 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-blue-200 block text-[11px] mb-0.5">Regen Recaptured</span>
                <span className="text-sm sm:text-base font-bold">+{regenEnergyKwh} kWh / cycle</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-blue-400/30">
            <button
              onClick={onOpenQuote}
              className="w-full bg-white text-blue-700 hover:bg-slate-50 active:bg-slate-100 text-xs font-bold uppercase py-3.5 rounded-lg transition-colors text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Dedicated Route Telematics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { Calculator, TrendingDown, Leaf, DollarSign, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function TcoCalculator({ onOpenQuote }) {
  const [fleetSize, setFleetSize] = useState(10);
  const [dailyKm, setDailyKm] = useState(300);
  const [dieselPrice, setDieselPrice] = useState(90); // Rs per Litre
  const [elecPrice, setElecPrice] = useState(7); // Rs per kWh
  const [dieselMileage, setDieselMileage] = useState(2.2); // km/L for 55T diesel truck
  const [evConsumption, setEvConsumption] = useState(1.1); // kWh/km for SANY 5550E

  // Calculations
  const daysPerYear = 330;
  const annualKmPerTruck = dailyKm * daysPerYear;
  const totalAnnualKm = annualKmPerTruck * fleetSize;

  // Diesel Annual Fuel Cost
  const annualDieselLiters = totalAnnualKm / dieselMileage;
  const annualDieselFuelCost = annualDieselLiters * dieselPrice;
  const annualDieselMaintenance = totalAnnualKm * 4.5; // ~Rs 4.5/km
  const totalDieselAnnualCost = annualDieselFuelCost + annualDieselMaintenance;

  // SANY 5550E EV Annual Energy Cost
  const annualEvKwh = totalAnnualKm * evConsumption;
  const annualEvEnergyCost = annualEvKwh * elecPrice;
  const annualEvMaintenance = totalAnnualKm * 1.5; // ~Rs 1.5/km (70% lower)
  const totalEvAnnualCost = annualEvEnergyCost + annualEvMaintenance;

  // Savings
  const annualSavings = totalDieselAnnualCost - totalEvAnnualCost;
  const fiveYearSavings = annualSavings * 5;

  // CO2 Reduction (approx 2.68 kg CO2 per liter of diesel vs green grid)
  const annualCo2Tons = Math.round((annualDieselLiters * 2.68 - annualEvKwh * 0.45) / 1000);

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${Math.round(val).toLocaleString('en-IN')}`;
  };

  const fleetPresets = [5, 10, 25, 50];
  const distancePresets = [200, 350, 500];

  return (
    <div id="tco-calculator" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-10 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        {/* Left Interactive Sliders */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI &amp; TCO Engine</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Fleet Electrification Savings Calculator
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Simulate operational savings for your route when replacing heavy diesel combinations with SANY 5550E / 5538E.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-100">
            {/* Fleet Size Controls */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                <span>Fleet Size:</span>
                <span className="text-blue-600 bg-white px-2.5 py-0.5 rounded border border-slate-200 text-xs sm:text-sm font-black">
                  {fleetSize} Trucks
                </span>
              </div>
              
              {/* Quick Tap Presets for Mobile */}
              <div className="flex gap-1.5 mb-2 overflow-x-auto no-scrollbar">
                {fleetPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setFleetSize(preset)}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                      fleetSize === preset
                        ? 'bg-sany-red text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {preset} Trucks
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="1"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 touch-pan-x"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 Truck</span>
                <span>50 Trucks</span>
                <span>100 Trucks</span>
              </div>
            </div>

            {/* Daily Distance Controls */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                <span>Average Daily Route per Truck:</span>
                <span className="text-blue-600 bg-white px-2.5 py-0.5 rounded border border-slate-200 text-xs sm:text-sm font-black">
                  {dailyKm} km / day
                </span>
              </div>

              {/* Distance Presets */}
              <div className="flex gap-1.5 mb-2 overflow-x-auto no-scrollbar">
                {distancePresets.map((km) => (
                  <button
                    key={km}
                    type="button"
                    onClick={() => setDailyKm(km)}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                      dailyKm === km
                        ? 'bg-sany-red text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {km} km/day
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="100"
                max="700"
                step="25"
                value={dailyKm}
                onChange={(e) => setDailyKm(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 touch-pan-x"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>100 km (Short)</span>
                <span>400 km (Intercity)</span>
                <span>700 km (24/7 Fast Charge)</span>
              </div>
            </div>

            {/* Cost Variables */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Diesel Price (₹/L)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={dieselPrice}
                  onChange={(e) => setDieselPrice(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Commercial Power (₹/kWh)
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  value={elecPrice}
                  onChange={(e) => setElecPrice(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Dynamic Results Panel */}
        <div className="lg:col-span-6 bg-slate-900 rounded-xl p-5 sm:p-6 md:p-8 text-white flex flex-col justify-between shadow-md space-y-6">
          <div className="space-y-5 sm:space-y-6">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-slate-400 uppercase">
                Estimated Financial Impact
              </span>
              <span className="bg-blue-500/20 border border-blue-500/40 text-blue-400 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                62% Cost Reduction
              </span>
            </div>

            {/* Big Headline Savings */}
            <div>
              <span className="text-[11px] sm:text-xs text-slate-400 block mb-0.5">Annual Fleet Operational Savings:</span>
              <div className="text-2xl sm:text-4xl font-black text-blue-400 tracking-tight">
                {formatCurrency(annualSavings)}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                5-Year Cumulative Savings: <strong className="text-white">{formatCurrency(fiveYearSavings)}</strong>
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-4 border-y border-slate-800 text-xs">
              <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-1 text-slate-400 mb-0.5">
                  <Leaf className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-[11px]">Carbon Offset</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {annualCo2Tons.toLocaleString()} MT CO₂e / yr
                </div>
              </div>

              <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-1 text-slate-400 mb-0.5">
                  <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-[11px]">Estimated Payback</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  ~18 - 24 Months
                </div>
              </div>
            </div>

            {/* Comparison Cost Bars */}
            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between mb-1 text-[11px]">
                  <span className="text-slate-400">Diesel Fleet Annual Cost:</span>
                  <span className="text-slate-300 font-bold">{formatCurrency(totalDieselAnnualCost)}</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-sany-red h-full w-full rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-[11px]">
                  <span className="text-slate-400">SANY Electric Fleet Cost:</span>
                  <span className="text-blue-400 font-bold">{formatCurrency(totalEvAnnualCost)}</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-400 h-full rounded-full"
                    style={{ width: `${Math.max(20, Math.round((totalEvAnnualCost / totalDieselAnnualCost) * 100))}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={onOpenQuote}
              className="w-full bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs font-bold uppercase py-3.5 px-4 rounded transition-colors text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Customized Fleet TCO Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


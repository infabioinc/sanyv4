import React, { useState } from 'react';
import { Eye, ShieldCheck, Zap, Cpu, Battery, Layers, CheckCircle2 } from 'lucide-react';

export default function TechHotspots() {
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: "powertrain",
      title: "360 kW PMSM Electric Powertrain",
      subtitle: "500 HP Peak Output & 2,800 Nm Torque @ 3000 RPM",
      category: "Propulsion",
      desc: "Permanent Magnet Synchronous Motor delivering 500 HP max power paired with a 6-Speed AMT (6 Forward + 1 Reverse) designed for high torque starting even on 30% incline gradients with full 55-tonne combination payload.",
      badge: "500 HP / 2800 Nm",
      specs: ["Efficiency: > 96%", "Integrated Liquid Cooling", "Planetary Hub Reduction Available"]
    },
    {
      id: "battery",
      title: "376 kWh Largest-in-Class Fast-Charging Battery",
      subtitle: "High-Density LFP with Multi-Loop Redundancy",
      category: "Energy Storage",
      top: "40%",
      left: "30%",
      desc: "Largest battery capacity in its class. Features multi-loop safety BMS ensuring the truck continues operating even if an individual battery loop encounters an anomaly. Compatible with 55–60 min CCS2 fast charging.",
      badge: "376 kWh / 55–60 Min Charge",
      specs: ["Cell Chemistry: LFP High Density", "IP69K Ingress Protection", "Active Thermal Pre-Heating & Cooling"]
    },
    {
      id: "cabin",
      title: "High Roof RHD Sleeper Cabin & 4-Way Seat",
      subtitle: "Ergonomic Driver Workspace with Sleeper Berth",
      category: "Driver Ergonomics",
      desc: "High-roof right-hand-drive air-conditioned cab engineered for long-haul duty cycles. Equipped with a self-adjusting back, 4-way adjustable pneumatic driver seat, full sleeping berth, and NVH acoustic sound insulation (< 65 dB at cruising speed).",
      badge: "RHD AC Sleeper Cab",
      specs: ["Noise Level: < 65 dB", "Air Suspension Cab Mounts", "Digital Instrument Cluster"]
    },
    {
      id: "safety",
      title: "ADAS Suite & 4-Way 360° Movement Cameras",
      subtitle: "Forward Collision & Lane Departure Assistance",
      category: "Active Safety",
      desc: "Integrated 4-way camera vision system synchronized with vehicle steering movement for zero blind spots. Includes Front Collision Warning (FCW), Lane Departure Warning (LDW), and Electronic Stability Control (ESC) for dynamic load control.",
      badge: "ADAS + 360° Vision",
      specs: ["Front Millimeter-Wave Radar", "Dual Optical Vision Sensor", "Integrated Telematics Gateway"]
    },
    {
      id: "chassis",
      title: "300 x 80 x 15 mm Double-Reinforced Chassis",
      subtitle: "High-Tensile Steel with Partially Triple 8mm Layer",
      category: "Structural Integrity",
      desc: "Full-length double-reinforced 300x80x15mm chassis frame with partial triple 8mm reinforcement at critical stress points. Supported by front 3-leaf and rear 4+3 leaf spring suspensions for 55,000 kg GCW endurance.",
      badge: "55,000 kg GCW Frame",
      specs: ["High-Tensile 780 MPa Steel", "Front 3 Leaf / Rear 4+3 Leaf Springs", "295 / 90 R 20 Radial Tyres"]
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10">
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-2">
          Engineering Architecture
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          SANY 5550E Component Breakdown
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Explore the in-house engineering and key component assemblies that make SANY the Global No. 1 EV truck brand.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Component Navigation List */}
        <div className="lg:col-span-5 space-y-2">
          {hotspots.map((item, idx) => {
            const isCurrent = activeHotspot === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveHotspot(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  isCurrent
                    ? 'bg-blue-50 border-blue-600 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100/70 text-slate-700'
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-0.5">
                    {item.category}
                  </span>
                  <span className={`text-sm font-bold block ${isCurrent ? 'text-blue-900' : 'text-slate-800'}`}>
                    {item.title}
                  </span>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md shrink-0 ml-3 ${
                  isCurrent ? 'bg-sany-red text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {item.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Component Detailed Stage */}
        <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
          <div className="flex justify-between items-start pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                {hotspots[activeHotspot].category} Deep-Dive
              </span>
              <h4 className="text-2xl font-bold tracking-tight text-white">
                {hotspots[activeHotspot].title}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {hotspots[activeHotspot].subtitle}
              </p>
            </div>
            <span className="bg-sany-red text-white text-xs font-bold px-3 py-1 rounded-full">
              SANY In-House OEM
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {hotspots[activeHotspot].desc}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Key Engineering Highlights:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
              {hotspots[activeHotspot].specs.map((spec, i) => (
                <div key={i} className="p-2.5 bg-slate-800 rounded-lg border border-slate-700/60 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

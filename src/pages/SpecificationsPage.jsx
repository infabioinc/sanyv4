import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  Check, 
  ShieldCheck, 
  Zap, 
  Battery, 
  Gauge, 
  Ruler, 
  Cog, 
  Truck, 
  Layers, 
  CheckCircle2, 
  Info,
  FileText,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function SpecificationsPage({ onOpenQuote, onNavigateToHome }) {
  const [selectedModel, setSelectedModel] = useState('5565e'); // '5565e' | '5550e' | '5538e' | 'all'
  const [activeCategory, setActiveCategory] = useState('performance'); // 'performance' | 'battery' | 'drivetrain' | 'chassis' | 'dimensions'
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [viewMode, setViewMode] = useState('detailed'); // 'detailed' | 'table'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Specifications | SANY Heavy Electric Trucks';
    return () => {
      document.title = 'SANY Electric Trucks | Powering The Next Mile';
    };
  }, []);

  const handleDownloadDataSheet = (modelName = 'All Models') => {
    setDownloadSuccess(modelName);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const models = [
    {
      id: '5565e',
      name: 'SANY 5565E',
      badge: 'LONG-HAUL FLAGSHIP',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      tagline: 'Ultra Long-Range 462 kWh Energy Platform',
      image: '/images/sany-5565e-cutout.png',
      power: '480 kW (650 HP)',
      battery: '462 kWh LFP',
      torque: '3,000 Nm',
      range: '315–360 km',
      gcw: '55,000 kg',
      charging: '55–60 mins (Dual CCS2)',
      application: 'Inter-state express corridors, heavy steel coil haulage, bulk cement container logistics',
    },
    {
      id: '5550e',
      name: 'SANY 5550E',
      badge: 'REGIONAL HEAVYWORK',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      tagline: 'High-Efficiency 376 kWh Proven Heavy Hauler',
      image: '/images/trucks-png-9.png?v=2',
      power: '360 kW (500 HP)',
      battery: '376 kWh LFP',
      torque: '2,800 Nm',
      range: '280–330 km',
      gcw: '55,000 kg',
      charging: '50–55 mins (CCS2 Fast)',
      application: 'Regional inter-city routes, port-to-CFS loops, industrial manufacturing supply chains',
    },
    {
      id: '5538e',
      name: 'SANY 5538E',
      badge: 'DEDICATED HAULAGE',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      tagline: 'Optimized TCO 282 kWh Short-Haul Workhorse',
      image: '/images/sany-5538e-cutout.png',
      power: '280 kW (380 HP)',
      battery: '282 kWh LFP',
      torque: '2,800 Nm',
      range: '220–260 km',
      gcw: '55,000 kg',
      charging: '45–50 mins (CCS2 Fast)',
      application: 'Port terminal drayage, captive mine-to-rail sidings, short closed-loop dedicated freight',
    }
  ];

  const currentModelData = models.find(m => m.id === selectedModel) || models[0];

  const specCategories = [
    {
      id: 'performance',
      name: 'Performance & GCW',
      icon: Gauge,
      specs: [
        { name: 'Gross Combination Weight (GCW)', sany5565: '55,000 kg (55T)', sany5550: '55,000 kg (55T)', sany5538: '55,000 kg (55T)', highlight: false },
        { name: 'Peak Motor Output', sany5565: '480 kW (650 HP)', sany5550: '360 kW (500 HP)', sany5538: '280 kW (380 HP)', highlight: true },
        { name: 'Maximum Torque', sany5565: '3,000 Nm @ 0–3,000 rpm', sany5550: '2,800 Nm @ 0–3,000 rpm', sany5538: '2,800 Nm @ 0–3,000 rpm', highlight: true },
        { name: 'Govt Certified Range (Operating)', sany5565: '315 – 360 km', sany5550: '280 – 330 km', sany5538: '220 – 260 km', highlight: true },
        { name: 'Maximum Gradeability (Start-up)', sany5565: '≥ 25% @ 55T GCW', sany5550: '≥ 23% @ 55T GCW', sany5538: '≥ 20% @ 55T GCW', highlight: false },
        { name: 'Governed Top Speed', sany5565: '85 km/h (Commercial Limiter)', sany5550: '85 km/h (Commercial Limiter)', sany5538: '85 km/h (Commercial Limiter)', highlight: false },
      ]
    },
    {
      id: 'battery',
      name: 'Energy, Battery & Charging',
      icon: Battery,
      specs: [
        { name: 'Nominal Battery Capacity', sany5565: '462 kWh High-Density', sany5550: '376 kWh High-Density', sany5538: '282 kWh High-Density', highlight: true },
        { name: 'Cell Chemistry', sany5565: 'Lithium Iron Phosphate (LFP)', sany5550: 'Lithium Iron Phosphate (LFP)', sany5538: 'Lithium Iron Phosphate (LFP)', highlight: false },
        { name: 'Charging Standard & Connector', sany5565: 'Dual CCS2 Gun DC Fast', sany5550: 'Dual CCS2 Gun DC Fast', sany5538: 'Single/Dual CCS2 Gun DC', highlight: false },
        { name: 'Fast Charging Time (20% to 100%)', sany5565: '55 – 60 Mins (Dual 240kW)', sany5550: '50 – 55 Mins (Dual 240kW)', sany5538: '45 – 50 Mins (Fast DC)', highlight: true },
        { name: 'Battery Thermal Management', sany5565: 'Active Liquid Heating & Cooling', sany5550: 'Active Liquid Heating & Cooling', sany5538: 'Active Liquid Heating & Cooling', highlight: false },
        { name: 'BMS Protection Architecture', sany5565: 'Multi-Loop Cloud Telematics BMS', sany5550: 'Multi-Loop Cloud Telematics BMS', sany5538: 'Multi-Loop Cloud Telematics BMS', highlight: false },
        { name: 'Energy Regeneration', sany5565: '5-Level Intelligent Decel Harvester', sany5550: '5-Level Intelligent Decel Harvester', sany5538: '5-Level Intelligent Decel Harvester', highlight: false },
      ]
    },
    {
      id: 'drivetrain',
      name: 'Electric Drivetrain & Transmission',
      icon: Cog,
      specs: [
        { name: 'Motor Architecture', sany5565: 'Permanent Magnet Synchronous (PMSM)', sany5550: 'Permanent Magnet Synchronous (PMSM)', sany5538: 'Permanent Magnet Synchronous (PMSM)', highlight: false },
        { name: 'Transmission System', sany5565: '6-Speed AMT [ 6 Forward + 1 Reverse ]', sany5550: '6-Speed AMT [ 6 Forward + 1 Reverse ]', sany5538: '6-Speed AMT [ 6 Forward + 1 Reverse ]', highlight: false },
        { name: 'Drive Axle Ratio', sany5565: 'Optimized Heavy Commercial Reduction', sany5550: 'Optimized Heavy Commercial Reduction', sany5538: 'Optimized Heavy Commercial Reduction', highlight: false },
        { name: 'Traction Control & ESP', sany5565: 'Integrated Electronic Stability Control', sany5550: 'Integrated Electronic Stability Control', sany5538: 'Integrated Electronic Stability Control', highlight: false },
      ]
    },
    {
      id: 'chassis',
      name: 'Chassis, Suspension & Braking',
      icon: Truck,
      specs: [
        { name: 'Main Chassis Frame', sany5565: '300 × 80 × 15 mm Double-Reinforced', sany5550: '300 × 80 × 15 mm Double-Reinforced', sany5538: '300 × 80 × 15 mm Double-Reinforced', highlight: false },
        { name: 'Front Suspension', sany5565: 'Heavy-Duty 3-Leaf Parabolic Spring', sany5550: 'Heavy-Duty 3-Leaf Parabolic Spring', sany5538: 'Heavy-Duty 3-Leaf Parabolic Spring', highlight: false },
        { name: 'Rear Suspension', sany5565: 'Heavy-Duty 4+3 Semi-Elliptical Multi-Leaf', sany5550: 'Heavy-Duty 4+3 Semi-Elliptical Multi-Leaf', sany5538: 'Heavy-Duty 4+3 Semi-Elliptical Multi-Leaf', highlight: false },
        { name: 'Service Brakes', sany5565: 'Dual-Circuit Pneumatic Drum Brakes with ABS', sany5550: 'Dual-Circuit Pneumatic Drum Brakes with ABS', sany5538: 'Dual-Circuit Pneumatic Drum Brakes with ABS', highlight: false },
        { name: 'Tyre Size & Ply', sany5565: '295 / 90 R 20 Heavy Commercial Radial', sany5550: '295 / 90 R 20 Heavy Commercial Radial', sany5538: '295 / 90 R 20 Heavy Commercial Radial', highlight: false },
      ]
    },
    {
      id: 'dimensions',
      name: 'Dimensions & Cabin Features',
      icon: Ruler,
      specs: [
        { name: 'Wheelbase', sany5565: '4,000 mm', sany5550: '4,000 mm', sany5538: '4,000 mm', highlight: false },
        { name: 'Overall Vehicle Length (L)', sany5565: '6,465 mm', sany5550: '6,465 mm', sany5538: '6,465 mm', highlight: false },
        { name: 'Overall Vehicle Width (W)', sany5565: '2,550 mm', sany5550: '2,550 mm', sany5538: '2,550 mm', highlight: false },
        { name: 'Overall Vehicle Height (H)', sany5565: '3,715 mm (High Roof)', sany5550: '3,715 mm (High Roof)', sany5538: '3,715 mm (High Roof)', highlight: false },
        { name: 'Cabin Layout', sany5565: 'Right-Hand Drive (RHD) AC Sleeper', sany5550: 'Right-Hand Drive (RHD) AC Sleeper', sany5538: 'Right-Hand Drive (RHD) AC Sleeper', highlight: false },
        { name: 'Driver Ergonomics', sany5565: 'Air-Suspension 4-Way Adjustable Seat', sany5550: 'Air-Suspension 4-Way Adjustable Seat', sany5538: 'Air-Suspension 4-Way Adjustable Seat', highlight: false },
        { name: 'Safety & ADAS', sany5565: '360° Cameras, FCW & Lane Departure', sany5550: '360° Cameras, FCW & Lane Departure', sany5538: '360° Cameras & Reverse Assist', highlight: true },
      ]
    }
  ];

  const filteredCategories = specCategories.filter(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">

      {/* ===================================================================== */}
      {/* FULL-WIDTH HERO VIDEO — changes with selected model, top of page      */}
      {/* ===================================================================== */}
      {(() => {
        const videoMap = {
          '5565e': '/images/55652.mp4',
          '5550e': '/images/5550.mp4',
          '5538e': '/images/5538.mp4',
        };
        const videoSrc = selectedModel !== 'all' ? videoMap[selectedModel] : videoMap['5565e'];
        const modelName = models.find(m => m.id === selectedModel)?.name || 'SANY Fleet';

        return (
          <div className="relative w-full bg-slate-950 overflow-hidden">

            {/* Video or placeholder */}
            {videoSrc ? (
              <video
                key={videoSrc}
                className="w-full h-[75vh] lg:h-[80vh] min-h-[480px] max-h-[860px] object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-[75vh] lg:h-[80vh] min-h-[480px] max-h-[860px] flex flex-col items-center justify-center gap-3 bg-slate-900">
                <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-500 text-xs font-semibold">{modelName} — Video Coming Soon</p>
              </div>
            )}

            {/* Dark gradient overlay — top + bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80 pointer-events-none" />

            {/* Top-left label */}
            <div className="absolute top-5 left-6 z-10">
              <span className="text-[10px] font-bold tracking-widest text-[#252d37] uppercase bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#252d37]/30">
                {selectedModel !== 'all' ? `${modelName} — In Action` : 'SANY Fleet — In Action'}
              </span>
            </div>

            {/* Bottom overlay: Model selector tabs */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-8 pb-5 pt-10 bg-gradient-to-t from-slate-950/90 to-transparent">
              <div className="flex items-center gap-2 flex-wrap">
                {models.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                      selectedModel === m.id
                        ? 'bg-[#252d37] text-white border-[#252d37] shadow-lg'
                        : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedModel('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    selectedModel === 'all'
                      ? 'bg-[#252d37] text-white border-[#252d37] shadow-lg'
                      : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  All Models
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Page content wrapper */}
      <div className="pt-8">

      {/* Top Breadcrumb & Quick Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-slate-200">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <button 
              onClick={() => onNavigateToHome()}
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-semibold text-slate-700 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 font-bold">Specifications & Engineering</span>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDownloadDataSheet('Complete Fleet Technical Matrix')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-300 px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>{downloadSuccess ? 'Downloaded PDF' : 'Download Complete Spec Sheet'}</span>
            </button>

            <button
              onClick={() => onOpenQuote(selectedModel !== 'all' ? selectedModel : 'general')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-sany-red hover:bg-sany-red-hover px-4 py-1.5 rounded-lg transition-all cursor-pointer shadow-2xs"
            >
              <span>Request Fleet Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-widest text-[#252d37] uppercase block mb-1.5">
              OEM ENGINEERING BENCHMARKS
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Technical Specifications & Fleet Matrix
            </h1>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every kilowatt accounted for. Compare certified powertrain parameters, battery chemistries, charging curves, and heavy-duty chassis engineering across SANY's 55-tonne commercial electric tractors.
            </p>
          </div>

          {/* Quick Metrics Badge Ribbon - Compact & Minimal */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center shadow-2xs">
              <div className="text-base sm:text-lg font-bold text-slate-900">55,000 kg</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Gross Combination</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center shadow-2xs">
              <div className="text-base sm:text-lg font-bold text-blue-600">Up to 650 HP</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Peak PMSM Power</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center shadow-2xs">
              <div className="text-base sm:text-lg font-bold text-slate-900">3,000 Nm</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Instant Torque</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 text-center shadow-2xs">
              <div className="text-base sm:text-lg font-bold text-blue-600">55 Mins</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Dual CCS2 Fast</div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Selector Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline-block mr-1">
              Model:
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-2xs gap-1">
              {models.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedModel === m.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{m.name}</span>
                </button>
              ))}
              <button
                onClick={() => setSelectedModel('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedModel === 'all'
                    ? 'bg-sany-red text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>All Models</span>
              </button>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 self-start sm:self-auto bg-white p-1 border border-slate-200 rounded-xl shadow-2xs">
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'detailed'
                  ? 'bg-slate-900 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Category View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-slate-900 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Master Table
            </button>
          </div>
        </div>
      </div>

      {/* Single Model Interactive Cutout Showcase (When single model is selected) */}
      {selectedModel !== 'all' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Model Identity & Specs Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border mb-1.5 uppercase tracking-wide ${currentModelData.badgeColor}`}>
                    {currentModelData.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentModelData.name}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {currentModelData.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Primary Applications:</strong> {currentModelData.application}
                </p>

                {/* Quick specs pill grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Battery Capacity</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{currentModelData.battery}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Rated Power</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{currentModelData.power}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Peak Torque</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{currentModelData.torque}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Operating Range</span>
                    <span className="text-xs sm:text-sm font-bold text-blue-600">{currentModelData.range}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <button
                    onClick={() => onOpenQuote(currentModelData.id)}
                    className="inline-flex items-center gap-1.5 bg-sany-red hover:bg-sany-red-hover text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
                  >
                    <span>Inquire {currentModelData.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDownloadDataSheet(currentModelData.name)}
                    className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Brochure</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Studio Cutout Stage with Floor Shadow */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
                <div className="w-full max-w-xl relative flex flex-col items-center">
                  
                  {/* Subtle dimension tags */}
                  <div className="w-full flex justify-between items-center text-[10px] font-mono text-slate-400 border-b border-dashed border-slate-300 pb-1 mb-2 px-2">
                    <span>LENGTH: 6,465 mm</span>
                    <span>WHEELBASE: 4,000 mm</span>
                    <span>HEIGHT: 3,715 mm</span>
                  </div>

                  {/* Truck Cutout */}
                  <img
                    src={currentModelData.image}
                    alt={currentModelData.name}
                    className="w-full h-auto max-h-[350px] sm:max-h-[400px] object-contain drop-shadow-md select-none transition-all duration-300 scale-105"
                  />
                  
                  {/* Floor Reflection Shadow */}
                  <div className="w-4/5 h-2.5 bg-radial from-slate-900/25 via-slate-400/10 to-transparent blur-md rounded-full -mt-2"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-4">
        <div className="flex overflow-x-auto gap-1.5 pb-2 no-scrollbar scroll-smooth">
          {specCategories.map(cat => {
            const Icon = cat.icon;
            const isCatActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                  isCatActive
                    ? 'bg-slate-900 text-white shadow-2xs font-bold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT DISPLAY: Detailed Cards vs Full Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {viewMode === 'detailed' ? (
          /* CATEGORIZED SPEC CARDS (No duplicate category header inside card) */
          <div className="space-y-6">
            {filteredCategories.map(cat => {
              return (
                <div key={cat.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                  {/* Desktop 3-Column Comparison Grid Header */}
                  <div className="hidden lg:grid grid-cols-12 bg-slate-100/70 text-xs font-bold text-slate-700 px-6 py-3 border-b border-slate-200">
                    <div className="col-span-5 uppercase tracking-wider text-[11px] text-slate-500">TECHNICAL PARAMETER</div>
                    <div className={`col-span-2 text-right ${selectedModel === '5565e' ? 'text-blue-600 font-extrabold' : ''}`}>
                      SANY 5565E (462 kWh)
                    </div>
                    <div className={`col-span-2 text-right ${selectedModel === '5550e' ? 'text-blue-600 font-extrabold' : ''}`}>
                      SANY 5550E (376 kWh)
                    </div>
                    <div className={`col-span-3 text-right ${selectedModel === '5538e' ? 'text-blue-600 font-extrabold' : ''}`}>
                      SANY 5538E (282 kWh)
                    </div>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100 text-xs">
                    {cat.specs.map((spec, i) => (
                      <div 
                        key={i} 
                        className={`px-6 py-3.5 transition-colors hover:bg-slate-50/80 ${
                          spec.highlight ? 'bg-blue-50/20' : ''
                        }`}
                      >
                        {/* Desktop View */}
                        <div className="hidden lg:grid grid-cols-12 items-center gap-2">
                          <div className="col-span-5 font-medium text-slate-800 flex items-center gap-2">
                            <span>{spec.name}</span>
                            {spec.highlight && (
                              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold">
                                Key
                              </span>
                            )}
                          </div>
                          <div className={`col-span-2 text-right font-semibold ${selectedModel === '5565e' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
                            {spec.sany5565}
                          </div>
                          <div className={`col-span-2 text-right font-semibold ${selectedModel === '5550e' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
                            {spec.sany5550}
                          </div>
                          <div className={`col-span-3 text-right font-semibold ${selectedModel === '5538e' ? 'text-blue-600 font-bold' : 'text-slate-700'}`}>
                            {spec.sany5538}
                          </div>
                        </div>

                        {/* Mobile / Tablet Accordion Style */}
                        <div className="lg:hidden space-y-2">
                          <div className="font-semibold text-slate-900 flex items-center justify-between">
                            <span>{spec.name}</span>
                            {spec.highlight && (
                              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold">
                                Key
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                            <div className="bg-slate-50 p-2 rounded border border-slate-200/80">
                              <span className="text-[9px] font-bold text-slate-400 block uppercase">5565E</span>
                              <span className="font-semibold text-blue-600">{spec.sany5565}</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded border border-slate-200/80">
                              <span className="text-[9px] font-bold text-slate-400 block uppercase">5550E</span>
                              <span className="font-semibold text-slate-800">{spec.sany5550}</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded border border-slate-200/80">
                              <span className="text-[9px] font-bold text-slate-400 block uppercase">5538E</span>
                              <span className="font-semibold text-slate-800">{spec.sany5538}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* FULL COMPARISON TABLE VIEW */
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-4 px-6 font-bold tracking-wider uppercase text-[11px]">System / Feature</th>
                    <th className="py-4 px-6 font-bold tracking-wider uppercase text-[11px] text-blue-400">SANY 5565E Flagship</th>
                    <th className="py-4 px-6 font-bold tracking-wider uppercase text-[11px]">SANY 5550E</th>
                    <th className="py-4 px-6 font-bold tracking-wider uppercase text-[11px]">SANY 5538E</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {specCategories.map(cat => (
                    <React.Fragment key={cat.id}>
                      <tr className="bg-slate-100/90 font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                        <td colSpan="4" className="py-2.5 px-6">
                          {cat.name}
                        </td>
                      </tr>
                      {cat.specs.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-6 font-medium text-slate-800">{row.name}</td>
                          <td className="py-3 px-6 font-bold text-blue-600 bg-blue-50/30">{row.sany5565}</td>
                          <td className="py-3 px-6 font-semibold text-slate-700">{row.sany5550}</td>
                          <td className="py-3 px-6 font-semibold text-slate-700">{row.sany5538}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Engineering Architecture Breakdown Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest text-[#252d37] uppercase block mb-1">
            POWERTRAIN & HARDWARE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
            Built for Extreme Indian Heavy Logistics
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Commercial electric vehicles demand durability under 55T shock loads, high ambient temperatures, and 24/7 continuous operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Permanent Magnet PMSM</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Synchronous high-torque motor delivering 3,000 Nm from 0 RPM with active liquid-cooling for thermal stability under prolonged steep incline hauling.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Battery className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Safe LFP Chemistry</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-density Lithium Iron Phosphate cells rated for &gt;4,000 deep cycles. Dual-circuit active thermal pre-heating and chillers prevent degradation in 48°C heat.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Reinforced 300mm Chassis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              300 × 80 × 15 mm double-reinforced high-tensile steel ladder frame engineered to absorb torsional twist with multi-leaf articulation.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">ADAS & 360° Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard 4-channel panoramic cameras, Forward Collision Warning (FCW), Lane Departure Warning, and driver fatigue monitoring inside an air-suspended RHD cabin.
            </p>
          </div>
        </div>
      </div>

      {/* Fleet Engineering Consultation CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-[#252d37] uppercase tracking-wider block">
              CUSTOM ENGINEERING & ROUTE SIMULATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Need custom trailer coupling or depot charging infrastructure?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Our SANY Chakan engineering team will conduct duty-cycle telemetry simulations for your exact routes, payload profiles, and grid interconnects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenQuote('technical-consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#252d37] hover:bg-[#12171d] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              <span>Consult Fleet Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      </div>{/* end pt-8 content wrapper */}

    </div>
  );
}



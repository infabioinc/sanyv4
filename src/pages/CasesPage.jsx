import React, { useState } from 'react';
import { ShieldAlert, Compass, Anchor, ArrowRight, CheckCircle, Info } from 'lucide-react';

export default function CasesPage({ onOpenQuote, setTab }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 'hotspot-battery',
      title: 'Active Core Thermal Heating',
      x: '38%',
      y: '58%',
      detail: 'Keeps 620 kWh LFP pack at optimal +25°C even when outdoor temperatures dip below -40°C in Kiruna.'
    },
    {
      id: 'hotspot-suspension',
      title: '65-Tonne Heavy Axle Assembly',
      x: '72%',
      y: '68%',
      detail: 'Planetary hub reduction axles reinforced with 780 MPa steel for steep 30% mining ramps.'
    },
    {
      id: 'hotspot-cab',
      title: 'Sub-Zero Defrost & Insulated Cab',
      x: '28%',
      y: '32%',
      detail: 'High-efficiency heat pump cab climate system requiring under 1.5 kW auxiliary power.'
    }
  ];

  return (
    <div className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page Header */}
      <section className="mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 border border-white/10 bg-surface-container/50 backdrop-blur-md px-4 py-1.5 rounded">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse glow-blue" />
            <span className="font-label-technical text-xs text-primary uppercase tracking-widest font-bold">
              Global Operations Performance
            </span>
          </div>
          <h1 className="font-headline-lg text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            PROVEN WHERE IT MATTERS.
          </h1>
          <p className="text-on-surface-variant font-body-md text-base md:text-lg leading-relaxed">
            Real-world performance metrics from the most demanding commercial heavy haulage environments on Earth. Uncompromising torque meets zero-emission efficiency.
          </p>
        </div>
      </section>

      {/* Case 1: Arctic Circle Mining */}
      <section className="bg-surface-container-low rounded-2xl overflow-hidden border border-white/10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Image & Interactive Hotspots */}
          <div className="lg:col-span-7 h-[380px] sm:h-[460px] lg:h-auto relative overflow-hidden bg-black/50">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5epRLtDr2JvV77TOBscH0v1ElzSPRfTeQrYhjXcHEj2Bq39KsX2nC3V-bAQzsLeD89ZEwuzGq2qE1s92IbUHNMcTYwSbzfHVQxdpbDoEPX0fiJMzyg012FkLECr8ttcMThMkshD9X_Mm3x2CAdVJtOrrl38AaAky5NRrqI1XW4V8gvK_YFa3uHMYBAxzqqateBENl6puogbs48lXmf3LsccNEIo5FhOn6pKvI37ZVj7YdOiQOOs_z"
              alt="Arctic Mining Electric Truck"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent lg:hidden" />

            {/* Interactive Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-20"
                style={{ top: spot.y, left: spot.x }}
              >
                <button
                  onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  className="w-7 h-7 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs shadow-[0_0_20px_rgba(0,102,255,0.8)] border border-white animate-pulse"
                >
                  +
                </button>

                {activeHotspot === spot.id && (
                  <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-64 p-3 rounded-lg bg-surface-container-highest/95 border border-primary/40 text-xs shadow-2xl backdrop-blur-md z-30 animate-fadeIn">
                    <strong className="text-primary block font-headline-md font-bold mb-1">{spot.title}</strong>
                    <span className="text-white/90 leading-tight">{spot.detail}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary text-xs font-label-technical uppercase tracking-widest font-bold mb-2">
                <Compass className="w-4 h-4" />
                Arctic Mining Logistics • Kiruna, Sweden
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-black text-white uppercase mb-4">
                Sub-Zero Iron Ore Haulage at -40°C
              </h2>
              <p className="text-sm font-body-md text-on-surface-variant leading-relaxed mb-6">
                Deployed in open-pit iron ore transport operating continuously through Arctic winter blizzards. Dual liquid thermal loops maintained battery pack temperatures at +25°C with zero capacity fade.
              </p>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-container-high/60 border border-white/5 mb-8">
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">DIESEL DISPLACED</span>
                  <span className="font-headline-md text-2xl font-bold text-white font-mono">1.2M <span className="text-xs text-on-surface-variant">L/yr</span></span>
                </div>
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">COLD START RELIABILITY</span>
                  <span className="font-headline-md text-2xl font-bold text-primary font-mono">100%</span>
                </div>
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">GRADE ABILITY</span>
                  <span className="font-headline-md text-2xl font-bold text-white font-mono">35% <span className="text-xs text-on-surface-variant">Slope</span></span>
                </div>
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">OPEX REDUCTION</span>
                  <span className="font-headline-md text-2xl font-bold text-primary font-mono">-58%</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase py-3.5 rounded font-bold tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.3)] text-center"
            >
              Request Mining Corridor Case Report
            </button>
          </div>
        </div>
      </section>

      {/* Case 2: Shanghai Port Automated Logistics */}
      <section className="bg-surface-container-low rounded-2xl overflow-hidden border border-white/10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Case Study Details */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between lg:order-1 order-2">
            <div>
              <div className="flex items-center gap-2 text-primary text-xs font-label-technical uppercase tracking-widest font-bold mb-2">
                <Anchor className="w-4 h-4" />
                Port Automation • Shanghai Port, China
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-black text-white uppercase mb-4">
                350 Electric Port Trucks in Automated Turnkey Cycle
              </h2>
              <p className="text-sm font-body-md text-on-surface-variant leading-relaxed mb-6">
                Handling continuous 24/7 container turnaround with DC fast charging stations. Fleet operations automated via central 5G dispatching.
              </p>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-xl bg-surface-container-high/60 border border-white/5 mb-8">
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">ACTIVE PORT TRUCKS</span>
                  <span className="font-headline-md text-2xl font-bold text-white font-mono">350 <span className="text-xs text-on-surface-variant">Units</span></span>
                </div>
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">CHARGE TIME</span>
                  <span className="font-headline-md text-2xl font-bold text-primary font-mono">&lt; 3.0 <span className="text-xs text-on-surface-variant">min</span></span>
                </div>
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">TOTAL KM LOGGED</span>
                  <span className="font-headline-md text-2xl font-bold text-white font-mono">42M <span className="text-xs text-on-surface-variant">km</span></span>
                </div>
                <div>
                  <span className="text-[10px] font-label-technical text-on-surface-variant block uppercase">CO2 AVOIDED</span>
                  <span className="font-headline-md text-2xl font-bold text-primary font-mono">38,000 <span className="text-xs text-on-surface-variant">t</span></span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full bg-primary-container hover:bg-white hover:text-background text-white font-label-technical text-xs uppercase py-3.5 rounded font-bold tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.3)] text-center"
            >
              Request Port Automation Blueprint
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 h-[380px] sm:h-[460px] lg:h-auto relative overflow-hidden bg-black/50 lg:order-2 order-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVQTR3o_TtX-1ZaU9uk7XX_VA9kgD38m81gKD_37knw-dWGs_GzyxzR9fJEPJeM1jceNGw_yU___kYqamd4lqkkHVeresTkwdlZnUQj7D6Ldwz6zNWwLH-WuhcZaJXnPvnPYkfhd7aDH-7ZLk9uCHVh4MLJR6gCrUn89AMP199EQGdo2Nyry8x7dCaawRk-FfHKo1pi1FRVl0HWsgDvovCkED7q1IkRWTY5Q9CrZY2YvdLzWWvzpv0"
              alt="Shanghai Port EV Fleet"
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* Global Engineering Partners Bar */}
      <section className="text-center">
        <span className="text-xs font-label-technical text-primary uppercase tracking-widest font-bold block mb-4">
          Trusted by Premier Global Freight & Infrastructure Operators
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-lg bg-surface-container-low border border-white/5 text-white font-headline-md font-bold uppercase tracking-wider text-sm flex items-center justify-center">
            NORDIC HAULAGE AB
          </div>
          <div className="p-6 rounded-lg bg-surface-container-low border border-white/5 text-white font-headline-md font-bold uppercase tracking-wider text-sm flex items-center justify-center">
            PACIFIC MINING CORP
          </div>
          <div className="p-6 rounded-lg bg-surface-container-low border border-white/5 text-white font-headline-md font-bold uppercase tracking-wider text-sm flex items-center justify-center">
            SHANGHAI PORT AUTHORITY
          </div>
          <div className="p-6 rounded-lg bg-surface-container-low border border-white/5 text-white font-headline-md font-bold uppercase tracking-wider text-sm flex items-center justify-center">
            EUROPEAN LOGISTICS ALLIANCE
          </div>
        </div>
      </section>
    </div>
  );
}

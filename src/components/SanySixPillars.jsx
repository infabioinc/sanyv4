import React from 'react';
import { 
  ShieldCheck, 
  CircleDollarSign, 
  TrendingUp, 
  Award, 
  Zap, 
  Settings 
} from 'lucide-react';

export default function SanySixPillars() {
  const pillars = [
    {
      id: 1,
      title: 'Reliability & Uptime Guaranteed',
      subtitle: '98% at Vehicle Level',
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: 'Lowest Total Cost of Operation',
      subtitle: '10% Lower than competition',
      icon: CircleDollarSign,
    },
    {
      id: 3,
      title: 'Highest Payload Capacity',
      subtitle: '0.5 T – 1.5T Advantage',
      icon: TrendingUp,
    },
    {
      id: 4,
      title: 'Best in Class Resale Value',
      subtitle: 'Highest Quality & reliability will ensure',
      icon: Award,
    },
    {
      id: 5,
      title: 'Best in Class Energy Efficiency',
      subtitle: '15% - 25% better efficiency proven against competition',
      icon: Zap,
    },
    {
      id: 6,
      title: 'Highest Durability',
      subtitle: 'Tested for the Toughest terrains & Temperatures',
      icon: Settings,
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-1.5">
              THE SANY PROMISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight uppercase leading-tight">
              THE <span className="text-[#E60012]">6 PILLARS</span> OF SANY
            </h2>
            <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
              We are always looking forward to listening and working with you. Uncompromising standards for maximum profitability.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-start shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sany-red to-[#E60012] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-14 h-14 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-5 border border-slate-200 group-hover:border-blue-100 transition-colors">
                <pillar.icon className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight uppercase tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600">
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

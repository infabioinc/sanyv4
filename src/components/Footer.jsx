import React from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SanyLogo from './SanyLogo';

// Clean precision SVG icons for official social networks
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer({ currentPage = 'home', onNavigate, onOpenQuote }) {
  const scrollToSection = (id) => {
    if (id === 'specs-tabbed' || id === 'specifications') {
      if (onNavigate) {
        onNavigate('specifications');
        return;
      }
    }

    if (onNavigate) {
      onNavigate('home', id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/sanytruckindia?igsi=YWEwOG5oNjFvOG9v&utm_source=qr',
      hoverColor: 'hover:text-[#6b7480] hover:border-[#6b7480]'
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/profile.php?id=61593518621049',
      hoverColor: 'hover:text-[#6b7480] hover:border-[#6b7480]'
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/company/sanytruckindia/about/?viewAsMember=true',
      hoverColor: 'hover:text-[#6b7480] hover:border-[#6b7480]'
    },
    {
      name: 'YouTube',
      icon: YoutubeIcon,
      url: 'https://www.youtube.com/@SanyTruckIndia',
      hoverColor: 'hover:text-[#E60012] hover:border-[#E60012]'
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 w-full pt-12 pb-8 border-t border-slate-900 relative z-10 font-sans">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-20">
        
        {/* Main Minimal Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-900">
          
          {/* 1. Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <SanyLogo className="h-4 w-auto" color="#E60012" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SANY Electric Trucks — pioneering zero-emission heavy commercial mobility with proven mega-fleet reliability.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 transition-all ${social.hoverColor} hover:border-slate-600`}
                    aria-label={`SANY on ${social.name}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Models & Specs (3 Cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-[11px] uppercase tracking-widest text-slate-200 font-bold block">
              Vehicles & Tech
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('models')} className="hover:text-white transition-colors text-left">
                  SANY 5550E (500 HP / 376 kWh)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('models')} className="hover:text-white transition-colors text-left">
                  SANY 5565E (650 HP / 462 kWh)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('models')} className="hover:text-white transition-colors text-left">
                  SANY 5538E (380 HP / 282 kWh)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('specs-tabbed')} className="hover:text-white transition-colors text-left">
                  Technical Specifications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('technology')} className="hover:text-white transition-colors text-left">
                  Proprietary EV Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Corridors & Network (2 Cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <span className="text-[11px] uppercase tracking-widest text-slate-200 font-bold block">
              Operations
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate && onNavigate('deployment-corridors')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Deployment Corridors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('manufacturing')} className="hover:text-white transition-colors text-left">
                  Chakan Manufacturing Plant
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('advantage')} className="hover:text-white transition-colors text-left">
                  The SANY Advantage
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('case-studies')} className="hover:text-white transition-colors text-left">
                  Commercial Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Fleet Inquiry Action (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-slate-200 font-bold block">
              Fleet Consultation
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect directly with SANY commercial EV engineers to evaluate route payloads and charging infrastructure.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#252d37] hover:bg-[#12171d] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg transition-colors shadow-2xs cursor-pointer"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[11px] text-slate-500 pt-1">
              sales@sanyheavy.in • support@sanytruck.com
            </div>
          </div>

        </div>

        {/* Bottom SANY Corporate Bar - Full Width Minimal */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>© 2026 SANY Heavy Industry. Commercial EV Division.</p>
          
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <div className="flex flex-wrap gap-4">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Use</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Compliance</span>
            </div>

            {/* Partner / Credit Badge */}
            <div className="flex items-center gap-[6px] p-[3px_6px] border border-slate-800/80 rounded-[5px] w-fit bg-slate-900/40">
              <a
                href="https://play.fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FabulousMedia"
                className="flex items-center justify-center bg-[#fff] p-[2px] rounded-[3px] opacity-75 transition-all duration-300 ease-out hover:opacity-100 shadow-2xs"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-[8px] md:h-[9px] w-auto block"
                />
              </a>

              <div className="w-[1px] h-[9px] bg-slate-700/60"></div>

              <a
                href="https://gocommercially.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoCommercially"
                className="flex items-center justify-center bg-[#fff] p-[2px] rounded-[3px] opacity-75 transition-all duration-300 ease-out hover:opacity-100 shadow-2xs"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-[8px] md:h-[9px] w-auto block"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

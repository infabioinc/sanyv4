import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import SanyLogo from './SanyLogo';
import { TRUCKS } from '../data/trucksData';

export default function QuoteModal({ isOpen, onClose, preselectedModel = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: 'India',
    city: '',
    model: preselectedModel || 'sany-5550e',
    timeframe: '1-3 months',
    message: '',
    agreePrivacy: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white border border-slate-300 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex items-center justify-center px-2.5 py-2 rounded-lg bg-white border border-slate-200 shrink-0">
              <SanyLogo className="h-5 sm:h-6 w-auto" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 tracking-wide uppercase leading-tight">
                SANY EV FLEET QUOTATION
              </h3>
              <p className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider">
                Official SANY 5565E, SANY 5550E &amp; SANY 5538E Proposal Request
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

        {submitted ? (
          <div className="p-6 sm:p-10 text-center flex flex-col items-center justify-center my-auto overflow-y-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50 text-blue-600 border-2 border-blue-600 flex items-center justify-center mb-3 sm:mb-4 shadow-md">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 uppercase">
              Inquiry Dispatched Successfully
            </h4>
            <p className="text-slate-600 max-w-md mb-5 text-xs sm:text-sm">
              Thank you, <span className="text-slate-900 font-semibold">{formData.name}</span>. A SANY Commercial Fleet Specialist for <span className="text-blue-600 font-semibold">{formData.country}</span> will deliver your turnkey proposal within 24 hours.
            </p>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono mb-5 max-w-md w-full text-left space-y-1.5">
              <div>Reference ID: <span className="text-slate-900 font-bold">SANY-EV-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div>Model Inquired: <span className="text-blue-600 font-bold">{TRUCKS.find(t => t.id === formData.model)?.name || formData.model}</span></div>
              <div>Deployment Location: <span className="text-slate-900">{formData.city || 'Regional Hub'}, {formData.country}</span></div>
            </div>
            <button
              onClick={handleReset}
              className="bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs uppercase px-8 py-3.5 rounded-lg font-bold tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Return to Portal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-3.5 sm:space-y-4 overflow-y-auto pb-safe">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Industrial Transport Logistics"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Business Phone *
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 / +1 (555) 000-0000"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Select Country / Region *
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Germany">Germany</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Australia">Australia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other Global Territory</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Target Truck Model *
                </label>
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                >
                  {TRUCKS.map((truck) => (
                    <option key={truck.id} value={truck.id}>
                      {truck.name} ({truck.badge})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Route &amp; Fleet Requirements
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Payload weight, daily route km, DC fast charger requirements..."
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors resize-none"
              />
            </div>

            <div className="flex items-start gap-2 pt-0.5">
              <input
                type="checkbox"
                id="privacy"
                required
                checked={formData.agreePrivacy}
                onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
              />
              <label htmlFor="privacy" className="text-[11px] sm:text-xs text-slate-600 leading-tight cursor-pointer">
                I agree that my inquiry is processed by SANY Group to deliver route simulations and dealer service.
              </label>
            </div>

            <div className="pt-2.5 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 gap-3">
              <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                SANY Quality Changes the World
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto bg-sany-red hover:bg-sany-red-hover active:bg-blue-800 text-white text-xs uppercase px-8 py-3.5 rounded-lg font-bold tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SUBMIT QUOTE INQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}


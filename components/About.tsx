import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Users, Trophy, History } from 'lucide-react';
import { ComparisonPoint } from '../types';

interface AboutProps {
    onStartDispatching: () => void;
}

const COMPARISON_DATA: ComparisonPoint[] = [
  { feature: "Load Choice", competitor: "Forced Dispatch", rk: "You Approve Every Load", isWinner: true },
  { feature: "Negotiation", competitor: "Accepts First Offer", rk: "We Fight for Every Dollar", isWinner: true },
  { feature: "Detention Pay", competitor: "Ignored", rk: "Collection Enforcement", isWinner: true },
  { feature: "Fees", competitor: "Hidden Spreads", rk: "Flat 5% - Transparent", isWinner: true },
  { feature: "Communication", competitor: "Email Only / Ghosting", rk: "Direct Cell Phone Access", isWinner: true },
];

export const About: React.FC<AboutProps> = ({ onStartDispatching }) => {
  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-rk-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center space-x-2 bg-rk-blue/20 text-rk-blue border border-rk-blue/30 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-8">
              <span>Established 2018</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-8">
                Not a Call Center.<br/>A Strategic Partner.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
                RK Dispatch Solutions was founded on a simple principle: Owner-operators deserve the same back-office support as mega-fleets, without the corporate bloat.
            </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="p-8 bg-slate-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-rk-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-rk-navy mb-3">Driver First</h3>
                  <p className="text-gray-600">We don't get paid unless you roll. Our incentives are 100% aligned with your profitability.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                      <History className="w-6 h-6 text-rk-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-rk-navy mb-3">24/7 Availability</h3>
                  <p className="text-gray-600">Logistics doesn't stop at 5 PM. Neither do we. Night or day, we answer the phone.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                      <Trophy className="w-6 h-6 text-rk-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-rk-navy mb-3">Rate Negotiation</h3>
                  <p className="text-gray-600">We use data, not gut feelings. We know the lane rates before we call the broker.</p>
              </div>
          </div>

        {/* Comparison Table */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>Don't Get Scammed</span>
            </div>
            <h2 className="text-3xl font-heading font-extrabold text-rk-navy mb-6">
              The "Cheap Dispatch" Trap.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most dispatch services hook you with low fees then disappear when you need detention pay collected. We operate as your business partner.
            </p>
             <button 
                onClick={onStartDispatching}
                className="text-rk-blue font-bold hover:underline flex items-center"
            >
                Start Your Application <CheckCircle2 className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="md:w-2/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-50 p-4 border-b border-gray-100">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Feature</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Typical Service</div>
                <div className="text-xs font-bold text-rk-blue uppercase tracking-wider text-center">RK Dispatch</div>
              </div>
              
              {COMPARISON_DATA.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 p-6 border-b border-gray-50 hover:bg-slate-50 transition-colors items-center">
                  <div className="font-bold text-rk-navy text-sm md:text-base">{row.feature}</div>
                  
                  <div className="flex flex-col items-center justify-center text-center">
                    <XCircle className="w-6 h-6 text-red-400 mb-1" />
                    <span className="text-xs md:text-sm text-gray-500 font-medium">{row.competitor}</span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center text-center relative">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mb-1" />
                    <span className="text-xs md:text-sm text-rk-navy font-bold">{row.rk}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
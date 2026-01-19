import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, TrendingUp, Search, Loader2, BarChart3 } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onStartDispatching: () => void;
  setActivePage: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartDispatching, setActivePage }) => {
  const [rateCheckStatus, setRateCheckStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [zipOrigin, setZipOrigin] = useState('');
  const [zipDest, setZipDest] = useState('');
  const [calculatedRate, setCalculatedRate] = useState<string>('');
  const [datData, setDatData] = useState<{low: string, high: string, avg: string} | null>(null);

  const handleRateCheck = () => {
    if (!zipOrigin || !zipDest) return;
    setRateCheckStatus('loading');
    
    // Simulate DAT Integration
    setTimeout(() => {
      // Logic: Generate a realistic rate between $2.80 and $4.20 based on zip codes
      const seed = zipOrigin.length + zipDest.length;
      const baseRate = 2.80;
      const variance = (seed % 15) / 10; 
      const low = (baseRate + variance).toFixed(2);
      const high = (baseRate + variance + 0.65).toFixed(2);
      const avg = ((parseFloat(low) + parseFloat(high)) / 2).toFixed(2);
      
      setDatData({ low, high, avg });
      setCalculatedRate(`$${low} - $${high}`);
      setRateCheckStatus('success');
    }, 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-rk-navy overflow-hidden pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
         <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
         >
            {/* Sunset Driving Video Loop */}
            <source src="https://cdn.coverr.co/videos/coverr-truck-driving-during-sunset-2649/1080p.mp4" type="video/mp4" />
         </video>
        <div className="absolute inset-0 bg-gradient-to-r from-rk-navy via-rk-navy/80 to-rk-navy/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 hover:bg-white/15 transition-colors cursor-default">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-xs font-bold text-white tracking-widest uppercase">Accepting New Authorities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Drive for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rk-orange to-red-500">Profit</span>, <br />
            Not Just Miles.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light">
            The independent dispatch partner for owner-operators who demand transparency, negotiation power, and consistent lanes. <span className="text-white font-medium">No forced dispatch. No hidden fees.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => {
                const el = document.getElementById('quick-lane-check');
                if (el) el.scrollIntoView({behavior: 'smooth', block: 'center'});
              }}
              className="flex items-center justify-center bg-rk-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-orange-900/20 transition-all hover:scale-105 group"
            >
              Check Lane Rates
              <BarChart3 className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onStartDispatching}
              className="flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:border-white/40"
            >
              Start Dispatching
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium border-t border-white/10 pt-8">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-rk-blue mr-2" />
              Verified Broker Network
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-rk-blue mr-2" />
              Negotiated Detention Pay
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-rk-blue mr-2" />
              No Contracts
            </div>
          </div>
        </motion.div>

        {/* Interactive "Rate Check" Widget */}
        <motion.div 
          id="quick-lane-check"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-rk-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rk-blue/20 rounded-full blur-3xl"></div>

          <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rk-blue to-rk-orange"></div>
            
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-white font-heading font-bold text-xl flex items-center">
                <Search className="w-5 h-5 text-rk-orange mr-2" />
                Quick Lane Check
              </h3>
              <span className="text-[10px] text-gray-300 font-mono tracking-wider font-bold bg-white/10 px-2 py-1 rounded border border-white/5">
                DAT ONE™ INTEGRATION
              </span>
            </div>
           
            {rateCheckStatus === 'success' && datData ? (
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-end mb-2 border-b border-gray-700 pb-4">
                  <div className="text-left">
                     <p className="text-gray-400 text-xs uppercase font-bold">Market Average</p>
                     <p className="text-white font-mono text-2xl font-bold">${datData.avg}<span className="text-sm text-gray-500">/mi</span></p>
                  </div>
                  <div className="text-right">
                     <p className="text-gray-400 text-xs uppercase font-bold">Confidence</p>
                     <div className="flex space-x-1 mt-1">
                       <div className="w-2 h-4 bg-green-500 rounded-sm"></div>
                       <div className="w-2 h-4 bg-green-500 rounded-sm"></div>
                       <div className="w-2 h-4 bg-green-500 rounded-sm"></div>
                       <div className="w-2 h-4 bg-green-900 rounded-sm"></div>
                     </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-4 mb-6">
                    <div className="text-center">
                        <p className="text-xs text-gray-500">Low</p>
                        <p className="text-gray-300 font-bold">${datData.low}</p>
                    </div>
                     <div className="w-full mx-4 relative h-2 bg-gray-700 rounded-full top-3">
                         <div className="absolute left-1/4 right-1/4 h-full bg-rk-blue rounded-full"></div>
                     </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500">High</p>
                        <p className="text-gray-300 font-bold">${datData.high}</p>
                    </div>
                </div>

                <p className="text-green-400 text-sm mb-6 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 mr-2" /> Rates are surging in this corridor.
                </p>
                <button 
                  onClick={() => setRateCheckStatus('idle')} 
                  className="text-white text-sm font-bold hover:text-rk-orange transition-colors underline"
                >
                  Check Another Lane
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold mb-1.5 block">Origin Zip</label>
                    <input 
                      id="origin-zip-input"
                      type="text" 
                      placeholder="e.g. 60601" 
                      value={zipOrigin}
                      onChange={(e) => setZipOrigin(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-rk-blue focus:ring-1 focus:ring-rk-blue transition-all" 
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold mb-1.5 block">Destination Zip</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 30301" 
                      value={zipDest}
                      onChange={(e) => setZipDest(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-rk-blue focus:ring-1 focus:ring-rk-blue transition-all" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase font-bold mb-1.5 block">Equipment Type</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rk-blue focus:ring-1 focus:ring-rk-blue transition-all [&>option]:text-black cursor-pointer appearance-none">
                    <option>53' Dry Van</option>
                    <option>Reefer</option>
                    <option>Flatbed</option>
                    <option>Power Only</option>
                  </select>
                </div>
                <button 
                  onClick={handleRateCheck}
                  disabled={!zipOrigin || !zipDest || rateCheckStatus === 'loading'}
                  className="w-full bg-rk-blue hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-900/20 transition-all flex justify-center items-center"
                >
                  {rateCheckStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Fetching DAT Data...
                    </>
                  ) : (
                    'Check Current Market Rates'
                  )}
                </button>
                <div className="flex justify-center items-center space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                     <p className="text-[10px] text-gray-500 font-medium">Powered by</p>
                     <span className="text-xs font-bold text-gray-400">DAT One</span>
                     <span className="text-xs font-bold text-gray-400">Truckstop</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
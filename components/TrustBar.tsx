import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted Integration Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for logos with text fallbacks */}
           <h3 className="text-2xl font-bold text-slate-700">DAT</h3>
           <h3 className="text-2xl font-bold text-slate-700">Truckstop</h3>
           <h3 className="text-2xl font-bold text-slate-700">RTS Financial</h3>
           <h3 className="text-2xl font-bold text-slate-700">OTR Capital</h3>
           <h3 className="text-2xl font-bold text-slate-700">KeepTruckin</h3>
        </div>
      </div>
    </section>
  );
};
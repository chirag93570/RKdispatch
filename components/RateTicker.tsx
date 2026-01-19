import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { RateItem } from '../types';

const MOCK_RATES: RateItem[] = [
  { id: 1, origin: "Chicago, IL", dest: "Atlanta, GA", rate: "$3.45/mi", vehicle: "Reefer", time: "12m ago" },
  { id: 2, origin: "Dallas, TX", dest: "Denver, CO", rate: "$3.10/mi", vehicle: "Flatbed", time: "18m ago" },
  { id: 3, origin: "Los Angeles, CA", dest: "Phoenix, AZ", rate: "$4.20/mi", vehicle: "Dry Van", time: "24m ago" },
  { id: 4, origin: "Miami, FL", dest: "Charlotte, NC", rate: "$2.95/mi", vehicle: "Reefer", time: "31m ago" },
  { id: 5, origin: "Seattle, WA", dest: "Boise, ID", rate: "$3.80/mi", vehicle: "Flatbed", time: "42m ago" },
  { id: 6, origin: "Houston, TX", dest: "Laredo, TX", rate: "$3.50/mi", vehicle: "Power Only", time: "45m ago" },
  { id: 7, origin: "Detroit, MI", dest: "Nashville, TN", rate: "$3.25/mi", vehicle: "Dry Van", time: "52m ago" },
  { id: 8, origin: "Kansas City, MO", dest: "Columbus, OH", rate: "$3.05/mi", vehicle: "Flatbed", time: "1h ago" },
];

export const RateTicker: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-4 overflow-hidden border-t border-slate-800 relative z-30">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {/* First Set */}
        <div className="flex items-center">
          {MOCK_RATES.map((item, idx) => (
            <div key={`orig-${item.id}-${idx}`} className="inline-flex items-center mx-6 space-x-3 text-sm font-medium">
              <span className="text-gray-400 font-mono text-xs uppercase">{item.vehicle}</span>
              <span className="flex items-center text-slate-200">
                {item.origin} <ArrowRight className="w-3 h-3 mx-2 text-rk-orange" /> {item.dest}
              </span>
              <span className="text-green-400 font-bold tracking-tight">{item.rate}</span>
              <span className="flex items-center text-gray-500 text-xs ml-2">
                <Clock className="w-3 h-3 mr-1" /> {item.time}
              </span>
              <div className="h-4 w-[1px] bg-gray-800 ml-6"></div>
            </div>
          ))}
        </div>
        
        {/* Duplicate Set for Seamless Loop */}
        <div className="flex items-center">
          {MOCK_RATES.map((item, idx) => (
            <div key={`dupe-${item.id}-${idx}`} className="inline-flex items-center mx-6 space-x-3 text-sm font-medium">
              <span className="text-gray-400 font-mono text-xs uppercase">{item.vehicle}</span>
              <span className="flex items-center text-slate-200">
                {item.origin} <ArrowRight className="w-3 h-3 mx-2 text-rk-orange" /> {item.dest}
              </span>
              <span className="text-green-400 font-bold tracking-tight">{item.rate}</span>
              <span className="flex items-center text-gray-500 text-xs ml-2">
                <Clock className="w-3 h-3 mr-1" /> {item.time}
              </span>
              <div className="h-4 w-[1px] bg-gray-800 ml-6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
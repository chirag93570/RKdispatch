import React from 'react';
import { Truck, Snowflake, Layers, ArrowRight, ShieldCheck, PlayCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
    onStartDispatching: () => void;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'dry-van',
    title: 'Dry Van',
    description: 'Consistent drop & hook lanes with major shippers. We keep your wheels turning with high-volume, low-touch freight.',
    icon: Truck,
    features: ['No-touch freight preference', 'Regional & OTR dedicated lanes', 'Power-only options available', 'Amazon Relay & UPS integration'],
    image: 'https://images.unsplash.com/photo-1586191582119-2925c6ec1847?auto=format&fit=crop&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-truck-driving-on-highway-5076/1080p.mp4' // Highway Day
  },
  {
    id: 'reefer',
    title: 'Reefer / Temp',
    description: 'High-value perishable freight handling. We are experts in cold chain logistics, lumper fee management, and claim prevention.',
    icon: Snowflake,
    features: ['Detention negotiation experts', 'Immediate lumper fee reimbursement', 'After-hours breakdown support', 'Strict temp-check compliance'],
    image: 'https://images.unsplash.com/photo-1628555273821-26df21a1170b?auto=format&fit=crop&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-truck-driving-at-night-4528/1080p.mp4' // Night Driving
  },
  {
    id: 'flatbed',
    title: 'Flatbed & Step',
    description: 'Maximize your RPM with specialized oversized loads. We understand tarping, strapping, and the complexity of open deck.',
    icon: Layers,
    features: ['Tarp pay negotiation ($100+)', 'Oversize/Overweight permit assistance', 'Project freight & Construction materials', 'High RPM specialized lanes'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-truck-on-a-road-5482/1080p.mp4' // Aerial View
  },
  {
    id: 'power-only',
    title: 'Power Only',
    description: 'Drop and hook efficiency. Use our trailer pool or haul for major carriers without the maintenance headache.',
    icon: Truck,
    features: ['Access to Amazon/UPS trailer pools', 'Reduced loading times', 'Focus on driving, not loading', 'National trailer interchange'],
    image: 'https://images.unsplash.com/photo-1605218439976-96a927c3ba81?auto=format&fit=crop&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-white-truck-driving-down-the-road-5147/1080p.mp4' // White Truck
  }
];

export const Services: React.FC<ServicesProps> = ({ onStartDispatching }) => {
  return (
    <div className="bg-rk-surface">
      {/* Cinematic Header */}
      <div className="bg-rk-navy pt-32 pb-20 text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight">
                The Power Cube.
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                Specialized dispatch teams for every equipment type. We don't just "find loads"—we manage the entire lifecycle of the haul.
            </p>
         </div>
      </div>

      {/* Video Service Blocks */}
      <div className="flex flex-col space-y-1">
        {SERVICES.map((service, idx) => (
          <section key={service.id} className="relative w-full h-[600px] md:h-[700px] overflow-hidden group">
            {/* Background Video Layer */}
            <div className="absolute inset-0 w-full h-full bg-slate-900">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={service.image}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                >
                    <source src={service.videoUrl} type="video/mp4" />
                </video>
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-rk-navy via-rk-navy/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-rk-navy via-transparent to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2">
                    <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
                        {/* Title & Icon */}
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-2xl">
                                <service.icon className="w-10 h-10 text-rk-orange" />
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                                    {service.title}
                                </h2>
                                <div className="h-1 w-20 bg-rk-blue mt-2 rounded-full"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xl text-gray-200 font-light leading-relaxed max-w-lg border-l-4 border-rk-orange pl-6">
                            {service.description}
                        </p>

                        {/* Features List */}
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-lg">
                            <h4 className="font-bold text-white mb-4 flex items-center uppercase tracking-widest text-xs">
                                <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                                Operational Advantages
                            </h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-300 font-medium">
                                        <ArrowRight className="w-4 h-4 text-rk-blue mr-3 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <button 
                            onClick={onStartDispatching}
                            className="group flex items-center bg-white text-rk-navy hover:bg-rk-orange hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                        >
                            Setup {service.title}
                            <PlayCircle className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Equipment Tag */}
            <div className="absolute top-8 right-8 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                    Equipment ID: {service.id.toUpperCase()}
                </span>
            </div>
          </section>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-rk-navy py-24 text-center border-t border-white/10">
          <h2 className="text-4xl font-heading font-bold text-white mb-8">Maximize Your Equipment</h2>
          <button 
             onClick={onStartDispatching}
             className="bg-rk-orange hover:bg-orange-600 text-white px-12 py-6 rounded-xl font-bold text-2xl shadow-2xl shadow-orange-900/40 transition-all hover:-translate-y-1 hover:shadow-orange-900/60"
          >
             Start Dispatching Today
          </button>
      </div>
    </div>
  );
};
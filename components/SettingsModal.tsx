import React, { useState } from 'react';
import { X, Save, Settings, DollarSign, Map, Calendar, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DispatchSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<DispatchSettings>({
    minRate: 2.50,
    maxDeadhead: 100,
    homeTime: 'weekly',
    preferredLanes: ['Midwest', 'Southeast'],
    autoBook: false,
  });

  const [activeTab, setActiveTab] = useState<'general' | 'lanes' | 'rates'>('general');

  const handleSave = () => {
    // In a real app, this would save to a backend
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="bg-rk-navy text-white p-6 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Dispatch Preferences</h3>
                <p className="text-xs text-gray-400">Configure your global dispatch parameters</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/3 bg-slate-50 border-r border-gray-200 p-4 space-y-2">
              <button 
                onClick={() => setActiveTab('general')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex items-center ${activeTab === 'general' ? 'bg-white text-rk-blue shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <Settings className="w-4 h-4 mr-3" /> General
              </button>
              <button 
                onClick={() => setActiveTab('rates')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex items-center ${activeTab === 'rates' ? 'bg-white text-rk-blue shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <DollarSign className="w-4 h-4 mr-3" /> Rates & Money
              </button>
              <button 
                onClick={() => setActiveTab('lanes')}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex items-center ${activeTab === 'lanes' ? 'bg-white text-rk-blue shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <Map className="w-4 h-4 mr-3" /> Lanes
              </button>
            </div>

            {/* Content Area */}
            <div className="w-2/3 p-8 overflow-y-auto">
              
              {activeTab === 'rates' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Minimum Rate Per Mile</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input 
                        type="number" 
                        value={settings.minRate}
                        onChange={(e) => setSettings({...settings, minRate: parseFloat(e.target.value)})}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-rk-blue focus:ring-1 focus:ring-rk-blue outline-none text-lg font-mono font-bold text-rk-navy"
                        step="0.05"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">We will never present loads below this threshold.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Max Deadhead Miles</label>
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      value={settings.maxDeadhead}
                      onChange={(e) => setSettings({...settings, maxDeadhead: parseInt(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rk-blue"
                    />
                    <div className="flex justify-between text-xs font-mono font-bold text-gray-500 mt-2">
                      <span>0 mi</span>
                      <span className="text-rk-blue">{settings.maxDeadhead} mi</span>
                      <span>200 mi</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'general' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">Home Time Preference</label>
                    <div className="grid grid-cols-1 gap-3">
                      {['weekly', 'biweekly', 'monthly'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setSettings({...settings, homeTime: opt as any})}
                          className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                            settings.homeTime === opt 
                              ? 'border-rk-blue bg-blue-50 text-rk-blue' 
                              : 'border-gray-100 hover:border-gray-200 text-gray-600'
                          }`}
                        >
                          <Calendar className="w-5 h-5 mr-3" />
                          <span className="capitalize font-bold">{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div>
                      <h4 className="font-bold text-gray-900">Auto-Book High Value</h4>
                      <p className="text-xs text-gray-500">Automatically book loads over $4.00/mi</p>
                    </div>
                    <button 
                      onClick={() => setSettings({...settings, autoBook: !settings.autoBook})}
                      className={`w-12 h-6 rounded-full transition-colors relative ${settings.autoBook ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                      <div className={`absolute top-1 bottom-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.autoBook ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'lanes' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start">
                    <Map className="w-5 h-5 text-rk-blue mr-3 mt-0.5" />
                    <p className="text-sm text-rk-blue font-medium">
                      Select the regions you prefer to operate in. We prioritize these zones.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {['Midwest', 'Southeast', 'Northeast', 'West Coast', 'Southwest', 'Pacific NW'].map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          const newLanes = settings.preferredLanes.includes(region)
                            ? settings.preferredLanes.filter(l => l !== region)
                            : [...settings.preferredLanes, region];
                          setSettings({...settings, preferredLanes: newLanes});
                        }}
                        className={`p-3 rounded-lg text-sm font-bold border-2 transition-all ${
                          settings.preferredLanes.includes(region)
                            ? 'border-rk-orange bg-orange-50 text-rk-orange'
                            : 'border-gray-100 text-gray-500 hover:border-gray-200'
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 text-gray-500 font-bold hover:text-gray-700 mr-4"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center px-6 py-2.5 bg-rk-navy text-white rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              <Save className="w-4 h-4 mr-2" /> Save Preferences
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
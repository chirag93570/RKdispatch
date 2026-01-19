import React, { useState } from 'react';
import { Truck, User, FileText, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import { TruckType } from '../types';

export const OnboardingWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    truckType: '',
    name: '',
    phone: '',
    email: '',
    mcNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (step === 1 && !formData.truckType) return;
    if (step === 2 && (!formData.name || !formData.phone)) return;
    
    if (step === 3) {
      setTimeout(() => setIsSubmitted(true), 1000);
    } else {
      setStep(step + 1);
    }
  };

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-rk-navy mb-4">Application Received!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A dedicated carrier agent is reviewing your profile. Expect a call from <span className="font-bold text-rk-navy">(555) 123-4567</span> within 15 minutes.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); }}
          className="text-rk-blue font-bold hover:underline"
        >
          Start New Application
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step} of 3</span>
           <span className="text-xs font-bold text-rk-orange">{step === 1 ? 'Equipment' : step === 2 ? 'Contact' : 'Authority'}</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
                className="h-full bg-rk-blue transition-all duration-500 ease-out" 
                style={{ width: `${(step / 3) * 100}%` }}
            ></div>
        </div>
      </div>

      <div className="py-2">
        {/* Step 1: Equipment */}
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
            <h3 className="text-2xl font-bold text-rk-navy flex items-center">
              <Truck className="mr-3 text-rk-orange" /> What do you drive?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(TruckType).map((type) => (
                <button
                  key={type}
                  onClick={() => updateForm('truckType', type)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    formData.truckType === type 
                      ? 'border-rk-blue bg-blue-50 text-rk-blue shadow-lg' 
                      : 'border-gray-100 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  <span className="font-bold">{type}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Contact */}
        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
            <h3 className="text-2xl font-bold text-rk-navy flex items-center">
              <User className="mr-3 text-rk-orange" /> Driver Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-rk-blue focus:ring-0 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-rk-blue focus:ring-0 outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
               <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-rk-blue focus:ring-0 outline-none"
                  placeholder="driver@gmail.com"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Authority */}
        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
            <h3 className="text-2xl font-bold text-rk-navy flex items-center">
              <FileText className="mr-3 text-rk-orange" /> Authority (Optional)
            </h3>
            <p className="text-sm text-gray-500">If you don't have your MC number handy, you can skip this step and we'll look it up later.</p>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">MC Number</label>
                <input 
                  type="text" 
                  value={formData.mcNumber}
                  onChange={(e) => updateForm('mcNumber', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-rk-blue focus:ring-0 outline-none"
                  placeholder="MC-123456"
                />
              </div>
          </div>
        )}

        <div className="mt-10 flex justify-between items-center">
          {step > 1 ? (
            <button 
              onClick={() => setStep(step - 1)}
              className="flex items-center text-gray-500 hover:text-rk-navy font-bold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Back
            </button>
          ) : (
            <div></div>
          )}
          
          <button 
            onClick={handleNext}
            className="flex items-center bg-rk-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-orange-500/20 transition-all hover:translate-x-1"
          >
            {step === 3 ? 'Complete Setup' : 'Next Step'} <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
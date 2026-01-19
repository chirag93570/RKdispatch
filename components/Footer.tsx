import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-rk-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
             <div 
              className="flex items-center space-x-2 mb-6 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
                <div className="bg-rk-orange p-2 rounded-lg">
                  <Truck className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-heading font-extrabold text-white">
                  RK<span className="text-rk-blue">Dispatch</span>
                </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The premier dispatch partner for independent owner-operators. We fight for detention, negotiate higher rates, and handle the paperwork so you can just drive.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rk-blue cursor-pointer transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rk-blue cursor-pointer transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rk-blue cursor-pointer transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li onClick={() => scrollToSection('services')} className="hover:text-rk-orange cursor-pointer">Dry Van Dispatch</li>
              <li onClick={() => scrollToSection('services')} className="hover:text-rk-orange cursor-pointer">Reefer Temp Control</li>
              <li onClick={() => scrollToSection('services')} className="hover:text-rk-orange cursor-pointer">Flatbed / Step Deck</li>
              <li onClick={() => scrollToSection('services')} className="hover:text-rk-orange cursor-pointer">Power Only</li>
              <li onClick={() => scrollToSection('carrier-setup')} className="hover:text-rk-orange cursor-pointer">New Authority Setup</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li onClick={() => scrollToSection('about')} className="hover:text-rk-orange cursor-pointer">About Us</li>
              <li onClick={() => scrollToSection('carrier-setup')} className="hover:text-rk-orange cursor-pointer">Carrier Packet</li>
              <li className="hover:text-rk-orange cursor-pointer opacity-50 cursor-not-allowed" title="Coming Soon">Careers</li>
              <li className="hover:text-rk-orange cursor-pointer opacity-50 cursor-not-allowed" title="Coming Soon">Privacy Policy</li>
              <li className="hover:text-rk-orange cursor-pointer opacity-50 cursor-not-allowed" title="Coming Soon">Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Dispatch</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-rk-orange shrink-0" />
                <span>123 Logistics Blvd, Suite 400<br/>Chicago, IL 60601</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-rk-orange shrink-0" />
                <a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-rk-orange shrink-0" />
                <a href="mailto:loads@rkdispatch.com" className="hover:text-white transition-colors">loads@rkdispatch.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 RK Dispatch Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Profit. Built for Drivers.</p>
        </div>
      </div>
    </footer>
  );
};
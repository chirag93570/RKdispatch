import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../types';

interface HeaderProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activePage !== 'home' ? 'bg-rk-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 group cursor-pointer"
        >
          <div className="bg-rk-orange p-2 rounded-lg group-hover:scale-105 transition-transform">
            <Truck className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-extrabold text-white leading-none tracking-tight">
              RK<span className="text-rk-blue">Dispatch</span>
            </span>
            <span className="text-[10px] text-gray-300 uppercase tracking-widest font-medium">Solutions</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Services', id: 'services' },
            { name: 'About', id: 'about' }
          ].map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleNavClick(item.id as PageView)}
              className={`text-sm font-semibold transition-colors uppercase tracking-wide bg-transparent border-none cursor-pointer ${
                activePage === item.id ? 'text-rk-orange' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA Area */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+18005551234" className="flex items-center text-white hover:text-rk-orange transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="font-bold tracking-wide">24/7 Dispatch</span>
          </a>
          <button 
            onClick={onOpenModal}
            className="bg-rk-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5"
          >
            Start Dispatching
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-rk-navy z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-heading font-bold text-white">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'About', id: 'about' }
              ].map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNavClick(item.id as PageView)}
                  className={`text-2xl font-bold border-b border-gray-800 pb-4 text-left ${
                    activePage === item.id ? 'text-rk-orange' : 'text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="mt-auto">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full bg-rk-orange text-white py-4 rounded-lg font-bold text-lg mb-4"
              >
                Start Dispatching
              </button>
              <a href="tel:+18005551234" className="flex justify-center items-center text-gray-300 font-medium">
                <Phone className="w-5 h-5 mr-2" /> Call 24/7 Dispatch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
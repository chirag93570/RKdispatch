import React, { useState } from 'react';
import { Header } from './components/Header';
import { RateTicker } from './components/RateTicker';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { OnboardingWizard } from './components/OnboardingWizard';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { PageView } from './types';

function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans antialiased text-slate-800 bg-rk-surface pb-20 md:pb-16">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenModal={openModal}
      />
      
      <main className="min-h-screen">
        {/* Page Routing Logic */}
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero onStartDispatching={openModal} setActivePage={setActivePage} />
            <TrustBar />
            {/* Short Services Preview for Home */}
            <Services onStartDispatching={openModal} /> 
          </div>
        )}

        {activePage === 'services' && (
           <div className="animate-in fade-in duration-500">
             <Services onStartDispatching={openModal} />
           </div>
        )}

        {activePage === 'about' && (
          <div className="animate-in fade-in duration-500">
            <About onStartDispatching={openModal} />
          </div>
        )}
      </main>

      <Footer />
      
      {/* Persistent Ticker - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
           <RateTicker />
      </div>
      
      {/* Global Modal for Carrier Setup */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Carrier Application"
      >
        <OnboardingWizard />
      </Modal>

      {/* Sticky Mobile Call Button */}
      <div className="md:hidden fixed bottom-24 left-4 right-4 z-40">
        <a 
          href="tel:+18005551234"
          className="flex items-center justify-center w-full bg-rk-orange text-white font-bold py-4 rounded-xl shadow-2xl shadow-orange-900/40 animate-bounce-slow"
        >
          Call Dispatch Now
        </a>
      </div>
    </div>
  );
}

export default App;
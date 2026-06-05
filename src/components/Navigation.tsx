import { useState } from 'react';
import { Users, Calendar, FlaskConical, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'partners', name: 'Alliance Partners', icon: Users },
    { id: 'objectives', name: 'Objectives', icon: Calendar },
    { id: 'format', name: 'Format & Engagement', icon: FlaskConical },
  ];

  return (
    <div className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto print:hidden">
      <header className="relative w-full rounded-2xl border border-neutral-800 bg-neutral-950/85 shadow-[0_12px_45px_rgba(0,0,0,0.9)] hover:border-neutral-700/80 transition-all duration-300 backdrop-blur-2xl">
        <div className="mx-auto flex h-14 items-center justify-between pl-4 pr-3 py-1.5">
          
          {/* Logo with high-contrast badge */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0" onClick={() => scrollIntoView('overview')}>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white p-1.5 shadow-[0_4px_16px_rgba(255,255,255,0.1)] shrink-0 border border-neutral-200/80 transition-all duration-300 group-hover:scale-105">
              <img
                src="https://rtih.co.in/assets/rtih-logo.svg"
                alt="Ratan Tata Innovation Hub Logo"
                className="h-full w-full object-contain pointer-events-none"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-black tracking-tight text-white uppercase font-sans">
                Ratan Tata Innovation Hub
              </span>
              <span className="block text-[8px] font-black tracking-widest uppercase text-neutral-400 font-mono leading-none mt-0.5">
                Tirupati Node
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollIntoView(item.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Action Trigger Button & Menu Trigger Wrapper */}
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-white hover:border-neutral-700 active:scale-95 transition-all cursor-pointer"
            >
              {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>

        </div>

        {/* Expandable Mobile Navigation Sheet */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/95 shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-3xl md:hidden z-50 pointer-events-auto"
            >
              <div className="p-5 space-y-5">
                {/* Navigation Links */}
                <div className="space-y-1">
                  <span className="block text-[9px] font-black tracking-widest text-neutral-400 font-mono uppercase pb-2 px-1">
                    Navigation Nodes
                  </span>
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollIntoView(item.id)}
                        className={`w-full flex items-center gap-3.5 rounded-xl px-4 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-neutral-800 text-white'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

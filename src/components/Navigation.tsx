import { Compass, Users, Calendar, FlaskConical } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollIntoView = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: Compass },
    { id: 'partners', name: 'Alliance Partners', icon: Users },
    { id: 'objectives', name: 'Objectives', icon: Calendar },
    { id: 'format', name: 'Format & Engagement', icon: FlaskConical },
  ];

  return (
    <div className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto print:hidden">
      <header className="w-full rounded-2xl md:rounded-full border border-neutral-800 bg-neutral-950/85 shadow-[0_12px_40px_rgba(0,0,0,0.85)] hover:border-neutral-700/80 transition-all duration-300 backdrop-blur-2xl">
        <div className="mx-auto flex h-14 items-center justify-between pl-4 pr-3 py-1.5">
          
          {/* Logo with high-contrast badge */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => scrollIntoView('overview')}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1 shadow-sm shrink-0 border border-neutral-200">
              <img
                src="https://rtih.co.in/assets/rtih-logo.svg"
                alt="RTIH Logo"
                className="h-full w-full object-contain pointer-events-none"
                loading="lazy"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-xs sm:text-sm font-black tracking-tight text-white truncate max-w-[120px] min-[400px]:max-w-[150px] sm:max-w-none font-sans uppercase">Ratan Tata Innovation Hub</span>
              <span className="block text-[8px] font-black tracking-widest uppercase text-neutral-400 font-mono leading-none">Tirupati Node</span>
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

          {/* Action Trigger Button (styled exactly like the white pill in the image) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollIntoView('format')}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4.5 py-1.8 text-xs font-bold tracking-tight text-black hover:bg-neutral-200 transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <span>Explore Formats</span>
              <span className="font-semibold text-xs">→</span>
            </button>

            {/* Mobile Nav Trigger Icon shortcuts */}
            <div className="flex md:hidden space-x-0.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollIntoView(item.id)}
                    title={item.name}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-800 text-white'
                        : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

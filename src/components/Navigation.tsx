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
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollIntoView('overview')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1 shadow-lg shadow-white/5 shrink-0">
            <img
              src="https://rtih.co.in/assets/rtih-logo.svg"
              alt="RTIH Logo"
              className="h-full w-full object-contain pointer-events-none"
              loading="lazy"
            />
          </div>
          <div>
            <span className="block text-sm font-extrabold tracking-tight text-white sm:text-base">Ratan Tata Innovation Hub</span>
            <span className="block text-[10px] font-bold tracking-widest uppercase text-amber-400 font-mono">Tirupati Node</span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollIntoView(item.id)}
                className={`relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/[0.03] hover:text-white'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'scale-110' : ''}`} />
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-amber-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile quick-nav buttons - responsive tap zones */}
        <div className="flex md:hidden space-x-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-mob-${item.id}`}
                onClick={() => scrollIntoView(item.id)}
                title={item.name}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white/10 text-amber-400'
                    : 'text-slate-400 hover:bg-white/[0.02]'
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}


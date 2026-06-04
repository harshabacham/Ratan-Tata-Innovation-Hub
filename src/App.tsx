import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import OverviewSection from './components/OverviewSection';
import PartnersSection from './components/PartnersSection';
import ConceptObjectives from './components/ConceptObjectives';
import EventFormat from './components/EventFormat';
import ConclusionSection from './components/ConclusionSection';
import { 
  ArrowRight, Calendar, Sparkles, AlertCircle 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  // Scroll monitoring setup to track active section
  useEffect(() => {
    const sections = ['overview', 'partners', 'objectives', 'format'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for topbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-white ambient-pattern scroll-smooth print:bg-white print:text-black">
      {/* Dynamic Header/Navigation bridge */}
      <div className="print:hidden">
        <Navigation activeSection={activeSection} />
      </div>

      {/* Main Single Page Scrollable Workspace */}
      <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-24 print:space-y-12 print:max-w-none print:px-0 print:py-0">
        
        {/* SECTION 1: MASTER HERO DISPLAY */}
        <section id="overview" className="pt-8 space-y-16 scroll-mt-20 print:pt-0">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.03] bg-black/45 p-8 md:p-16 shadow-2xl print:border-none print:bg-transparent print:p-0 print:shadow-none">
            
            {/* Glowing backdrops - hidden during print */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-500/15 to-rose-500/15 blur-[120px] pointer-events-none print:hidden" />
            <div className="absolute -bottom-24 left-1/3 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[100px] pointer-events-none print:hidden" />

            <div className="relative max-w-4xl space-y-8">
              {/* Event Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/30 px-3.5 py-1.5 text-xs font-bold tracking-wider text-amber-300 backdrop-blur-md uppercase print:border-slate-300 print:text-black print:bg-slate-100">
                <span className="relative flex h-2 w-2 print:hidden">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Ratan Tata Innovation Hub • Flagship Summit
              </div>

              {/* Epic Main Heading with Sleek Typography */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight font-sans print:text-black">
                Tirupati Capital <br />
                <span className="bg-gradient-to-r from-amber-400 via-[#fb7185] to-orange-400 bg-clip-text text-transparent font-black leading-none print:text-black print:bg-none">
                  Connect 2026
                </span>
              </h1>

              {/* Subtitle description with high readability standards */}
              <p className="text-sm md:text-base leading-relaxed text-slate-400 max-w-3xl font-medium print:text-slate-800">
                A high-impact convergence of academic innovation and professional venture capital, designed to transform Tirupati into a central launchpad for the next generation of Indian entrepreneurs.
              </p>

              {/* Action triggers - Hidden during print */}
              <div className="flex flex-wrap gap-4 pt-4 print:hidden">
                <button
                  onClick={() => scrollToElement('objectives')}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6.5 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-amber-500/25 transition-all hover:opacity-95 hover:scale-[1.02] cursor-pointer"
                >
                  Explore Objectives <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Core Overview Section from PDF */}
          <OverviewSection />
        </section>

        {/* SECTION 1.5: ALLIANCE & BRAND PARTNERS */}
        <section id="partners" className="scroll-mt-20 print:scroll-mt-0">
          <PartnersSection />
        </section>

        {/* SECTION 2: EVENT CONCEPT & OBJECTIVES */}
        <section id="objectives" className="scroll-mt-20 print:scroll-mt-0">
          <ConceptObjectives />
        </section>

        {/* SECTION 4: FORMAT OF EVENT & ENAGEMENT */}
        <section id="format" className="scroll-mt-20 print:scroll-mt-0">
          <EventFormat />
        </section>

        {/* SECTION 5: CONCLUSION */}
        <section className="scroll-mt-20 print:scroll-mt-0">
          <ConclusionSection />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.04] bg-slate-950 py-12 mt-20 print:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="block text-sm font-bold text-white tracking-tight uppercase">Tirupati Capital Connect 2026</span>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                Organized by the Ratan Tata Innovation Hub (RTIH) in partnership with Unibazar Technologies Pvt. Ltd., integrating the Pitchin' 180 Seconds power-pitch format.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] font-bold text-amber-400/80 font-mono uppercase tracking-wider">
              <button onClick={() => scrollToElement('overview')} className="hover:text-amber-300 transition-colors cursor-pointer">Overview</button>
              <span>•</span>
              <button onClick={() => scrollToElement('partners')} className="hover:text-amber-300 transition-colors cursor-pointer">Partners</button>
              <span>•</span>
              <button onClick={() => scrollToElement('objectives')} className="hover:text-amber-300 transition-colors cursor-pointer">Objectives</button>
              <span>•</span>
              <button onClick={() => scrollToElement('format')} className="hover:text-amber-300 transition-colors cursor-pointer">Format</button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 font-bold tracking-widest font-mono uppercase">
            <span>© {new Date().getFullYear()} RTIH Tirupati Node. All Rights Reserved.</span>
            <span>Kachchapi Innovation Circle</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

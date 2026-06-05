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
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black ambient-pattern scroll-smooth print:bg-white print:text-black relative overflow-x-hidden">
      
      {/* Immersive Cosmic background layers with drifting deep space nebulae */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 print:hidden select-none">
        {/* Soft elegant glowing orbs */}
        <div className="absolute top-[8%] left-[15%] w-[450px] h-[450px] rounded-full bg-neutral-805 bg-neutral-900/10 blur-[130px] cosmic-nebula-1" />
        <div className="absolute top-[35%] right-[10%] w-[550px] h-[550px] rounded-full bg-neutral-900/10 blur-[160px] cosmic-nebula-2" />
        <div className="absolute top-[65%] left-[20%] w-[400px] h-[400px] rounded-full bg-neutral-800/8 blur-[130px] cosmic-nebula-3" />
        <div className="absolute bottom-[10%] right-[30%] w-[500px] h-[500px] rounded-full bg-neutral-900/5 blur-[150px] cosmic-nebula-1" />
        
        {/* Stars decoration with random positions to eliminate uniformity */}
        <div className="absolute inset-0 opacity-[0.55]">
          <div className="absolute top-[12%] left-[8%] w-1.5 h-1.5 rounded-full bg-white star-interactive" style={{ animationDelay: '0.2s' }} />
          <div className="absolute top-[32%] left-[82%] w-1 h-1 rounded-full bg-white star-interactive" style={{ animationDelay: '1.4s' }} />
          <div className="absolute top-[68%] left-[21%] w-1.5 h-1.5 rounded-full bg-white star-interactive" style={{ animationDelay: '0.8s' }} />
          <div className="absolute top-[84%] left-[76%] w-1 h-1 rounded-full bg-white star-interactive" style={{ animationDelay: '2.5s' }} />
          <div className="absolute top-[48%] left-[14%] w-1 h-1 rounded-full bg-white star-interactive" style={{ animationDelay: '3.1s' }} />
          <div className="absolute top-[72%] left-[64%] w-1.5 h-1.5 rounded-full bg-white star-interactive" style={{ animationDelay: '1.9s' }} />
          <div className="absolute top-[26%] left-[46%] w-1 h-1 rounded-full bg-white star-interactive" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[88%] left-[36%] w-1.5 h-1.5 rounded-full bg-white star-interactive" style={{ animationDelay: '2.1s' }} />
          <div className="absolute top-[6%] left-[68%] w-1 h-1 rounded-full bg-white star-interactive" style={{ animationDelay: '4.2s' }} />
          <div className="absolute top-[52%] left-[91%] w-1.5 h-1.5 rounded-full bg-white star-interactive" style={{ animationDelay: '1.1s' }} />
          
          {/* SVG modern constellation lines/nodes */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <line x1="8%" y1="12%" x2="46%" y2="26%" stroke="white" strokeWidth="1" strokeDasharray="4" />
            <line x1="21%" y1="68%" x2="36%" y2="88%" stroke="white" strokeWidth="1" strokeDasharray="4" />
            <line x1="64%" y1="72%" x2="76%" y2="84%" stroke="white" strokeWidth="1" strokeDasharray="4" />
            <line x1="82%" y1="32%" x2="91%" y2="52%" stroke="white" strokeWidth="1" strokeDasharray="4" />
          </svg>
        </div>
      </div>

      {/* Dynamic Header/Navigation bridge */}
      <div className="print:hidden relative z-10">
        <Navigation activeSection={activeSection} />
      </div>

      {/* Main Single Page Scrollable Workspace */}
      <main className="flex-grow mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-20 print:space-y-12 print:max-w-none print:px-0 print:py-0 relative z-10">
        
        {/* SECTION 1: MASTER HERO DISPLAY */}
        <section id="overview" className="pt-8 sm:pt-14 space-y-12 sm:space-y-20 scroll-mt-24 print:pt-0">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950/20 backdrop-blur-md p-6 sm:p-12 md:p-20 shadow-sm print:border-none print:bg-transparent print:p-0 print:shadow-none">
            
            {/* Minimalistic monochrome backdrop subtle radial points for clean lighting */}
            <div className="absolute top-0 right-1/4 h-[300px] w-[500px] rounded-full bg-gradient-to-b from-neutral-800/10 to-transparent blur-[120px] pointer-events-none print:hidden" />
            <div className="absolute -bottom-12 left-1/4 h-[250px] w-[400px] rounded-full bg-neutral-900/10 blur-[100px] pointer-events-none print:hidden" />

            <div className="relative max-w-5xl mx-auto space-y-8 sm:space-y-10 flex flex-col items-center text-center">
              {/* Event Badge styled like the screenshot's pill */}
              <div className="print:hidden">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-neutral-300">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-400"></span>
                  </span>
                  <span className="truncate tracking-wide">Ratan Tata Innovation Hub &bull; Flagship Summit</span>
                </div>
              </div>

              {/* Epic Centered Main Heading with Space Grotesk Bold and gradient mask styled on both words */}
              <h1 className="text-5xl sm:text-7xl md:text-[140px] font-display tracking-tighter mb-8 leading-[0.85] md:leading-[0.8] mix-blend-difference select-none uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-color)] to-[var(--text-color)]/20 font-display font-bold block">
                  Tirupati.
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-color)] to-[var(--text-color)]/20 font-display font-bold block">
                  Connect 2026.
                </span>
              </h1>

              {/* Subtitle description with high readability standards */}
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-neutral-400 max-w-3xl font-medium print:text-slate-800 font-sans">
                A high-impact convergence of academic innovation and professional venture capital, designed to transform Tirupati into a central launchpad for the next generation of Indian entrepreneurs.
              </p>

              {/* Action triggers - Styled cleanly like Aura++ CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 print:hidden">
                <button
                  onClick={() => scrollToElement('objectives')}
                  className="group inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  Explore Objectives <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToElement('format')}
                  className="group inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-900/50 hover:scale-[1.02] active:scale-95 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Apply Now
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
      <footer className="border-t border-neutral-800 bg-neutral-950 py-12 mt-20 print:hidden shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="block text-sm font-bold text-white tracking-tight uppercase">Tirupati Capital Connect 2026</span>
              <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed font-medium">
                Organized by the Ratan Tata Innovation Hub (RTIH) in partnership with Unibazar Technologies Pvt. Ltd., integrating the Pitchin' 180 Seconds power-pitch format.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] font-black text-neutral-300 font-mono uppercase tracking-wider">
              <button onClick={() => scrollToElement('overview')} className="hover:text-white hover:underline transition-all cursor-pointer">Overview</button>
              <span>•</span>
              <button onClick={() => scrollToElement('partners')} className="hover:text-white hover:underline transition-all cursor-pointer">Partners</button>
              <span>•</span>
              <button onClick={() => scrollToElement('objectives')} className="hover:text-white hover:underline transition-all cursor-pointer">Objectives</button>
              <span>•</span>
              <button onClick={() => scrollToElement('format')} className="hover:text-white hover:underline transition-all cursor-pointer">Format</button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-850 border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-510 text-neutral-500 font-bold tracking-widest font-mono uppercase">
            <span>© {new Date().getFullYear()} RTIH Tirupati Node. All Rights Reserved.</span>
            <span className="text-neutral-400">Kachchapi Innovation Circle</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

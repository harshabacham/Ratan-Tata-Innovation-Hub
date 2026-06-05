import { Sparkles, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConclusionSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-10 md:p-14 shadow-md text-white">
      {/* Decorative clean backing effects */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 h-64 w-64 bg-neutral-900/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 h-64 w-64 bg-neutral-900/10 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-sm">
          <Sparkles className="h-5 w-5" />
        </div>
        
        <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl md:text-3xl font-sans uppercase">
          Conclusion
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-neutral-300 font-semibold max-w-2xl mx-auto">
          By uniting the operational expertise of Unibazar's <strong className="text-white font-extrabold underline decoration-neutral-800">Pitchin' 180 Seconds</strong> with the visionary leadership of the <strong className="text-white font-extrabold underline decoration-neutral-800">Ratan Tata Innovation Hub</strong>, this summit will transform the <strong className="text-white font-extrabold underline decoration-neutral-800">Kachchapi Auditorium</strong> into a vital launchpad. It represents a collective commitment to building India’s innovation economy by empowering founders with the connections and capital they need to scale.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900 text-[10px] font-black text-white uppercase tracking-widest font-mono">
            <GraduationCap className="h-4 w-4" /> Academic-to-Venture Evolution
          </div>
        </div>
      </div>
    </div>
  );
}

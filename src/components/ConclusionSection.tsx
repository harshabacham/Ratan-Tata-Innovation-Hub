import { Sparkles, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConclusionSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-r from-amber-500/5 via-rose-500/5 to-orange-500/5 p-8 md:p-14 shadow-2xl">
      {/* Decorative backing effects */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 h-64 w-64 bg-amber-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 h-64 w-64 bg-orange-500/15 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-600/10">
          <Sparkles className="h-5 w-5" />
        </div>
        
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl font-sans">
          Conclusion
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-slate-300 font-semibold max-w-2xl mx-auto">
          By uniting the operational expertise of Unibazar's <strong className="text-white">Pitchin' 180 Seconds</strong> with the visionary leadership of the <strong className="text-white">Ratan Tata Innovation Hub</strong>, this summit will transform the <strong className="text-white">Kachchapi Auditorium</strong> into a vital launchpad. It represents a collective commitment to building India’s innovation economy by empowering founders with the connections and capital they need to scale.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3 text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">
          <GraduationCap className="h-4 w-4" /> Academic-to-Venture Evolution
        </div>
      </div>
    </div>
  );
}

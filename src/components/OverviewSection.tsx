import { Compass, Calendar, MapPin, Building2, Ticket } from 'lucide-react';
import { motion } from 'motion/react';

export default function OverviewSection() {
  const overviewDetails = [
    { label: 'Organizer', value: 'Ratan Tata Innovation Hub (RTIH)', icon: Building2 },
    { label: 'Co-Organizer', value: 'Unibazar Technologies Pvt. Ltd.', icon: Building2 },
    { label: 'Venue', value: 'Kachchapi Auditorium, Tirupati, Andhra Pradesh', icon: MapPin },
    { label: 'Timeline', value: '20 June 2026', icon: Calendar },
  ];

  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.04] bg-black/40 p-8 md:p-12 shadow-2xl backdrop-blur-md">
        
        {/* Soft elegant ambient glows reminiscent of elite editorial documents */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-80 w-80 rounded-full bg-rose-500/5 blur-[100px] pointer-events-none" />

        <div className="relative space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-950/20 px-3.5 py-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase font-mono">
            <Compass className="h-3.5 w-3.5" /> Launchpad Initiative
          </div>

          <div className="space-y-4">
            <h2 id="what-is-connect" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl font-sans">
              What is Tirupati Capital Connect 2026?
            </h2>
            <p className="text-base leading-relaxed text-slate-350 font-medium max-w-4xl">
              <strong className="text-white font-semibold">Tirupati Capital Connect 2026</strong> is a flagship startup initiative organized by the <strong className="text-white font-semibold">Ratan Tata Innovation Hub (RTIH)</strong>. It is a high-impact convergence of academic innovation and professional venture capital, designed to transform Tirupati into a central launchpad for the next generation of Indian entrepreneurs. By partnering with <strong className="text-white font-semibold">Unibazar Technologies</strong>, the event integrates the proven <strong className="text-white font-semibold">Pitchin' 180 Seconds</strong> power-pitch format to provide founders with a rapid, high-pressure stage to secure investment and mentorship.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Card Grid for Event Overview */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.04] pb-3">
          <Ticket className="h-4 w-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#fb7185] font-mono">Event Overview</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {overviewDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.03] bg-slate-950/50 p-6 shadow-md hover:border-white/[0.08] transition-all group"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/5 text-amber-400 border border-amber-500/10 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                      {detail.label}
                    </span>
                    <span className="block text-xs font-extrabold text-white mt-0.5 leading-tight">
                      {detail.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

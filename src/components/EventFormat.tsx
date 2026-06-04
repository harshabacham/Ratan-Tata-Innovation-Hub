import { Layers, Presentation, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function EventFormat() {
  const formats = [
    {
      title: '1. Pitchathon by Unibazar',
      desc: 'A high-energy session featuring concise, 180-second power pitches that capture investor attention and drive immediate interest.',
      icon: Presentation,
      topics: [],
    },
    {
      title: '2. Masterclass & VC Panel',
      desc: 'An insightful discussion focused on the "Fundraising Lifecycle," covering key structured knowledge domains:',
      icon: BookOpen,
      topics: [
        { title: 'Fundraising Strategy', desc: 'Determining the right time to raise capital and how to approach VCs.' },
        { title: 'Valuation & Metrics', desc: 'Understanding what investors look for in growth-stage companies.' }
      ]
    }
  ];

  return (
    <div className="space-y-16 animate-slide-up">
      {/* Event Format Section */}
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 border-b border-white/[0.04] pb-3">
            <Layers className="h-4.5 w-4.5 text-orange-400" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#fb7185] font-mono">Format of the Event</h3>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed font-semibold">
            The event follows a structured two-part roadmap designed to drive both action and education:
          </p>
        </div>

        {/* Card Grid for Formats */}
        <div className="grid gap-6 md:grid-cols-2">
          {formats.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="rounded-2xl border border-white/[0.03] bg-slate-950 p-5 sm:p-6 md:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/5 text-orange-400 border border-orange-500/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-extrabold text-white">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-slate-350 leading-relaxed font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                {feat.topics.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/[0.04] space-y-4">
                    {feat.topics.map((t, i) => (
                      <div key={i} className="flex gap-3.5 items-start">
                        <span className="h-2 w-2 rounded-full bg-[#fb7185] mt-1.5" />
                        <div>
                          <strong className="block text-sm font-bold text-slate-200 uppercase font-mono tracking-wide">{t.title}</strong>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed">{t.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

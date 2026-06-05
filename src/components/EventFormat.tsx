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
    <div className="space-y-16 animate-slide-up text-white">
      {/* Event Format Section */}
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-3">
            <Layers className="h-4.5 w-4.5 text-white" />
            <h3 className="text-xs font-black uppercase tracking-widest text-white font-mono">Format of the Event</h3>
          </div>
          <p className="text-lg text-neutral-300 leading-relaxed font-semibold">
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
                className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6 md:p-8 space-y-6 flex flex-col justify-between hover:border-white transition-all shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-extrabold text-white uppercase font-sans">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                {feat.topics.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-neutral-800 space-y-4">
                    {feat.topics.map((t, i) => (
                      <div key={i} className="flex gap-3.5 items-start text-left">
                        <span className="h-2 w-2 rounded-full bg-white mt-1.5 shrink-0" />
                        <div>
                          <strong className="block text-sm font-black text-white uppercase font-mono tracking-wide">{t.title}</strong>
                          <p className="text-xs text-neutral-400 font-medium leading-relaxed mt-0.5">{t.desc}</p>
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

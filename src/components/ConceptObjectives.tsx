import { Star, ShieldCheck, Milestone, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConceptObjectives() {
  const primaryGoals = [
    {
      title: 'Catalyze Funding',
      desc: 'Provide a direct stage for curated founders to pitch to leading Venture Capital firms and Angel networks.',
    },
    {
      title: 'Knowledge Transfer',
      desc: 'Equip entrepreneurs with the technical "how-to" of fundraising through expert-led masterclasses.',
    },
    {
      title: 'Ecosystem Strengthening',
      desc: 'Solidify the region’s position as a startup hub by connecting regional spokes to the central RTIH infrastructure.',
    },
  ];

  return (
    <div className="space-y-10 text-white">
      {/* Concept Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-3">
          <Lightbulb className="h-4 w-4 text-white" />
          <h3 className="text-xs font-black uppercase tracking-widest text-white font-mono">Event Concept</h3>
        </div>
        <p className="text-base text-neutral-305 text-neutral-300 leading-relaxed font-semibold">
          The event serves as a strategic bridge between the innovative spirit of academic-led startups and the pragmatic world of venture capital.
        </p>
      </div>

      {/* Purpose block styled as a premium quote/callout block */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6 md:p-8 shadow-sm">
        <div className="absolute top-0 right-0 h-40 w-40 bg-neutral-900/40 blur-3xl pointer-events-none" />
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black border border-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="space-y-2 min-w-0">
            <span className="block text-[10px] font-black text-white uppercase tracking-widest font-mono">
              Event Purpose
            </span>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 font-bold leading-relaxed">
              To create a high-density networking environment where local innovation is validated by national-level investors, leveraging the institutional credibility of the Ratan Tata Innovation Hub.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Goals Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-3">
          <Milestone className="h-4 w-4 text-white" />
          <h3 className="text-xs font-black uppercase tracking-widest text-white font-mono">Primary Goals</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6 space-y-4 hover:border-white hover:shadow-2xl transition-all group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white border border-neutral-800 group-hover:bg-white group-hover:text-black transition-all">
                <Star className="h-4 w-4" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-black text-white uppercase tracking-wider font-sans">
                  {goal.title}
                </h4>
                <p className="text-xs leading-relaxed text-neutral-450 text-neutral-400 font-medium font-sans">
                  {goal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

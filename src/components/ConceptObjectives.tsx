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
    <div className="space-y-10">
      {/* Concept Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-b border-white/[0.04] pb-3">
          <Lightbulb className="h-4 w-4 text-orange-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#fb7185] font-mono">Event Concept</h3>
        </div>
        <p className="text-base text-slate-350 leading-relaxed font-medium">
          The event serves as a strategic bridge between the innovative spirit of academic-led startups and the pragmatic world of venture capital.
        </p>
      </div>

      {/* Purpose block styled as a premium quote/callout block */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-950/5 p-6 md:p-8">
        <div className="absolute top-0 right-0 h-40 w-40 bg-amber-500/5 blur-3xl pointer-events-none" />
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">
              Event Purpose
            </span>
            <p className="text-sm md:text-base text-slate-100 font-semibold leading-relaxed">
              To create a high-density networking environment where local innovation is validated by national-level investors, leveraging the institutional credibility of the Ratan Tata Innovation Hub.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Goals Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.04] pb-3">
          <Milestone className="h-4 w-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#fb7185] font-mono">Primary Goals</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {primaryGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-white/[0.03] bg-slate-950/40 p-6 space-y-4 hover:border-amber-500/20 hover:bg-slate-950/80 transition-all group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/5 text-orange-400 border border-orange-500/10 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-black transition-all">
                <Star className="h-4 w-4" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {goal.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-400 font-medium">
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

import { Compass, Calendar, MapPin, Building2, Ticket, Award, Users, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function OverviewSection() {
  const overviewDetails = [
    {
      label: 'Organizer',
      value: 'Ratan Tata Innovation Hub (RTIH)',
      desc: 'Driving central state-led startup incubation, policy framework, & global acceleration.',
      icon: Building2,
      badge: 'State Flagship',
      color: 'border-amber-500/20 text-amber-400 bg-amber-500/5 hover:border-amber-400/50 hover:shadow-amber-500/5'
    },
    {
      label: 'Co-Organizer',
      value: 'Unibazar Technologies Pvt. Ltd.',
      desc: 'Pioneering transaction architectures, investor networking, and high-impact pitchathons.',
      icon: Zap,
      badge: 'Ecosystem Partner',
      color: 'border-rose-500/20 text-rose-400 bg-rose-500/5 hover:border-rose-400/50 hover:shadow-rose-500/5'
    },
    {
      label: 'Venue',
      value: 'Kachchapi Auditorium',
      desc: 'Tirupati, Andhra Pradesh. The region’s premier technological & cultural arena.',
      icon: MapPin,
      badge: 'Central Arena',
      color: 'border-orange-500/20 text-orange-400 bg-orange-500/5 hover:border-orange-400/50 hover:shadow-orange-500/5'
    },
    {
      label: 'Timeline',
      value: '20 June 2026',
      desc: 'Single-day high-density convergence starting from 09:00 AM sharply.',
      icon: Calendar,
      badge: 'Live Summit',
      color: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:border-emerald-400/50 hover:shadow-emerald-500/5'
    },
  ];

  const valuePillars = [
    {
      title: 'Venture Capital Pools',
      desc: 'Direct interaction with leading VC firms and Angel Syndicates eager to invest in localized innovations.',
      icon: Award
    },
    {
      title: '180-Sec Power Pitches',
      desc: 'High-octane Pitchathon format forcing absolute focus, extreme utility validation, and rapid on-the-spot feedback.',
      icon: Lightbulb
    },
    {
      title: 'Academia-to-Venture',
      desc: 'Bridging the deep research labs of IIT Tirupati, IISER, and Sree Vidyanikethan into commercialized assets.',
      icon: Users
    }
  ];

  return (
    <div className="space-y-16">
      {/* Dynamic Intro Card - Scaled and Enhanced for massive prominence */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-slate-950 to-black p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-md">
        
        {/* Intricate high-end background gradient lights */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-500/10 via-[#fb7185]/5 to-transparent blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-orange-500/10 via-rose-500/5 to-transparent blur-[130px] pointer-events-none" />
        
        <div className="relative space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1.5 text-xs font-bold tracking-widest text-amber-400 uppercase font-mono">
              <Compass className="h-4 w-4 animate-spin-slow" /> Strategic Convergence
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
              ★ Premium Summit
            </span>
          </div>

          {/* Master Section Header */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="space-y-6 lg:col-span-7">
              <h2 id="what-is-connect" className="text-3xl min-[450px]:text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight font-sans">
                What is <span className="bg-gradient-to-r from-amber-400 via-[#fb7185] to-orange-400 bg-clip-text text-transparent">Tirupati Capital Connect?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 font-medium">
                <strong className="text-white font-semibold">Tirupati Capital Connect 2026</strong> serves as the preeminent strategic launchpad uniting academic intellectual property with national asset allocators. 
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-normal">
                Organized by the <strong className="text-white font-semibold">Ratan Tata Innovation Hub (RTIH)</strong> in alliance with <strong className="text-white font-semibold">Unibazar Technologies</strong>, this high-stakes summit leverages the state-of-the-art <strong className="text-amber-400 font-semibold">Pitchin' 180 Seconds</strong> format. We challenge regional prodigies to boil years of hardware and scientific research into rapid, investable business cases presented direct to top-tier institutional funds.
              </p>
            </div>

            {/* Scale aspect: High-end side visual highlight blocks showing why this matters */}
            <div className="lg:col-span-5 space-y-4 pt-4 lg:pt-0">
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02]/40 backdrop-blur-sm p-1">
                <div className="p-5 space-y-5">
                  <span className="block text-[10px] font-black tracking-widest text-[#fb7185] uppercase font-mono">
                    Summit Pillars &amp; Key Focus
                  </span>
                  
                  <div className="space-y-4">
                    {valuePillars.map((pillar, idx) => {
                      const PIcon = pillar.icon;
                      return (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-400 border border-amber-500/20">
                            <PIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                            <p className="text-xs text-slate-450 mt-0.5 leading-relaxed text-slate-400">{pillar.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Card Grid for Event Overview - Significantly enlarged and made highly premium */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <Ticket className="h-5 w-5 text-amber-400" />
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#fb7185] font-mono">
              Core Event Intelligence
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-mono font-medium">Click on nodes to highlight focus fields</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {overviewDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group shadow-lg ${detail.color}`}
              >
                {/* Glowing edge backdrop shadow */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-white/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-white/[0.05]" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-[#fb7185] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest font-mono uppercase px-2.5 py-1 rounded-md bg-white/[0.04] text-white">
                      {detail.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="block text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest font-mono">
                      {detail.label}
                    </span>
                    <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors">
                      {detail.value}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mt-2 pt-2 border-t border-white/[0.03]">
                      {detail.desc}
                    </p>
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

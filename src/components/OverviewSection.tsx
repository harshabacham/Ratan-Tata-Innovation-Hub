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
      color: 'border-teal-500/20 text-teal-400 bg-teal-500/5 hover:border-teal-400/50 hover:shadow-teal-500/5'
    },
    {
      label: 'Co-Organizer',
      value: 'Unibazar Technologies Pvt. Ltd.',
      desc: 'Pioneering transaction architectures, investor networking, and high-impact pitchathons.',
      icon: Zap,
      badge: 'Ecosystem Partner',
      color: 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5 hover:border-indigo-400/50 hover:shadow-indigo-500/5'
    },
    {
      label: 'Venue',
      value: 'Kachchapi Auditorium',
      desc: 'Tirupati, Andhra Pradesh. The region’s premier technological & cultural arena.',
      icon: MapPin,
      badge: 'Central Arena',
      color: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5 hover:border-cyan-400/50 hover:shadow-cyan-500/5'
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
      <div className="relative overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950/20 backdrop-blur-md p-8 sm:p-12 md:p-16 shadow-2xl">
        
        {/* Intricate high-end background gradient lights - Monochromatic */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-neutral-800/10 via-neutral-900/5 to-transparent blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-zinc-900/10 via-neutral-900/5 to-transparent blur-[130px] pointer-events-none" />
        
        <div className="relative space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/40 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase font-mono">
              <Compass className="h-4 w-4 animate-spin-slow text-white" /> Strategic Convergence
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-xs font-bold tracking-widest text-[#a3a3a3] uppercase font-mono">
              ★ Premium Summit
            </span>
          </div>

          {/* Master Section Header */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="space-y-6 lg:col-span-7">
              <h2 id="what-is-connect" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tighter text-white leading-[0.95] mb-6 uppercase">
                What is<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[var(--text-color)] to-[var(--text-color)]/20 font-display font-bold">
                  Capital Connect?
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-300 font-medium font-sans">
                <strong className="text-white font-semibold">Tirupati Capital Connect 2026</strong> serves as the preeminent strategic launchpad uniting academic intellectual property with national asset allocators. 
              </p>
              <p className="text-sm leading-relaxed text-neutral-400 font-normal font-sans">
                Organized by the <strong className="text-white font-semibold">Ratan Tata Innovation Hub (RTIH)</strong> in alliance with <strong className="text-white font-semibold">Unibazar Technologies</strong>, this high-stakes summit leverages the state-of-the-art <strong className="text-white font-extrabold uppercase font-mono">Pitchin' 180 Seconds</strong> format. We challenge regional prodigies to boil years of hardware and scientific research into rapid, investable business cases presented direct to top-tier institutional funds.
              </p>
            </div>

            {/* Scale aspect: High-end side visual highlight blocks showing why this matters */}
            <div className="lg:col-span-5 space-y-4 pt-4 lg:pt-0">
              <div className="rounded-2xl border border-neutral-900 bg-neutral-950/30 backdrop-blur-md p-1">
                <div className="p-6 space-y-6">
                  <span className="block text-[10px] font-black tracking-widest text-[#a3a3a3] uppercase font-mono">
                    Summit Pillars &amp; Key Focus
                  </span>
                  
                  <div className="space-y-5">
                    {valuePillars.map((pillar, idx) => {
                      const PIcon = pillar.icon;
                      return (
                        <div key={idx} className="flex gap-4 items-start p-2 rounded-xl hover:bg-neutral-900/10 transition-colors">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-black font-semibold shadow-sm">
                            <PIcon className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase font-sans tracking-tight">{pillar.title}</h4>
                            <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans">{pillar.desc}</p>
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
      {/* Structured Bento Grid for Event Overview - Redesigned with custom bento-span logic, hover highlights & rich visual grids inspired by 21st.dev */}
      <div className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <Ticket className="h-5 w-5 text-white" />
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-white font-mono">
              Core Event Intelligence
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs text-neutral-400 font-mono font-medium">Applications Live</span>
          </div>
        </div>

        {/* Custom Bento Layout Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          
          {/* 1. ORGANIZER BENTO BLOCK (Wide Span) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative lg:col-span-4 sm:col-span-2 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] shadow-sm"
          >
            {/* Glowing spot background */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none group-hover:bg-neutral-800 transition-colors" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white" />
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black group-hover:scale-105 transition-transform">
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest font-mono uppercase px-3 py-1.5 rounded-full bg-neutral-900 text-white border border-neutral-800">
                  State Flagship
                </span>
              </div>

              <div className="space-y-3">
                <span className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest font-mono">
                  Organizer
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-white transition-colors">
                  Ratan Tata Innovation Hub (RTIH)
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed max-w-2xl font-sans">
                  Driving central state-led startup incubation schemes, dynamic policymaking frameworks, and direct lines of acceleration to premium national seed funding.
                </p>
              </div>

              {/* Incremental micro bento specifications to look highly designed */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="space-y-1">
                  <span className="block text-neutral-500 font-mono text-[10px] uppercase font-bold">Key Mandate</span>
                  <p className="text-neutral-200 font-semibold">Decentralized Incubation</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-neutral-500 font-mono text-[10px] uppercase font-bold">State Scope</span>
                  <p className="text-neutral-200 font-semibold">Tirupati - Hub Node</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. CO-ORGANIZER BENTO BLOCK (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:col-span-2 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] shadow-sm"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none group-hover:bg-neutral-800 transition-colors" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white" />

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black group-hover:scale-105 transition-transform">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest font-mono uppercase px-3 py-1.5 rounded-full bg-neutral-900 text-white border border-neutral-800">
                  Co-Organizer
                </span>
              </div>

              <div className="space-y-3">
                <span className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest font-mono">
                  Operational Partner
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white leading-snug group-hover:text-white transition-colors">
                  Unibazar Technologies
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
                  Pioneering direct commercial transaction architectures, investor alignment, and robust pitch pipeline management.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. VENUE BENTO BLOCK (Standard Split Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative lg:col-span-3 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] shadow-sm"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none group-hover:bg-neutral-800 transition-colors" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white" />

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black group-hover:scale-105 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-black tracking-widest font-mono uppercase px-3 py-1.5 rounded-full bg-neutral-900 text-white border border-neutral-800">
                  Central Arena
                </span>
              </div>

              <div className="space-y-3">
                <span className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest font-mono">
                  Location Venue
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white leading-snug group-hover:text-white transition-colors">
                  Kachchapi Auditorium
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
                  Located inside prestigious Tirupati networks. The prime modern arena supporting multi-speaker panel staging, deep research demo stations, and state networking lounges.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. TIMELINE BENTO BLOCK (Standard Split Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative lg:col-span-3 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] shadow-sm"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none group-hover:bg-neutral-800 transition-colors" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white" />

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black group-hover:scale-105 transition-transform">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-white border border-neutral-800">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-[10px] font-black tracking-widest font-mono uppercase text-white font-extrabold">
                    20 June 2026
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="block text-[10px] font-black text-neutral-400 uppercase tracking-widest font-mono">
                  Date Schedule
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white leading-snug group-hover:text-white transition-colors">
                  Single-Day High Density
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed">
                  Locking in schedules sharply at 09:00 AM on June 20, 2026. Includes interactive panel presentations, Pitchathon live rounds, and structured investor 1-on-1 luncheons.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

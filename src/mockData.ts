import { Partner, EventDetails, ResearchInitiative } from './types';

// Corporate & Knowledge Partners data
export const partners: Partner[] = [
  // Corporate Partners
  {
    id: 'adani',
    name: 'Adani Group',
    type: 'corporate',
    description: 'A global integrated infrastructure conglomerate focused on green energy, sustainable logistics, port development, and automated shipping networks.',
    logoText: 'ADANI',
    themeColor: '#0F2942', // Deep navy
    keyProjectsCount: 4,
    focusAreas: ['Green Hydrogen Logistics', 'Smart Port Grid Networks', 'Automated Rail Freight Systems', 'Industrial Drone Interceptors'],
    headquarters: 'Ahmedabad, India',
    website: 'https://www.adani.com'
  },
  {
    id: 'navayuga',
    name: 'Navayuga Group',
    type: 'corporate',
    description: 'A premier engineering and core infrastructure pioneer leading mega structures, precision marine foundations, smart expressway networks, and deep-sea port systems.',
    logoText: 'NAVAYUGA',
    themeColor: '#1A4D2E', // Forest green
    keyProjectsCount: 3,
    focusAreas: ['Precision Marine Foundations', 'High-Longevity Composite Cements', 'Intelligent Expressway Routing', 'Dynamic Ocean-Silt Monitors'],
    headquarters: 'Hyderabad, India',
    website: 'http://www.navayuga.com'
  },
  {
    id: 'amararaja',
    name: 'Amara Raja Group',
    type: 'corporate',
    description: 'An advanced technology and energy storage powerhouse championing lithium-ion and sodium-ion innovations, automotive electrification, and micro-grid designs.',
    logoText: 'AMARA RAJA',
    themeColor: '#781515', // Copper/Crimson red
    keyProjectsCount: 5,
    focusAreas: ['Sodium-ion Cell Chemistries', 'Battery Swapping Architectures', 'BMS (Battery Management Systems)', 'Solar Micro-Grid Integrations'],
    headquarters: 'Tirupati, India',
    website: 'https://www.amararaja.com'
  },
  // Knowledge Partners
  {
    id: 'iit-tirupati',
    name: 'IIT Tirupati',
    type: 'knowledge',
    description: 'A premier autonomous Institute of National Importance bringing state-of-the-art computational fluid dynamics, engineering excellence, and precision smart systems.',
    logoText: 'IIT TIRUPATI',
    themeColor: '#075985', // Sky blue-dark
    keyProjectsCount: 6,
    focusAreas: ['Structural Health Monitoring', 'AI-assisted Power Distribution', 'Edge Computing Architectures', 'Subsea Drone Simulation'],
    headquarters: 'Tirupati, Andhra Pradesh',
    website: 'https://iittp.ac.in'
  },
  {
    id: 'iiser-tirupati',
    name: 'IISER Tirupati',
    type: 'knowledge',
    description: 'An autonomous institute dedicated to revolutionary basic sciences, molecular cell dynamics, chemical catalysis, and bio-sensors for sustainable environmental modeling.',
    logoText: 'IISER TIRUPATI',
    themeColor: '#4338CA', // Indigo
    keyProjectsCount: 4,
    focusAreas: ['Advanced Quantum Materials', 'Bio-inspired Materials & Catalysis', 'Enzymatic Solid Waste Recyclers', 'Micro-Fluidic Salinity Sensors'],
    headquarters: 'Tirupati, Andhra Pradesh',
    website: 'http://www.iisertirupati.ac.in'
  }
];

// Tirupati Capital Connect 2026 Details
export const tirupatiCapitalConnect: EventDetails = {
  id: 'capital-connect-2026',
  title: 'Tirupati Capital Connect 2026',
  subtitle: 'High-Impact Academic-to-Venture Convergence',
  organizer: 'Ratan Tata Innovation Hub (RTIH)',
  coOrganizer: 'Unibazar Technologies Pvt. Ltd.',
  venue: 'Kachchapi Auditorium, Tirupati, Andhra Pradesh',
  date: '20 June 2026',
  concept: 'Tirupati Capital Connect 2026 is a flagship startup initiative designed to act as a strategic bridge between the academic innovative spirit of top-tier institutes and the pragmatic, decisive world of venture capitals. Integrating Unibazar Technologies\' Pitchin\' 180 Seconds power-pitch format, it transforms academic research into fundable enterprise milestones.',
  primaryGoals: [
    { title: 'Catalyze Funding', desc: 'Secure direct funding stages with leading venture capital firms and angel networks for hand-picked startup founders.' },
    { title: 'Knowledge Transfer', desc: 'Equip budding student-founders and researchers with expert-led masterclasses on valuation techniques and legal fundraising frameworks.' },
    { title: 'Ecosystem Strengthening', desc: 'Connect regional innovation spokes directly into the central RTIH infrastructure, establishing a powerful sustainable launchpad.' }
  ],
  targetAudience: [
    { group: 'Startup Founders (Early & Growth Stage)', focus: 'Seeking strategic mentorship, early validation, seed funding, and corporate synergy pathways.' },
    { group: 'Angel Investors & Micro VCs', focus: 'Eager to identify high-growth, technically complex breakthroughs in deeptech, energy, and agritech sectors.' },
    { group: 'Incubation Partners & Scholars', focus: 'Aiming to foster high-potential business spin-offs of academic lab research projects.' }
  ],
  format: [
    { type: 'Pitchathon by Unibazar', details: 'A fast-paced, high-pressure session featuring 180-second power pitches where founders showcase raw prototype utility directly to tier-1 decision-makers.' },
    { type: 'Masterclass & VC Panel', details: 'Insightful interactive discussions mapping the entire Fundraising Lifecycle, addressing strategic entry times and metric valuation benchmarks.' }
  ],
  audienceEngagement: [
    { platform: 'Academic Network Reach', metric: 'Leveraging a combined student database of 50k+ across partner networks to identify deep-tech breakthroughs.' },
    { platform: 'Hub & Spoke Model', metric: 'Securing active regional participation across all regional centers in the state for a diverse representation.' },
    { platform: 'Strategic Media Branding', metric: 'State-wide press releases and live highlight streams amplifying successful startup trajectories on a national level.' }
  ],
  timeline: [
    { time: '09:00 AM - 09:30 AM', title: 'Registrations & Welcome Networking', description: 'Collection of registration kits at Kachchapi Lobby, with networking over coffee.' },
    { time: '09:30 AM - 10:15 AM', title: 'Inaugural Address & Guest Speech', speaker: 'Director of RTIH & Dignitaries', description: 'Opening speech outlining the mission and core alignment goals of the Hub.' },
    { time: '10:15 AM - 12:30 PM', title: 'Unibazar Pitchathon: 180-Sec Power Pitches', speaker: 'Pitching Startup Cohorts', description: 'Rapid, high-stakes startup pitches directly to VCs and angel pools.' },
    { time: '12:30 PM - 01:30 PM', title: 'Networking Lunch & Prototype Interactive Exponent', description: 'Catered buffet lunch with live tech prototype demonstrations from scholars.' },
    { time: '01:30 PM - 03:00 PM', title: 'Masterclass: Demystifying the Fundraising Lifecycle', speaker: 'VC Panelists & Unibazar Mentors', description: 'In-depth interactive training on pre-seed metrics, standard terms sheets, and evaluation standards.' },
    { time: '03:15 PM - 04:30 PM', title: 'VC Roundtable: Investment Hypotheses in Core Sectors', speaker: 'General Partners', description: 'Direct discussion on future-proofing energy, agritech, and deep infrastructure systems.' },
    { time: '04:30 PM - 05:00 PM', title: 'Award Ceremony & Catalyst Funding Awards', description: 'Distribution of pilot grants, incubator nominations, and concluding vote of thanks.' }
  ]
};

// Initial Sample Research Initiatives
export const initialResearchInitiatives: ResearchInitiative[] = [
  {
    id: 'res-1',
    title: 'Solid-State Sodium Battery Architectures',
    description: 'Cooperative scaling research utilizing IISER Tirupati\'s molecular chemistry depth and Amara Raja\'s massive battery manufacturing pipelines to construct safer, stable solid-state sodium alternatives for public transit micro-mobility.',
    category: 'Energy & Storage',
    leadCorporateId: 'amararaja',
    leadAcademicId: 'iiser-tirupati',
    status: 'Active',
    objectives: [
      'Eliminate dendrite growth in sodium-metal anodes over 1500 charge cycles.',
      'Achieve specific energy density exceeding 220 Wh/kg in solid electrolytes.',
      'Design modular cell casing suitable for heavy duty battery-swapping systems.'
    ],
    milestones: [
      'Q2 2026: Synthesis of customized flexible organic-composite solid electrolytes (Completed)',
      'Q4 2026: Laboratory coin cell fabrication & multi-rate cycling assessment (Active)',
      'Q2 2027: Integration of 1 kWh test pouch-cell into Amara Raja prototype rig (Planned)'
    ]
  },
  {
    id: 'res-2',
    title: 'Green Hydrogen Logistics & Port Automation Girders',
    description: 'An ambition-level infrastructure alignment integrating Adani\'s state-of-the-art robotic deep-sea ports with IIT Tirupati\'s mathematical modeling to safely handle and route automated green hydrogen transfer networks.',
    category: 'Logistics & Green Energy',
    leadCorporateId: 'adani',
    leadAcademicId: 'iit-tirupati',
    status: 'Active',
    objectives: [
      'Simulate real-time fluid leakage of cryogenic liquid H2 during automated robotic transfer.',
      'Build localized IoT gas-sensing optical mesh structures running on solar grids.',
      'Optimize robotic arm scheduling algorithms to reduce refueling cycle times by 30%.'
    ],
    milestones: [
      'Q1 2026: Full 3D CFD models simulating liquid hydrogen loading conditions (Completed)',
      'Q3 2026: Field testing of optical sensor mesh prototype (Active)',
      'Q1 2027: Automated cargo hook controller deployment at trial hangar (Planned)'
    ]
  },
  {
    id: 'res-3',
    title: 'Dynamic Ocean-Silt & Foundation Longevity Tracking',
    description: 'Harnessing IISER Tirupati\'s marine micro-biology research to monitor organic corrosion structures, and IIT Tirupati\'s structural health sensors, enabling Navayuga Group to track concrete integrity of deep marine pile infrastructures.',
    category: 'Smart Infrastructure',
    leadCorporateId: 'navayuga',
    leadAcademicId: 'iit-tirupati',
    status: 'Proposed',
    objectives: [
      'Map specific localized microbial families causing biochemical carbonation of subsea concrete.',
      'Develop self-healing bacterial additives activated by microscopic cracks in cement.',
      'Install wireless acoustic emission sensors for continuous tracking on harbor walls.'
    ],
    milestones: [
      'Q4 2026: Isolate microbial corrosion catalyst from Tirupati-area soil/sea interfaces (Proposed)',
      'Q2 2027: Laboratory test batches of concrete composite samples with Bio-healing agents (Proposed)',
      'Q4 2027: Anchor-wall test deployment at a deep-water port terminal (Proposed)'
    ]
  }
];

/**
 * Types and interfaces for the Ratan Tata Innovation Hub (Tirupati) Showcase Application
 */

export interface Partner {
  id: string;
  name: string;
  type: 'corporate' | 'knowledge';
  description: string;
  logoText: string;
  themeColor: string;
  keyProjectsCount: number;
  focusAreas: string[];
  headquarters?: string;
  website?: string;
}

export interface TimelineSlot {
  time: string;
  title: string;
  speaker?: string;
  description: string;
}

export interface EventDetails {
  id: string;
  title: string;
  subtitle: string;
  organizer: string;
  coOrganizer: string;
  venue: string;
  date: string;
  concept: string;
  primaryGoals: { title: string; desc: string }[];
  targetAudience: { group: string; focus: string }[];
  format: { type: string; details: string }[];
  audienceEngagement: { platform: string; metric: string }[];
  timeline: TimelineSlot[];
}

export interface ResearchInitiative {
  id: string;
  title: string;
  description: string;
  category: string;
  leadCorporateId: string;
  leadAcademicId: string;
  status: 'Active' | 'Proposed' | 'Completed';
  objectives: string[];
  milestones: string[];
}

export interface SynergyResponse {
  proposedTitle: string;
  executiveSummary: string;
  alignmentRating: number; // 1 to 5
  suggestedCorporateLead: string;
  suggestedAcademicLead: string;
  technicalRoadmap: { phase: string; actions: string[] }[];
  societalImpact: string;
  fundingViabilityScore: number; // Percentage, e.g. 85
  keyMilestones: string[];
}

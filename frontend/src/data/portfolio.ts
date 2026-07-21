// All site content in one place so components stay presentational.
// Mirrors backend/src/data/portfolio.js — keep the two in sync.

export interface Stat {
  num: number
  prefix?: string
  suffix?: string
  label: string
}

export interface Profile {
  name: string
  studio: string
  roles: string[]
  headline: string
  tagline: string
  summary: string
  location: string
  availability: string
  stats: Stat[]
}

export interface Service {
  icon: 'ai' | 'web' | 'data' | 'cloud'
  title: string
  blurb: string
  tags: string[]
}

export interface ProcessStep {
  step: string
  title: string
  blurb: string
}

export interface Project {
  title: string
  kind: string
  year: string
  description: string
  stack: string[]
  metrics: string[]
  links: { label: string; href: string }[]
  featured: boolean
}

export interface SkillGroup {
  group: string
  items: string[]
}

export const GITHUB_URL = 'https://github.com/Rishabh-Pagaria'
export const LINKEDIN_URL = 'https://linkedin.com/in/rishabhpagaria'
export const EMAIL = 'rpagaria2000@gmail.com'
export const SITE_URL = 'https://rishabh-pagaria.github.io/rishabhv2/'

export const PROFILE: Profile = {
  name: 'Rishabh Pagaria',
  studio: 'brewcase',
  roles: ['web apps', 'AI features', 'data pipelines', 'cloud deploys'],
  headline: 'Software & AI, built to ship.',
  tagline:
    'A one-person software & AI studio. I help startups and teams design, build, and launch products that actually make it to production.',
  summary:
    "I'm Rishabh — an engineer with an M.S. in Computer Science from Texas A&M and 4+ years shipping production systems. I've built secure multi-tenant SaaS, fine-tuned LLMs on A100 clusters, and moved 50TB+ through data pipelines. brewcase is how I bring that to your project: senior engineering, clear communication, no black boxes.",
  location: 'Texas, USA · Remote',
  availability: 'Available for new projects',
  stats: [
    { num: 4, suffix: '+', label: 'years shipping production' },
    { num: 50, suffix: 'TB+', label: 'data pipelined' },
    { num: 70, suffix: '%', label: 'avg. time saved for clients' },
    { num: 2, suffix: '', label: 'published research papers' },
  ],
}

// Past roles reframed as credibility — a trust bar, not a résumé section.
export const TRUSTED_BY = ['Quantiphi', 'Texas A&M', 'Bizmetric', 'AGGIES Lab']

export const SERVICES: Service[] = [
  {
    icon: 'ai',
    title: 'AI & LLM Integration',
    blurb:
      'RAG systems, chatbots, and fine-tuned models wired into your product. From prototype to a feature your users actually rely on.',
    tags: ['LLMs', 'RAG', 'LoRA / QLoRA', 'Gemini · OpenAI'],
  },
  {
    icon: 'web',
    title: 'Full-Stack Web Apps',
    blurb:
      'Fast, typed React / Next.js front ends on clean APIs. MVPs that ship in weeks and scale when you grow.',
    tags: ['React', 'Next.js', 'TypeScript', 'FastAPI · Express'],
  },
  {
    icon: 'data',
    title: 'Data Engineering',
    blurb:
      'Pipelines, warehouses, and ETL that turn raw data into decisions — reliable, observable, and cost-aware.',
    tags: ['BigQuery', 'Snowflake', 'Airflow', 'PySpark'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    blurb:
      'Containerized, secure, CI/CD-driven deployments on GCP, Azure, or AWS. Your app, running reliably without babysitting.',
    tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'GCP · Azure · AWS'],
  },
]

export const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    blurb: 'We scope the problem, define what success looks like, and agree on a plan and timeline — before a line of code.',
  },
  {
    step: '02',
    title: 'Build in the open',
    blurb: 'Weekly demos, clean code, and honest updates. You see real progress every week — never a black box.',
  },
  {
    step: '03',
    title: 'Ship & support',
    blurb: 'Tested, documented, and deployed. I stick around to make sure it lands and hands off cleanly.',
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Rakuun',
    kind: 'GenAI · Browser Extension',
    year: '2025',
    description:
      'Chrome extension that generates personalized professional emails from webpage content with Google Gemini — cutting drafting time by 70%. Supabase auth with token refresh, PostgreSQL schemas, and prompt caching for +15% inference throughput.',
    stack: ['Next.js', 'TypeScript', 'Google Gemini', 'Supabase', 'PostgreSQL'],
    metrics: ['−70% drafting time', '+15% throughput'],
    links: [{ label: 'GitHub', href: GITHUB_URL }],
    featured: true,
  },
  {
    title: 'EventNXT',
    kind: 'Full-Stack · Agile Team',
    year: '2025',
    description:
      'Event management platform modernizing a legacy codebase with a 7-member Agile team. RSVP tracking and guest management cut manual coordination time by 30%, backed by 92% test coverage with RSpec + Cucumber.',
    stack: ['Ruby on Rails', 'RSpec', 'Cucumber', 'Docker', 'Heroku'],
    metrics: ['−30% coordination', '92% coverage'],
    links: [{ label: 'GitHub', href: GITHUB_URL }],
    featured: true,
  },
  {
    title: 'Phishing Detection LLM',
    kind: 'AI Research · NLP',
    year: '2026',
    description:
      'End-to-end phishing-detection system reaching 94.2% accuracy on 18K+ real-world emails. Fine-tuned open-source LLMs with LoRA/QLoRA on A100 clusters, lifting precision from 51% to 97%. Two peer-reviewed publications.',
    stack: ['PyTorch', 'Transformers', 'LoRA / QLoRA', 'A100'],
    metrics: ['94.2% accuracy', '51% → 97% precision'],
    links: [{ label: 'Publications', href: GITHUB_URL }],
    featured: true,
  },
  {
    title: 'Calorie Estimation',
    kind: 'Deep Learning · Multi-Modal',
    year: '2024',
    description:
      'Multi-modal model that estimates meal calories by fusing CNN features from food photos with LSTM signals from continuous glucose monitors.',
    stack: ['CNN', 'LSTM', 'Python', 'PyTorch'],
    metrics: ['Multi-modal fusion'],
    links: [{ label: 'GitHub', href: `${GITHUB_URL}/calorie-estimation` }],
    featured: false,
  },
]

export const SKILLS: SkillGroup[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript / TypeScript', 'C++', 'Bash'] },
  {
    group: 'Software Engineering',
    items: ['React.js', 'Next.js', 'HTML / CSS', 'FastAPI', 'Express.js', 'REST APIs', 'Serverless'],
  },
  {
    group: 'Cloud & Data',
    items: ['GCP', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD · GitHub Actions', 'PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery', 'Snowflake'],
  },
  { group: 'ML / AI', items: ['TensorFlow', 'PyTorch', 'Transformers · LLMs', 'LoRA · QLoRA', 'NLP'] },
  { group: 'Testing', items: ['Pytest', 'RSpec · Cucumber', 'Jest / Cypress'] },
]

export const CONTACT = {
  email: EMAIL,
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  publications: "ICAIR '25 · ECCWS '25",
  location: 'Texas, USA · Remote',
}

export interface NavStop {
  label: string
  id: string
}

export const NAV_STOPS: NavStop[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
  { label: 'Process', id: 'process' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

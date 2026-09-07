import type { ExperienceItem } from '@/types/content'

/** Career timeline, newest first. */
export const experience: ExperienceItem[] = [
  {
    period: '2025 — now',
    company: '3M Global Technology Center',
    role: 'AI Lead',
    description:
      'Own the enterprise AI product line: retrieval systems, agents, and the knowledge experiences built on top of them.',
    highlights: ['Enterprise RAG', 'Agent platforms', 'AI product strategy'],
  },
  {
    period: '2021 — 2025',
    company: '3M Global Technology Center',
    role: 'Data Engineer — Lead',
    description:
      'Led 15+ complex data programs and grew the engineering team past 30 people while modernizing the analytics platform.',
    highlights: ['Snowflake', 'Team leadership', 'Platform modernization'],
  },
  {
    period: '2020 — 2021',
    company: 'Ernst & Young',
    role: 'Senior Consultant',
    description:
      'Modernized a decade-old Oracle warehouse onto SAP HANA 2.0 without interrupting reporting for the business.',
    highlights: ['SAP HANA 2.0', 'Oracle migration'],
  },
  {
    period: '2016 — 2020',
    company: 'IBM',
    role: 'Senior Consultant',
    description:
      'Delivered high-scale banking warehouses for clients across India and Malaysia.',
    highlights: ['Banking data', 'Warehouse delivery'],
  },
]

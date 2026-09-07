import type { Article } from '@/types/content'

/**
 * Writing and talks.
 * Replace these entries with your real published links.
 */
export const articles: Article[] = [
  {
    title: 'Designing enterprise RAG that survives contact with real users',
    description:
      'What breaks when a retrieval system moves from a demo notebook to 60,000 employees, and the guardrails that keep answers trustworthy.',
    date: '2026-02-18',
    tags: ['Enterprise RAG', 'Evaluation'],
    href: 'https://mahantesh-hiremath.medium.com',
  },
  {
    title: 'Apache Iceberg as the default table format',
    description:
      'Migration notes from moving analytical workloads onto an open table format without stalling the teams that depend on them.',
    date: '2025-11-04',
    tags: ['Apache Iceberg', 'Lakehouse'],
    href: 'https://mahantesh-hiremath.medium.com',
  },
  {
    title: 'Cutting a $1M cloud bill without cutting capability',
    description:
      'How native storage extension and automated warehouse tuning removed half the EC2 footprint while queries stayed fast.',
    date: '2025-06-22',
    tags: ['FinOps', 'SAP HANA'],
    href: 'https://mahantesh-hiremath.medium.com',
  },
  {
    title: 'Agents that read resumes: a Workday integration story',
    description:
      'Building a screening agent that ranks 200 candidates at a time, and the human review loop that keeps it honest.',
    date: '2025-03-09',
    tags: ['Agentic AI', 'Workday'],
    href: 'https://mahantesh-hiremath.medium.com',
  },
]

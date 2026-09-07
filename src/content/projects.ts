import type { Project } from '@/types/content'

/** Selected work. Add, remove, or reorder freely. */
export const projects: Project[] = [
  {
    id: 'knowledge-navigator',
    title: 'Enterprise Knowledge Navigator',
    description:
      'Leading the expansion of a trusted internal AI workspace that gives 3M teams a practical way to work with company knowledge.',
    outcome: 'Adopted across 60K+ employees',
    tags: ['Enterprise RAG', 'AWS Bedrock', 'Azure AI'],
    year: '2025',
  },
  {
    id: 'talent-navigator',
    title: 'Talent Navigator',
    description:
      'An AI agent wired into Workday that screens 200+ resumes in a single pass and returns a ranked shortlist.',
    outcome: 'Shortlisting cut to under a minute',
    tags: ['Agentic AI', 'Workday', 'Recruiting'],
    year: '2025',
  },
  {
    id: 'modern-lakehouse',
    title: 'Modern Lakehouse',
    description:
      'A scalable, cost-conscious lakehouse architecture built on Apache Iceberg for analytical workloads that keep growing.',
    outcome: 'Open table format across the stack',
    tags: ['Apache Iceberg', 'Snowflake', 'PySpark'],
    year: '2024',
  },
  {
    id: 'cloud-cost-engineering',
    title: 'Cloud Cost Engineering',
    description:
      'Cut EC2 footprint by half through SAP HANA native storage extension and automated Snowflake warehouse tuning.',
    outcome: '$1M saved annually, $10K+ monthly',
    tags: ['SAP HANA', 'AWS', 'FinOps'],
    year: '2023',
  },
]

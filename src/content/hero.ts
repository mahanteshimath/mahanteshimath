import heroPortrait from '@/assets/hero.png'
import type { HeroContent } from '@/types/content'

/** The opening screen. */
export const hero: HeroContent = {
  greeting: "Hi, I'm",
  headline: 'Building the',
  headlineAccent: 'intelligent enterprise',
  summary:
    'AI Lead with 14+ years turning enterprise data platforms into products people actually use — retrieval systems, agents, and lakehouse architecture that hold up under real workloads.',
  credentials: [
    'AI Lead at 3M GTC',
    'Enterprise RAG & agentic systems',
    'Lakehouse architecture',
  ],
  tags: [
    'Agentic AI',
    'Amazon Bedrock',
    'Azure AI Foundry',
    'Apache Iceberg',
    'Snowflake',
    'Databricks',
    'PySpark',
    'AWS',
  ],
  primaryCta: { label: 'Explore my work', href: '#work' },
  secondaryCta: { label: 'Start a conversation', href: '#contact' },
  portrait: {
    src: heroPortrait,
    alt: 'Mahantesh Hiremath, AI Lead and data engineer',
  },
}

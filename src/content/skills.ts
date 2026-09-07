import type { SkillGroup } from '@/types/content'

/** Technical range, grouped by discipline. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & agentic systems',
    description: 'Retrieval, orchestration, and the models behind them.',
    skills: [
      'Amazon Bedrock',
      'Azure AI Foundry',
      'LangChain',
      'LlamaIndex',
      'AutoGen',
      'MCP',
      'Agentic RAG',
      'Claude',
      'Gemini',
    ],
  },
  {
    title: 'Data platforms',
    description: 'Where the data lives and how it stays queryable.',
    skills: [
      'Snowflake',
      'Databricks',
      'Apache Iceberg',
      'SAP HANA',
      'Oracle',
      'SQL Server',
      'Apache Spark',
    ],
  },
  {
    title: 'Engineering & cloud',
    description: 'The pipelines, runtimes, and infrastructure underneath.',
    skills: [
      'Python',
      'PySpark',
      'Airflow',
      'Kafka',
      'Docker',
      'AWS',
      'Azure',
      'Firehose',
      'Streamlit',
    ],
  },
  {
    title: 'Leadership',
    description: 'How the work gets delivered and handed over.',
    skills: [
      'Team leadership',
      'Program delivery',
      'Architecture review',
      'Mentoring',
      'Stakeholder management',
    ],
  },
]

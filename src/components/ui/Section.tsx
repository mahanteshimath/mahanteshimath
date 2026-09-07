import type { ReactNode } from 'react'
import { Container } from './Container'
import { Eyebrow } from './Eyebrow'
import styles from './Section.module.css'

type Tone = 'paper' | 'sunken' | 'lime' | 'teal'

interface SectionProps {
  id: string
  eyebrow: string
  title: ReactNode
  description?: string
  /** Background treatment. Sections alternate to build rhythm down the page. */
  tone?: Tone
  /** Rendered on the right of the heading row, e.g. a "view all" link. */
  aside?: ReactNode
  children: ReactNode
}

/** Standard section shell: background, spacing, and heading block. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  tone = 'paper',
  aside,
  children,
}: SectionProps) {
  const isDark = tone === 'teal'

  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <Container>
        <header className={styles.heading}>
          <Eyebrow tone={isDark ? 'light' : 'dark'}>{eyebrow}</Eyebrow>
          <div className={styles.headingRow}>
            <h2 className={styles.title}>{title}</h2>
            {description ? <p className={styles.description}>{description}</p> : null}
          </div>
          {aside ? <div className={styles.aside}>{aside}</div> : null}
        </header>
        {children}
      </Container>
    </section>
  )
}

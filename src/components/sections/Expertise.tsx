import { skillGroups } from '@/content'
import { Reveal, Section, TagList } from '@/components/ui'
import styles from './Expertise.module.css'

export function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical range"
      title={<>Fluent across the modern data stack.</>}
      description="The tools I reach for, grouped by the kind of problem they solve."
      tone="lime"
    >
      {/* Alternating column spans keep this off the generic three-card grid. */}
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 80}
            className={index % 2 === 0 ? styles.wide : styles.narrow}
          >
            <article className={styles.card}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.title}>{group.title}</h3>
              <p className={styles.description}>{group.description}</p>
              <TagList items={group.skills} label={group.title} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

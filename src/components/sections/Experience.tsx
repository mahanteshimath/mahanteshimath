import { experience } from '@/content'
import { Reveal, Section } from '@/components/ui'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career journey"
      title={<>Built on delivery. Focused on what is next.</>}
      description="Fourteen years across consulting and enterprise engineering, moving from warehouses to AI platforms."
      tone="sunken"
    >
      <ol className={styles.timeline}>
        {experience.map((item, index) => (
          <Reveal
            as="li"
            key={`${item.company}-${item.role}`}
            delay={index * 70}
            className={styles.item}
          >
            <div className={styles.row}>
              <div className={styles.periodCol}>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.marker} aria-hidden="true" />
              </div>

              <div className={styles.roleCol}>
                <p className={styles.company}>{item.company}</p>
                <h3 className={styles.role}>{item.role}</h3>
              </div>

              <div className={styles.detailCol}>
                <p className={styles.description}>{item.description}</p>
                <ul className={styles.highlights}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className={styles.highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

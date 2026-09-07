import { projects } from '@/content'
import { Reveal, Section, TagList } from '@/components/ui'
import styles from './Work.module.css'

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={<>Ideas that hold up in the real world.</>}
      description="Complex enterprise problems, made clear and useful through data, cloud, and applied AI."
    >
      <ol className={styles.list}>
        {projects.map((project, index) => {
          const Wrapper = project.href ? 'a' : 'div'
          return (
            <Reveal as="li" key={project.id} delay={index * 70} className={styles.item}>
              <Wrapper
                className={styles.row}
                {...(project.href
                  ? { href: project.href, target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <span className={styles.index}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  <p className={styles.outcome}>{project.outcome}</p>
                  <TagList items={project.tags} label={`${project.title} technologies`} />
                </div>

                <span className={styles.arrow} aria-hidden="true">
                  &#8599;
                </span>
              </Wrapper>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}

import { articles, site } from '@/content'
import { Button, Reveal, Section, TagList } from '@/components/ui'
import styles from './Writing.module.css'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

function formatDate(iso: string) {
  const parsed = new Date(iso)
  return Number.isNaN(parsed.getTime()) ? iso : dateFormatter.format(parsed)
}

export function Writing() {
  const mediumProfile = site.socials.find((social) => social.icon === 'medium')

  return (
    <Section
      id="writing"
      eyebrow="Writing & talks"
      title={<>Notes from the build.</>}
      description="Field reports on the systems I work on, written for the engineers who have to maintain them."
      aside={
        mediumProfile ? (
          <Button href={mediumProfile.href} variant="outline" trailing="&#8599;">
            Read everything
          </Button>
        ) : null
      }
    >
      {articles.length === 0 ? (
        <p className={styles.empty}>
          No posts published yet. Add entries in{' '}
          <code>src/content/articles.ts</code> and they will appear here.
        </p>
      ) : (
        <ul className={styles.grid}>
          {articles.map((article, index) => (
            <Reveal
              as="li"
              key={article.href + article.title}
              delay={index * 70}
              className={styles.item}
            >
              <a
                className={styles.card}
                href={article.href}
                target="_blank"
                rel="noreferrer"
              >
                <time className={styles.date} dateTime={article.date}>
                  {formatDate(article.date)}
                </time>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
                <div className={styles.footer}>
                  <TagList items={article.tags} label={`${article.title} topics`} />
                  <span className={styles.readMore}>
                    Read
                    <span aria-hidden="true">&#8599;</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  )
}

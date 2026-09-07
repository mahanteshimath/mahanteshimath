import { hero, site } from '@/content'
import { Button, Container, Icon, TagList } from '@/components/ui'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            {site.availability ? (
              <p className={styles.availability}>
                <span className={styles.pulse} aria-hidden="true" />
                {site.availability}
              </p>
            ) : null}

            <p className={styles.greeting}>
              {hero.greeting} <strong>{site.name}</strong>
            </p>

            <h1 className={styles.headline}>
              {hero.headline} <em>{hero.headlineAccent}</em>
            </h1>

            <p className={styles.role}>
              {site.role}
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.location}>
                <Icon name="location" size={15} />
                {site.location}
              </span>
            </p>

            <p className={styles.summary}>{hero.summary}</p>

            <ul className={styles.credentials}>
              {hero.credentials.map((item) => (
                <li key={item} className={styles.credential}>
                  <Icon name="spark" size={15} />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button href={hero.primaryCta.href} variant="solid" trailing="&#8599;">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="link" trailing="&#8594;">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className={styles.socials}>
              <span className={styles.socialsLabel}>Find me</span>
              <ul className={styles.socialList}>
                {site.socials.map((social) => (
                  <li key={social.href}>
                    <a
                      className={styles.socialLink}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      title={social.label}
                    >
                      <Icon name={social.icon} size={18} />
                      <span className="visually-hidden">{social.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.portraitWrap}>
            <div className={styles.portraitFrame}>
              <img
                className={styles.portrait}
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                width={520}
                height={620}
                fetchPriority="high"
              />
            </div>
            <div className={styles.stack}>
              <TagList items={hero.tags} label="Core technologies" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

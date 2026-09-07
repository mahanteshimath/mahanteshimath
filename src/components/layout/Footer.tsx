import { site } from '@/content'
import { Container, Icon } from '@/components/ui'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.identity}>
            <a className={styles.brand} href="#top">
              {site.initials}
              <span aria-hidden="true">.</span>
            </a>
            <p className={styles.blurb}>
              {site.role} based in {site.location}. Building enterprise AI and data
              platforms that stay useful after launch.
            </p>
          </div>

          <nav className={styles.column} aria-label="Footer">
            <h2 className={styles.columnTitle}>Navigate</h2>
            <ul className={styles.links}>
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a className={styles.link} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Connect</h2>
            <ul className={styles.links}>
              {site.socials.map((social) => (
                <li key={social.href}>
                  <a
                    className={styles.link}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={social.icon} size={16} />
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a className={styles.link} href={`mailto:${site.email}`}>
                  <Icon name="mail" size={16} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.baseline}>
          <p>
            &copy; {year} {site.name}
          </p>
          <p>{site.domain}</p>
        </div>
      </Container>
    </footer>
  )
}

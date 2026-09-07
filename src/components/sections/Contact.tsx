import { contact, site } from '@/content'
import { Icon, Section } from '@/components/ui'
import { ContactForm } from './ContactForm'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={contact.heading}
      description={contact.description}
    >
      <div className={styles.layout}>
        <div className={styles.details}>
          <dl className={styles.detailList}>
            <div className={styles.detail}>
              <dt className={styles.detailLabel}>
                <Icon name="mail" size={16} />
                Email
              </dt>
              <dd className={styles.detailValue}>
                <a className={styles.emailLink} href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>

            <div className={styles.detail}>
              <dt className={styles.detailLabel}>
                <Icon name="location" size={16} />
                Based in
              </dt>
              <dd className={styles.detailValue}>{site.location}</dd>
            </div>

            <div className={styles.detail}>
              <dt className={styles.detailLabel}>
                <Icon name="bolt" size={16} />
                Open to
              </dt>
              <dd className={styles.detailValue}>{contact.openTo.join(' · ')}</dd>
            </div>

            <div className={styles.detail}>
              <dt className={styles.detailLabel}>
                <Icon name="calendar" size={16} />
                Response time
              </dt>
              <dd className={styles.detailValue}>{contact.responseTime}</dd>
            </div>
          </dl>

          <ul className={styles.socials}>
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  className={styles.social}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={social.icon} size={17} />
                  {social.label}
                  <span aria-hidden="true">&#8599;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}

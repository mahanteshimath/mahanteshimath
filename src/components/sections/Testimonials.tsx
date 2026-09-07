import { testimonials } from '@/content'
import { Reveal, Section } from '@/components/ui'
import styles from './Testimonials.module.css'

export function Testimonials() {
  if (testimonials.length === 0) return null

  const [lead, ...rest] = testimonials

  return (
    <Section
      id="testimonials"
      eyebrow="What people say"
      title={<>Words from the teams I have built with.</>}
      tone="teal"
    >
      {/* A lead quote plus a supporting column, rather than a dotted carousel. */}
      <div className={styles.wall}>
        <Reveal className={styles.leadWrap}>
          <figure className={styles.lead}>
            <span className={styles.mark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={styles.leadQuote}>{lead.quote}</blockquote>
            <figcaption className={styles.attribution}>
              <span className={styles.name}>{lead.name}</span>
              <span className={styles.title}>{lead.title}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className={styles.column}>
          {rest.map((testimonial, index) => (
            <Reveal key={testimonial.name + index} delay={(index + 1) * 90}>
              <figure className={styles.card}>
                <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
                <figcaption className={styles.attribution}>
                  <span className={styles.name}>{testimonial.name}</span>
                  <span className={styles.title}>{testimonial.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

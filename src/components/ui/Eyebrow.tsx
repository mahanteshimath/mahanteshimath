import styles from './Eyebrow.module.css'

interface EyebrowProps {
  children: string
  /** Use on dark backgrounds so the rule and text stay legible. */
  tone?: 'dark' | 'light'
}

/** Small monospace label with a leading rule, used above section titles. */
export function Eyebrow({ children, tone = 'dark' }: EyebrowProps) {
  return (
    <p className={`${styles.eyebrow} ${styles[tone]}`}>
      <span className={styles.rule} aria-hidden="true" />
      {children}
    </p>
  )
}

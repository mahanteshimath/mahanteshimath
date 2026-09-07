import styles from './Tag.module.css'

interface TagProps {
  children: string
  tone?: 'default' | 'accent' | 'light'
}

/** Square-cornered label for technologies and topics. */
export function Tag({ children, tone = 'default' }: TagProps) {
  return <li className={`${styles.tag} ${styles[tone]}`}>{children}</li>
}

interface TagListProps {
  items: string[]
  tone?: 'default' | 'accent' | 'light'
  label?: string
}

export function TagList({ items, tone = 'default', label }: TagListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </ul>
  )
}

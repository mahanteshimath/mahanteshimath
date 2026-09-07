import type { ElementType, ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  /** Delay in ms, used to stagger siblings. */
  delay?: number
  className?: string
}

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const classNames = [styles.reveal, inView && styles.visible, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classNames} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

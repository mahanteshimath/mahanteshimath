import type { ElementType, ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  /** Render as a different element, e.g. 'header' or 'nav'. */
  as?: ElementType
  className?: string
}

/** Constrains content to the site width and applies the page gutter. */
export function Container({ children, as: Tag = 'div', className }: ContainerProps) {
  return (
    <Tag className={className ? `${styles.container} ${className}` : styles.container}>
      {children}
    </Tag>
  )
}

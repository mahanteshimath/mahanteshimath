import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'solid' | 'accent' | 'outline' | 'link'

interface CommonProps {
  children: ReactNode
  variant?: Variant
  /** Trailing glyph, e.g. an arrow. Hidden from screen readers. */
  trailing?: string
  className?: string
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

function classes(variant: Variant, className?: string) {
  return [styles.button, styles[variant], className].filter(Boolean).join(' ')
}

/** Renders an <a> when `href` is present, otherwise a <button>. */
export function Button(props: ButtonProps | LinkProps) {
  const { children, variant = 'solid', trailing, className, ...rest } = props

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {trailing ? (
        <span className={styles.trailing} aria-hidden="true">
          {trailing}
        </span>
      ) : null}
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    const isExternal = rest.href.startsWith('http')
    return (
      <a
        className={classes(variant, className)}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={classes(variant, className)}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}

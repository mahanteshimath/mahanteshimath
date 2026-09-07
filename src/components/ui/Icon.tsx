import styles from './Icon.module.css'
import type { IconName } from '@/types/content'

/**
 * Brand marks are drawn as filled paths, utility glyphs as 1.5px strokes.
 * Add a new icon by adding one entry here and one name to `IconName`.
 */
const filled: Partial<Record<IconName, string>> = {
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.17 4.17 0 0 1 3.75-2c4 0 4.75 2.5 4.75 5.8V21h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4V9Z',
  github:
    'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
  medium:
    'M2.5 6.2c0-.2-.07-.38-.22-.52L.9 4.03V3.8h4.9l3.78 8.3 3.33-8.3H17.6v.23l-1.18 1.13a.35.35 0 0 0-.13.33v8.31c0 .13.05.25.13.33l1.15 1.13v.23h-5.8v-.23l1.19-1.16c.12-.12.12-.15.12-.33V7.06l-3.32 8.43h-.45L5.44 7.06v5.65c-.03.24.05.48.22.65l1.55 1.88v.23H2.8v-.23l1.55-1.88a.74.74 0 0 0 .2-.65V6.2h-2.05Z',
  youtube:
    'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z',
}

const stroked: Partial<Record<IconName, string>> = {
  mail: 'M3 6.5h18v11H3v-11Zm0 .5 9 6 9-6',
  location: 'M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  calendar: 'M4 6h16v15H4V6Zm0 5h16M8 3v5m8-5v5',
  spark: 'M12 3l2.2 5.9L20 11l-5.8 2.1L12 19l-2.2-5.9L4 11l5.8-2.1L12 3Z',
  stack: 'M12 3 3 7.5 12 12l9-4.5L12 3ZM3 12.5 12 17l9-4.5M3 17 12 21.5 21 17',
  bolt: 'M13.5 3 5 13.5h5.5L10 21l8.5-10.5H13L13.5 3Z',
}

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className }: IconProps) {
  const filledPath = filled[name]
  const strokedPath = stroked[name]
  const classNames = [styles.icon, className].filter(Boolean).join(' ')

  if (filledPath) {
    return (
      <svg
        className={classNames}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={filledPath} />
      </svg>
    )
  }

  return (
    <svg
      className={classNames}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={strokedPath} />
    </svg>
  )
}

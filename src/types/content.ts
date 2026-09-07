/**
 * Shape of every piece of editable content.
 * The files in `src/content` are checked against these types, so a typo
 * or a missing field fails the build instead of shipping a broken page.
 */

export type IconName =
  | 'linkedin'
  | 'github'
  | 'medium'
  | 'youtube'
  | 'mail'
  | 'location'
  | 'calendar'
  | 'spark'
  | 'stack'
  | 'bolt'

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: IconName
}

export interface SiteConfig {
  name: string
  initials: string
  role: string
  location: string
  email: string
  domain: string
  availability: string | null
  nav: NavLink[]
  socials: SocialLink[]
}

export interface HeroContent {
  greeting: string
  headline: string
  /** Rendered in the accent color inside the headline. */
  headlineAccent: string
  summary: string
  credentials: string[]
  tags: string[]
  primaryCta: NavLink
  secondaryCta: NavLink
  portrait: {
    src: string
    alt: string
  }
}

export interface Stat {
  /** Numeric part only, e.g. 14 — the count-up animation reads this. */
  value: number
  /** Rendered before the number, e.g. "$". */
  prefix?: string
  /** Rendered after the number, e.g. "+" or "K+". */
  suffix?: string
  label: string
}

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  outcome: string
  tags: string[]
  href?: string
  year: string
}

export interface ExperienceItem {
  period: string
  company: string
  role: string
  description: string
  highlights: string[]
}

export interface Article {
  title: string
  description: string
  date: string
  tags: string[]
  href: string
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  href?: string
}

export interface ContactContent {
  heading: string
  description: string
  responseTime: string
  openTo: string[]
  /**
   * POST endpoint for the contact form (Formspree, Basin, your own API...).
   * Leave as null to fall back to opening the visitor's mail client.
   */
  formEndpoint: string | null
}

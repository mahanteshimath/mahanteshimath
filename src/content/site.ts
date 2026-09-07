import type { SiteConfig } from '@/types/content'

/** Identity, navigation, and social links. */
export const site: SiteConfig = {
  name: 'Mahantesh Hiremath',
  initials: 'MH',
  role: 'AI Lead & Data Engineer',
  location: 'Bengaluru, India',
  email: 'mahanteshimath@gmail.com',
  domain: 'montybytelligence.tech',
  availability: 'Open to AI and data platform collaborations',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mahantesh-hiremath',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/mahanteshimath',
      icon: 'github',
    },
    {
      label: 'Medium',
      href: 'https://mahantesh-hiremath.medium.com',
      icon: 'medium',
    },
    {
      label: 'YouTube',
      href: 'https://yt.openinapp.co/atozaboutdata',
      icon: 'youtube',
    },
  ],
}

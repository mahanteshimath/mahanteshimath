import { useEffect, useMemo, useState } from 'react'
import { site } from '@/content'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Container } from '@/components/ui'
import styles from './Header.module.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionIds = useMemo(
    () => site.nav.map((link) => link.href.replace('#', '')),
    [],
  )
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.bar}>
        <a className={styles.brand} href="#top" aria-label={`${site.name}, back to top`}>
          {site.initials}
          <span aria-hidden="true">.</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {site.nav.map((link) => {
              const isActive = link.href === `#${activeId}`
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a className={styles.contact} href={`mailto:${site.email}`}>
          Get in touch
          <span aria-hidden="true">&#8599;</span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="visually-hidden">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span
            className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ''}`}
            aria-hidden="true"
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        hidden={!menuOpen}
      >
        <ul className={styles.mobileList}>
          {site.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className={styles.mobileContact}
          href={`mailto:${site.email}`}
          onClick={() => setMenuOpen(false)}
        >
          {site.email}
        </a>
      </div>
    </header>
  )
}

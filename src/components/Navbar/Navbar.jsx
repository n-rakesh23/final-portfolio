import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog'     },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation">
      <a href="#hero" className={styles.logo} onClick={closeMenu}>
        <span className={styles.logoText}>RN</span>
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:n.rakesh0023@gmail.com"
        className={styles.ctaBtn}
      >
        Hire Me
      </a>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:n.rakesh0023@gmail.com"
              className={styles.mobileCta}
              onClick={closeMenu}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

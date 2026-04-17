import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import styles from './Footer.module.css'

const SOCIALS = [
  { icon: FiGithub,    label: 'GitHub',    href: 'https://github.com/n-rakesh23'         },
  { icon: FiLinkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/[ADD_HANDLE]'  },
  { icon: FiTwitter,   label: 'Twitter',   href: 'https://x.com/[ADD_HANDLE]'            },
  { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/[ADD_HANDLE]'    },
  { icon: SiLeetcode,  label: 'LeetCode',  href: 'https://leetcode.com/[ADD_HANDLE]'     },
  { icon: FiMail,      label: 'Email',     href: 'mailto:n.rakesh0023@gmail.com'         },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>RN</a>

        <nav className={styles.socials} aria-label="Social links">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </nav>

        <p className={styles.copy}>
          Built by{' '}
          <span className={styles.name}>Rakesh Nayak</span>
          {' '}with React, Three.js &amp; too much coffee.
          <br />
          <span className={styles.cr}>© 2025 Rakesh Nayak. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}

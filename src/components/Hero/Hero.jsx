import { useEffect, useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowRight, FiMapPin } from 'react-icons/fi'
import HeroCanvas from './HeroCanvas'
import styles from './Hero.module.css'

const TYPEWRITER_PHRASES = [
  "Let's Build Crazy Stuff Together",
  'Full-Stack · AI/ML · Cloud',
  'Computer Scientist & Mathematician',
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed,   setDisplayed]   = useState('')
  const [deleting,    setDeleting]    = useState(false)

  useEffect(() => {
    const full = TYPEWRITER_PHRASES[phraseIndex]
    let timeout

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length - 1)), 28)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex(i => (i + 1) % TYPEWRITER_PHRASES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, phraseIndex])

  return (
    <section id="hero" className={styles.hero}>
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* gradient fade at bottom */}
      <div className={styles.fadeBottom} aria-hidden="true" />
      {/* grid overlay */}
      <div className={styles.grid} aria-hidden="true" />
      {/* CSS shooting stars */}
      <div className={styles.shootingStars} aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <FiMapPin size={12} />
          Bhubaneswar, India
        </motion.div>

        <motion.h1
          className={styles.name}
          data-text="Rakesh Nayak"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Rakesh Nayak
        </motion.h1>

        <motion.p
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Computer Scientist &amp; Mathematician
        </motion.p>

        <motion.div
          className={styles.typewriter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <span className={styles.typeText}>{displayed}</span>
          <span className={styles.cursor} aria-hidden="true">_</span>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="#projects" className={styles.btnPrimary}>
            See My Work <FiArrowRight />
          </a>
          <a
            href="https://github.com/n-rakesh23"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <FiGithub /> GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}

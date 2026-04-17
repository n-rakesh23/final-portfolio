import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiGithub, FiCoffee, FiCalendar } from 'react-icons/fi'
import AboutCube from './AboutCube'
import styles from './About.module.css'

const STATS = [
  { icon: FiCode,     value: '15+',  label: 'Projects Built'    },
  { icon: FiGithub,   value: '500+', label: 'GitHub Commits'    },
  { icon: FiCalendar, value: '4+',   label: 'Years Coding'      },
  { icon: FiCoffee,   value: '∞',    label: 'Coffee Cups'       },
]

const TECH_BADGES = [
  'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB',
  'TensorFlow', 'Java', 'Kubernetes', 'Next.js',
]

const SPACE_BADGES = [
  '🚀 Space Science', '🪐 Astrophysics', '🛰️ Orbital Mechanics', '🌌 Cosmology',
]

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0  },
}

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="section-inner">
        <div className={styles.grid}>

          {/* ── LEFT: text + stats ── */}
          <motion.div
            className={styles.left}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-label">// About Me</span>
            <h2 className="section-title">Who Am I</h2>

            <p className={styles.bio}>
              Undergrad in{' '}
              <span className={styles.highlight}>Mathematics</span>,
              postgrad in{' '}
              <span className={styles.highlight}>Computer Science</span> —
              living where both collide. I build full-stack apps, train ML
              models, deploy cloud infrastructure, and occasionally break
              things in the best way possible.
            </p>
            <p className={styles.bio}>
              Beyond the screen, I'm drawn to the cosmos —
              aspiring{' '}
              <span className={styles.spaceHighlight}>space scientist</span>{' '}
              who wants to bring CS, mathematics, and data to the frontier of
              space exploration. One day, the algorithms I write will help
              navigate what's out there.
            </p>

            <div className={styles.exploreLine}>
              <span className={styles.exploreLabel}>// Currently Exploring</span>
              <div className={styles.spaceBadges}>
                {SPACE_BADGES.map(b => (
                  <span key={b} className={styles.spaceBadge}>{b}</span>
                ))}
              </div>
            </div>

            <div className={styles.stats}>
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className={styles.stat}>
                  <Icon className={styles.statIcon} />
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            <div className={styles.badges}>
              {TECH_BADGES.map(t => (
                <span key={t} className={styles.badge}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: 3D canvas ── */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Suspense fallback={null}>
              <AboutCube />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

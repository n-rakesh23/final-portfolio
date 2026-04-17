import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi'
import styles from './Projects.module.css'

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) scale3d(1.035,1.035,1.035)`
    el.style.setProperty('--mx', `${(e.clientX - rect.left) / rect.width * 100}%`)
    el.style.setProperty('--my', `${(e.clientY - rect.top)  / rect.height * 100}%`)
  }

  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)'
  }

  return (
    <motion.article
      className={styles.card}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      {/* moving spotlight glow */}
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.cardTop}>
        <span className={styles.num}>0{index + 1}</span>
        <div className={styles.cardLinks}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={`${project.title} GitHub`}
          >
            <FiGithub />
          </a>
          {project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <div className={styles.tech}>
        {project.tech.map(t => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewBtn}
      >
        View Project <FiArrowUpRight />
      </a>
    </motion.article>
  )
}

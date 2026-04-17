import { motion } from 'framer-motion'
import styles from './Skills.module.css'

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      className={styles.skillItem}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className={styles.skillHeader}>
        <span className={styles.skillIcon}>{skill.icon}</span>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPct}>{skill.level}%</span>
      </div>
      <div className={styles.bar}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
          style={{ '--glow': skill.color }}
        />
      </div>
    </motion.div>
  )
}

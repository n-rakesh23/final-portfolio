import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from './Blog.module.css'

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Color accent bar */}
      <div className={styles.accentBar} style={{ background: post.accentColor }} />

      <div className={styles.meta}>
        <span className={styles.tag} style={{ color: post.accentColor, borderColor: post.accentColor + '44' }}>
          {post.tag}
        </span>
        <span className={styles.date}>{post.date}</span>
      </div>

      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.readBtn}
      >
        Read on Medium <FiArrowUpRight />
      </a>
    </motion.article>
  )
}

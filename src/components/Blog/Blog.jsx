import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
import styles from './Blog.module.css'

const POSTS = [
  {
    title: 'Deepfakes & Detection: How I Built DFGuard',
    excerpt:
      'A deep dive into computer vision and temporal analysis — how to spot manipulated media using CNNs and optical flow in Python.',
    date: 'Apr 12, 2026',
    tag: 'AI / Deep Learning',
    accentColor: '#aaff00',
    link: 'https://medium.com/@n.rakesh0023',
  },
  {
    title: 'Building Real-Time Apps with MERN + Socket.io',
    excerpt:
      'Lessons from shipping Tribe: WebSocket architecture, Redis pub-sub for horizontal scaling, and why rooms matter.',
    date: 'Mar 20, 2026',
    tag: 'Web Dev',
    accentColor: '#00f5ff',
    link: 'https://medium.com/@n.rakesh0023',
  },
  {
    title: 'The Mathematics That Powers Neural Networks',
    excerpt:
      'From dot products to backpropagation — a visual guide to the linear algebra and calculus living inside every layer.',
    date: 'Mar 5, 2026',
    tag: 'Math in ML',
    accentColor: '#bf5af2',
    link: 'https://medium.com/@n.rakesh0023',
  },
]

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className="section-inner">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">// Writing</span>
          <h2 className="section-title">Blog &amp; Articles</h2>
          <p className="section-sub">
            Thoughts on AI, engineering, and the math in between.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {POSTS.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} />
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://medium.com/@n.rakesh0023"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allBtn}
          >
            All Articles on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

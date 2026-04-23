import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'DFGuard',
    description:
      'A deep fake detection ,protection and prohibitation system using computer vision and deep learning to identify manipulated media content in real-time.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'React', 'FastAPI','PyTorch'],
    github: 'https://github.com/n-rakesh23',
    live: 'https://iamrakesh.site/',
  },
  {
    title: 'InddieMate',
    description:
      'It's an energy drink brand which provides premium yerba mate to coustomers',
    tech: ['MERN Stack', 'Socket.io', 'JWT Auth', 'Cloudinary'],
    github: 'https://github.com/n-rakesh23',
    live: 'https://inddiemate.com/',
  },
  {
    title: 'Tribe',
    description:
      'A community & gaming  platform where users form micro-communities around shared interests, with real-time chat, events, and collaborative spaces.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Redis'],
    github: 'https://github.com/n-rakesh23',
    live: 'https://staging.d3tpsi2vxzi57q.amplifyapp.com/',
  },
  {
    title: 'MathCanvas',
    description:
      'An interactive mathematics visualization tool for exploring graphs, calculus, linear algebra, and probability distributions in real time.',
    tech: ['React', 'D3.js', 'Math.js', 'WebGL'],
    github: 'https://github.com/n-rakesh23',
    live: 'https://iamrakesh.site/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="section-inner">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">// Selected Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            Things I've built — from deepfake detectors to math playgrounds.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiSpring,
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas,
  SiDocker, SiKubernetes, SiGithubactions,
  SiJavascript, SiCplusplus,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'
import { TbMath } from 'react-icons/tb'
import SkillCard from './SkillCard'
import styles from './Skills.module.css'

const CATEGORIES = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React',     level: 92, icon: <SiReact />,      color: '#61dafb' },
      { name: 'Next.js',   level: 82, icon: <SiNextdotjs />,  color: '#fff'    },
      { name: 'HTML/CSS',  level: 95, icon: <SiHtml5 />,      color: '#e34c26' },
      { name: 'Tailwind',  level: 88, icon: <SiTailwindcss />,color: '#38bdf8' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',      level: 88, icon: <SiNodedotjs />, color: '#68a063' },
      { name: 'Express',      level: 90, icon: <SiExpress />,   color: '#f0f0f0' },
      { name: 'Spring Boot',  level: 75, icon: <SiSpring />,    color: '#6db33f' },
      { name: 'REST APIs',    level: 92, icon: '⚡',             color: '#aaff00' },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'Python',       level: 91, icon: <SiPython />,      color: '#ffd343' },
      { name: 'TensorFlow',   level: 76, icon: <SiTensorflow />,  color: '#ff6f00' },
      { name: 'PyTorch',      level: 72, icon: <SiPytorch />,     color: '#ee4c2c' },
      { name: 'Scikit-learn', level: 82, icon: <SiScikitlearn />, color: '#f89939' },
      { name: 'Pandas',       level: 87, icon: <SiPandas />,      color: '#150458' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS',            level: 72, icon: <FaAws />,              color: '#ff9900' },
      { name: 'Docker',         level: 82, icon: <SiDocker />,         color: '#2496ed' },
      { name: 'Kubernetes',     level: 66, icon: <SiKubernetes />,     color: '#326ce5' },
      { name: 'GitHub Actions', level: 85, icon: <SiGithubactions />,  color: '#2088ff' },
    ],
  },
  {
    label: 'Languages & Math',
    skills: [
      { name: 'JavaScript',       level: 93, icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'Java',             level: 80, icon: <FaJava />,       color: '#e11f21' },
      { name: 'C++',              level: 70, icon: <SiCplusplus />,  color: '#00549d' },
      { name: 'Linear Algebra',   level: 86, icon: <TbMath />,       color: '#aaff00' },
      { name: 'Probability',      level: 82, icon: <TbMath />,       color: '#00f5ff' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="section-inner">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">// My Stack</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-sub">
            Built across full-stack, AI/ML, and cloud — the tools I reach for.
          </p>
        </motion.div>

        <div className={styles.categories}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h3 className={styles.catLabel}>{cat.label}</h3>
              <div className={styles.skillList}>
                {cat.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

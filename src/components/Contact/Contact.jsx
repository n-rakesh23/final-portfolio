import { Suspense } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram,
} from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import ContactOrb from './ContactOrb'
import styles from './Contact.module.css'

const SOCIALS = [
  { icon: FiGithub,    label: 'GitHub',    href: 'https://github.com/n-rakesh23'            },
  { icon: FiLinkedin,  label: 'LinkedIn',  href: 'https://linkedin.com/in/[ADD_HANDLE]'     },
  { icon: FiTwitter,   label: 'Twitter/X', href: 'https://x.com/[ADD_HANDLE]'               },
  { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/[ADD_HANDLE]'        },
  { icon: SiLeetcode,  label: 'LeetCode',  href: 'https://leetcode.com/[ADD_HANDLE]'         },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="section-inner">
        <div className={styles.inner}>

          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">// Get In Touch</span>
            <h2 className="section-title">Let's Build Something</h2>
            <p className={styles.sub}>
              Open to internships, collabs, freelance, and wild ideas.
              Drop a line — I reply fast.
            </p>

            <a
              href="mailto:n.rakesh0023@gmail.com"
              className={styles.emailLink}
            >
              <FiMail />
              n.rakesh0023@gmail.com
            </a>

            <div className={styles.socials}>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.orbWrap}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Suspense fallback={null}>
              <ContactOrb />
            </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

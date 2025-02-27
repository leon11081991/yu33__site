import { useState } from 'react'

import styles from '@/styles/ContactMe.module.scss'

const ContactMe = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className={`${styles.contactMe} ${isHovered ? styles.contactMeHover : ''} section-content`}
    >
      <a
        target='_blank'
        href='mailto:lillian.lin33@gmail.com'
        className={styles.contactMeLink}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        rel='noreferrer'
      >
        Contact Me
      </a>
    </section>
  )
}

export default ContactMe

import InstagramIcon from '@/assets/instagramIcon.svg'
import EmailIcon from '@/assets/emailIcon.svg'

import classes from '@styles/layout/Footer.module.scss'

const AUTHOR = 'Lillian Lin'
const YEAR = new Date().getFullYear()
const SOCIALS = [
  {
    name: 'instagram',
    href: '',
    icon: InstagramIcon
  },
  {
    name: 'email',
    href: '',
    icon: EmailIcon
  }
]

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        <p>
          © {AUTHOR} {YEAR} Copyright. All Rights Reserved.
        </p>
      </div>
      <div className={classes.socials}>
        <ul className={classes.socialsList}>
          {SOCIALS.map(social => (
            <li
              key={social.name}
              className={classes.socialsItem}
            >
              <a
                className={classes.socialsLink}
                href={social.href}
                target='_blank'
                rel='noreferrer noopener'
              >
                <img
                  src={social.icon}
                  alt={social.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

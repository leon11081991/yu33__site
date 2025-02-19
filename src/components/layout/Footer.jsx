import InstagramIcon from '@/assets/instagramIcon.svg'
import EmailIcon from '@/assets/emailIcon.svg'

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
    <footer className='footer'>
      <div className='copyright'>
        <p>
          © {AUTHOR} {YEAR} Copyright. All Rights Reserved.
        </p>
      </div>
      <div className='socials'>
        <ul className='socials-list'>
          {SOCIALS.map(social => (
            <li
              key={social.name}
              className='socials-item'
            >
              <a
                className='social-link'
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

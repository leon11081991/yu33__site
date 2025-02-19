import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BlurLazyImage from '@/components/BlurLazyImage'

export default function ProjectCard({ path, imgSrc, imgPlaceholder, imgAlt, title, desc }) {
  return (
    <li className='project-card'>
      <Link
        to={path}
        className='project-card-container'
      >
        <div className='project-cover'>
          <BlurLazyImage
            className='project-cover-img'
            src={imgSrc}
            alt={imgAlt}
            placeholder={imgPlaceholder}
          />
        </div>
        <div className='project-content'>
          <h3
            className='project-title'
            title={title}
          >
            {title}
          </h3>
          <p className='project-desc'>{desc}</p>
        </div>
      </Link>
    </li>
  )
}

ProjectCard.propTypes = {
  path: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgPlaceholder: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BlurLazyImage from '@/components/BlurLazyImage'

import classes from '@styles/components/card/Card.module.scss'

const Card = ({ path, imgSrc, imgPlaceholder, imgAlt, title, desc }) => {
  return (
    <li className={classes.card}>
      <Link
        to={path}
        className={classes.cardContainer}
      >
        <div className={classes.cardCover}>
          <BlurLazyImage
            className={classes.cardCoverImg}
            src={imgSrc}
            alt={imgAlt}
            placeholder={imgPlaceholder}
            width={713}
            height={476}
          />
        </div>
        <div className={classes.cardContent}>
          <h3
            className={`${classes.cardTitle} heading-2`}
            title={title}
          >
            {title}
          </h3>
          <p className={classes.cardDesc}>{desc}</p>
        </div>
      </Link>
    </li>
  )
}

Card.propTypes = {
  path: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgPlaceholder: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default Card

import PropTypes from 'prop-types'
import BlurLazyImage from '@components/BlurLazyImage'

import classes from '@styles/components/PageBanner.module.scss'

const PageBanner = ({ src, alt, placeholder, width, height }) => {
  return (
    <div className={classes.pageBanner}>
      <BlurLazyImage
        src={src}
        alt={`${alt} Banner`}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </div>
  )
}

PageBanner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default PageBanner

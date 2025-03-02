import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import classes from '@/styles/components/BlurLazyImage.module.scss'

const BlurLazyImage = ({ src, alt, placeholder, width = 800, height = 500 }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const imgElement = imgRef.current
    if (!imgElement) return

    const handleLoad = () => setIsLoaded(true)

    // 檢查圖片是否載入完成
    if (imgElement.complete) {
      handleLoad()
    } else {
      imgElement.addEventListener('load', handleLoad)
    }

    // 組件卸載時移除事件監聽
    return () => {
      imgElement.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div
      className={`${classes.blurLoad} ${isLoaded ? classes.loaded : ''}`}
      style={{ backgroundImage: `url(${placeholder})` }}
    >
      <img
        ref={imgRef}
        loading='lazy'
        className={classes.img}
        src={src}
        alt={alt}
        style={{ aspectRatio: `${width}/${height}` }}
      />
    </div>
  )
}

BlurLazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export default BlurLazyImage

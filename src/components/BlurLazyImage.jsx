import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
const BlurLazyImage = ({ src, alt, placeholder }) => {
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
      className={`blur-load ${isLoaded ? 'loaded' : ''}`}
      style={{ backgroundImage: `url(${placeholder})` }}
    >
      <img
        ref={imgRef}
        loading='lazy'
        className='img'
        src={src}
        alt={alt}
      />
    </div>
  )
}

BlurLazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default BlurLazyImage

import PropTypes from 'prop-types'

import BlurLazyImage from '@components/BlurLazyImage'

const KaiDemo = ({ video, pictures }) => {
  return (
    <>
      <section className='w-full h-dvh bg-gray-01'>
        <div>{video.test}</div>
      </section>
      {pictures.map(picture => {
        return (
          <PictureSection
            key={picture.alt}
            picture={picture}
          />
        )
      })}
    </>
  )
}

const PictureSection = ({ picture }) => {
  const { isFullSize, src, alt, placeholder, width, height } = picture

  return isFullSize ? (
    <section>
      <BlurLazyImage
        src={src}
        alt={alt}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </section>
  ) : (
    <div className='content'>
      <div className='content-container'>
        <section className='section-content'>
          <div className='w-[71.4%] ml-auto mr-auto'>
            <BlurLazyImage
              src={picture.src}
              alt={picture.alt}
              placeholder={picture.placeholder}
              width={picture.width}
              height={picture.height}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

KaiDemo.propTypes = {
  video: PropTypes.object,
  pictures: PropTypes.array
}
PictureSection.propTypes = {
  picture: PropTypes.shape({
    isFullSize: PropTypes.bool,
    src: PropTypes.string,
    alt: PropTypes.string,
    placeholder: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  })
}

export default KaiDemo

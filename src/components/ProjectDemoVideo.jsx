import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'

const ProjectDemoVideo = ({ videoSrc, videoLabel }) => {
  return (
    <ContentContainer className='bg-gray-01'>
      <section className='w-full bg-gray-01'>
        <div className='mt-36 mb-36 w-[71%] mx-auto'>
          <video
            className='w-full h-full object-cover'
            src={videoSrc}
            aria-label={videoLabel}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </ContentContainer>
  )
}

ProjectDemoVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  videoLabel: PropTypes.string
}

export default ProjectDemoVideo

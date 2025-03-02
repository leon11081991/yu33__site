import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import SitemapIndicator from '@/components/SitemapIndicator'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const ProjectSitemap = ({ title, description, indicators, picture }) => {
  return (
    <ContentContainer>
      <section className='section-content'>
        <div className='two-cols-container'>
          <h3 className='heading-2'>{title}</h3>
          <div className='flex flex-col gap-4'>
            {description && <p className='text-p1'>{description}</p>}
            <SitemapIndicator indicators={indicators} />
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <BlurLazyImage
            className='w-[75%] '
            src={picture.src}
            alt={picture.alt}
            placeholder={picture.placeholder}
            width={picture.width}
            height={picture.height}
          />
        </div>
      </section>
    </ContentContainer>
  )
}

ProjectSitemap.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  indicators: PropTypes.array.isRequired,
  picture: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
}

export default ProjectSitemap

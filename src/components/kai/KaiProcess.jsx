import PropTypes from 'prop-types'

import ContentContainer from '@/layouts/ContentContainer'
import SectionTitle from '@components/SectionTitle'
import BlurLazyImage from '@components/BlurLazyImage'

const KaiProcess = ({ title, picture }) => (
  <ContentContainer>
    <KaiProcessContent
      title={title}
      picture={picture}
    />
  </ContentContainer>
)

const KaiProcessContent = ({ title, picture }) => (
  <section className='section-content border-b-[1px] border-gray-03'>
    <SectionTitle
      className='mb-16'
      title={title}
    />
    <BlurLazyImage
      src={picture.src}
      alt={picture.alt}
      placeholder={picture.placeholder}
      width={picture.width}
      height={picture.height}
    />
  </section>
)

const KaiProcessPropTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.object
}
const KaiProcessContentPropTypes = KaiProcessPropTypes

KaiProcess.propTypes = KaiProcessPropTypes
KaiProcessContent.propTypes = KaiProcessContentPropTypes

export default KaiProcess

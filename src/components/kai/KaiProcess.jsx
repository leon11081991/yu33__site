import PropTypes from 'prop-types'

import ProjectProcess from '@/components/ProjectProcess'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const KaiProcess = ({ title, picture }) => {
  return (
    <ProjectProcess title={title}>
      <BlurLazyImage
        src={picture.src}
        alt={picture.alt}
        placeholder={picture.placeholder}
        width={picture.width}
        height={picture.height}
      />
    </ProjectProcess>
  )
}

const KaiProcessPropTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.object
}

KaiProcess.propTypes = KaiProcessPropTypes

export default KaiProcess

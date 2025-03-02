import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectProcess from '@/components/ProjectProcess'
import BlurLazyImage from '@/components/ui/image/BlurLazyImage'

const KolProjectPage = props => (
  <>
    <ProjectInfo {...props.info} />
    <ProjectAbout {...props.about} />
    <ProjectProcess {...props.process}>
      <BlurLazyImage {...props.process.image} />
    </ProjectProcess>
  </>
)

KolProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  process: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired
}

export default KolProjectPage

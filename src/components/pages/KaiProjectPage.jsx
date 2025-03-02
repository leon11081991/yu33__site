import PropTypes from 'prop-types'
import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import KaiProcess from '@/components/kai/KaiProcess'
import ProjectSitemap from '@/components/ProjectSitemap'
import ProjectDemoVideo from '@/components/ProjectDemoVideo'
import KaiDemo from '@/components/kai/KaiDemo'

const KaiProjectPage = props => (
  <>
    <ProjectInfo {...props.info} />
    <ProjectAbout {...props.about} />
    <KaiProcess {...props.process} />
    <ProjectSitemap {...props.sitemap} />
    <ProjectDemoVideo {...props.demoVideo} />
    <KaiDemo {...props.demo} />
  </>
)

KaiProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired,
  demoVideo: PropTypes.object.isRequired,
  demo: PropTypes.object.isRequired
}

export default KaiProjectPage

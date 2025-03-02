import PropTypes from 'prop-types'

import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectProcess from '@/components/ProjectProcess'
import MandalaProcessChart from '@/components/mandala/MandalaProcessChart'
import ProjectSitemap from '@/components/ProjectSitemap'
import ProjectDemoVideo from '@/components/ProjectDemoVideo'
import ProjectPureImagesDemo from '@/components/ProjectPureImagesDemo'

const MandalaProjectPage = props => (
  <>
    <ProjectInfo {...props.info} />
    <ProjectAbout {...props.about} />
    <ProjectProcess {...props.process}>
      <MandalaProcessChart {...props.process} />
    </ProjectProcess>
    <ProjectSitemap {...props.sitemap} />
    <ProjectDemoVideo {...props.demoVideo} />
    <ProjectPureImagesDemo {...props.demonstrations} />
  </>
)

MandalaProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired,
  demoVideo: PropTypes.object.isRequired,
  demonstrations: PropTypes.object.isRequired
}

export default MandalaProjectPage

import PropTypes from 'prop-types'

import ProjectInfo from '@components/ProjectInfo'
import ProjectAbout from '@components/ProjectAbout'
import KaiProcess from '@components/kai/KaiProcess'
import KaiSitemap from '@components/kai/KaiSitemap'
import KaiDemo from '@components/kai/KaiDemo'

const PageKai = props => {
  return (
    <>
      <ProjectInfo {...props.info} />
      <ProjectAbout {...props.about} />
      <KaiProcess {...props.process} />
      <KaiSitemap {...props.sitemap} />
      <KaiDemo {...props.demo} />
    </>
  )
}

PageKai.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  process: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired,
  demo: PropTypes.object.isRequired
}

export default PageKai

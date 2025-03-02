import PropTypes from 'prop-types'

import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectSitemap from '@/components/ProjectSitemap'

const PingoProjectPage = props => {
  return (
    <>
      <ProjectInfo {...props.info} />
      <ProjectAbout {...props.about} />

      <ProjectSitemap {...props.sitemap} />
    </>
  )
}

PingoProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired
}

export default PingoProjectPage

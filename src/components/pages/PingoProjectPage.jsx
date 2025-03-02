import PropTypes from 'prop-types'

import ProjectInfo from '@/components/ProjectInfo'
import ProjectAbout from '@/components/ProjectAbout'
import ProjectSitemap from '@/components/ProjectSitemap'
import PingoBgResearch from '@/components/pingo/PingoBgResearch'

const PingoProjectPage = props => {
  return (
    <>
      <ProjectInfo {...props.info} />
      <ProjectAbout {...props.about} />
      <PingoBgResearch {...props.backgroundResearch} />
      {/* 使用者研究 / User Research */}
      {/* 設計洞察 /  insights */}
      {/* 痛點分析＆解決方案 / Painpoint & Solution */}
      <ProjectSitemap {...props.sitemap} />
      {/* 流程優化 / Flow Chart */}
      {/* 設計規範 / Design Guideline */}
    </>
  )
}

PingoProjectPage.propTypes = {
  info: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
  backgroundResearch: PropTypes.object.isRequired,
  sitemap: PropTypes.object.isRequired
}

export default PingoProjectPage

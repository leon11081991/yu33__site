import PropTypes from 'prop-types'

import ContentContainer from '@/layouts/ContentContainer'
import ProjectTitle from '@/components/ProjectTitle'
import styles from '@styles/components/ListItem.module.scss'

const ProjectInfoContent = ({ title, information }) => (
  <section className='section-content border-b-[1px] border-gray-03'>
    <ProjectTitle
      title={title}
      className={styles.projectTitle}
    />
    <div>
      <ul className='two-cols-container'>
        {information.map(item => (
          <li
            key={item.label}
            className={styles.listItem}
          >
            <span className={styles.label}>{item.label}</span>
            <h5 className={styles.content}>{item.content}</h5>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

const ProjectInfo = ({ title, information }) => (
  <ContentContainer>
    <ProjectInfoContent
      title={title}
      information={information}
    />
  </ContentContainer>
)

const projectInfoPropTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}
const projectInfoContentPropTypes = projectInfoPropTypes

ProjectInfo.propTypes = projectInfoPropTypes
ProjectInfoContent.propTypes = projectInfoContentPropTypes

export default ProjectInfo

import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'

const ProjectInfoContent = ({ title, information }) => (
  <section className='section-content border-b-[1px] border-gray-03'>
    <h2 className='project-title heading-1'>{title}</h2>
    <div>
      <ul className='two-cols-container'>
        {information.map(item => (
          <li key={item.label}>
            <span className='heading-3 text-gray-03'>{item.label}</span>
            <h5 className='heading-4'>{item.content}</h5>
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

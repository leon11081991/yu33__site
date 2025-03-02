import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'

const ProjectAboutContent = ({ title, information }) => (
  <section className='section-content two-cols-container border-b-[1px] border-gray-03'>
    <h3 className='heading-2'>{title}</h3>
    <ul className='flex flex-col gap-16'>
      {information.map(item => {
        return (
          <li key={item.label}>
            <span className='heading-3 text-gray-03'>{item.label}</span>
            <p
              className='heading-4'
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.content) }}
            ></p>
          </li>
        )
      })}
    </ul>
  </section>
)

const ProjectAbout = ({ title, information }) => (
  <ContentContainer>
    <ProjectAboutContent
      title={title}
      information={information}
    />
  </ContentContainer>
)

const projectAboutPropTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired
}
const projectAboutContentPropTypes = projectAboutPropTypes

ProjectAbout.propTypes = projectAboutPropTypes
ProjectAboutContent.propTypes = projectAboutContentPropTypes

export default ProjectAbout

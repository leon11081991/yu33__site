import DOMPurify from 'dompurify'

import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'
import SectionTitle from '@components/SectionTitle'

import classes from '@styles/components/ListItem.module.scss'

const ProjectAboutContent = ({ title, information }) => (
  <section className='section-content two-cols-container border-b-[1px] border-gray-03'>
    <SectionTitle title={title} />
    <ul className='flex flex-col gap-16'>
      {information.map(item => {
        return (
          <li
            key={item.label}
            className={classes.listItem}
          >
            <span className={classes.label}>{item.label}</span>
            <p
              className={classes.content}
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

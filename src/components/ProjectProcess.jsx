import PropTypes from 'prop-types'
import ContentContainer from '@/layouts/ContentContainer'

const ProjectProcess = ({ title, children }) => (
  <ContentContainer>
    <section className='section-content border-b-[1px] border-gray-03'>
      <h3 className='heading-2 mb-16'>{title}</h3>
      {children}
    </section>
  </ContentContainer>
)

ProjectProcess.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ProjectProcess

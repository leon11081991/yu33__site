import PropTypes from 'prop-types'

const ProjectTile = ({ title }) => {
  return <h2 className='project-title heading-1'>{title}</h2>
}

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired
}

export default ProjectTile

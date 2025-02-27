import PropTypes from 'prop-types'

const SectionTitle = ({ title, className }) => {
  return <h3 className={`heading-2 ${className}`}>{title}</h3>
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default SectionTitle

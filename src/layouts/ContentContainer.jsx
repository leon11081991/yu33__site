import PropTypes from 'prop-types'

const ContentContainer = ({ className = '', children }) => (
  <div className={`content ${className}`}>
    <div className='content-container'>{children}</div>
  </div>
)

ContentContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default ContentContainer

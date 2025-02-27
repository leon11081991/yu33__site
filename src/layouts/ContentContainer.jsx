import PropTypes from 'prop-types'

const ContentContainer = ({ children }) => (
  <div className='content'>
    <div className='content-container'>{children}</div>
  </div>
)

ContentContainer.propTypes = {
  children: PropTypes.node
}

export default ContentContainer

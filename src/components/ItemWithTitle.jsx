import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'

const ItemWithTitle = ({ label, content }) => {
  return (
    <li className='flex flex-col gap-2'>
      {label && <h5 className='heading-3 text-gray-03'>{label}</h5>}
      <p
        className='text-p1'
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      ></p>
    </li>
  )
}

ItemWithTitle.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string.isRequired
}

export default ItemWithTitle

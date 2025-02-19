import PropTypes from 'prop-types'

import '@/styles/layout/header.scss'
export default function Header({ appName }) {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>{appName}</h1>
      </div>

      <div className='hamburger'>
        <div className='hamburger-container'>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  appName: PropTypes.string.isRequired
}

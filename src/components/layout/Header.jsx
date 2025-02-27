import PropTypes from 'prop-types'

import classes from '@styles/layout/Header.module.scss'

export default function Header({ appName }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>{appName}</h1>
      </div>

      <div className={classes.hamburger}>
        <div className={classes.hamburgerContainer}>
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

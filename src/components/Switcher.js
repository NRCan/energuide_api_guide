import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import universal from 'react-universal-component'

import styles from '../css/Switcher'

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  minDelay: 500,

  // eslint-disable-next-line react/display-name
  loading: () => <div className="loader">Loading...</div>,
  // eslint-disable-next-line react/display-name
  error: () => <div className={styles.notFound}>PAGE NOT FOUND - 404</div>,
})

const Switcher = ({ page }) => (
  <div className={styles.switcher}>
    <UniversalComponent page={page} />
  </div>
)

Switcher.propTypes = {
  page: PropTypes.node,
}

const mapStateToProps = state => ({
  page: state.page,
})

export default connect(mapStateToProps)(Switcher)

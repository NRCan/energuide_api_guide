import React from 'react'
import { css } from 'react-emotion'
import PropTypes from 'prop-types'

const button = css`
  font-size: 12pt;
`

const Button = ({ children }) => (
  <button className={button} type="submit">
    {children}
  </button>
)

/* validates only one child is passed in */
Button.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Button

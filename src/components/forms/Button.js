import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { colours, fontSizes, spacing } from '../styles'

const button = css`
  font-size: ${fontSizes.md};
  font-weight: 700;
  color: ${colours.white};
  background-color: ${colours.blue};
  border: 3px solid transparent;
  outline: 0;
  padding: ${spacing.sm}px ${spacing.xl}px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  cursor: pointer;

  &:focus {
    outline: 4px solid ${colours.focus};
    outline-offset: -1px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${colours.blueDark};
  }

  &:active {
    opacity: 0.8;
  }
`

const Button = ({ children }) => (
  <button className={button} type="submit">
    {children}
  </button>
)

/* validation to make sure only one child is passed in */
Button.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { theme, roundedEdges } from '../styles'

const button = css`
  font-size: ${theme.font.md};
  font-weight: 700;
  color: ${theme.colour.white};
  background-color: ${theme.colour.blue};
  border: 5px solid transparent;
  outline: 0;
  padding: ${theme.spacing.sm}px ${theme.spacing.xl}px;
  cursor: pointer;
  ${roundedEdges};

  &:focus {
    outline: 4px solid ${theme.colour.focus};
    outline-offset: -1px;
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${theme.colour.blueDark};
  }

  &:active,
  &:disabled {
    filter: alpha(opacity=60);
    opacity: 0.6;
  }

  &:disabled {
    &:hover {
      cursor: not-allowed;
      background-color: ${theme.colour.blue};
    }
  }
`

const Button = ({ disabled = false, children }) => (
  <button className={button} type="submit" disabled={disabled}>
    {children}
  </button>
)

/* validation to make sure only one child is passed in */
Button.propTypes = {
  children: PropTypes.element.isRequired,
  disabled: PropTypes.any,
}

export default Button

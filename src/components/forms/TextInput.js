import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { css } from 'react-emotion'
import { theme, roundedEdges } from '../styles'

const text_input = css`
  font-size: ${theme.font.md};
  border: 3px solid ${theme.colour.grey}};
  outline: 0;
  padding: ${theme.spacing.sm}px;
  width: 300px;
  margin-bottom: ${theme.spacing.xl}px;
  ${roundedEdges};

  &:focus {
    outline: 3px solid ${theme.colour.focus};
    outline-offset: 0px;
  }
`

const TextInput = ({ name, id, labelledby, children }) => (
  <div>
    {children}
    <Field
      type="text"
      component="input"
      name={name}
      id={id}
      aria-labelledby={labelledby}
      className={text_input}
    />
  </div>
)

TextInput.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  labelledby: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default TextInput

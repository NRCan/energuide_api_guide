import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { css } from 'react-emotion'
import { colours, fontSizes, spacing, roundedEdges } from '../styles'

const text_input = css`
  font-size: ${fontSizes.md};
  border: 3px solid ${colours.grey}};
  outline: 0;
  padding: ${spacing.sm}px;
  width: 300px;
  margin-bottom: ${spacing.xl}px;
  ${roundedEdges};

  &:focus {
    outline: 3px solid ${colours.focus};
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

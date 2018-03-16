import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { spacing, visuallyhidden } from '../styles'

const fieldset = css`
  border: none;
  margin-bottom: ${spacing.xl}px;

  legend {
    ${visuallyhidden};
  }
`

class FieldSet extends React.Component {
  constructor() {
    super()
    // Bind the method to the component context
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      return child
    })
  }

  render() {
    return <fieldset className={fieldset}>{this.renderChildren()}</fieldset>
  }
}

FieldSet.propTypes = {
  children: PropTypes.any.isRequired,
}

export default FieldSet

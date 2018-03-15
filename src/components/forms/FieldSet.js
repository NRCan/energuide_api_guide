import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

/*
 * Hide only visually, but have it
 * available for screenreaders
 */
const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const fieldset = css`
  border: none;

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
      return child.type.name === 'Radio' || child.type.name === 'Checkbox'
        ? React.cloneElement(child, {
            name: this.props.name,
            id: `${this.props.name}-${i}`,
          })
        : child
    })
  }

  render() {
    return <fieldset className={fieldset}>{this.renderChildren()}</fieldset>
  }
}

FieldSet.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default FieldSet

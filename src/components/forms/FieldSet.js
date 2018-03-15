import React from 'react'
import PropTypes from 'prop-types'

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
    return <fieldset>{this.renderChildren()}</fieldset>
  }
}

FieldSet.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default FieldSet

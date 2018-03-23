import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { theme, visuallyhidden, mediaQuery } from '../styles'

const fieldset = css`
  border: none;
  margin-bottom: ${theme.spacing.xl}px;

  ${mediaQuery.small(css`
    margin-bottom: ${theme.spacing.md}px;
  `)};
`

const legendHidden = css`
  legend {
    ${visuallyhidden};
  }
`

class FieldSet extends React.Component {
  static defaultProps = {
    legendHidden: true,
  }

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
    return (
      <fieldset
        className={css`
          ${fieldset} ${this.props.legendHidden
            ? css`
                ${legendHidden};
              `
            : ``};
        `}
      >
        {this.renderChildren()}
      </fieldset>
    )
  }
}

FieldSet.propTypes = {
  children: PropTypes.any.isRequired,
  legendHidden: PropTypes.bool,
}

export default FieldSet

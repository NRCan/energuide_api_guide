import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { theme } from './styles'

const breadcrumb = css`
  background-color: ${theme.colour.greyLight};
  padding: ${theme.spacing.md}px ${theme.spacing.xxxl}px;

  ol {
    max-width: 960px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: ${theme.font.md};

    li {
      display: inline-block;

      * {
        padding: 0;
      }
    }

    li:not(:last-child)::after {
      content: '>';
      padding: 0 ${theme.spacing.md}px;
      color: ${theme.colour.grey};
    }
  }
`

class Breadcrumbs extends React.Component {
  constructor() {
    super()
    // Bind the method to the component context
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => {
      return <li>{child}</li>
    })
  }

  render() {
    return (
      /* make sure at least 1 child */
      <section className={breadcrumb}>
        <nav aria-label="Breadcrumb">
          <ol>{this.renderChildren()}</ol>
        </nav>
      </section>
    )
  }
}

Breadcrumbs.propTypes = {
  children: PropTypes.any,
}

export default Breadcrumbs

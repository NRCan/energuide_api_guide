import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'

const breadcrumb = css`
  background-color: #ddd;
  padding: 20px 60px 20px 60px;

  ol {
    max-width: 960px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 19px;

    li {
      display: inline-block;
    }

    li:not(:last-child)::after {
      content: '>';
      padding: 0 10px;
      color: #444;
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

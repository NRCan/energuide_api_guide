import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { theme, mediaQuery } from './styles'

const breadcrumb = css`
  background-color: ${theme.colour.greyLight};
  padding: ${theme.spacing.md}px ${theme.spacing.xxxl}px;

  ${mediaQuery.small(css`
    padding-left: ${theme.spacing.lg}px;
    padding-right: ${theme.spacing.xl}px;
  `)};

  ol {
    max-width: 960px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: ${theme.font.md};

    ${mediaQuery.small(css`
      font-size: ${theme.font.sm};
    `)};

    li {
      display: inline-block;
      ${mediaQuery.xs(css`
        display: block;

        &:not(:last-of-type) {
          margin-bottom: ${theme.spacing.sm}px;
        }
      `)};

      * {
        padding: 0;
      }

      > a:focus {
        outline-color: ${theme.colour.visited};
      }
    }

    li:not(:first-child)::before {
      content: '>';
      padding: 0 ${theme.spacing.md}px;
      color: ${theme.colour.grey};
      ${mediaQuery.small(css`
        padding-left: ${theme.spacing.sm}px;
        padding-right: ${theme.spacing.sm}px;
      `)};

      ${mediaQuery.xs(css`
        padding-left: 0;
      `)};
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

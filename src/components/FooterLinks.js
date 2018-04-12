import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { theme, mediaQuery } from './styles'

const footerLinks = css`
  list-style-type: none;
  padding-left: ${theme.spacing.xxxl}px;
  padding-bottom: ${theme.spacing.xl}px;

  ${mediaQuery.small(css`
    padding-left: ${theme.spacing.lg}px;
    padding-bottom: ${theme.spacing.lg}px;
  `)};

  li {
    padding-bottom: 10px;

    a {
      color: ${theme.colour.blue};
    }
  }

  br {
    display: none;

    ${mediaQuery.xs(css`
      display: initial;
    `)};
  }
`

const FooterLinks = () => (
  <ul className={footerLinks}>
    <li>
      <Trans>Ready to use the Energuide API?</Trans>
      {'  '}
      <br />
      <a href="https://bit.ly/2HxeqDm">
        <Trans>Get access</Trans>
      </a>
    </li>
  </ul>
)

export default FooterLinks

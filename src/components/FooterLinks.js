import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { Header3, theme } from './styles'

const footerLinks = css`
  list-style-type: none;
  padding-left: ${theme.spacing.xxxl}px;
  padding-bottom: ${theme.spacing.xl}px;

  li {
    padding-bottom: 10px;

    a {
      color: ${theme.colour.blue};
    }
  }
`

const FooterLinks = () => (
  <Header3>
    <ul className={footerLinks}>
      <li>
        <Trans>Ready to use the Energuide API?</Trans>
        {'  '}
        <a href="http://bit.ly/2u4CxWJ">
          <Trans>Get access</Trans>
        </a>
      </li>
    </ul>
  </Header3>
)

export default FooterLinks

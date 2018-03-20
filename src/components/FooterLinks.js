import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { Header3, theme } from './styles'

const footerLinks = css`
  list-style-type: none;
  padding-left: ${theme.spacing.xxxl}px;
  padding-bottom: ${theme.spacing.xl}px;
`

const link = css`
  color: ${theme.colour.blue};
`

const FooterLinks = () => (
  <Header3>
    <ul className={footerLinks}>
      <li>
        <Trans>Ready to use the Energuide API?</Trans>
        {'  '}
        <a className={link} href="http://bit.ly/2u4CxWJ">
          <Trans>Get Access</Trans>
        </a>
      </li>
    </ul>
  </Header3>
)

export default FooterLinks

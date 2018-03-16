import React from 'react'
import { WordMark } from '@cdssnc/gcui'
import { Trans } from 'lingui-react'
import styled, { css } from 'react-emotion'
import { colours, spacing } from './styles'
import { fontWeight } from './styles'

const footer = css`
  background-color: ${colours.black};
  padding: ${spacing.xl}px ${spacing.xxxl}px;
  display: flex;
  justify-content: space-between;
  position: relative;
  font-family: ${fontWeight.bold}, sans serif;
`

const Link = styled.a`
  color: ${colours.white};
  margin-top: 10px;
`

const Footer = () => (
  <footer className={footer}>
    <Link href="https://www.canada.ca/en/transparency/privacy.html">
      <Trans>Privacy</Trans>
    </Link>
    <WordMark width="6em" flag={colours.white} text={colours.white} />
  </footer>
)

export default Footer

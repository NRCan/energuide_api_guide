import React from 'react'
import styled, { css } from 'react-emotion'
import { WordMark } from '@cdssnc/gcui'
import { Trans } from 'lingui-react'

const footer = css`
  background-color: #000;
  color: black;
  padding-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Link = styled.a`
  color: white;
`

const Footer = () => (
  <footer className={footer}>
    <Link href="https://www.canada.ca/en/transparency/privacy.html"><Trans>Privacy</Trans></Link>
    <WordMark width="6em" flag="#fff" text="#fff" />
  </footer>
)

export default Footer

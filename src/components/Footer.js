import React from 'react'
import styled, { css } from 'react-emotion'
import { WordMark } from '@cdssnc/gcui'
import { Trans } from 'lingui-react'

const footer = css`
  background-color: #000;
  color: black;
  padding: 30px 60px 30px 60px;
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  color: white;
  margin-top: 10px;
`

const Footer = () => (
  <footer className={footer}>
    <Link href="https://www.canada.ca/en/transparency/privacy.html"><Trans>Privacy</Trans></Link>
    <WordMark width="6em" flag="#fff" text="#fff" />
  </footer>
)

export default Footer

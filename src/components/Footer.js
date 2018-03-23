import React from 'react'
import { WordMark } from '@cdssnc/gcui'
import { Trans } from 'lingui-react'
import styled, { css } from 'react-emotion'
import { theme, mediaQuery } from './styles'

const footer = css`
  background-color: ${theme.colour.black};
  padding: ${theme.spacing.xl}px ${theme.spacing.xxxl}px;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${mediaQuery.small(css`
    padding-left: ${theme.spacing.lg}px;
    padding-right: ${theme.spacing.lg}px;
    flex-direction: column;
    align-items: center;
  `)};
`

const Link = styled.a`
  color: ${theme.colour.white};
  margin-top: ${theme.spacing.lg}px;
  font-size: ${theme.font.sm};

  ${mediaQuery.small(css`
    margin-top: 0;
    margin-bottom: ${theme.spacing.lg}px;
  `)};
`

const Footer = () => (
  <footer className={footer}>
    <Link href="https://www.canada.ca/en/transparency/privacy.html">
      <Trans>Privacy</Trans>
    </Link>
    <WordMark
      width="134px"
      height="32px"
      flag={theme.colour.white}
      text={theme.colour.white}
    />
  </footer>
)

export default Footer

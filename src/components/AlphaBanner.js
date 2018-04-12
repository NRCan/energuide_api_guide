import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { theme, roundedEdges, mediaQuery } from './styles'

const banner = css`
  background-color: ${theme.colour.grey};
  color: ${theme.colour.white};
  padding-left: ${theme.spacing.xxxl}px;
  padding-right: ${theme.spacing.xxxl}px;
  padding-top: 12px;
  padding-bottom: ${theme.spacing.sm}px;

  br {
    display: none;
  }

  ${mediaQuery.small(css`
    padding-left: ${theme.spacing.lg}px;
    padding-right: ${theme.spacing.lg}px;

    br {
      display: initial;
    }
  `)};
`

const alpha = css`
  font-size: ${theme.font.xs};
  margin-bottom: 0;
`

const badge = css`
  width: 80px;
  text-align: center;
  text-transform: uppercase;
  line-height: 2;
  color: white;
  position: relative;
  display: inline-block;
  font-size: ${theme.font.xs};
  bottom: 2px;
  padding: 2px ${theme.spacing.md}px;
  margin-right: ${theme.spacing.md}px;
  background-color: ${theme.colour.blueAlpha};
  ${roundedEdges};
  ${mediaQuery.small(css`
    display: block;
    margin-bottom: ${theme.spacing.sm}px;
  `)};
`

const link = css`
  color: ${theme.colour.white};
  padding: 0;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p className={alpha}>
      <span className={badge}>
        <Trans>Alpha</Trans>
      </span>
      <Trans>This is a demonstration of how the API could be used.</Trans>{' '}
      <br />
      <a className={link} href="mailto:cds-snc@tbs-sct.gc.ca">
        <Trans>
          Help us improve this internal service, email your feedback
        </Trans>
      </a>.
    </p>
  </div>
)

export default AlphaBanner

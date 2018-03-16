import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { colours, spacing, fontSizes, roundedEdges } from './styles'

const banner = css`
  background-color: ${colours.grey};
  color: ${colours.white};
  padding-left: ${spacing.xxxl}px;
  padding-right: ${spacing.xxxl}px;
  padding-top: 12px;
  padding-bottom: ${spacing.sm}px;
`

const alpha = css`
  font-size: ${fontSizes.xs};
  margin-bottom: 0;
`

const statusBar = css`
  text-transform: uppercase;
  line-height: 2;
  color: white;
  position: relative;
  display: inline-block;
  font-size: ${fontSizes.xs};
  bottom: 2px;
  padding: 2px ${spacing.md}px;
  margin-right: ${spacing.md}px;
  background-color: ${colours.blueAlpha};
  ${roundedEdges};
`

const AlphaBanner = () => (
  <div className={banner}>
    <p className={alpha}>
      <Trans>
        <span className={statusBar}>Alpha</span>This is an internal service.
      </Trans>
    </p>
  </div>
)

export default AlphaBanner

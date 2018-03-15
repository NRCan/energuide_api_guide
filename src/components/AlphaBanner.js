import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { colours, spacing, fontSizes, roundedEdges } from './styles'

const banner = css`
  background-color: ${colours.grey};
  color: ${colours.white};
  padding-left: ${spacing.xxl}px;
  padding-right: ${spacing.xxl}px;
  padding-top: 3px;
  padding-bottom: 3px;
`

const alpha = css`
  font-size: ${fontSizes.sm};
`

const statusBar = css`
  text-transform: uppercase;
  line-height: 2;
  color: white;
  position: relative;
  display: inline-block;
  bottom: 2px;
  padding: 2px ${spacing.md}px;
  margin-right: ${spacing.md}px;
  background-color: ${colours.blue};
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

import React from 'react'
import { css } from 'react-emotion'
import { Trans } from 'lingui-react'

const banner = css`
  background-color: #4A4A4A;
  color: white;
  padding-left: 60px;
  padding-top: 3px;
  padding-bottom: 3px;
`

const alpha = css`
  font-size: 12pt;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p className={alpha}><Trans>Alpha - This is an internal service</Trans></p>
  </div>
)

export default AlphaBanner

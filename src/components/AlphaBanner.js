import React from 'react'
import { css } from 'react-emotion'
import { Trans } from 'lingui-react'

const banner = css`
  background-color: black;
  color: white;
  padding-left: 60px;
  padding-top: 3px;
  padding-bottom: 3px;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p><Trans>Alpha - This is an internal service</Trans></p>
  </div>
)

export default AlphaBanner

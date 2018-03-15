import React from 'react'
import { css } from 'react-emotion'
import { Trans } from 'lingui-react'

const banner = css`
  background-color: #4a4a4a;
  color: white;
  padding-left: 60px;
  padding-top: 3px;
  padding-bottom: 3px;
`

const alpha = css`
  font-size: 12pt;
`

const statusBar = css`
  font-size: 10pt;
  color: white;
  position: relative;
  bottom: 2px;
  text-decoration: none;
  border-radius: 3px;
  padding: 2px 15px;
  margin-right: 16px;
  background-color: #1177dd;
`

const AlphaBanner = () => (
  <div className={banner}>
    <p className={alpha}>
      <Trans>
        <a className={statusBar}>Alpha</a> - This is an internal service
      </Trans>
    </p>
  </div>
)

export default AlphaBanner

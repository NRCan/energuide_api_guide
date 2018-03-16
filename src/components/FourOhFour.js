import React from 'react'
import { css } from 'react-emotion'

const notFound = css`
  .notFound {
    background: #141414;
    box-sizing: border-box;
    padding: 10px;
    color: #000 !important;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const FourOhFour = () => (
  <div className={notFound}>PAGE NOT FOUND - 404</div>
)

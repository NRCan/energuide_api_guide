import React from 'react'
import styled, { css } from 'react-emotion'
import { GoCSignature } from '@cdssnc/gcui'
import Link, { NavLink } from 'redux-first-router-link'

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
}

const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

const container = css`
  padding: 20px 60px 10px 60px;
  display: flex;
  width: auto;
  justify-content: space-between;
  background-color: black;
  ${mediaQuery.small(css`
    display: block;
  `)};
`

const frlink = css`
  text-align: right;
  color: white;
`

const FederalBanner = () => (
  <section className={container}>
    <div>
      <GoCSignature width="10em" flag="#FFF" text="#FFF" />
    </div>

    <Link href="https://www.canada.ca/fr.html">
      <a className={frlink}>Francais</a>
    </Link>
  </section>
)

export default FederalBanner

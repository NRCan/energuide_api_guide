import React from 'react'
import PropTypes from 'prop-types'

import { css } from 'react-emotion'
import { GoCSignature } from '@cdssnc/gcui'
import LanguageSwitcher from './LanguageSwitcher'
import { connect } from 'react-redux'

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

const FederalBanner = ({ lang }) => (
  <section className={container}>
    <div>
      <GoCSignature lang={lang} width="10em" flag="#FFF" text="#FFF" />
    </div>

    <LanguageSwitcher />
  </section>
)

FederalBanner.propTypes = {
  lang: PropTypes.string,
}

const mapStateToProps = state => ({
  lang: state.language,
})

export default connect(mapStateToProps)(FederalBanner)

import React from 'react'
import PropTypes from 'prop-types'
import { GoCSignature } from '@cdssnc/gcui'
import LanguageSwitcher from './LanguageSwitcher'
import { connect } from 'react-redux'
import { css } from 'react-emotion'
import { colours, spacing, mediaQuery } from './styles'

const container = css`
  padding: ${spacing.lg}px ${spacing.xxxl}px ${spacing.md}px ${spacing.xxxl}px;
  display: flex;
  width: auto;
  justify-content: space-between;
  background-color: ${colours.black};
  ${mediaQuery.small(css`
    display: block;
  `)};
`

const FederalBanner = ({ lang }) => (
  <section className={container}>
    <div>
      <GoCSignature
        lang={lang}
        width="10em"
        flag={colours.white}
        text={colours.white}
      />
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

import React from 'react'
import PropTypes from 'prop-types'
import { GoCSignature } from '@cdssnc/gcui'
import LanguageSwitcher from './LanguageSwitcher'
import { connect } from 'react-redux'
import { css } from 'react-emotion'
import { theme, mediaQuery } from './styles'

const container = css`
  padding: ${theme.spacing.lg}px ${theme.spacing.xxxl}px ${theme.spacing.md}px
    ${theme.spacing.xxxl}px;
  display: flex;
  width: auto;
  justify-content: space-between;
  background-color: ${theme.colour.black};
  ${mediaQuery.medium(css`
    display: block;
  `)};
`

const FederalBanner = ({ lang }) => (
  <section className={container}>
    <div>
      <GoCSignature
        lang={lang}
        width="250px"
        height="24px"
        flag={theme.colour.white}
        text={theme.colour.white}
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

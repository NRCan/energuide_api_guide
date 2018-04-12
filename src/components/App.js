import React from 'react'
import { injectGlobal } from 'emotion'
import { css } from 'react-emotion'
import Switcher from './Switcher'
import { I18nProvider } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import en from './locale/en/messages.js'
import fr from './locale/fr/messages.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AlphaBanner from './AlphaBanner'
import FederalBanner from './FederalBanner'
import Footer from './Footer'
import { mediaQuery, theme } from './styles'
import { Helmet } from 'react-helmet'

const catalogs = { en: unpackCatalog(en), fr: unpackCatalog(fr) }

// required in development only (huge dependency)
const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`

	html, body {
    padding: 0;
		margin: 0;
		background: ${theme.colour.white};
		height: 100%;
    font-family: ${theme.weight.l}, sans serif;
    font-size: ${theme.font.md};

    ${mediaQuery.small(css`
      font-size: ${theme.font.sm};
    `)};

	}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  svg {
    font-size: 1.4em;
  }

  strong {
    font-family: ${theme.weight.b};
    font-size: ${theme.font.md}px;
  }

  p {
    margin-bottom: ${theme.spacing.lg}px;
    line-height: 1.4;
  }

  a:focus {
    outline: 2px solid ${theme.colour.focus};
    outline-offset: 1px;
  }

  form  {
    margin-bottom: ${theme.spacing.xl}px;

    h2 {
      margin-bottom: ${theme.spacing.sm}px;
    }

    p {
      font-size: ${theme.font.md}px;
      margin-bottom: ${theme.spacing.md}px;
    }

    hr {
      border: none;
      border-bottom: 2px ${theme.colour.greyLight} solid;
      margin-bottom: ${theme.spacing.xl}px;
    }
  }

  .bottom-link {
    padding-left: ${theme.spacing.xs}px;
  }

  #pageWrap {
    min-height: calc(100vh - 104px);
  }

  .id-span {
    letter-spacing: -0.04em;
  }
`

const App = ({ lang }) => (
  <I18nProvider language={lang} catalogs={catalogs} development={dev}>
    <Helmet>
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org/face/hk-grotesk"
        type="text/css"
      />
      <html lang={'en'} />
      <meta content="width=device-width,initial-scale=1" name="viewport" />
    </Helmet>

    <div id="pageWrap">
      <div role={'banner'}>
        <AlphaBanner />
        <FederalBanner />
      </div>
      <Switcher />
    </div>
    <Footer id="foot" />
  </I18nProvider>
)

App.propTypes = {
  lang: PropTypes.string,
}

const mapStateToProps = state => ({
  lang: state.language,
})

export default connect(mapStateToProps)(App)

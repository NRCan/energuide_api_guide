import React from 'react'
import { injectGlobal } from 'emotion'
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
import { theme } from './styles'

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

  p, {
		line-height: 1.45;
	}

  p {
    margin-bottom: ${theme.spacing.lg}px;
  }

  li {
    padding-bottom: 10px;
  }

  form  {
    margin-bottom: ${theme.spacing.xl}px;

    h2 {
      margin-bottom: ${theme.spacing.sm}px;
    }

    p {
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

  #foot {
  }

`

const App = ({ lang }) => (
  <I18nProvider language={lang} catalogs={catalogs} development={dev}>
    <link
      rel="stylesheet"
      media="screen"
      href="https://fontlibrary.org/face/hk-grotesk"
      type="text/css"
    />
    <div id="pageWrap">
      <AlphaBanner />
      <FederalBanner />
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

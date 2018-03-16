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
import { fontWeight, colours, spacing, fontSizes } from './styles'

const catalogs = { en: unpackCatalog(en), fr: unpackCatalog(fr) }

// required in development only (huge dependency)
const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`

	html, body {
    padding: 0;
		margin: 0;
		background: ${colours.white};
		min-height: 100%;
    font-family: ${fontWeight.light}, sans serif;
    overflow-y: scroll;
    font-size: ${fontSizes.md};
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

	h1 {
    font-family: ${fontWeight.bold}, sans serif;
		font-size: ${fontSizes.xl};
    margin-bottom: ${spacing.lg}px;
	}

	h2 {
    font-family: ${fontWeight.bold}, sans serif;
    font-size: ${fontSizes.lg};
    margin-bottom: ${spacing.lg}px;
	}

	h3 {
    font-family: ${fontWeight.bold}, sans serif;
    font-size: ${fontSizes.md};
    margin-bottom: 0px;
	}

  p, a {
		line-height: 1.45;
	}

  p {
    margin-bottom: ${spacing.lg}px;
  }


	a {
		color: ${colours.blue};
    padding-right: ${spacing.md}px;
	}

	#info {
		top: 5px;
		left: 5px;
		display: inline;
	}

	input[type=text] {
		width: 30%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
		border: 3px solid #ccc;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		outline: none;
	}

	input[type=text]:focus {
		border: 3px solid #555;
	}

  #index-page, #page-body {
    margin: 0px;
    padding: ${spacing.xl}px ${spacing.xxxl}px;
  }

  #index-page {
    background-color: ${colours.yellow};
  }

  .bottom-link {
    padding-left: ${spacing.xs}px;
  }

  #header-container {
    width: 50%;
    margin-left:0px;
    padding: ${spacing.xxl}px 0px ${spacing.xxl}px 0px;
  }

`

const App = ({ lang }) => (
  <I18nProvider language={lang} catalogs={catalogs} development={dev}>
    <div>
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org/face/hk-grotesk"
        type="text/css"
      />
      <AlphaBanner />
      <FederalBanner />
      <Switcher />
      <Footer />
    </div>
  </I18nProvider>
)

App.propTypes = {
  lang: PropTypes.string,
}

const mapStateToProps = state => ({
  lang: state.language,
})

export default connect(mapStateToProps)(App)

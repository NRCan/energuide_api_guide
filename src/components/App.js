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
import { spacing } from './styles'

const catalogs = { en: unpackCatalog(en), fr: unpackCatalog(fr) }

// required in development only (huge dependency)
const dev =
  process.env.NODE_ENV !== 'production' ? require('lingui-i18n/dev') : undefined

injectGlobal`

	html, body {
    padding: 0;
		margin: 0;
		background: #fff;
		min-height: 100%;
		font-family: Helvetica, Arial, sans-serif;
		font-size: 1.4em;
	}

	h1 {
		font-family: "Helvetica", sans-serif;
		font-size: 48px;
		font-weight: bold;
	}

	h2 {
		font-family: "Helvetica", sans-serif;
		font-size: 24px;
		font-weight: bold;
	}

	h3 {
		font-family: "Helvetica", sans-serif;
		font-size: 19px;
		font-weight: bold;
	}

	p {
		font-family: "Helvetica", sans-serif;
		font-size: 19px;
		line-height: 27px;

	}

	a {
		font-family: "Helvetica", sans-serif;
		font-size: 19px;
		line-height: 26px;
		text-decoration: underline;
		color: #4A90E2;
    padding-right: ${spacing.md}px;
	}

	#fed-id {
	padding-top: 40px;
	padding-bottom: 40px;
	padding-left: 60px;
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

  #index-page {
    background-color: #fdd262;
    width: 100%;
    padding: 0px;
  }

  #container {
    width: 60%;
    padding: ${spacing.xxl}px;
  }

  #index-page p{
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px;
  }

  section {
    margin: 0px;
    padding: ${spacing.xs}px ${spacing.xxl}px;
  }

  .bottom-link {
    padding-left: ${spacing.xs}px;
  }

`

const App = ({ lang }) => (
  <I18nProvider language={lang} catalogs={catalogs} development={dev}>
    <div>
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

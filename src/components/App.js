import React from 'react'
import { GoCSignature } from '@cdssnc/gcui'
import { injectGlobal } from 'emotion'
import LanguageSwitcher from './LanguageSwitcher'
import Switcher from './Switcher'
import { I18nProvider } from 'lingui-react'
import { unpackCatalog } from 'lingui-i18n'
import en from './locale/en/messages.js'
import fr from './locale/fr/messages.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Banner from './Banner'
import AlphaBanner from './AlphaBanner'
import Footer from './Footer'
import SignatureBlock from './SignatureBlock'

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
    width: 100%;
    background-color: #fdd262;
  }
`

const App = ({ lang }) => (
  <I18nProvider language={lang} catalogs={catalogs} development={dev}>
    <div>
      <AlphaBanner />
      <GoCSignature flag="#000" lang={lang} />
      <LanguageSwitcher />
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

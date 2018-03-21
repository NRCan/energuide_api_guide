import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setLanguage } from '../actions'
import styled from 'react-emotion'
import { theme } from './styles'

const A = styled('a')`
  font-size: ${theme.font.sm};
  text-decoration: underline;
  position: relative;
  right: 0.3em;
  color: ${theme.colour.white};
  &:visited {
    color: #7834bc;
  }
  &:hover {
    cursor: pointer;
  }
`

export const LanguageSwitcher = ({ currentLanguage, setLanguage }) => (
  <A
    tabIndex={0}
    onClick={() => setLanguage(currentLanguage)}
    onKeyPress={e => {
      if (e.key === 'Enter') {
        setLanguage(currentLanguage)
      }
    }}
  >
    {currentLanguage === 'en' ? 'Français' : 'English'}
  </A>
)

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string,
  setLanguage: PropTypes.func,
}

const mapStateToProps = state => ({
  currentLanguage: state.language,
})

export default connect(mapStateToProps, { setLanguage })(LanguageSwitcher)

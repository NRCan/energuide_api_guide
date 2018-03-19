import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setLanguage } from '../actions'
import styled from 'react-emotion'
import { fontSizes } from './styles'

const A = styled('a')`
  font-size: ${fontSizes.sm};
  text-decoration: underline;
  position: relative;
  right: 0.3em;
  color: white;
  &:visited {
    color: #7834bc;
  }
  &:hover {
    cursor: pointer;
  }
`

export const LanguageSwitcher = ({ currentLanguage, setLanguage }) => (
  <A onClick={() => setLanguage(currentLanguage)}>
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

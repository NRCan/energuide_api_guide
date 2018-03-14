import React from 'react'
import styled from 'react-emotion'
import { connect } from 'react-redux'
import { setLanguage } from '../actions'
import PropTypes from 'prop-types'

const A = styled('a')`
  text-decoration: underline;
  position: relative;
  right: 0.3em;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
  background-color: none;
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

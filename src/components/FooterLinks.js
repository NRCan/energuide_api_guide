import React from 'react'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { NavLink } from 'redux-first-router-link'
import { Header3, theme } from './styles'

const footerLinks = css`
  list-style-type: none;
  padding-left: ${theme.spacing.xxxl}px;
  padding-bottom: ${theme.spacing.xl}px;
`

const link = css`
  color: ${theme.colour.blue};
`

const FooterLinks = () => (
  <Header3>
    <ul className={footerLinks}>
      <li>
        <Trans>Ready to use the Energuide API?</Trans>
        {'  '}
        <NavLink
          className={link}
          to="http://nrcanapi.cds-snc.ca/graphiql?operationName=AllCities&query=query%20AllCities%20%7B%0A%20%20dwellings(filters%3A%20%5B%0A%20%20%20%20%7Bfield%3A%20dwellingForwardSortationArea%2C%20comparator%3A%20eq%2C%20value%3A%20%22L0C%22%7D%0A%20%20%5D)%20%7B%0A%20%20%20%20results%20%7B%0A%20%20%20%20%20%20forwardSortationArea%0A%20%20%20%20%20%20evaluations%20%7B%0A%20%20%20%20%20%20%20%20heating%20%7B%0A%20%20%20%20%20%20%20%20%20%20energySourceEnglish%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
        >
          <Trans>Get Access</Trans>
        </NavLink>
      </li>
    </ul>
  </Header3>
)

export default FooterLinks

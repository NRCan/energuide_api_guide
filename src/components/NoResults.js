import React from 'react'
import { Trans } from 'lingui-react'
import PropTypes from 'prop-types'
import { Header1, SearchContainer, theme } from './styles'
import { NavLink } from 'redux-first-router-link'
import { css } from 'react-emotion'

const marginBottom = css`
  margin-bottom: ${theme.spacing.xl}px;
`

export const NoResults = ({ fileId }) => (
  <SearchContainer>
    <Header1>
      <Trans>No results</Trans>
    </Header1>
    <p className={marginBottom}>
      No evaluation was found with the file ID: <strong>{fileId}</strong>
    </p>
    <NavLink to="/search-fileid">
      <Trans>
        Search for another file <span className="id-span">ID</span>
      </Trans>
    </NavLink>
  </SearchContainer>
)

NoResults.propTypes = {
  fileId: PropTypes.string.isRequired,
}

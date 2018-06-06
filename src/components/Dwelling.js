import React from 'react'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { Trans } from 'lingui-react'
import { Header1, SearchContainer, theme, mediaQuery } from './styles'
import { css } from 'react-emotion'
import { displayValues } from '../utils'

const marginBottom = css`
  margin-bottom: ${theme.spacing.xl}px;
`
const ul = css`
  list-style-type: none;

  li {
    font-size: ${theme.font.lg};
    margin-bottom: ${theme.spacing.sm}px;

    ${mediaQuery.small(css`
      font-size: ${theme.font.md};
      margin-bottom: ${theme.spacing.xs}px;
    `)};
  }
`

export const Dwelling = ({ dwelling, fileId }) => (
  <SearchContainer>
    <Header1>
      <Trans>
        File <span className="id-span">ID</span>
      </Trans>:{` ${fileId}`}
    </Header1>

    <ul
      className={css`
        ${ul} ${marginBottom};
      `}
    >
      {Object.entries(displayValues(dwelling)).map((datum, i) => (
        <li key={i}>
          <strong>{datum[0]}</strong>: {datum[1]}
        </li>
      ))}
    </ul>
    <NavLink to="/search-fileid">
      <Trans>
        Search for another file <span className="id-span">ID</span>
      </Trans>
    </NavLink>
  </SearchContainer>
)

Dwelling.propTypes = {
  dwelling: PropTypes.object.isRequired,
  fileId: PropTypes.any.isRequired,
}

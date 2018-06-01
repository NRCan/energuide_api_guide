import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { Trans } from 'lingui-react'
import { i18n } from 'lingui-i18n'
import { css } from 'react-emotion'
import { Header1, SearchContainer, theme, mediaQuery } from './styles'
import FooterLinks from './FooterLinks'
import Breadcrumbs from './Breadcrumbs'
import { NoResults } from './NoResults'

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

const isEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object

function ShowFileID({ dwelling, fileId }) {
  const returnTheRightEvaluation = evaluations => {
    return evaluations.find(e => e.fileId === fileId)
  }

  const displayValues = dwelling => {
    // clone object so that we can re-assign to "heating"
    let evaluation = JSON.parse(
      JSON.stringify(returnTheRightEvaluation(dwelling.evaluations)),
    )

    let { ersRating = {}, eghRating = {} } = evaluation
    let { greenhouseGasEmissions = {} } = evaluation

    let result = {
      City: dwelling.city,
      'Year built': dwelling.yearBuilt,
      'House type': evaluation.houseType,
      'Evaluation type': evaluation.evaluationType,
      'Energuide rating':
        ersRating.measurement === null
          ? eghRating.measurement + '/100'
          : ersRating.measurement + ' GJ',
    }
    if (greenhouseGasEmissions.measurement)
      result['Greenhouse Gas Emissions'] = `${
        greenhouseGasEmissions.measurement
      } ${i18n.t`tonnes/year`}`
    return result
  }

  return (
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
}
ShowFileID.propTypes = {
  dwelling: PropTypes.any,
  fileId: PropTypes.any.isRequired,
}

const ResultsFileID = props => (
  <main role="main">
    <Breadcrumbs>
      <NavLink to="/">
        <Trans>EnerGuide API</Trans>
      </NavLink>
      <NavLink to="/search">
        <Trans>Search</Trans>
      </NavLink>
      <NavLink to="/search-fileid">
        <Trans>
          Search by file <span className="id-span">ID</span>
        </Trans>
      </NavLink>
      <Trans>Results</Trans>
    </Breadcrumbs>

    {!isEmpty(props.data) && (
      <ShowFileID dwelling={props.data} fileId={props.fileId} />
    )}

    {isEmpty(props.data) && <NoResults fileId={props.fileId} />}
    <FooterLinks />
  </main>
)

ResultsFileID.propTypes = {
  data: PropTypes.object,
  fileId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  data: state.data.searchFileIdData,
  fileId: state.location.payload.fileId,
})

export default connect(mapStateToProps)(ResultsFileID)

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import Async from 'react-promise'
import { Loading } from './Loading'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import { Header1, SearchContainer } from './styles'
import FooterLinks from './FooterLinks'
import { css } from 'react-emotion'
import { theme, mediaQuery } from './styles'

Async.defaultPending = <Loading />

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

const getData = async function(props) {
  let { client, payload: { fileId } } = props
  fileId = typeof fileId === 'string' ? fileId.toUpperCase() : fileId

  let response = await client.query({
    query: gql`
      query getEvaluationByFileId($fileId: String!) {
        dwellings(
          filters: [{ field: evaluationFileId, comparator: eq, value: $fileId }]
        ) {
          results {
            city
            yearBuilt
            evaluations {
              evaluationType
              fileId
              houseType
              ersRating {
                measurement
              }
              greenhouseGasEmissions {
                measurement
              }
            }
          }
        }
      }
    `,
    variables: { fileId: fileId },
  })

  if (response.loading) {
    return <div>Loading...</div>
  }
  let { data: { dwellings: { results: [dwelling] } } } = response

  return <ShowFileID dwelling={dwelling} fileId={fileId} />
}

function ShowFileID({ dwelling, fileId }) {
  if (!dwelling) {
    return (
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
  }

  const returnTheRightEvaluation = evaluations => {
    return evaluations.find(e => e.fileId === fileId)
  }

  const displayValues = dwelling => {
    // clone object so that we can re-assign to "heating"
    let evaluation = JSON.parse(
      JSON.stringify(returnTheRightEvaluation(dwelling.evaluations)),
    )

    let { ersRating = {} } = evaluation
    let { greenhouseGasEmissions = {} } = evaluation

    return {
      City: dwelling.city,
      'Year built': dwelling.yearBuilt,
      'House type': evaluation.houseType,
      'Evaluation type': evaluation.evaluationType,
      'ERS rating':
        ersRating.measurement === null ? null : ersRating.measurement + ' GJ',
      'Greenhouse Gas Emissions':
        greenhouseGasEmissions.measurement === null
          ? null
          : greenhouseGasEmissions.measurement + ' tonnes/year',
    }
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

    <Async promise={getData(props)} then={val => <div>{val}</div>} />

    <FooterLinks />
  </main>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
  payload: state.location.payload,
})

export default withApollo(connect(mapStateToProps)(ResultsFileID))

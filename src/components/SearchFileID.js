import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Breadcrumbs from './Breadcrumbs'
import TextInput from './forms/TextInput'
import Button from './forms/Button'
import { compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'
import { saveFileIdData } from '../actions'
import { css } from 'react-emotion'
import { Header1, Header2, SearchContainer } from './styles'
import FooterLinks from './FooterLinks'

const main = css`
  .id-span {
    letter-spacing: -0.04em;
  }
`

class SearchFileID extends Component {
  static propTypes = {
    save: PropTypes.func.isRequired,
    data: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  constructor() {
    super()
    this.handleFormData = this.handleFormData.bind(this)
  }

  async handleFormData(data) {
    let { client, save } = this.props

    let response = await client.query({
      query: gql`
        query POCSearchByFileId($houseId: Int!) {
          dwelling(houseId: $houseId) {
            houseId
            yearBuilt
            evaluations {
              fileId
              ersRating
            }
          }
        }
      `,
      variables: { houseId: data.fileId },
    })

    let { data: { dwelling } } = response
    const display = {
      houseId: dwelling.houseId,
      yearBuilt: dwelling.yearBuilt,
      ersRating: dwelling.evaluations[0].ersRating,
    }
    save(display)
  }

  showData(data) {
    let elements = Object.entries(data).map(datum => (
      <p key={datum.toString()}>
        {datum[0]}: {datum[1]}
      </p>
    ))
    return elements
  }

  render() {
    let { data, handleSubmit, pristine, submitting } = this.props
    return (
      <main role="main" className={main}>
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <NavLink to="/search">
            <Trans>Search</Trans>
          </NavLink>
          <Trans>
            Search by file <span className="id-span">ID</span>
          </Trans>
        </Breadcrumbs>

        <SearchContainer>
          <header>
            <Header1 id="search-by-fileid-description">
              <Trans>
                Search by file <span className="id-span">ID</span>
              </Trans>
            </Header1>
          </header>
          <form
            onSubmit={handleSubmit(this.handleFormData)}
            aria-labelledby="search-by-description"
          >
            <TextInput
              name="fileId"
              id="fileId"
              labelledby="fileId-label fileId-details"
            >
              <Header2>
                <label htmlFor="fileId" id="fileId-label">
                  <Trans>
                    File <span className="id-span">ID</span>
                  </Trans>
                </label>
              </Header2>
              <p id="fileId-details">
                <Trans>
                  Search by the file <span className="id-span">ID</span> on your
                  Energuide evaluation.
                </Trans>
              </p>
            </TextInput>

            <Button disabled={pristine || submitting}>
              <Trans>Search</Trans>
            </Button>
          </form>

          <div>{this.showData(data)}</div>
        </SearchContainer>
        <FooterLinks />
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: data => {
      dispatch(saveFileIdData(data))
    },
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  data: state.data.searchFileIdData,
})

export default compose(
  withApollo,
  reduxForm({ form: 'searchByfileId' }),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchFileID)

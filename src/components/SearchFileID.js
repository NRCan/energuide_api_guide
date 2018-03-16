import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'
import { saveFileIdData } from '../actions'

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
      <main role="main">
        <section>
          <nav aria-label="Breadcrumb">
            <ol>
              <li>
                <NavLink to="/">
                  <Trans>EnerGuide API</Trans>
                </NavLink>
              </li>
              <li>
                <NavLink to="/search">
                  <Trans>Search by</Trans>
                </NavLink>
              </li>
              <li>
                <NavLink to="/search-location">
                  <Trans>Location</Trans>
                </NavLink>
              </li>
            </ol>
          </nav>
        </section>

        <div id="page-body">
          <header>
            <h1 id="search-by-fileid-description">
              <Trans>Search by file ID</Trans>
            </h1>
          </header>
          <form
            onSubmit={handleSubmit(this.handleFormData)}
            aria-labelledby="search-by-description"
          >
            <h2>
              <label htmlFor="fileid" id="fileid-label">
                <Trans>File ID</Trans>
              </label>
            </h2>
            <p id="location-details">
              <Trans>Search by the file id on your Energuide evaluation.</Trans>
            </p>
            <Field
              id="fildId"
              name="fileId"
              component="input"
              type="text"
              value=""
            />

            <button type="submit" disabled={pristine || submitting}>
              <Trans>Search</Trans>
            </button>
          </form>

          <div>{this.showData(data)}</div>

          <aside>
            <h3>
              <Trans>To see all of the available data,&nbsp;</Trans>
              <a href="https://github.com/cds-snc/nrcan_api">
                <Trans>view the EnerGuide API documentation</Trans>
              </a>
              <Trans>&nbsp;on GitHub.</Trans>
            </h3>
          </aside>
        </div>
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

import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import FieldSet from './forms/FieldSet'
import TextInput from './forms/TextInput'
import { Radio } from './forms/MultipleChoice'
import Button from './forms/Button'
import Flash from './Flash' // eslint-disable-line import/no-named-as-default
import { Header1, Header2, LocationContainer } from './styles'
import FooterLinks from './FooterLinks'
import { createQuery } from '../utils'
import {
  flash,
  saveLocation,
  deleteLocation,
  navigateToResultsPage,
} from '../actions'

class SearchLocation extends Component {
  static propTypes = {
    data: PropTypes.array,
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
    let {
      client,
      flash,
      deleteLocation,
      navigateToResultsPage,
      saveLocation,
    } = this.props

    deleteLocation() // clear any previous data
    flash() // clear any previous flash messages

    const { clientFilter, variables, query } = createQuery(data)

    let response = await client.query({
      query,
      variables,
    })

    if (response.errors) {
      flash(response.errors, 'error')
    } else {
      let { data: { dwellings } } = response
      if (dwellings.results.length > 0) {
        saveLocation(dwellings.results, clientFilter)
        navigateToResultsPage()
      } else {
        deleteLocation()
        flash(<Trans>No results found</Trans>, 'warn')
      }
    }
  }

  render() {
    let { handleSubmit, pristine, submitting } = this.props
    return (
      <main role="main">
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <NavLink to="/search">
            <Trans>Search</Trans>
          </NavLink>
          <Trans>Search by location</Trans>
        </Breadcrumbs>
        <Flash />
        <LocationContainer>
          <header>
            <Header1 id="search-by-location-description">
              <Trans>Search by location</Trans>
            </Header1>
          </header>
          <form
            onSubmit={handleSubmit(this.handleFormData)}
            aria-labelledby="search-by-location-description"
          >
            <TextInput
              name="location"
              id="location"
              labelledby="location-label location-details"
            >
              <Header2>
                <label htmlFor="location" id="location-label">
                  <Trans>Location</Trans>
                </label>{' '}
                (eg. L4C)
              </Header2>
              <p id="location-details">
                <Trans>
                  Search for a region by submitting the first three digits of a
                  postal code.
                </Trans>
              </p>
            </TextInput>
            <hr />
            <FieldSet legendHidden={false}>
              <legend>
                <Header2>
                  <Trans>Filters</Trans>
                </Header2>
              </legend>
              <p>
                <Trans>Search by type of dwelling.</Trans>
              </p>
              <Radio
                label={<Trans>Single detached</Trans>}
                value="single-detached"
                name="houseType"
                id="house-type-1"
              />
              <Radio
                label={<Trans>Detached Duplex</Trans>}
                value="detached-duplex"
                name="houseType"
                id="house-type-2"
              />
              <Radio
                label={<Trans>Row house, end unit</Trans>}
                value="row-house-end"
                name="houseType"
                id="house-type-3"
              />
              <Radio
                label={<Trans>Row house, middle unit</Trans>}
                value="row-house-middle"
                name="houseType"
                id="house-type-4"
              />
              <Radio
                label={<Trans>Apartment</Trans>}
                value="apartment"
                name="houseType"
                id="house-type-5"
              />
              <Radio
                label={<Trans>All</Trans>}
                value="all"
                name="houseType"
                id="house-type-6"
              />
            </FieldSet>
            <Button disabled={pristine || submitting}>
              <Trans>Search</Trans>
            </Button>
          </form>
        </LocationContainer>
        <FooterLinks />{' '}
      </main>
    )
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  data: state.data.searchLocationData,
})

export default compose(
  withApollo,
  reduxForm({
    form: 'searchByLocation',
    initialValues: { houseType: 'all' },
  }),
  connect(mapStateToProps, {
    saveLocation,
    navigateToResultsPage,
    deleteLocation,
    flash,
  }),
)(SearchLocation)

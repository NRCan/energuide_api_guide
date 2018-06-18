import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import FieldSet from './forms/FieldSet'
import TextInput from './forms/TextInput'
import { Radio } from './forms/MultipleChoice'
import Button from './forms/Button'
import Flash from './Flash' // eslint-disable-line import/no-named-as-default
import { Header1, Header2, LocationContainer } from './styles'
import FooterLinks from './FooterLinks'
import {
  setFlash,
  saveLocationData,
  deleteLocationData,
  goToLocationResults,
} from '../actions'

class SearchLocation extends Component {
  static propTypes = {
    save: PropTypes.func.isRequired,
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
      navigateToResultsPage,
      client,
      save,
      flash,
      deleteFormData,
    } = this.props

    deleteFormData() // clear any previous data
    flash() // clear any previous flash messages

    let clientFilter = { houseType: 'all' }
    let args = []
    let filters = []
    let variables = {}
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'location') {
        value = typeof value === 'string' ? value.toUpperCase() : value
        filters.push(`{
                field: dwellingForwardSortationArea
                comparator: eq
                value: $location
              }`)
        args.push('$location: String!')
        variables.location = value
      } else {
        switch (value) {
          case 'single-detached':
            filters.push(`
              {
                field: evaluationHouseType
                comparator: eq
                value: $singleDetached
              }
          `)
            args.push('$singleDetached: String!')
            variables.singleDetached = 'Single detached'
            clientFilter.houseType = 'Single detached'
            break
          case 'detached-duplex':
            filters.push(`
                  {
                    field: evaluationHouseType
                    comparator: eq
                    value: $detachedDuplex
                  }
              `)
            args.push('$detachedDuplex: String!')
            variables.detachedDuplex = 'Detached Duplex'
            clientFilter.houseType = 'Detached Duplex'
            break
          case 'row-house-end':
            filters.push(`
                {
                  field: evaluationHouseType
                  comparator: eq
                  value: $rowHouseEnd
                }
            `)
            args.push('$rowHouseEnd: String!')
            variables.rowHouseEnd = 'Row house, end unit'
            clientFilter.houseType = 'Row house, end unit'
            break
          case 'row-house-middle':
            filters.push(`
                  {
                    field: evaluationHouseType
                    comparator: eq
                    value: $rowHouseMiddle
                  }
              `)
            args.push('$rowHouseMiddle: String!')
            variables.rowHouseMiddle = 'Row house, middle unit'
            clientFilter.houseType = 'Row house, middle unit'
            break
          case 'apartment':
            filters.push(`
                    {
                      field: evaluationHouseType
                      comparator: eq
                      value: $apartment
                    }
                `)
            args.push('$apartment: String!')
            variables.apartment = 'Apartment'
            clientFilter.houseType = 'Apartment'
            break
          case 'all':
            // No need for a filter
            break
        }
      }
    })

    let response = await client.query({
      query: gql`
        query POCSearchLocation(${args}) {
          dwellings(
            limit: 100
            filters: [
              ${filters}
            ]
          ) {
            results {
              yearBuilt
              region
              forwardSortationArea
              evaluations {
                houseType
                eghRating {
                  measurement
                }
              }
            }
          }
        }
      `,
      variables,
    })
    if (response.errors) {
      flash(response.errors, 'error')
    } else {
      let { data: { dwellings } } = response

      if (dwellings.results.length > 0) {
        save(dwellings.results, clientFilter)
        navigateToResultsPage()
      } else {
        deleteLocationData()
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

const mapDispatchToProps = dispatch => {
  return {
    save: (data, filter) => {
      dispatch(saveLocationData(data, filter))
    },
    navigateToResultsPage: () => dispatch(goToLocationResults()),
    flash: (message, priority) => {
      dispatch(setFlash(message, priority))
    },
    deleteFormData: () => dispatch(deleteLocationData()),
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
  connect(mapStateToProps, mapDispatchToProps),
)(SearchLocation)

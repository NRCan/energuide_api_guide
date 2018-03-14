import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'

class SearchLocation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  constructor() {
    super()
    this.handleFormData = this.handleFormData.bind(this)
  }

  async handleFormData(data) {
    let { client } = this.props

    let response = await client.mutate({
      mutation: gql`
        mutation($uci: String!, $reason: String!) {
          decline(uci: $uci, reason: $reason) {
            messageID
            statusCode
          }
        }
      `,
      variables: data,
    })

    let { data: { decline } } = response

    console.log('Response from the server:', decline) // eslint-disable-line no-console
    // TODO: Handle error case
    this.props.dispatch({ type: 'THANK_YOU' })
  }

  render() {
    return (
      <main role="main">
        <section>
          <nav aria-label="Breadcrumb">
            <ol>
              <li>
                <NavLink to="/">
                  <a>
                    <Trans>EnerGuide API</Trans>
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/search">
                  <a aria-current="page">
                    <Trans>Search by</Trans>
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/search-location">
                  <a aria-current="page">
                    <Trans>Location</Trans>
                  </a>
                </NavLink>
              </li>
            </ol>
          </nav>
        </section>

        <div id="page-body">
          <header>
            <h1 id="search-by-location-description">
              <Trans>Search by location</Trans>
            </h1>
          </header>
          <form aria-labelledby="search-by-location-description">
            <h2>
              <label htmlFor="location" id="location-label">
                <Trans>Location</Trans>
              </label>
            </h2>
            <p id="location-details">
              <Trans>
                Search for a region by submitting the first three digits of a
                postal code.
              </Trans>
            </p>
            <input
              type="text"
              name="location"
              id="location"
              aria-labelledby="location-label location-details"
            />

            <fieldset>
              <legend>
                <h3>
                  <Trans>Search by Location</Trans>
                </h3>
              </legend>
              <p>
                <Trans>
                  Search by the type of energy source. Choose all of the
                  parameters that apply.
                </Trans>
              </p>

              <input
                type="checkbox"
                id="energy-source-1"
                name="energy-source"
                value="oil"
              />
              <label htmlFor="energy-source-1">
                <Trans>Oil</Trans>
              </label>
              <input
                type="checkbox"
                id="energy-source-2"
                name="energy-source"
                value="electricity"
              />
              <label htmlFor="energy-source-2">
                <Trans>Electricity</Trans>
              </label>
              <input
                type="checkbox"
                id="energy-source-3"
                name="energy-source"
                value="natural-gas"
              />
              <label htmlFor="energy-source-3">
                <Trans>Natural gas</Trans>
              </label>
            </fieldset>
            <button type="submit">
              <Trans>Search</Trans>
            </button>
          </form>

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

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default withApollo(connect(mapStateToProps)(SearchLocation))

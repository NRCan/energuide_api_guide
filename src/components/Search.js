import React, { Component } from 'react'
import Link, { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import Form from './Form'
import InfoIcon from './InfoIcon'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'

class Search extends Component {
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
            <h1>
              <Trans>Which parameter would you like to search by?</Trans>
            </h1>
          </header>
          <p>
            <Trans>
              To test the API, you are able to search by Location or File
              number.
            </Trans>
          </p>
          <form aria-labelledby="search-by-description">
            <fieldset>
              <legend id="search-by-description">
                <Trans>Search by Location or File number</Trans>
              </legend>
              <input
                type="radio"
                id="search-by-1"
                name="search-by"
                value="location"
              />
              <label htmlFor="search-by-1">
                <Trans>Location&nbsp;</Trans>
                <abbr title="A location refers to a region or neighbourhood. You will be searching by the first three digits of any postal code.">
                  <InfoIcon />
                </abbr>
              </label>

              <input
                type="radio"
                id="search-by-2"
                name="search-by"
                value="file-number"
              />
              <label htmlFor="search-by-2">
                <Trans>File number&nbsp;</Trans>
                <abbr title="A file number refers to an individual home. This number is provided to the homeowner through EnerGuide.">
                  <InfoIcon />
                </abbr>
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

export default withApollo(connect(mapStateToProps)(Search))

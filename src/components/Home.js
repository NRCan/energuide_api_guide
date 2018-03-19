import React from 'react'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { mediaQuery, spacing, colours } from './styles'
import CircuitHouse from './CircuitHouse'

const main = css`
  section {
    margin-bottom: ${spacing.xxl}px;
    width: 70%;

    ${mediaQuery.medium(css`
      width: 100%;
    `)};

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  #header-container {
    width: 45%;
    position: absolute;
    z-index: 1;
    margin-left: 0px;
    padding: ${spacing.xl}px 0px ${spacing.xl}px 0px;

    ${mediaQuery.medium(css`
      width: 80%;
    `)};

    ${mediaQuery.small(css`
      width: 70%;
      padding: ${spacing.sm}px;
    `)};
  }

  #index-page {
    background-color: ${colours.yellow};
    padding: ${spacing.xl}px ${spacing.xxxl}px;
    height: 19em;
    ${mediaQuery.large(css`
      height: 20em;
    `)};

    ${mediaQuery.medium(css`
      height: 18.5em;
    `)};

    ${mediaQuery.small(css`
      height: 20em;
    `)};

    ${mediaQuery.xs(css`
      height: 23em;
    `)};
  }
`

const Home = () => (
  <main role="main" className={main}>
    <header id="index-page">
      <div id="header-container">
        <div id="page-header">
          <h2>
            <Trans>Natural Resources Canada</Trans>
          </h2>
          <h1>
            <Trans>EnerGuide API</Trans>
          </h1>
        </div>

        <p>
          <Trans>
            The EnerGuide API allows you to access the housing data provided by
            Natural Resource Canada. You will have open access to the data, with
            granularity to search to a individual dwelling level.
          </Trans>
        </p>
        <NavLink to="/search">
          <Trans>Test the API</Trans>
        </NavLink>
        <a href="https://github.com/cds-snc/nrcan_api/blob/master/api/docs.md">
          <Trans>View the documentation</Trans>
        </a>
      </div>
    </header>

    <CircuitHouse />

    <div id="page-body">
      <section>
        <h2>
          <Trans>What is an API?</Trans>
        </h2>
        <p>
          <Trans>
            An <abbr title="Application Programming Interface">API</abbr>, or{' '}
            <strong>Application Programming Interface</strong>, is a set of
            routines, protocols and tools for building software. An API makes it
            easier to develop a computer program by providing all the building
            blocks, which are then put together by the programmer.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans>What are the benefits of the EnerGuide API?</Trans>
        </h2>
        <h3>
          <Trans>View open source data</Trans>
        </h3>
        <p>
          <Trans>
            The EnerGuide API will help make housing evaluation data accessible
            for everyone.
          </Trans>
        </p>
        <h3>
          <Trans>Query specific data</Trans>
        </h3>
        <p>
          <Trans>
            You can choose to access the granular data that you need.
          </Trans>
        </p>
        <h3>
          <Trans>Access current data</Trans>
        </h3>
        <p>
          <Trans>
            As new housing evaluations are added to the EnerGuide API, the data
            will be updated and available for you to use.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans>How can I use the EnerGuide API?</Trans>
        </h2>
        <p>
          <Trans>
            To learn how to use the API, we have provided the documentation on
            Github. The documentation will show all of the data types available
            under the EnerGuide API.
          </Trans>
        </p>
        <h3>
          <Trans>To see how it can be used,</Trans>{' '}
          <NavLink to="/search">
            <Trans>test the API</Trans>
          </NavLink>
        </h3>
        <h3>
          <Trans>Ready to use the Energuide API?</Trans>{' '}
          <NavLink to="https://github.com/cds-snc/nrcan_api/blob/master/api/docs.md">
            <Trans>View the documentation</Trans>
          </NavLink>
        </h3>
      </section>
    </div>
  </main>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default withApollo(connect(mapStateToProps)(Home))

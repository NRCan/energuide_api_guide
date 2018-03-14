import React from 'react'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'

const Home = () => (
  <main>
    <header id="index-page">
      <div id="page-header">
        <p>
          <Trans>Natural Resources Canada</Trans>
        </p>
        <h1>
          <Trans>EnerGuide API</Trans>
        </h1>
      </div>

      <h2>
        <Trans>What is the EnerGuide API?</Trans>
      </h2>
      <p>
        <Trans>
          The EnerGuide API allows you to access the housing data provided by
          Natural Resources Canada. You will have open access the data, and will
          be able to query to an individual dwelling.
        </Trans>
      </p>
      <NavLink to="/search">
        <Trans>Test the API</Trans>
      </NavLink>
      <a href="https://github.com/cds-snc/nrcan_api">
        <Trans>Access the API</Trans>
      </a>
    </header>

    <div id="page-body">
      <section>
        <h2>
          <Trans>What is an API?</Trans>
        </h2>
        <p>
          <Trans>
            An <strong>Application Programming Interface</strong>, or
            <abbr title="Application Programming Interface">API</abbr>, is a set
            of routines, protocols and tools for building software. Many
            applications can talk to each other and deliver a response.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans>What are the benefits of the EnerGuide API?</Trans>
        </h2>
        <h3>
          <Trans>View open data</Trans>
        </h3>
        <p>
          <Trans>
            The EnerGuide API will help make energy consumption data accessible
            for everyone.
          </Trans>
        </p>
        <h3>
          <Trans>Query specific data</Trans>
        </h3>
        <p>
          <Trans>
            You can choose to access the granular data that you need. You will
            benefit from the ability to extract data data that is specific to
            your needs.
          </Trans>
        </p>
        <h3>
          <Trans>Access current data</Trans>
        </h3>
        <p>
          <Trans>
            The EnerGuide API will help make energy consumption data accessible
            for everyone.
          </Trans>
        </p>
      </section>
      <section>
        <h2>
          <Trans>How can I use the EnerGuide API?</Trans>
        </h2>
        <p>
          <Trans>
            Developers and data analysts can allow users to query specific
            information from large data sets. They set the rules that will guide
            the user to what they need.{' '}
          </Trans>
        </p>
        <h3>
          <Trans>To see how it can be used,&nbsp;</Trans>
          <NavLink to="/search">
            <a>
              <Trans>test the API</Trans>
            </a>
          </NavLink>
        </h3>
        <h3>
          <Trans>Ready to use the Energuide API?&nbsp;</Trans>
          <NavLink to="https://github.com/cds-snc/nrcan_api">
            <a>
              <Trans>Read the documentation</Trans>
            </a>
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

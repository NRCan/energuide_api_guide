import React from 'react'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import CircuitHouse from './CircuitHouse'
import {
  Header1,
  Header2,
  Header3,
  IndexHeader,
  HeaderContainer,
  Section,
  theme,
} from './styles'

const main = css`
  margin-bottom: ${theme.spacing.xxxl}px;
`

const Home = () => (
  <ThemeProvider theme={theme}>
    <main role="main">
      <IndexHeader>
        <HeaderContainer>
          <div id="page-header">
            <Header2>
              <Trans>Natural Resources Canada</Trans>
            </Header2>
            <Header1>
              <Trans>EnerGuide API</Trans>
            </Header1>
          </div>

          <p>
            <Trans>
              The EnerGuide API allows you to access the housing data provided
              by Natural Resource Canada. You will have open access to the data,
              with granularity to search to a individual dwelling level.
            </Trans>
          </p>
          <NavLink to="/search">
            <Trans>Test the API</Trans>
          </NavLink>
          <a href="https://github.com/cds-snc/nrcan_api/blob/master/api/docs.md">
            <Trans>View the documentation</Trans>
          </a>
        </HeaderContainer>
      </IndexHeader>

      <CircuitHouse />

      <div id="page-body">
        <Section>
          <Header2>
            <Trans>What is an API?</Trans>
          </Header2>
          <p>
            <Trans>
              An <abbr title="Application Programming Interface">API</abbr>, or{' '}
              <strong>Application Programming Interface</strong>, is a set of
              routines, protocols and tools for building software. An API makes
              it easier to develop a computer program by providing all the
              building blocks, which are then put together by the programmer.
            </Trans>
          </p>
        </Section>
        <Section>
          <Header2>
            <Trans>What are the benefits of the EnerGuide API?</Trans>
          </Header2>
          <Header3>
            <Trans>View open source data</Trans>
          </Header3>
          <p>
            <Trans>
              The EnerGuide API will help make housing evaluation data
              accessible for everyone.
            </Trans>
          </p>
          <Header3>
            <Trans>Query specific data</Trans>
          </Header3>
          <p>
            <Trans>
              You can choose to access the granular data that you need.
            </Trans>
          </p>
          <Header3>
            <Trans>Access current data</Trans>
          </Header3>
          <p>
            <Trans>
              As new housing evaluations are added to the EnerGuide API, the
              data will be updated and available for you to use.
            </Trans>
          </p>
        </Section>
        <Section>
          <Header2>
            <Trans>How can I use the EnerGuide API?</Trans>
          </Header2>
          <p>
            <Trans>
              To learn how to use the API, we have provided the documentation on
              Github. The documentation will show all of the data types
              available under the EnerGuide API.
            </Trans>
          </p>
          <Header3>
            <Trans>To see how it can be used,</Trans>{' '}
            <NavLink to="/search">
              <Trans>test the API</Trans>
            </NavLink>
          </Header3>
          <Header3>
            <Trans>Ready to use the Energuide API?</Trans>{' '}
            <NavLink to="https://github.com/cds-snc/nrcan_api/blob/master/api/docs.md">
              <Trans>View the documentation</Trans>
            </NavLink>
          </Header3>
        </Section>
      </div>
    </main>
  </ThemeProvider>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default withApollo(connect(mapStateToProps)(Home))

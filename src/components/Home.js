import React from 'react'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import FooterLinks from './FooterLinks'
import {
  Header1,
  Header2,
  Header3,
  IndexHeader,
  HeaderContainer,
  UseTheGuide,
  Section,
  PageBody,
  theme,
} from './styles'
import CircuitHouse from './CircuitHouse'

const main = css`
  margin-bottom: ${theme.spacingXlarge3}px;
`

const headerLink = css`
  color: ${theme.colour.blue};
  padding-right: ${theme.spacing.md}px;
  font-family: ${theme.weight.b}, sans serif;
`

const noSpaceLink = css`
  color: ${theme.colour.blue};
  padding-right: ${theme.spacing.xs}px;
  font-family: ${theme.weight.b}, sans serif;
`

const Home = () => (
  <ThemeProvider theme={theme}>
    <div id="pageWrap">
      <main role="main" className={main}>
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
                by Natural Resources Canada. You will have open access the data,
                and will be able to query to an individual dwelling.
              </Trans>
            </p>
            <NavLink to="/search" className={headerLink}>
              <Trans>Test the API</Trans>
            </NavLink>
            <a
              href="https://github.com/cds-snc/nrcan_api"
              className={headerLink}
            >
              <Trans>View the documentation</Trans>
            </a>
          </HeaderContainer>
        </IndexHeader>

        <CircuitHouse />

        <PageBody>
          <Section>
            <Header2>
              <Trans>What is an API?</Trans>
            </Header2>
            <p>
              <Trans>
                An <abbr title="Application Programming Interface">API</abbr>,
                or <strong>Application Programming Interface</strong>, is a set
                of routines, protocols and tools for building software. An API
                makes it easier to develop a computer program by providing all
                the building blocks, which are then put together by the
                programmer.
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
          <UseTheGuide>
            <Section>
              <Header2>
                <Trans>How can I use the EnerGuide API?</Trans>
              </Header2>
              <p>
                <Trans>
                  To learn how to use the API, we have provided the{' '}
                  <a
                    href="https://github.com/cds-snc/nrcan_api"
                    className={noSpaceLink}
                  >
                    <Trans>documentation on Github.</Trans>
                  </a>
                  The documentation will show all of the data types available
                  under the EnerGuide API.
                </Trans>
              </p>
            </Section>
            <FooterLinks />
          </UseTheGuide>
        </PageBody>
      </main>
    </div>
  </ThemeProvider>
)

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default withApollo(connect(mapStateToProps)(Home))

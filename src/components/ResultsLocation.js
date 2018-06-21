import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import { Header1, SearchContainer, theme, mediaQuery } from './styles'
import { isEmpty } from '../utils'
import FooterLinks from './FooterLinks'
import DataTable from './DataTable'
import { css } from 'react-emotion'

const margin = css`
  margin: 1em 0em;
`

const tableContainer = css`
  margin-top: ${theme.spacing.xl}px;
  width: 100%;
  overflow: scroll;
  border: 2px solid ${theme.colour.greyLight};
  position: relative;

  ${mediaQuery.large(css`
    width: 120%;
  `)};

  ${mediaQuery.small(css`
    width: 100%;
    height: 400px;
  `)};

  & > .fixedDataTableLayout_main {
    border: none;
  }
`

class ResultsLocation extends Component {
  static propTypes = {
    data: PropTypes.array,
    fetching: PropTypes.bool.isRequired,
  }

  render() {
    let { data, fetching } = this.props
    return (
      <main role="main">
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <NavLink to="/search">
            <Trans>Search</Trans>
          </NavLink>
          <NavLink to="/search-location">
            <Trans>Search by location</Trans>
          </NavLink>
          <Trans>Results</Trans>
        </Breadcrumbs>
        <SearchContainer>
          {fetching === false && (
            <Header1>
              <Trans>{data.length} results</Trans>
            </Header1>
          )}
          {!fetching &&
            !isEmpty(data) && (
              <div>
                <div className={tableContainer}>
                  <DataTable className={margin} data={data} />
                </div>
              </div>
            )}
          {!fetching && (
            <NavLink to="/search-location">
              <Trans>Search for another location</Trans>
            </NavLink>
          )}
        </SearchContainer>
        <FooterLinks />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  fetching: state.data.fetching,
  data: state.data.searchLocationData,
})

export default connect(mapStateToProps)(ResultsLocation)

import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import { Header1, SearchContainer, theme, mediaQuery } from './styles'
import FooterLinks from './FooterLinks'
import DataTable from './DataTable'
import { css } from 'react-emotion'

const tableContainer = css`
  margin-top: ${theme.spacing.xl}px;
  padding-top: 4px;
  width: 100%;
  overflow: scroll;
  border: 2px solid ${theme.colour.greyLight};
  position: relative;
  -webkit-box-shadow: inset 0px 6px 13px -9px ${theme.colour.grey};
  -moz-box-shadow: inset 0px 6px 13px -9px ${theme.colour.grey};
  box-shadow: inset 0px 6px 13px -9px ${theme.colour.grey};

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
  }

  render() {
    let { data } = this.props
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
          <header>
            <Header1>
              {`${data ? data.length : 0} `}
              <Trans>results</Trans>
            </Header1>
          </header>
          <NavLink to="/search-location">
            <Trans>Search again by location</Trans>
          </NavLink>

          <div className={tableContainer}>
            <span />
            {data.length > 0 && <DataTable data={data} />}
          </div>
        </SearchContainer>
        <FooterLinks />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  data: state.data.searchLocationData,
})

export default connect(mapStateToProps)(ResultsLocation)

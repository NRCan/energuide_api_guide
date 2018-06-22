import React, { Fragment, Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import { Header1, SearchContainer, mediaQuery } from './styles'
import { isEmpty } from '../utils'
import FooterLinks from './FooterLinks'
import DataTable from './DataTable'
import { css } from 'react-emotion'

const tableContainer = css`
  width: 100%;
  overflow: scroll;

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

  resultCount() {
    const { fetching, data } = this.props
    if (!fetching) {
      return (
        <Header1>
          <Trans>{data.length} results</Trans>
        </Header1>
      )
    }
  }

  showData() {
    const { fetching, data } = this.props
    if (!fetching && !isEmpty(data)) {
      return (
        <div className={tableContainer}>
          <DataTable data={data} />
        </div>
      )
    }
  }

  showLinks() {
    const { fetching } = this.props

    if (!fetching) {
      return (
        <Fragment>
          <NavLink to="/search-location">
            <Trans>Search for another location</Trans>
          </NavLink>
        </Fragment>
      )
    }
  }

  render() {
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
          {this.resultCount()}
          {this.showData()}
          {this.showLinks()}
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

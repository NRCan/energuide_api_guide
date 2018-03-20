import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import { Header1, Header3, PageBody } from './styles'
import DataTable from './DataTable'

class SearchLocation extends Component {
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
        <PageBody>
          <header>
            <Header1>
              <Trans>Results</Trans>
            </Header1>
          </header>

          {data.length > 0 && <DataTable data={data} />}

          <aside>
            <Header3>
              <Trans>To see all of the available data,&nbsp;</Trans>
              <a href="https://github.com/cds-snc/nrcan_api">
                <Trans>view the EnerGuide API documentation</Trans>
              </a>
              <Trans>&nbsp;on GitHub.</Trans>
            </Header3>
          </aside>
        </PageBody>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data.searchLocationData,
})

export default connect(mapStateToProps)(SearchLocation)

import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import Flash from './Flash' // eslint-disable-line import/no-named-as-default
import { Header1, Header3, PageBody } from './styles'
import DataTable from './DataTable'
import { setFlash, saveLocationData, deleteLocationData } from '../actions'

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
        <Flash />
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

const mapDispatchToProps = dispatch => {
  return {
    save: (data, filter) => {
      dispatch(saveLocationData(data, filter))
    },
    flash: (message, priority) => {
      dispatch(setFlash(message, priority))
    },
    deleteFormData: () => dispatch(deleteLocationData()),
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  data: state.data.searchLocationData,
})

export default compose(
  withApollo,
  reduxForm({
    form: 'searchByLocation',
    initialValues: { heatingType: 'any' },
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchLocation)

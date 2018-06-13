import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux'
import { Trans } from 'lingui-react'
import FooterLinks from './FooterLinks'
import Breadcrumbs from './Breadcrumbs'
import { NoResults } from './NoResults'
import { Dwelling } from './Dwelling'
import { isEmpty, displayValues } from '../utils'

const ResultsFileID = ({ data, fetching, fileId }) => (
  <main role="main">
    <Breadcrumbs>
      <NavLink to="/">
        <Trans>EnerGuide API</Trans>
      </NavLink>
      <NavLink to="/search">
        <Trans>Search</Trans>
      </NavLink>
      <NavLink to="/search-fileid">
        <Trans>
          Search by file <span className="id-span">ID</span>
        </Trans>
      </NavLink>
      <Trans>Results</Trans>
    </Breadcrumbs>
    {!isEmpty(data) && (
      <Dwelling dwelling={displayValues(data, fileId)} fileId={fileId} />
    )}

    {fetching === false && isEmpty(data) && <NoResults fileId={fileId} />}
    <FooterLinks />
  </main>
)

ResultsFileID.propTypes = {
  data: PropTypes.object,
  fileId: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  fetching: state.data.fetching,
  data: state.data.searchFileIdData,
  fileId: state.location.payload.fileId,
})

export default connect(mapStateToProps)(ResultsFileID)

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

const ResultsFileID = props => (
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
    {!isEmpty(props.data) && (
      <Dwelling
        dwelling={displayValues(props.data, props.fileId)}
        fileId={props.fileId}
      />
    )}

    {isEmpty(props.data) && <NoResults fileId={props.fileId} />}
    <FooterLinks />
  </main>
)

ResultsFileID.propTypes = {
  data: PropTypes.object,
  fileId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  path: state.location.pathname,
  data: state.data.searchFileIdData,
  fileId: state.location.payload.fileId,
})

export default connect(mapStateToProps)(ResultsFileID)

import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { NavLink } from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Breadcrumbs from './Breadcrumbs'
import TextInput from './forms/TextInput'
import Button from './forms/Button'
import { compose, withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { Header1, Header2, SearchContainer } from './styles'
import FooterLinks from './FooterLinks'

class SearchFileID extends Component {
  static propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
  }

  constructor() {
    super()
    this.handleFormData = this.handleFormData.bind(this)
  }

  async handleFormData(data) {
    this.props.dispatch({
      type: 'RESULTSFILEID',
      payload: { fileId: data.fileId },
    })
  }

  render() {
    let { handleSubmit, pristine, submitting } = this.props
    return (
      <main role="main">
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <NavLink to="/search">
            <Trans>Search</Trans>
          </NavLink>
          <Trans>
            Search by file <span className="id-span">ID</span>
          </Trans>
        </Breadcrumbs>

        <SearchContainer>
          <header>
            <Header1 id="search-by-fileid-description">
              <Trans>
                Search by file <span className="id-span">ID</span>
              </Trans>
            </Header1>
          </header>
          <form onSubmit={handleSubmit(this.handleFormData)}>
            <TextInput
              name="fileId"
              id="fileId"
              labelledby="fileId-label fileId-details"
            >
              <Header2>
                <label htmlFor="fileId" id="fileId-label">
                  <Trans>
                    File <span className="id-span">ID</span>
                  </Trans>
                </label>{' '}
                (eg. 4X94D01219)
              </Header2>
              <p id="fileId-details">
                <Trans>
                  Search by the file <span className="id-span">ID</span> on your
                  Energuide evaluation.
                </Trans>
              </p>
            </TextInput>

            <Button disabled={pristine || submitting}>
              <Trans>Search</Trans>
            </Button>
          </form>
        </SearchContainer>
        <FooterLinks />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  path: state.location.pathname,
})

export default compose(
  withApollo,
  reduxForm({
    form: 'searchFileId',
  }),
  connect(mapStateToProps),
)(SearchFileID)

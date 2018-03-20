import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { NavLink } from 'redux-first-router-link'
import Breadcrumbs from './Breadcrumbs'
import FieldSet from './forms/FieldSet'
import { Radio } from './forms/MultipleChoice'
import Button from './forms/Button'
import InfoIcon from './InfoIcon'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import { Trans } from 'lingui-react'
import { css } from 'react-emotion'
import { theme, Header1, SearchContainer } from './styles'
import FooterLinks from './FooterLinks'

const main = css`
  form {
    margin-bottom: ${theme.spacing.xxl}px;
  }
`

class Search extends Component {
  static propTypes = {
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
    if (data.search == 'location') {
      this.props.dispatch({ type: 'LOCATION' })
    }
    if (data.search == 'file-number') {
      this.props.dispatch({ type: 'FILEID' })
    }
  }

  render() {
    let { handleSubmit, pristine, submitting } = this.props
    return (
      <main role="main">
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <Trans>Search</Trans>
        </Breadcrumbs>

        <SearchContainer>
          <header>
            <Header1>
              <Trans>Which parameter would you like to search by?</Trans>
            </Header1>
          </header>
          <p>
            <Trans>
              To test the API, you are able to search by Location or File
              number.
            </Trans>
          </p>
          <form
            onSubmit={handleSubmit(this.handleFormData)}
            aria-labelledby="search-description"
          >
            <FieldSet>
              <legend id="search-description">
                <Trans>Search by Location or File number</Trans>
              </legend>
              <Radio
                label={<Trans>Location</Trans>}
                value="location"
                name="search"
                id="search-0"
              >
                <abbr title="A location refers to a region or neighbourhood. You will be searching by the first three digits of any postal code.">
                  <InfoIcon />
                </abbr>
              </Radio>
              <Radio
                label={<Trans>File number</Trans>}
                value="file-number"
                name="search"
                id="search-1"
              >
                <abbr title="A file number refers to an individual home. This number is provided to the homeowner through EnerGuide.">
                  <InfoIcon />
                </abbr>
              </Radio>
            </FieldSet>
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
  reduxForm({ form: 'search' }),
  connect(mapStateToProps),
)(Search)

import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { Trans } from 'lingui-react'
import Breadcrumbs from './Breadcrumbs'
import FieldSet from './forms/FieldSet'
import TextInput from './forms/TextInput'
import { Radio } from './forms/MultipleChoice'
import Button from './forms/Button'
import Flash from './Flash' // eslint-disable-line import/no-named-as-default
import { injectGlobal } from 'emotion'
import { Header1, Header2, LocationContainer } from './styles'
import FooterLinks from './FooterLinks'
import { setFlash, saveLocationData, deleteLocationData } from '../actions'

injectGlobal`
.fixedDataTableCellGroupLayout_cellGroup {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.fixedDataTableCellGroupLayout_cellGroup > .public_fixedDataTableCell_main {
  display: inline-block;
  vertical-align: top;
  white-space: normal;
}

.fixedDataTableCellGroupLayout_cellGroupWrapper {
  position: absolute;
  top: 0;
}

.fixedDataTableCellLayout_main {
  border-right-style: solid;
  border-right-width: 1px;
  border-width: 0 1px 0 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: block;
  overflow: hidden;
  position: absolute;
  white-space: normal;
}

.fixedDataTableCellLayout_lastChild {
  border-width: 0 1px 1px 0;
}

.fixedDataTableCellLayout_alignRight {
  text-align: right;
}

.fixedDataTableCellLayout_alignCenter {
  text-align: center;
}

.fixedDataTableCellLayout_wrap1 {
  display: table;
}

.fixedDataTableCellLayout_wrap2 {
  display: table-row;
}

.fixedDataTableCellLayout_wrap3 {
  display: table-cell;
  vertical-align: middle;
}

.fixedDataTableCellLayout_columnResizerContainer {
  position: absolute;
  right: 0px;
  width: 6px;
  z-index: 1;
}

.fixedDataTableCellLayout_columnResizerContainer:hover {
  cursor: ew-resize;
}

.fixedDataTableCellLayout_columnResizerContainer:hover .fixedDataTableCellLayout_columnResizerKnob {
  visibility: visible;
}

.fixedDataTableCellLayout_columnResizerKnob {
  position: absolute;
  right: 0px;
  visibility: hidden;
  width: 4px;
}

.fixedDataTableColumnResizerLineLayout_mouseArea {
  cursor: ew-resize;
  position: absolute;
  right: -5px;
  width: 12px;
}

.fixedDataTableColumnResizerLineLayout_main {
  border-right-style: solid;
  border-right-width: 1px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: absolute;
  z-index: 10;
}

body[dir="rtl"] .fixedDataTableColumnResizerLineLayout_main {
  display: none !important;
}

.fixedDataTableColumnResizerLineLayout_hiddenElem {
  display: none !important;
}
.fixedDataTableLayout_main {
  border-style: solid;
  border-width: 1px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.fixedDataTableLayout_header,
.fixedDataTableLayout_hasBottomBorder {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.fixedDataTableLayout_footer .public_fixedDataTableCell_main {
  border-top-style: solid;
  border-top-width: 1px;
}

.fixedDataTableLayout_topShadow,
.fixedDataTableLayout_bottomShadow {
  height: 4px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 1;
}

.fixedDataTableLayout_bottomShadow {
  margin-top: -4px;
}

.fixedDataTableLayout_rowsContainer {
  overflow: hidden;
  position: relative;
}

.fixedDataTableLayout_horizontalScrollbar {
  bottom: 0;
  position: absolute;
}

.fixedDataTableRowLayout_main {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 0;
}

.fixedDataTableRowLayout_body {
  left: 0;
  position: absolute;
  top: 0;
}

.fixedDataTableRowLayout_rowExpanded {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  left: 0;
  position: absolute;
}

.fixedDataTableRowLayout_fixedColumnsDivider {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  border-left-style: solid;
  border-left-width: 1px;
  left: 0;
  position: absolute;
  top: 0;
  width: 0;
}

.fixedDataTableRowLayout_columnsShadow {
  position: absolute;
  width: 4px;
}

.fixedDataTableRowLayout_columnsRightShadow {
  right: 1px;
}

.fixedDataTableRowLayout_rowWrapper {
  position: absolute;
  top: 0;
}

.ScrollbarLayout_main {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  outline: none;
  overflow: hidden;
  position: absolute;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.ScrollbarLayout_mainVertical {
  bottom: 0;
  right: 0;
  top: 0;
  width: 15px;
}

.ScrollbarLayout_mainHorizontal {
  bottom: 0;
  height: 15px;
  left: 0;
  -webkit-transition-property: background-color height;
  transition-property: background-color height;
}

.ScrollbarLayout_mainHorizontal.public_Scrollbar_mainActive,
.ScrollbarLayout_mainHorizontal:hover {
  height: 17px;
}

.ScrollbarLayout_face {
  left: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  -webkit-transition-duration: 250ms;
          transition-duration: 250ms;
  -webkit-transition-timing-function: ease;
          transition-timing-function: ease;
  -webkit-transition-property: background-color width position;
  transition-property: background-color width position;
}

.ScrollbarLayout_face:after {
  border-radius: 6px;
  content: '';
  display: block;
  position: absolute;
  -webkit-transition: background-color 250ms ease;
  transition: background-color 250ms ease;
}

.ScrollbarLayout_faceHorizontal {
  bottom: 0;
  left: 0;
  top: 0;
}

.ScrollbarLayout_faceHorizontal:after {
  bottom: 4px;
  left: 0;
  top: 4px;
  width: 100%;
}

.ScrollbarLayout_faceHorizontal.public_Scrollbar_faceActive:after,
.ScrollbarLayout_main:hover .ScrollbarLayout_faceHorizontal:after {
  bottom: calc(4px/2);
}

.ScrollbarLayout_faceVertical {
  left: 0;
  right: 0;
  top: 0;
}

.ScrollbarLayout_faceVertical:after {
  height: 100%;
  left: 4px;
  right: 4px;
  top: 0;
}

.ScrollbarLayout_main:hover .ScrollbarLayout_faceVertical:after,
.ScrollbarLayout_faceVertical.public_Scrollbar_faceActive:after {
  left: calc(4px/2);
  right: calc(4px/2);
}
.public_fixedDataTable_main {
  border-color: #d3d3d3;
}

.public_fixedDataTable_header,
.public_fixedDataTable_hasBottomBorder {
  border-color: #d3d3d3;
}

.public_fixedDataTable_header .public_fixedDataTableCell_main {
  font-weight: bold;
}

.public_fixedDataTable_header,
.public_fixedDataTable_scrollbarSpacer,
.public_fixedDataTable_header .public_fixedDataTableCell_main {
  background-color: #f6f7f8;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#efefef));
  background-image: linear-gradient(#fff, #efefef);
}

.public_fixedDataTable_scrollbarSpacer {
  position: absolute;
  z-index: 99;
}

.public_fixedDataTable_footer .public_fixedDataTableCell_main {
  background-color: #f6f7f8;
  border-color: #d3d3d3;
}

.public_fixedDataTable_topShadow {
  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x;
}

.public_fixedDataTable_bottomShadow {
  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==) repeat-x;
}

.public_fixedDataTable_horizontalScrollbar .public_Scrollbar_mainHorizontal {
  background-color: #fff;
}
.public_fixedDataTableCell_main {
  background-color: #fff;
  border-color: #d3d3d3;
}

.public_fixedDataTableCell_highlighted {
  background-color: #f4f4f4;
}

.public_fixedDataTableCell_cellContent {
  padding: 8px;
}

.public_fixedDataTableCell_columnResizerKnob {
  background-color: #0284ff;
}
.public_fixedDataTableCell_hasReorderHandle .public_fixedDataTableCell_cellContent {
	margin-left: 12px;
}
.fixedDataTableCellLayout_columnReorderContainer {
  border-color: #0284ff;
  background-color: rgba(0,0,0,0.1);
  width: 12px;
  margin-right: -12px;
  float: left;
  cursor: move;
}
.fixedDataTableCellLayout_columnReorderContainer:after {
	content: '::';
	position: absolute;
	top: 50%;
	left: 1px;
	-webkit-transform: translateY(-50%);
	        transform: translateY(-50%);
}
.public_fixedDataTableColumnResizerLine_main {
  border-color: #0284ff;
}
.public_fixedDataTableRow_main {
  background-color: #fff;
}

.public_fixedDataTableRow_highlighted,
.public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main {
  background-color: #f6f7f8;
}

.public_fixedDataTableRow_fixedColumnsDivider {
  border-color: #d3d3d3;
}

.public_fixedDataTableRow_columnsShadow {
  background: 0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y;
}

.public_fixedDataTableRow_columnsRightShadow {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.public_Scrollbar_main.public_Scrollbar_mainActive,
.public_Scrollbar_main {
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
}

.public_Scrollbar_mainOpaque,
.public_Scrollbar_mainOpaque.public_Scrollbar_mainActive,
.public_Scrollbar_mainOpaque:hover {
  background-color: #fff;
}

.public_Scrollbar_face:after {
  background-color: #c2c2c2;
}

.public_Scrollbar_main:hover .public_Scrollbar_face:after,
.public_Scrollbar_mainActive .public_Scrollbar_face:after,
.public_Scrollbar_faceActive:after {
  background-color: #7d7d7d;
}
`

class SearchLocation extends Component {
  static propTypes = {
    save: PropTypes.func.isRequired,
    data: PropTypes.array,
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
    let {
      navigateToResultsPage,
      client,
      save,
      flash,
      deleteFormData,
    } = this.props

    deleteFormData() // clear any previous data
    flash() // clear any previous flash messages

    let clientFilter = { houseType: 'all' }
    let args = []
    let filters = []
    let variables = {}
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'location') {
        value = typeof value === 'string' ? value.toUpperCase() : value
        filters.push(`{
                field: dwellingForwardSortationArea
                comparator: eq
                value: $location
              }`)
        args.push('$location: String!')
        variables.location = value
      } else {
        switch (value) {
          case 'single-detached':
            filters.push(`
              {
                field: evaluationHouseType
                comparator: eq
                value: $singleDetached
              }
          `)
            args.push('$singleDetached: String!')
            variables.singleDetached = 'Single detached'
            clientFilter.houseType = 'Single detached'
            break
          case 'detached-duplex':
            filters.push(`
                  {
                    field: evaluationHouseType
                    comparator: eq
                    value: $detachedDuplex
                  }
              `)
            args.push('$detachedDuplex: String!')
            variables.detachedDuplex = 'Detached Duplex'
            clientFilter.houseType = 'Detached Duplex'
            break
          case 'row-house-end':
            filters.push(`
                {
                  field: evaluationHouseType
                  comparator: eq
                  value: $rowHouseEnd
                }
            `)
            args.push('$rowHouseEnd: String!')
            variables.rowHouseEnd = 'Row house, end unit'
            clientFilter.houseType = 'Row house, end unit'
            break
          case 'row-house-middle':
            filters.push(`
                  {
                    field: evaluationHouseType
                    comparator: eq
                    value: $rowHouseMiddle
                  }
              `)
            args.push('$rowHouseMiddle: String!')
            variables.rowHouseMiddle = 'Row house, middle unit'
            clientFilter.houseType = 'Row house, middle unit'
            break
          case 'apartment':
            filters.push(`
                    {
                      field: evaluationHouseType
                      comparator: eq
                      value: $apartment
                    }
                `)
            args.push('$apartment: String!')
            variables.apartment = 'Apartment'
            clientFilter.houseType = 'Apartment'
            break
          case 'all':
            // No need for a filter
            break
        }
      }
    })

    let response = await client.query({
      query: gql`
        query POCSearchLocation(${args}) {
          dwellings(
            limit: 100
            filters: [
              ${filters}
            ]
          ) {
            results {
              yearBuilt
              region
              forwardSortationArea
              evaluations {
                houseType
                eghRating {
                  measurement
                }
              }
            }
          }
        }
      `,
      variables,
    })
    if (response.errors) {
      flash(response.errors, 'error')
    } else {
      let { data: { dwellings } } = response

      if (dwellings.results.length > 0) {
        save(dwellings.results, clientFilter)
        navigateToResultsPage()
      } else {
        deleteLocationData()
        flash(<Trans>No results found</Trans>, 'warn')
      }
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
          <NavLink to="/search">
            <Trans>Search</Trans>
          </NavLink>
          <Trans>Search by location</Trans>
        </Breadcrumbs>
        <Flash />
        <LocationContainer>
          <header>
            <Header1 id="search-by-location-description">
              <Trans>Search by location</Trans>
            </Header1>
          </header>
          <form
            onSubmit={handleSubmit(this.handleFormData)}
            aria-labelledby="search-by-location-description"
          >
            <TextInput
              name="location"
              id="location"
              labelledby="location-label location-details"
            >
              <Header2>
                <label htmlFor="location" id="location-label">
                  <Trans>Location</Trans>
                </label>{' '}
                (eg. L4C)
              </Header2>
              <p id="location-details">
                <Trans>
                  Search for a region by submitting the first three digits of a
                  postal code.
                </Trans>
              </p>
            </TextInput>
            <hr />
            <FieldSet legendHidden={false}>
              <legend>
                <Header2>
                  <Trans>Filters</Trans>
                </Header2>
              </legend>
              <p>
                <Trans>Search by the type of dwelling.</Trans>
              </p>
              <Radio
                label={<Trans>Single detached</Trans>}
                value="single-detached"
                name="houseType"
                id="house-type-1"
              />
              <Radio
                label={<Trans>Detached Duplex</Trans>}
                value="detached-duplex"
                name="houseType"
                id="house-type-2"
              />
              <Radio
                label={<Trans>Row house, end unit</Trans>}
                value="row-house-end"
                name="houseType"
                id="house-type-3"
              />
              <Radio
                label={<Trans>Row house, middle unit</Trans>}
                value="row-house-middle"
                name="houseType"
                id="house-type-4"
              />
              <Radio
                label={<Trans>Apartment</Trans>}
                value="apartment"
                name="houseType"
                id="house-type-5"
              />
              <Radio
                label={<Trans>All</Trans>}
                value="all"
                name="houseType"
                id="house-type-6"
              />
            </FieldSet>
            <Button disabled={pristine || submitting}>
              <Trans>Search</Trans>
            </Button>
          </form>
        </LocationContainer>
        <FooterLinks />{' '}
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (data, filter) => {
      dispatch(saveLocationData(data, filter))
    },
    navigateToResultsPage: () => dispatch({ type: 'RESULTSLOCATION' }),
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
    initialValues: { houseType: 'all' },
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(SearchLocation)

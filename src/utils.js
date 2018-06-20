import React from 'react'
import { Trans } from 'lingui-react'
import gql from 'graphql-tag'
import { i18n } from 'lingui-i18n'

export const isEmpty = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object

export const returnTheRightEvaluation = (evaluations, fileId) => {
  if (evaluations && evaluations.length > 0) {
    return evaluations.find(e => e.fileId === fileId) || {}
  } else {
    return {}
  }
}

export const displayValues = (dwelling, fileId) => {
  // clone object so that we can re-assign to "heating"
  let evaluation = JSON.parse(
    JSON.stringify(returnTheRightEvaluation(dwelling.evaluations, fileId)),
  )

  let { ersRating = {}, eghRating = {} } = evaluation
  let { greenhouseGasEmissions = {} } = evaluation

  let result = {
    City: dwelling.city,
    'Year built': dwelling.yearBuilt,
    'House type': evaluation.houseType,
    'Evaluation type': evaluation.evaluationType,
    'Energuide rating':
      ersRating.measurement === null
        ? eghRating.measurement + '/100'
        : ersRating.measurement + ' GJ',
  }
  if (greenhouseGasEmissions.measurement)
    result['Greenhouse Gas Emissions'] = `${
      greenhouseGasEmissions.measurement
    } ${i18n.t`tonnes/year`}`
  return result
}

export const createQuery = data => {
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
        case 'Single detached':
          filters.push(`
              {
                field: evaluationHouseType
                comparator: eq
                value: $singleDetached
              }
          `)
          args.push('$singleDetached: String!')
          variables.singleDetached = 'Single detached'
          break
        case 'Detached Duplex':
          filters.push(`
                  {
                    field: evaluationHouseType
                    comparator: eq
                    value: $detachedDuplex
                  }
              `)
          args.push('$detachedDuplex: String!')
          variables.detachedDuplex = 'Detached Duplex'
          break
        case 'Row house, end unit':
          filters.push(`
                {
                  field: evaluationHouseType
                  comparator: eq
                  value: $rowHouseEnd
                }
            `)
          args.push('$rowHouseEnd: String!')
          variables.rowHouseEnd = 'Row house, end unit'
          break
        case 'Row house, middle unit':
          filters.push(`
                  {
                    field: evaluationHouseType
                    comparator: eq
                    value: $rowHouseMiddle
                  }
              `)
          args.push('$rowHouseMiddle: String!')
          variables.rowHouseMiddle = 'Row house, middle unit'
          break
        case 'Apartment':
          filters.push(`
                    {
                      field: evaluationHouseType
                      comparator: eq
                      value: $apartment
                    }
                `)
          args.push('$apartment: String!')
          variables.apartment = 'Apartment'
          break
        case 'All':
          // No need for a filter
          break
      }
    }
  })
  return {
    variables,
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
  }
}

// This is dumb and its a lingui workaround thing.
export const translateHouseType = value => {
  switch (value) {
    case 'Single detached':
      return <Trans>Single detached</Trans>
    case 'Detached Duplex':
      return <Trans>Detached Duplex</Trans>
    case 'Row house, end unit':
      return <Trans>Row house, end unit</Trans>
    case 'Row house, middle unit':
      return <Trans>Row house, middle unit</Trans>
    case 'Apartment':
      return <Trans>Apartment</Trans>
    case 'All':
      return <Trans>All</Trans>
  }
}

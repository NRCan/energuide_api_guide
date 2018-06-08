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

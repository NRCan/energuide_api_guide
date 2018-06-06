import { isEmpty, returnTheRightEvaluation, displayValues } from '../utils'

let dwelling = {
  city: 'Mississauga',
  evaluations: [
    {
      creationDate: '2011-04-21T14:23:09',
      eghRating: {
        measurement: 69,
      },
      entryDate: '2011-03-21',
      ersRating: {
        measurement: null,
      },
      evaluationType: 'E',
      fileId: '4E55E00121',
      greenhouseGasEmissions: {
        measurement: null,
      },
      heatedFloorArea: null,
      houseType: 'Row house, end unit',
      modificationDate: null,
    },
    {
      creationDate: '2010-12-17T12:34:39',
      eghRating: {
        measurement: 46,
      },
      entryDate: '2010-12-03',
      ersRating: {
        measurement: null,
      },
      evaluationType: 'D',
      fileId: '4E55D00121',
      greenhouseGasEmissions: {
        measurement: null,
      },
      heatedFloorArea: null,
      houseType: 'Row house, end unit',
      modificationDate: '2011-03-25T11:12:53',
    },
  ],
  yearBuilt: 1970,
}

describe('Utility functions', () => {
  describe('isEmpty', () => {
    it('returns true for an empty object', () => {
      expect(isEmpty({})).toEqual(true)
    })

    it('returns false for an with properties defined', () => {
      expect(isEmpty({ foo: 'bar' })).toEqual(false)
    })
  })

  describe('returnTheRightEvaluation', () => {
    it('returns the evaluation with the matching fileId', () => {
      const fileId = '4E55D00121'
      const evaluation = returnTheRightEvaluation(dwelling.evaluations, fileId)
      expect(evaluation.fileId).toEqual(fileId)
    })

    it(`returns an empty object when it doesn't find anything`, () => {
      const fileId = '4E55D00121'
      const evaluation = returnTheRightEvaluation([], fileId)
      expect(evaluation).toEqual({})
    })
  })

  describe('displayValues', () => {
    it('creates a nicely formatted object', () => {
      expect(displayValues(dwelling, '4E55E00121')).toEqual({
        City: 'Mississauga',
        'Energuide rating': '69/100',
        'Evaluation type': 'E',
        'House type': 'Row house, end unit',
        'Year built': 1970,
      })
    })
  })
})

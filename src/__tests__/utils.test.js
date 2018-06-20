import { print } from 'graphql/language/printer'
import { shallow } from 'enzyme'
import {
  isEmpty,
  createQuery,
  translateHouseType,
  returnTheRightEvaluation,
  displayValues,
} from '../utils'

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

  describe('createQuery', () => {
    it('creates a query filter based on the form data', () => {
      const data = { houseType: 'Detached Duplex', location: 'L4C' }
      const { query } = createQuery(data)
      expect(print(query)).toMatch(
        /filters: \[\{field: evaluationHouseType, comparator: eq, value: \$detachedDuplex\}/,
      )
      expect(print(query)).toMatch(
        /\{field: dwellingForwardSortationArea, comparator: eq, value: \$location\}\]/,
      )
    })

    it('returns a set of variables based on the form data', () => {
      const data = { houseType: 'Detached Duplex', location: 'L4C' }
      const { variables } = createQuery(data)
      expect(variables).toEqual({
        detachedDuplex: 'Detached Duplex',
        location: 'L4C',
      })
    })
  })

  describe('translateHouseType', () => {
    describe('when given the string "Single detached"', () => {
      it('returns a tranlated lingui object', () => {
        const wrapper = shallow(translateHouseType('Single detached'))
        expect(wrapper.props().id).toEqual('Single detached')
      })
    })

    describe('when given the string "Detached Duplex"', () => {
      it('returns a tranlated lingui object', () => {
        const wrapper = shallow(translateHouseType('Detached Duplex'))
        expect(wrapper.props().id).toEqual('Detached Duplex')
      })
    })

    describe('when given the string "Row house, end unit"', () => {
      it('returns a tranlated lingui object', () => {
        const wrapper = shallow(translateHouseType('Row house, end unit'))
        expect(wrapper.props().id).toEqual('Row house, end unit')
      })
    })

    describe('when given the string "Row house, middle unit"', () => {
      it('returns a tranlated lingui object', () => {
        const wrapper = shallow(translateHouseType('Row house, middle unit'))
        expect(wrapper.props().id).toEqual('Row house, middle unit')
      })
    })

    describe('when given the string "Apartment"', () => {
      it('returns a tranlated lingui object', () => {
        const wrapper = shallow(translateHouseType('Apartment'))
        expect(wrapper.props().id).toEqual('Apartment')
      })
    })
  })
})

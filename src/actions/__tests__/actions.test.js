import { saveLocationData, goToLocationResults } from '../'

describe('Action creators', () => {
  describe('goToLocationResults', () => {
    it('produces an action with the correct type', () => {
      expect(goToLocationResults().type).toEqual('RESULTSLOCATION')
    })

    it('adds a payload when passed some data', () => {
      expect(goToLocationResults({ foo: 'bar' })).toEqual({
        type: 'RESULTSLOCATION',
        payload: { foo: 'bar' },
      })
    })

    it('if no args are passed the payload is empty', () => {
      expect(goToLocationResults()).toEqual({
        type: 'RESULTSLOCATION',
        payload: {},
      })
    })
  })

  describe('saveLocationData', () => {
    it('should be not broken', () => {
      let data = [
        {
          yearBuilt: 1900,
          region: 'PE',
          forwardSortationArea: 'C1A',
          evaluations: [
            {
              houseType: 'Detached Duplex',
              eghRating: { measurement: 48, __typename: 'Rating' },
              __typename: 'Evaluation',
            },
          ],
          __typename: 'Dwelling',
        },
      ]

      expect(saveLocationData(data, { houseType: 'Detached Duplex' })).toEqual({
        type: 'SAVE_LOCATION_LOOKUP_RESULTS',
        data: [
          {
            eghRating: 48,
            forwardSortationArea: 'C1A',
            houseType: 'Detached Duplex',
            region: 'PE',
            yearBuilt: 1900,
          },
        ],
      })
    })
  })
})

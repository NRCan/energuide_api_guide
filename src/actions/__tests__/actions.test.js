import { goToLocationResults } from '../'
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
})

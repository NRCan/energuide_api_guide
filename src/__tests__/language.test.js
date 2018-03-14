import * as actions from '../actions'
import reducer from '../reducers/language'

describe('language actions', () => {
  it('should create an action to set language', () => {
    const lang = 'en'
    const expectedAction = {
      type: actions.SET_LANGUAGE,
      lang,
    }
    expect(actions.setLanguage(lang)).toEqual(expectedAction)
  })
})

describe('language reducer', () => {
  it('should set english as default language', () => {
    expect(reducer(undefined, {})).toEqual('en')
  })

  it('should handle language swap', () => {
    expect(
      reducer([], {
        type: actions.SET_LANGUAGE,
        lang: 'en',
      })
    ).toEqual('fr')
  })
})

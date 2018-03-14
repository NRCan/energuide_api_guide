import { SET_LANGUAGE } from '../actions'

export default (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      if (action.lang === 'en') return 'fr'
      else return 'en'
    default:
      return state
  }
}

import { FLASH } from '../actions'

const blank = { priority: null, message: null }

export default (state = blank, action = blank) => {
  switch (action.type) {
    case FLASH:
      return Object.assign({}, state, action)
    default:
      return state
  }
}

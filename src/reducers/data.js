import {
  FETCHING,
  SAVE_FILEID_LOOKUP_RESULTS,
  SAVE_LOCATION_LOOKUP_RESULTS,
} from '../actions'

export default (
  state = { fetching: false, searchLocationData: [], searchFileIdData: {} },
  action = {},
) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: action.fetching })
    case SAVE_LOCATION_LOOKUP_RESULTS:
      return Object.assign({}, state, { searchLocationData: action.data })
    case SAVE_FILEID_LOOKUP_RESULTS:
      return Object.assign({}, state, { searchFileIdData: action.data })
    default:
      return state
  }
}

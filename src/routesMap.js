import { getDataForFileId } from '../src/dataFetching'
import { client } from '../src/ApolloClient'
import { dataFetchingInProgress, dataFetchingComplete } from '../src/actions'

export default {
  HOME: '/',
  SEARCH: '/search',
  LOCATION: '/search-location',
  FILEID: '/search-fileid',
  RESULTSLOCATION: {
    path: '/results-location',
    thunk: async (dispatch, getState) => {
      // TODO: the right thing
    },
  },
  RESULTSFILEID: {
    path: '/results-fileid/:fileId',
    thunk: async (dispatch, getState) => {
      const { fileId } = getState().location.payload
      dispatch(dataFetchingInProgress())
      let action = await getDataForFileId(fileId, client)
      dispatch(action)
      dispatch(dataFetchingComplete())
    },
  },
}

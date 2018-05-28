import { client } from '../src/ApolloClient'
import { saveFileIdData } from '../src/actions'
import { getEvaluationByFileId } from '../src/queries'

export default {
  HOME: '/',
  SEARCH: '/search',
  LOCATION: '/search-location',
  FILEID: '/search-fileid',
  RESULTSLOCATION: '/results-location',
  RESULTSFILEID: {
    path: '/results-fileid/:fileId',
    thunk: async (dispatch, getState) => {
      if (typeof window === 'undefined') {
        const { fileId } = getState().location.payload
        let response = await client.query({
          query: getEvaluationByFileId,
          variables: { fileId },
        })
        if (response.data.dwellings.results.length > 0) {
          dispatch(saveFileIdData(response.data.dwellings.results[0]))
        }
      }
    },
  },
}

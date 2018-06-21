import { getDataForFileId } from '../src/dataFetching'
import { createQuery } from './utils'
import { client } from '../src/ApolloClient'
import {
  saveLocation,
  deleteLocation,
  dataFetchingInProgress,
  dataFetchingComplete,
} from '../src/actions'

export default {
  HOME: '/',
  SEARCH: '/search',
  LOCATION: '/search-location',
  FILEID: '/search-fileid',
  RESULTSLOCATION: {
    path: '/results-location/:location/:houseType',
    thunk: async (dispatch, getState) => {
      const { location, houseType } = getState().location.payload
      dispatch(deleteLocation())
      dispatch(dataFetchingInProgress())

      const { variables, query } = createQuery({
        location: decodeURIComponent(location),
        houseType: decodeURIComponent(houseType),
      })

      let response = await client.query({
        query,
        variables,
      })

      let { data: { dwellings } } = response
      dispatch(
        saveLocation(dwellings.results, {
          houseType: decodeURIComponent(houseType),
        }),
      )
      dispatch(dataFetchingComplete())
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

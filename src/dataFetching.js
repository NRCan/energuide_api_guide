import { saveFileIdData } from '../src/actions'
import { getEvaluationByFileId } from '../src/queries'

export const getDataForFileId = async (fileId, client) => {
  let response = await client.query({
    query: getEvaluationByFileId,
    variables: { fileId },
  })
  if (response.data && response.data.dwellings.results.length > 0) {
    return saveFileIdData(response.data.dwellings.results[0])
  } else {
    return saveFileIdData({})
  }
}

export const SET_LANGUAGE = 'SET_LANGUAGE'

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  lang,
})

export const SAVE_LOCATION_LOOKUP_RESULTS = 'SAVE_LOCATION_LOOKUP_RESULTS'

export const saveLocationData = (data, { houseType }) => {
  return {
    type: SAVE_LOCATION_LOOKUP_RESULTS,
    data: data.reduce((output, datum) => {
      datum.evaluations.map(evaluation => {
        if (evaluation.houseType === houseType || houseType === 'all') {
          output.push({
            yearBuilt: datum.yearBuilt,
            region: datum.region,
            forwardSortationArea: datum.forwardSortationArea,
            houseType: evaluation.houseType,
            eghRating: evaluation.eghRating.measurement,
          })
        }
      })
      return output
    }, []),
  }
}

export const SAVE_FILEID_LOOKUP_RESULTS = 'SAVE_FILEID_LOOKUP_RESULTS'

export const saveFileIdData = data => ({
  type: SAVE_FILEID_LOOKUP_RESULTS,
  data: data,
})

export const DELETE_FILEID_LOOKUP_RESULTS = 'DELETE_FILEID_LOOKUP_RESULTS'

export const deleteFileIdData = () => ({
  type: DELETE_FILEID_LOOKUP_RESULTS,
  data: {},
})

export const DELETE_LOCATION_LOOKUP_RESULTS = 'DELETE_LOCATION_LOOKUP_RESULTS'

export const deleteLocationData = () => ({
  type: DELETE_LOCATION_LOOKUP_RESULTS,
  data: [],
})

export const FLASH = 'FLASH'

export const setFlash = (message = null, priority = null) => ({
  type: FLASH,
  message,
  priority,
})

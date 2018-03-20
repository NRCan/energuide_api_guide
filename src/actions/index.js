export const SET_LANGUAGE = 'SET_LANGUAGE'

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  lang,
})

export const SAVE_LOCATION_LOOKUP_RESULTS = 'SAVE_LOCATION_LOOKUP_RESULTS'

export const saveLocationData = (data, { heatingType }) => {
  return {
    type: SAVE_LOCATION_LOOKUP_RESULTS,
    data: data.reduce((output, datum) => {
      datum.evaluations.map(evaluation => {
        if (evaluation.heating.energySourceEnglish === heatingType) {
          output.push({
            yearBuilt: datum.yearBuilt,
            city: datum.city,
            region: datum.region,
            forwardSortationArea: datum.forwardSortationArea,
            rating: evaluation.ersRating,
            heating: evaluation.heating.energySourceEnglish,
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

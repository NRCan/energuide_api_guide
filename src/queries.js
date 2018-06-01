import gql from 'graphql-tag'

export const getEvaluationByFileId = gql`
  query POCgetEvaluationByFileId($fileId: String!) {
    dwellings(
      filters: [{ field: evaluationFileId, comparator: eq, value: $fileId }]
    ) {
      results {
        city
        yearBuilt
        evaluations {
          evaluationType
          fileId
          houseType
          ersRating {
            measurement
          }
          eghRating {
            measurement
          }
          greenhouseGasEmissions {
            measurement
          }
        }
      }
    }
  }
`

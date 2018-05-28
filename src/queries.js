import gql from 'graphql-tag'

export const getEvaluationByFileId = gql`
  query getEvaluationByFileId($fileId: String!) {
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
          greenhouseGasEmissions {
            measurement
          }
        }
      }
    }
  }
`

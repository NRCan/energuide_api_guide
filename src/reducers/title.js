export default (state = 'EnerGuide API Proof of Concept', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return `Home | EnerGuide API Proof of Concept`
    case 'SEARCH':
      return `Search | EnerGuide API Proof of Concept`
    case 'LOCATION':
      return `Search by location | EnerGuide API Proof of Concept`
    case 'FILEID':
      return `Search by file ID | EnerGuide API Proof of Concept`
    case 'RESULTS':
      return `Results for location | EnerGuide API Proof of Concept`
    case 'RESULTSFILEID':
      return 'Results for file ID | EnerGuide API Proof of Concept'
    default:
      return state
  }
}

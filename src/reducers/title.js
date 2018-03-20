export default (state = 'EnerGuide API', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Home'
    case 'RESULTSFILEID':
      return 'Results for file ID'
    default:
      return state
  }
}

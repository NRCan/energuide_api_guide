export default (state = 'Catcher', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Home'
    case 'THANK_YOU':
      return 'Thank you'
    default:
      return state
  }
}

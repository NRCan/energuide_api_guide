import { shallow } from 'enzyme'
import React from 'react'

import App from '../SearchLocation.js'

describe('SearchLocationPage', () => {
  xit('shows "Search by location"', () => {
    // TODO: separate component from client so they can be tested separately
    // Currently this gives:
    // Invariant Violation: Could not find "client" in the context of "withApollo(Connect(SearchLocation))".
    // Wrap the root component in an <ApolloProvider>
    const app = shallow(<App />)
    expect(app.find('h1').text()).toEqual('Search by location')
  })
})

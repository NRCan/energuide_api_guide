import React from 'react'
import { shallow } from 'enzyme'
import { Dwelling } from '../Dwelling'

let dwelling = {
  city: 'Mississauga',
  evaluations: [
    {
      creationDate: '2011-04-21T14:23:09',
      eghRating: {
        measurement: 69,
      },
      entryDate: '2011-03-21',
      ersRating: {
        measurement: null,
      },
      evaluationType: 'E',
      fileId: '4E55E00121',
      greenhouseGasEmissions: {
        measurement: null,
      },
      heatedFloorArea: null,
      houseType: 'Row house, end unit',
      modificationDate: null,
    },
    {
      creationDate: '2010-12-17T12:34:39',
      eghRating: {
        measurement: 46,
      },
      entryDate: '2010-12-03',
      ersRating: {
        measurement: null,
      },
      evaluationType: 'D',
      fileId: '4E55D00121',
      greenhouseGasEmissions: {
        measurement: null,
      },
      heatedFloorArea: null,
      houseType: 'Row house, end unit',
      modificationDate: '2011-03-25T11:12:53',
    },
  ],
  yearBuilt: 1970,
}

describe('<Dwelling />', () => {
  it('renders a dwelling', () => {
    const fileId = '4E55E00121'
    const wrapper = shallow(
      <Dwelling dwelling={dwelling} fileId={fileId} />,
    ).dive()
    expect(wrapper.text()).toMatch(/Mississauga/)
  })
})

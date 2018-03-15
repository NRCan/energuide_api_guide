import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from '../InfoIcon'

const Radio = ({ label, value, children }) => (
  <label>
    <input type="radio" id="search-by-1" name="search-by" value={value} />
    {label}
    <abbr title="A location refers to a region or neighbourhood. You will be searching by the first three digits of any postal code.">
      <InfoIcon />
    </abbr>
  </label>
)

Radio.propTypes = {
  label: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Radio

import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from '../InfoIcon'

const Radio = ({ label, value, name, id, children }) => (
  <label>
    <input type="radio" name={name} id={id} value={value} />
    {label}
    <abbr title="A location refers to a region or neighbourhood. You will be searching by the first three digits of any postal code.">
      <InfoIcon />
    </abbr>
  </label>
)

Radio.propTypes = {
  label: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.any,
}

export default Radio

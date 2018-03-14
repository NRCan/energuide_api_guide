import React from 'react'
import PropTypes from 'prop-types'

const InfoIcon = ({ width = '0.8em', text = '#fff', circle = '#4A4A4A' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="info"
    version="1.1"
    viewBox="0 0 20 20"
    width={width}
  >
    <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
      <g>
        <circle r="10" cy="10" cx="10" fill={circle} id="Oval" />
        <text
          fill={text}
          fontWeight="normal"
          fontSize="20"
          fontFamily="Helvetica"
          id="i"
        >
          <tspan id="tspan9" y="17" x="8">
            i
          </tspan>
        </text>
      </g>
    </g>
  </svg>
)

InfoIcon.propTypes = {
  width: PropTypes.string,
  text: PropTypes.string,
  circle: PropTypes.string,
}

export default InfoIcon

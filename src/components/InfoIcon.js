import React from 'react'
import PropTypes from 'prop-types'
import { theme } from './styles'

const InfoIcon = ({ width = '0.8em', text = null, circle = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 20 20"
    width={width}
  >
    <g fillRule="evenodd" fill="none" strokeWidth="1" stroke="none">
      <g>
        <circle r="10" cy="10" cx="10" fill={circle || theme.colour.grey} />
        <text
          fill={text || theme.colour.white}
          fontWeight="normal"
          fontSize="16"
          fontFamily={theme.weight.m}
        >
          <tspan y="15.5" x="6" aria-hidden="true">
            ?
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

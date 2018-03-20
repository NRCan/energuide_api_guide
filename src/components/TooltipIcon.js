import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from './InfoIcon'
import ReactTooltip from 'react-tooltip'
import { css } from 'react-emotion'
import { theme } from './styles'

const abbr = css`
  display: inline-block;
  height: 22px;
  cursor: pointer;

  &:focus {
    outline: 3px solid ${theme.colour.focus};
  }

  svg {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .__react_component_tooltip {
    font-size: ${theme.font.md};
    margin-right: 20px;
    background-color: ${theme.colour.blue};
  }
`

const replaceBrsAndSurroundingWhitespace = str =>
  str.replace(/\s*<br ?\/?>\s*/g, ' ')

const TooltipIcon = ({ dataTip }) => (
  <abbr
    className={abbr}
    data-tip={dataTip}
    title={replaceBrsAndSurroundingWhitespace(dataTip)}
    tabIndex={0}
    data-effect="solid"
    data-event="click focus"
    data-event-off="blur"
    data-multiline={true}
    data-offset="{'top': -5}"
    data-place="right"
    data-type="info"
  >
    <InfoIcon width="22px" />
    <ReactTooltip globalEventOff="click" />
  </abbr>
)

TooltipIcon.propTypes = {
  dataTip: PropTypes.string.isRequired,
}

export default TooltipIcon

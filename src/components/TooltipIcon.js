import React from 'react'
import PropTypes from 'prop-types'
import InfoIcon from './InfoIcon'
import ReactTooltip from 'react-tooltip'
import { css } from 'react-emotion'
import { theme, mediaQuery } from './styles'

const div = css`
  display: inline-block;
  width: 50%;
`

const abbr = css`
  height: 22px;
  cursor: pointer;

  &:focus {
    outline: 0;

    svg {
      outline: 3px solid ${theme.colour.focus};
    }
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
    background-color: ${theme.colour.blue};

    ${mediaQuery.small(css`
      font-size: ${theme.font.sm};
    `)};
  }
`

const appearSmall = css`
  display: none;
  ${mediaQuery.small(css`
    display: inline-block;
    width: 60%;
  `)};
  ${mediaQuery.xs(css`
    width: 90%;
  `)};
`

const appearLarge = css`
  display: inline-block;
  margin-right: 20px;

  ${mediaQuery.small(css`
    display: none;
  `)};
`

const replaceBrsAndSurroundingWhitespace = str =>
  str.replace(/\s*<br ?\/?>\s*/g, ' ')

const TooltipIcon = ({ dataTip }) => (
  <div className={div}>
    <abbr
      className={css`
        ${abbr} ${appearLarge};
      `}
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
    <abbr
      className={css`
        ${abbr} ${appearSmall};
      `}
      data-tip={dataTip}
      title={replaceBrsAndSurroundingWhitespace(dataTip)}
      tabIndex={0}
      data-effect="solid"
      data-event="click focus"
      data-event-off="blur"
      data-multiline={true}
      data-offset="{'top': -5}"
      data-place="bottom"
      data-type="info"
    >
      <InfoIcon width="20px" />
      <ReactTooltip globalEventOff="click" />
    </abbr>
  </div>
)

TooltipIcon.propTypes = {
  dataTip: PropTypes.string.isRequired,
}

export default TooltipIcon

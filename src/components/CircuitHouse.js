import React from 'react'
import { css } from 'react-emotion'
import { mediaQuery, theme } from './styles'

const headerImg = css`
  position: absolute;
  top: 105px;
  right: 0px;
  padding-top: ${theme.spacing.xl}px;
`

const headerWidth = css`
  width: 24em;

  ${mediaQuery.large(css`
    padding-top: 2em;
    width: 20em;
  `)};

  ${mediaQuery.medium(css`
    width: 0em;
  `)};
`

const CircuitHouse = () => (
  <div className={headerImg}>
    <img
      className={headerWidth}
      src="https://rawgit.com/nmakuch/7bb71ff879fc076c5c201d62b8f248cd/raw/664d2632493d4a325430ad0d0a934f253f6edaaf/CircuitHouse.svg"
    />
  </div>
)

export default CircuitHouse

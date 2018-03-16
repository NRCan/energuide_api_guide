import { css } from 'react-emotion'

export const spacingBase = 16
export const spacing = {
  base: spacingBase,
  md: spacingBase,
  sm: spacingBase / 2,
  xs: spacingBase / 3,
  xxs: spacingBase / 6,
  lg: parseInt(spacingBase * 1.35),
  xl: spacingBase * 2,
  xxl: spacingBase * 3,
  xxxl: spacingBase * 5,
}

export const fontFace = css`
  @import url(https://fontlibrary.org/face/hk-grotesk);
`

export const fontWeight = {
  light: 'HKGroteskLight',
  lightItal: 'HKGroteskLightItalic',
  med: 'HKGroteskMedium',
  medItal: 'HKGroteskMediumItalic',
  reg: 'HKGroteskRegular',
  semi: 'HKGroteskSemiBold',
  bold: 'HKGroteskBold',
  boldItal: 'HKGroteskSemiBoldItalic',
}

export const fontSizes = {
  xs: '12px',
  sm: '16px',
  base: '19px',
  md: '19px',
  lg: '24px',
  xl: '48px',
}

export const colours = {
  yellow: '#FDD262',
  yellowLight: '#E5BF73',
  yellowDark: '#E7AE27',
  blue: '#1177DD',
  blueDark: '#073767',
  red: '#A5071B',
  grey: '#4A4A4A',
  gray: '#4A4A4A',
  greyLight: '#DBDBDB',
  grayLight: '#DBDBDB',
  white: '#FFFFFF',
  black: '#000000',
  focus: '#ffbf47',
}

const borderRadius = 2
export const roundedEdges = css`
  -webkit-border-radius: ${borderRadius}px;
  -moz-border-radius: ${borderRadius}px;
  border-radius: ${borderRadius}px;
`

/*
 * Hide only visually, but have it
 * available for screenreaders
 */
export const visuallyhidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
}

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:'
    let suffix = typeof breakpoints[label] === 'string' ? '' : 'px'
    accumulator[label] = cls =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {},
)

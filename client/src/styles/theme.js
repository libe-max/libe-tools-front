import { injectGlobal } from 'styled-components'
import hexToRgba from 'hex-to-rgba'

injectGlobal`@font-face {
  font-family: 'LibeSans Semi Condensed';
  src: url('/fonts/libe-sans-semi-condensed/LibeSansSemiCondensed-Bold.otf');
}`

injectGlobal`@font-face {
  font-family: 'Zurich';
  src: url('/fonts/zurich-bt/Zurich-BT.ttf');
  font-weight: 400;
}`

injectGlobal`@font-face {
  font-family: 'Zurich';
  src: url('/fonts/zurich-bt/Zurich-Italic-BT.ttf');
  font-weight: 400;
  font-style: italic;
}`

injectGlobal`@font-face {
  font-family: 'Zurich';
  src: url('/fonts/zurich-bt/Zurich-Bold-BT.ttf');
  font-weight: 600;
}`

injectGlobal`@font-face {
  font-family: 'Zurich';
  src: url('/fonts/zurich-bt/Zurich-Bold-Italic-BT.ttf');
  font-weight: 600;
  font-style: italic;
}`

const units = val => `${8 * val}px`

const fonts = {
  brand: 'LibeSans Semi Condensed',
  main: 'Zurich'
}

const colors = {
  black: '#1B1B1F',
  grey: '#7B7B80',
  lightGrey: '#DDDDDD'
}

const shadows = {
  medium: `0 0 ${units(1)} ${units(.25)} ${hexToRgba(colors.black, .2)}`,
  small: `0 ${units(.25)} ${units(.5)} 0 ${hexToRgba(colors.black, .1)}`
}

const theme = {
  fonts,
  colors,
  shadows,
  units
}

export default theme

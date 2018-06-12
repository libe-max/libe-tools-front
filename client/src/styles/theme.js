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

const rawColors = {
  black: '#1B1B1F',
  grey: '#7B7B80',
  lightGrey: '#DDDDDD',
  shadedWhite: '#F2F2F2',
  white: '#FFFFFF',
  shadedBlack: '#333333',
  red: '#FF0043',
  blue: '#00B9E7'
}

const colors = {
  text: rawColors.black,
  lightText: rawColors.grey,
  clearText: rawColors.white,
  dangerText: rawColors.red,
  borders: rawColors.lightGrey,
  clearBg: rawColors.white,
  shadedBg: rawColors.shadedWhite,
  dimBg: rawColors.shadedBlack,
  action: rawColors.blue
}

const shadows = {
  medium: `0 0 ${units(1)} ${units(0.25)} ${hexToRgba(rawColors.black, 0.2)}`,
  small: `0 ${units(0.25)} ${units(0.5)} 0 ${hexToRgba(rawColors.black, 0.1)}`,
  neat: `0 ${units(3 / 8)} 0 0 ${hexToRgba(rawColors.black, 0.1)}`
}

const breakpoints = {
  wide: '1370px',
  medium: '980px'
}

const theme = {
  units,
  fonts,
  colors,
  shadows,
  breakpoints
}

export default theme

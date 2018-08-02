/* eslint-disable key-spacing */

import hexToRgba from 'hex-to-rgba'

const units = val => `${8 * val}px`

const fonts = {
  brand:  'Libe-Sans-Semicondensed',
  easy:   'Synthese'
}

const rawColors = {
  black:        '#1B1B1F',
  grey:         '#7B7B80',
  lightGrey:    '#DDDDDD',
  shadedWhite:  '#F2F2F2',
  white:        '#FFFFFF',
  shadedBlack:  '#333333',
  red:          '#FF0043',
  lightRed:     '#FC7599',
  veryLightRed: '#FFDCE5',
  blue:         '#00B9E7',
  lightBlue:    '#6FE2FF',
  veryLightBlue: '#E6F9FD'
}

const colors = {
  text:           rawColors.black,
  lightText:      rawColors.grey,
  lightClearText: rawColors.lightGrey,
  clearText:      rawColors.white,
  dangerText:     rawColors.red,
  dangerBorders:  rawColors.lightRed,
  dangerBg:       rawColors.veryLightRed,
  actionText:     rawColors.blue,
  borders:        rawColors.lightGrey,
  clearBg:        rawColors.white,
  shadedBg:       rawColors.shadedWhite,
  dimBg:          rawColors.shadedBlack,
  action:         rawColors.blue,
  actionBorders:  rawColors.lightBlue,
  actionBg:       rawColors.veryLightBlue
}

const shadows = {
  medium: `0 0 ${units(1)} ${units(0.25)} ${hexToRgba(rawColors.black, 0.2)}`,
  small:  `0 ${units(0.25)} ${units(0.5)} 0 ${hexToRgba(rawColors.black, 0.1)}`,
  neat:   `0 ${units(3 / 8)} 0 0 ${hexToRgba(rawColors.black, 0.1)}`
}

const breakpoints = {
  wide:   '1370px',
  medium: '980px'
}

const numericTransitions = {
  quick: 200,
  medium: 400
}

const transitions = {
  quick: `${numericTransitions.quick}ms`,
  medium: `${numericTransitions.medium}ms`
}

const theme = {
  units,
  fonts,
  colors,
  shadows,
  breakpoints,
  numericTransitions,
  transitions
}

export default theme

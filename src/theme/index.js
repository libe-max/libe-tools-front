import hexToRgba from 'hex-to-rgba'
import chroma from 'chroma-js'

const units = val => `${8 * val}px`

const breakpoints = {
  wide: '1370px',
  medium: '980px'
}

const numericTransitions = {
  flash: 50,
  quick: 200,
  medium: 400
}

const transitions = {
  flash: `${numericTransitions.flash}ms`,
  quick: `${numericTransitions.quick}ms`,
  medium: `${numericTransitions.medium}ms`
}

const fonts = {
  brand: 'Libe-Sans-Semicondensed',
  easy: 'Synthese'
}

const rawColors = {
  black: '#1B1B1F',
  lightBlack: '#333333',
  obscureGrey: '#404040',
  slightGrey: '#F2F2F2',
  white: '#FFFFFF',
  blue: '#00B9E7',
  red: '#FF0043'
}

const shadows = {
  medium: `0 0 ${units(1)} ${units(0.25)} ${hexToRgba(rawColors.black, 0.2)}`,
  small: `0 ${units(0.25)} ${units(0.5)} 0 ${hexToRgba(rawColors.black, 0.1)}`,
  neat: `0 ${units(3 / 8)} 0 0 ${hexToRgba(rawColors.black, 0.1)}`,
  focus: `0 0 ${units(4)} ${units(0.5)} ${hexToRgba(rawColors.blue)}`
}

const colorScales = {
  default: {
    base: chroma.scale([rawColors.white, rawColors.black]).mode('lab'),
    action: chroma.scale([rawColors.white, rawColors.blue]).mode('lab'),
    danger: chroma.scale([rawColors.white, rawColors.red]).mode('lab')
  },
  shaded: {
    base: chroma.scale([rawColors.slightGrey, rawColors.black]).mode('lab'),
    action: chroma.scale([rawColors.slightGrey, rawColors.blue]).mode('lab'),
    danger: chroma.scale([rawColors.slightGrey, rawColors.red]).mode('lab')
  },
  inverted: {
    base: chroma.scale([rawColors.lightBlack, rawColors.slightGrey]).mode('lab'),
    action: chroma.scale([rawColors.lightBlack, rawColors.blue]).mode('lab'),
    danger: chroma.scale([rawColors.lightBlack, rawColors.red]).mode('lab')
  },
  shadedInverted: {
    base: chroma.scale([rawColors.obscureGrey, rawColors.slightGrey]).mode('lab'),
    action: chroma.scale([rawColors.obscureGrey, rawColors.blue]).mode('lab'),
    danger: chroma.scale([rawColors.obscureGrey, rawColors.red]).mode('lab')
  }
}

const colorPalettes = {
  default: {
    baseText: colorScales.default.base(1).hex(),
    baseLightText: colorScales.default.base(0.5).hex(),
    baseBorder: colorScales.default.base(0.15).hex(),
    baseAltBg: colorScales.default.base(0.05).hex(),
    baseBg: colorScales.default.base(0).hex(),
    baseInvertedText: colorScales.default.base(0).hex(),
    baseInvertedBg: colorScales.default.base(1).hex(),

    actionText: colorScales.default.action(1).hex(),
    actionLightText: colorScales.default.action(0.5).hex(),
    actionBorder: colorScales.default.action(0.15).hex(),
    actionAltBg: colorScales.default.action(0.05).hex(),
    actionBg: colorScales.default.action(0).hex(),
    actionInvertedText: colorScales.default.action(0).hex(),
    actionInvertedBg: colorScales.default.action(1).hex(),

    dangerText: colorScales.default.danger(1).hex(),
    dangerLightText: colorScales.default.danger(0.5).hex(),
    dangerBorder: colorScales.default.danger(0.15).hex(),
    dangerAltBg: colorScales.default.danger(0.05).hex(),
    dangerBg: colorScales.default.danger(0).hex(),
    dangerInvertedText: colorScales.default.danger(0).hex(),
    dangerInvertedBg: colorScales.default.danger(1).hex()
  },
  shaded: {
    baseText: colorScales.shaded.base(1).hex(),
    baseLightText: colorScales.shaded.base(0.5).hex(),
    baseBorder: colorScales.shaded.base(0.15).hex(),
    baseAltBg: colorScales.shaded.base(0.05).hex(),
    baseBg: colorScales.shaded.base(0).hex(),
    baseInvertedText: colorScales.shaded.base(0).hex(),
    baseInvertedBg: colorScales.shaded.base(1).hex(),

    actionText: colorScales.shaded.action(1).hex(),
    actionLightText: colorScales.shaded.action(0.5).hex(),
    actionBorder: colorScales.shaded.action(0.15).hex(),
    actionAltBg: colorScales.shaded.action(0.05).hex(),
    actionBg: colorScales.shaded.action(0).hex(),
    actionInvertedText: colorScales.shaded.action(0).hex(),
    actionInvertedBg: colorScales.shaded.action(1).hex(),

    dangerText: colorScales.shaded.danger(1).hex(),
    dangerLightText: colorScales.shaded.danger(0.5).hex(),
    dangerBorder: colorScales.shaded.danger(0.15).hex(),
    dangerAltBg: colorScales.shaded.danger(0.05).hex(),
    dangerBg: colorScales.shaded.danger(0).hex(),
    dangerInvertedText: colorScales.shaded.danger(0).hex(),
    dangerInvertedBg: colorScales.shaded.danger(1).hex()
  },
  inverted: {
    baseText: colorScales.inverted.base(1).hex(),
    baseLightText: colorScales.inverted.base(0.5).hex(),
    baseBorder: colorScales.inverted.base(0.15).hex(),
    baseAltBg: colorScales.inverted.base(0.05).hex(),
    baseBg: colorScales.inverted.base(0).hex(),
    baseInvertedText: colorScales.inverted.base(0).hex(),
    baseInvertedBg: colorScales.inverted.base(1).hex(),

    actionText: colorScales.inverted.action(1).hex(),
    actionLightText: colorScales.inverted.action(0.5).hex(),
    actionBorder: colorScales.inverted.action(0.15).hex(),
    actionAltBg: colorScales.inverted.action(0.05).hex(),
    actionBg: colorScales.inverted.action(0).hex(),
    actionInvertedText: colorScales.default.action(0).hex(),
    actionInvertedBg: colorScales.inverted.action(1).hex(),

    dangerText: colorScales.inverted.danger(1).hex(),
    dangerLightText: colorScales.inverted.danger(0.5).hex(),
    dangerBorder: colorScales.inverted.danger(0.15).hex(),
    dangerAltBg: colorScales.inverted.danger(0.1).hex(),
    dangerBg: colorScales.inverted.danger(0).hex(),
    dangerInvertedText: colorScales.default.danger(0).hex(),
    dangerInvertedBg: colorScales.inverted.danger(1).hex()
  },
  shadedInverted: {
    baseText: colorScales.shadedInverted.base(1).hex(),
    baseLightText: colorScales.shadedInverted.base(0.5).hex(),
    baseBorder: colorScales.shadedInverted.base(0.15).hex(),
    baseAltBg: colorScales.shadedInverted.base(0.05).hex(),
    baseBg: colorScales.shadedInverted.base(0).hex(),
    baseInvertedText: colorScales.shadedInverted.base(0).hex(),
    baseInvertedBg: colorScales.shadedInverted.base(1).hex(),

    actionText: colorScales.shadedInverted.action(1).hex(),
    actionLightText: colorScales.shadedInverted.action(0.5).hex(),
    actionBorder: colorScales.shadedInverted.action(0.15).hex(),
    actionAltBg: colorScales.shadedInverted.action(0.05).hex(),
    actionBg: colorScales.shadedInverted.action(0).hex(),
    actionInvertedText: colorScales.default.action(0).hex(),
    actionInvertedBg: colorScales.shadedInverted.action(1).hex(),

    dangerText: colorScales.shadedInverted.danger(1).hex(),
    dangerLightText: colorScales.shadedInverted.danger(0.5).hex(),
    dangerBorder: colorScales.shadedInverted.danger(0.15).hex(),
    dangerAltBg: colorScales.shadedInverted.base(0.05).hex(),
    dangerBg: colorScales.shadedInverted.danger(0).hex(),
    dangerInvertedText: colorScales.default.danger(0).hex(),
    dangerInvertedBg: colorScales.shadedInverted.danger(1).hex()
  }
}

const Theme = function ({ inverted, shaded } = {}) {
  let colors
  if (!inverted && !shaded) colors = colorPalettes.default
  if (!inverted && shaded) colors = colorPalettes.shaded
  if (inverted && !shaded) colors = colorPalettes.inverted
  if (inverted && shaded) colors = colorPalettes.shadedInverted
  return {
    units,
    fonts,
    colors,
    shadows,
    rawColors,
    breakpoints,
    transitions,
    numericTransitions,
    _isInverted: typeof inverted === 'boolean' ? inverted : false,
    _isShaded: typeof shaded === 'boolean' ? shaded : false,
    _invert: function (theme = this) {
      return new Theme({
        inverted: !theme._isInverted,
        shaded: theme._isShaded
      })
    },
    _shade: function (theme = this) {
      return new Theme({
        inverted: theme._isInverted,
        shaded: !theme._isShaded
      })
    }
  }
}

export default new Theme()

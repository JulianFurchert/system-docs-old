import hs from 'hsluv';
import hexToRgba from 'hex-to-rgba';

export const COLOR_SCHEMES = [
  'primary',
  'secondary',
  'text',
]

export const createPalette = hex => {
  let hsluv = hs.hexToHsluv(hex);
  return {
    "0": hexToRgba( hs.hsluvToHex([ hsluv[0], hsluv[1], 80 ]), 0 ),
    "01": hexToRgba( hs.hsluvToHex([ hsluv[0], hsluv[1], 80 ]), 0.1 ),
    "02": hexToRgba( hs.hsluvToHex([ hsluv[0], hsluv[1], 80 ]), 0.2 ),
    "03": hexToRgba( hs.hsluvToHex([ hsluv[0], hsluv[1], 80 ]), 0.3 ),
    "04": hexToRgba( hs.hsluvToHex([ hsluv[0], hsluv[1], 80 ]), 0.4 ),
    "1": hex,
    ...( hsluv[2] < 65 ? { "on": "#FFFFFF"} : { "on": "#151515"} ),
    ...( hsluv[2] < 65 ? {
      "2": hs.hsluvToHex([ hsluv[0], hsluv[1], hsluv[2] - 5 ]),
      "3": hs.hsluvToHex([ hsluv[0], hsluv[1], hsluv[2] - 10 ]),
    } : {
      "2": hs.hsluvToHex([ hsluv[0], hsluv[1], hsluv[2] + 5 ]),
      "3": hs.hsluvToHex([ hsluv[0], hsluv[1], hsluv[2] + 10 ]),
    }),
    "inactive": hs.hsluvToHex([ hsluv[0], hsluv[1], 50 ]),
  }
}

export const mergeThemes = theme => {}

export const createTheme = ( customTheme = {} ) => {
  // let theme = mergeThemes(customTheme);
}
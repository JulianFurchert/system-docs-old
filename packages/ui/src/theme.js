import hs from 'hsluv';
import hexToRgba from 'hex-to-rgba';

export const COLOR_SCHEMES = [
  'primary',
  'secondary',
  'text',
]

const createPalette = hex => {
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

const mergeThemes = theme => {}

const createTheme = ( customTheme = {} ) => {
  let theme = mergeThemes(customTheme);
  return {}
}

export const theme = {
  colors: {
    primary: createPalette("#0055FF"),
    secondary: createPalette("#0099FF"),
    text: createPalette("#151515"),
    code: createPalette("#0055FF"),
    background: "#F6F6F6",
    sidebar: "#FFFFFF",
    block: "#FFFFFF",
  },
  fonts: {
    normal: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono: "SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, Courier, monospace"
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 600
  },
  // 0: Controls, ButtonSmall 1: Menu-Link, Button 2: Blocks
  radii: [
    0,
    4,
    4,
    4
  ],
  borders: [
    0,
    '1px solid'
  ],
  shadows: [
    'none',
    'none',
    'none',
    'none'
  ],
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    40,
    48
  ],
  space: [
    0,
    5,
    10,
    15,
    20,
    25,
    35,
    45,
    65,
    80,
  ],
  sizes: [
    0,
    5,
    10,
    15,
    20,
    25,
    35,
    40,
    45,
    50,
    55
  ],
  styles: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle: {},
    bodyText: {},
    buttonText: {},
    code: {},
    /* layout */
    Header: {},
    Sidebar: {},
    Block: {},
  }
}

// const theme = {
//   colors: {
//     /** Old Colors */
//     ...baseColors,
//     /** properties bellow depends on mode select */
//     bg: baseColors.greys[0],
//     text: baseColors.black,
//     sidebarBg: baseColors.white,
//     /** menu colors */
//     menuTitle: baseColors.greys[3],
//     menuItemBg: baseColors.white,
//     menuItemText: baseColors.black,
//     menuItemHoverBg: baseColors.white,
//     menuItemHoverText: baseColors.black,
//     menuItemSelectBg: baseColors.black,
//     menuItemSelectext: baseColors.white,
//     /** button colors */
//     buttonBg: baseColors.white,
//     buttonText: baseColors.black,
//     buttonHoverBg: baseColors.greys[0],
//     buttonHoverText: baseColors.black,
//     buttonActiveBg: baseColors.greys[1],
//     buttonActiceText: baseColors.white,
//     /** control colors */
//     controlBg: baseColors.greys[1],
//     controlText: baseColors.black,
//     controlHoverBg: baseColors.greys[1],
//     controlHoverText: baseColors.white,
//     controlActiveBg: baseColors.black,
//     controlActiceText: baseColors.white,
//     /** New Colors */
//     primary: "#0055FF",
//     secondary: "#21272D",
//     background: "#F6F6F6",
//     surface: baseColors.white,
//     onPrimary: baseColors.white,
//     onSecondary: baseColors.white,
//     onBackground: baseColors.black,
//     onSurface: baseColors.black,
//   },
//   fonts: {
//     normal: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
//     mono: "SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, Courier, monospace"
//   },
//   fontWeights: {
//     light: 300,
//     "normal": 400,
//     "bold": 600
//   },
//   radii: [0, 4, 8],
//   borders: [0, '1px solid'],
//   space: [
//     0,
//     5,
//     10,
//     15,
//     20,
//     25,
//     35,
//     45,
//     65,
//     80,
//   ],
//   sizes: [
//     0,
//     5,
//     10,
//     15,
//     20,
//     25,
//     35,
//     45,
//     65,
//     80,
//   ],
//   fontSizes: [
//     12,
//     14,
//     16,
//     20,
//     24,
//     32,
//     40,
//     48
//   ],
//   styles: {
//     /**
//      * Markdown Styles
//      */
//     h1: {
//       font: 'normal',
//       fontSize: 5,
//       fontWeight: 'regular'
//     },
//     h2: {
//       font: 'normal',
//       fontSize: 4
//     },
//     h3: {
//       font: 'normal',
//       fontSize: 3
//     },
//     h4: {
//       font: 'normal',
//       fontSize: 2,
//       textTransform: 'uppercase'
//     },
//     h5: {
//       font: 'normal',
//       fontSize: 1,
//       textTransform: 'uppercase'
//     },
//     h6: {
//       font: 'normal',
//       fontSize: 1,
//       textTransform: 'uppercase'
//     },
//     subtitle: {
//       font: 'normal',
//       fontSize: 1,
//       textTransform: 'uppercase'
//     },
//     bodyText: {
//       font: 'normal',
//       fontSize: 3
//     },
//     buttonText: {
//       font: 'normal',
//       fontSize: 2,
//     },
//     code: {
//       font: 'mono',
//       fontSize: 2
//     },
//     /**
//     * Styles
//     */
//     Button: {},
//     Header: {},
//     Main: {},
//     Sidebar: {},
//     Footer: {},
//   }
// }
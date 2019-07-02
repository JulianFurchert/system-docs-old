import { createPalette } from './theme-functions'

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
  radii: {
    none: 0,
    smallComponents: 4,
    mediumComponents: 4,
    largeComponents: 8
  },
  shadows: {
    none: 'none',
    smallComponents: 'none',
    mediumComponents: 'none',
    largeComponents: '0 0 1px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.05), 0 10px 20px rgba(0,0,0,.1)'
  },
  borders: [
    'none',
    '1px solid'
  ],
  fontSizes: [
    11,
    13,
    15,
    18,
    21,
    30,
    40,
    45
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
  textStyles: {
    h1: {
      font: 'normal',
      fontSize: 5,
      fontWeight: 'regular'
    },
    h2: {
      font: 'normal',
      fontSize: 4
    },
    h3: {
      font: 'normal',
      fontSize: 3
    },
    h4: {
      font: 'normal',
      fontSize: 2,
      textTransform: 'uppercase'
    },
    h5: {
      font: 'normal',
      fontSize: 1,
      textTransform: 'uppercase'
    },
    h6: {
      font: 'normal',
      fontSize: 1,
      textTransform: 'uppercase'
    },
    subtitle: {
      font: 'normal',
      fontSize: 1,
      textTransform: 'uppercase'
    },
    bodyText: {
      font: 'normal',
      fontSize: 3
    },
    buttonLarge: {
      font: 'normal',
      fontSize: 2,
    },
    button: {
      font: 'normal',
      fontSize: 1,
    },
    code: {
      font: 'mono',
      fontSize: 2
    },
  },
  styles: {
    Header: {},
    Sidebar: {},
    Block: {},
  }
}
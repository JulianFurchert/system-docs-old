import { createPalette } from './theme-functions'

export const theme = {
  colors: {
    primary: createPalette("#0055FF"),
    secondary: createPalette("#0099FF"),
    text: createPalette("#242424"),
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
    largeComponents: 4
  },
  shadows: {
    none: 'none',
    smallComponents: 'none',
    mediumComponents: 'none',
    largeComponents: 'none',
    // largeComponents: '0 0 1px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.05), 0 10px 20px rgba(0,0,0,.1)'
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
    30,
    35,
    40,
    45,
    50,
    55
  ],
  textStyles: {
    h1: {
      color: 'text.1',
      fontFamily: 'normal',
      fontSize: 5,
      fontWeight: 'regular'
    },
    h2: {
      color: 'text.1',
      fontFamily: 'normal',
      fontSize: 4,
      fontWeight: 'regular'
    },
    h3: {
      color: 'text.1',
      fontFamily: 'normal',
      fontSize: 3,
      fontWeight: 'regular'
    },
    h4: {
      color: 'text.1',
      fontFamily: 'normal',
      fontSize: 2,
      fontWeight: 'regular',
      textTransform: 'uppercase'
    },
    h5: {
      fontFamily: 'normal',
      fontSize: 1,
      fontWeight: 'regular',
      textTransform: 'uppercase'
    },
    h6: {
      color: 'text.1',
      fontFamily: 'normal',
      fontSize: 1,
      fontWeight: 'regular',
      textTransform: 'uppercase'
    },
    subtitle: {
      color: 'text.1',
      fontFamily: 'normal',
      fontSize: 1,
      fontWeight: 'regular',
      textTransform: 'uppercase'
    },
    bodyText: {
      color: 'text.1',
      fontFamily: 'normal',
      fontWeight: 'regular',
      fontSize: 3,
      lineHeight: 1.4,
    },
    buttonLarge: {
      fontFamily: 'normal',
      fontSize: 2,
      fontWeight: 'regular'
    },
    button: {
      fontFamily: 'normal',
      fontSize: 1,
      fontWeight: 'regular'
    },
    code: {
      fontFamily: 'mono',
      fontSize: 1,
      fontWeight: 'regular'
    },
    list: {
      color: 'text.1',
      fontFamily: 'mono',
      fontSize: 0,
      fontWeight: 'regular'
    },
  },
  styles: {
    Header: {},
    Sidebar: {},
    Block: {},
  }
}
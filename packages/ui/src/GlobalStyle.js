import { createGlobalStyle } from 'styled-components';
import { css } from './system-functions' ;

export const GlobalStyle = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: '100%',
      fontFamily: 'normal',
      color: 'grays.7',
      backgroundColor: 'white',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    body: {
      margin: 0,
    },
    'input, button, select, textarea': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'normal',
      color: 'inherit',
    },
    svg: {
      verticalAlign: 'middle',
    },
  }),
);

import * as styledSystem from 'styled-system'
import { css as systemCss, get} from '@styled-system/css'
import {theme as defaultTheme} from './theme';

const getTheme = (theme) => theme ? ( theme.systemDocs ? theme.systemDocs : defaultTheme) : defaultTheme;

export const css = ({key, ...style}) => (props) => {
  let theme = getTheme(props.theme);
  return systemCss({
  ...style,
  ...get(theme, `styles.${key}`, {})
  })(theme)
}

export const space = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.space(newProps)
}

export const layout = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.layout(newProps)
}

export const color = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.color(newProps)
}

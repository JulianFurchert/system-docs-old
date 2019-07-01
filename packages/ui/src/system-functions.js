import * as styledSystem from 'styled-system'
import { css as systemCss, get} from '@styled-system/css'
import {theme as defaultTheme} from './theme';

const getTheme = (theme) => theme ? ( theme.systemDocs ? theme.systemDocs : defaultTheme) : defaultTheme;

export const css = ( styles ) => ( props ) => {
  let theme = getTheme(props.theme);
  return systemCss({
  ...styles,
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

export const typography = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.typography(newProps)
}

export const flexbox = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.flexbox(newProps)
}

export const border = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.border(newProps)
}

export const background = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.background(newProps)
}

export const position = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.position(newProps)
}

export const grid = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.grid(newProps)
}

export const shadow = ({theme, ...props}) => {
  let newProps = { theme: getTheme(theme), ...props }
  return styledSystem.shadow(newProps)
}

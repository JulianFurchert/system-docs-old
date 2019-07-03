import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SystemTypes from '@styled-system/prop-types'
import { css, layout, space } from '../system-functions'
import { COLOR_SCHEMES } from '../theme-functions'

export const StyledButton = styled.button( ({
  active = false,
  scheme= 'primary'
}) =>
  css({
    margin:0,
    display: 'flex',
    cursor: 'pointer',
    alginItem: 'center',
    justifyContent: 'start',
    width: 'auto',
    minWidth: "140px",
    fontFamily: 'normal',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 'mediumComponents',
    border: 'none',
    borderColor: 'buttonActiveBg',
    outline: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    textDecoration: 'none',
    // transition: 'all 200ms ease-in-out',
    '&::-moz-focus-inner': {
      border: 0,
    },
    // size
    height: 6,
    fontSize: 2,
    px: 3,
    variant: 'textStyles.buttonLarge',
    color: `text.1`,
    bg: `text.0`,
    '&:hover': {
      bg:  `text.01`,
    },
    '&:active': {
      bg:  `text.02`,
    },
    // fill
    ...( active && {
      color: `${scheme}.on`,
      bg: `${scheme}.1`,
      '&:hover': {
        bg:  `${scheme}.1`,
      },
      '&:active': {
        bg:  `${scheme}.1`,
      }
    }),
  }),
  layout,
  space
)

export const MenuButton = ({text = "button", ...props}) => (
  <StyledButton {...props} >
    {text}
  </StyledButton>
)

MenuButton.propTypes = {
  variant: PropTypes.oneOf(['fill', 'outline', 'ghost']),
  scheme: PropTypes.oneOf(COLOR_SCHEMES),
  onClick: PropTypes.func,
  text: PropTypes.string,
  ...SystemTypes.layout,
  ...SystemTypes.space,
}

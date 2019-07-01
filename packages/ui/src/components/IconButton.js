import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SystemTypes from '@styled-system/prop-types'
import { css, layout, space } from '../system-functions'
import { COLOR_SCHEMES } from '../theme'
import { Icon } from './Icon'

const Button = styled.button( ({ variant, size, scheme }) =>
  css({
    margin:0,
    display: 'flex',
    cursor: 'pointer',
    alginItem: 'center',
    justifyContent: 'center',
    fontFamily: 'normal',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: "50%",
    border: 'none',
    borderColor: 'buttonActiveBg',
    outline: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    textDecoration: 'none',
    transition: 'all 200ms ease-in-out',
    '&::-moz-focus-inner': {
      border: 0,
    },
    // size
    height: size === 'default' ? 5 : 6,
    width: size === 'default' ? 5 : 6,
    // fill
    ...( variant === 'fill' && {
      color: `${scheme}.on`,
      bg: `${scheme}.1`,
      '&:hover': {
        bg:  `${scheme}.2`,
      },
      '&:active': {
        bg:  `${scheme}.3`,
      }
    }),
    // ghost
    ...( variant === 'ghost'  && {
      color: `${scheme}.1`,
      bg: `${scheme}.0`,
      '&:hover': {
        bg:  `${scheme}.01`,
      },
      '&:active': {
        bg:  `${scheme}.02`,
      }
    }),
    // outline
    ...( variant === 'outline' && {
      color: `${scheme}.1`,
      bg: `${scheme}.0`,
      borderColor: `${scheme}.04`,
      border: `1px solid `,
      '&:hover': {
        borderColor: `${scheme}.1`,
      },
      '&:active': {
        bg:  `${scheme}.01`,
      }
    })
  }),
  layout,
  space
)

export const IconButton = ({
  variant = 'ghost',
  size = 'large',
  scheme = 'primary',
  icon = 'Menu',
  ...props,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      scheme={scheme}
      {...props}
    >
      <Icon
        name={icon}
        size={ size === 'default' ? 15 : 20}
        color={ variant === 'fill' ? `${scheme}.on` : `${scheme}.1`}
      />
    </Button>
  )
}

IconButton.propTypes = {
  variant: PropTypes.oneOf(['fill', 'outline', 'ghost']),
  size: PropTypes.oneOf(['default', 'large']),
  scheme: PropTypes.oneOf(COLOR_SCHEMES),
  onClick: PropTypes.func,
  icon: PropTypes.string,
  ...SystemTypes.layout,
  ...SystemTypes.space,
}

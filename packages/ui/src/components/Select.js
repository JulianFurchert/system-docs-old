import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SystemTypes from '@styled-system/prop-types'
import { css, layout, space } from '../system-functions';
import { COLOR_SCHEMES } from '../theme-functions'
import { Icon } from './Icon';

const Wrapper = styled('div')(
  { position: 'relative' },
  space,
  layout
)

const IconWrapper = styled('div')(
  css({
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 2,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
  })
)

const StyledSelect = styled('select')( ({ scheme }) =>
  css({
    cursor: 'pointer',
    appearance: 'none',
    backgroundColor: 'transparent',
    height: 5,
    lineHeight: 1,
    fontFamily: 'normal',
    fontWeight: 400,
    padding: 0,
    fontSize:  1,
    borderRadius: 4,
    px: 2,
    color: `${scheme}.1`,
    border: 'none',
    outline: 'none',
    width: '100%',
    transition: `background-color 200ms ease`,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:hover' : {
      backgroundColor: `${scheme}.01`,
    },
    '&:focus': {
      backgroundColor: `${scheme}.02`,
    },
  })
)

export const Select = ({
  scheme = "primary",
  onChange,
  value,
  children,
  ...props
}) => {
  return  (
    <Wrapper {...props}>
      <StyledSelect
        scheme={scheme}
        value={value}
        onChange={onChange}
      >
        {children}
      </StyledSelect>
      <IconWrapper>
        <Icon
          name="ChevronDown"
          size={16}
          color={`${scheme}.1`}
        />
      </IconWrapper>
    </Wrapper>
  )
}

Select.propTypes = {
  scheme: PropTypes.oneOf(COLOR_SCHEMES),
  onChange: PropTypes.func,
  value: PropTypes.any,
  children: PropTypes.any,
  ...SystemTypes.layout,
  ...SystemTypes.space,
}

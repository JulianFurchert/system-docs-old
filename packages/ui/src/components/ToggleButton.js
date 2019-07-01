import React from 'react';
import styled from 'styled-components'
import { css } from '../system-functions'

export const ToggleButtonGroup = ({
  children,
  value,
  onChange,
  name,
  ...props
}) => {
  return (
    <div width="100%" {...props}>
      {children}
    </div>
  );
};

export const ToggleButton = ({ children, variant, ...inputProps }) => {
  return (
    <Wrapper>
      <Radio {...inputProps} type="radio" />
      {children && <FakeRadio variant={variant}>{children}</FakeRadio>}
    </Wrapper>
  );
};

 const Wrapper = styled('label')({
  display: 'inline-flex',
  position: 'relative',
  flexBasis: 0,
  flexGrow: 1,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '& + &': {
    marginLeft: -1,
  },
  '&:hover': {
    zIndex: 2,
  },
});

const Radio = styled('input')({
  position: 'absolute',
  opacity: 0,
  zIndex: 0,
});

const FakeRadio = styled('span')(({ variant, ...props }) =>
css({
    height: 5,
    width: '100%',
    minWidth: 5,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'medium',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    border: '1px solid',
    borderColor: 'grays.3',
    color: 'grays.5',
    userSelect: 'none',
    [`${Wrapper}:first-child &`]: {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
    },
    [`${Wrapper}:last-child &`]: {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    },
    [`${Wrapper}:hover &`]: {
      borderColor: 'grays.4',
      zIndex: 1,
    },
    [`${Radio}:checked + &`]: {
      backgroundColor: 'primaries.0',
      borderColor: 'primaries.2',
      color: 'primaries.5',
      zIndex: 1,
    },
  })
);

import React from 'react';
import styled from 'styled-components'
import * as FeatherIcons from 'react-feather';
import { css, space } from '../system-functions'

const Wrapper = styled.div( ({ color, size }) =>
  css({
    height: size,
    width: size,
    lineHeight: 0,
    '&& svg': {
      color: color
    }
  }),
  space
);

export const Icon = ({
  size = 24,
  name = 'Feather',
  color = 'black.1'
}) => {
  let FeatherIcon = FeatherIcons[name]
  return (
    <Wrapper color={color}>
      <FeatherIcon size={size} />
    </Wrapper>
  )
}
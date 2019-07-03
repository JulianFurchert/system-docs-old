import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SystemTypes from '@styled-system/prop-types'
import { css, layout, space, color } from '../system-functions'
import { Text } from './Text';

export const StyledRow = styled.div(
  css({
    height: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: 1,
    borderColor: 'text.03',
    px: 3,
    width: 'auto',
    minWidth: "140px"
  }),
  layout,
  space,
  color
)

export const Row = ({key = "key", value = "value", ...props}) => (
  <StyledRow {...props} >
    <Text as="span" textStyle="list">{key}</Text>
    <Text as="span" textStyle="list">{value}</Text>
  </StyledRow>
)

Row.propTypes = {
  value: PropTypes.string,
  key: PropTypes.string,
  ...SystemTypes.layout,
  ...SystemTypes.space,
}

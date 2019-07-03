import styled from 'styled-components'
import { css, color, space, typography } from '../system-functions'

export const Text = styled('p')( ({ textStyle }) =>
  css({
    margin: 0,
    color: 'text.1',
    variant: `textStyles.${textStyle}`,
  }),
  color,
  space,
  typography
)
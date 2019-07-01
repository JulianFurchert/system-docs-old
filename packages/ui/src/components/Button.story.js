import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from './Button';
import { Box } from './Box';
import { COLOR_SCHEMES } from '../theme-functions'

const stories = storiesOf('Controls|Button', module );
stories.addDecorator(withKnobs);

const variants = ['fill', 'outline', 'ghost'];
const sizes = ['default', 'large'];


stories.add('primary', () => (
  <Box p={3}>
    <Button
      scheme={select('scheme', COLOR_SCHEMES, 'primary')}
      variant={select('variant', variants, 'fill')}
      size={select('size', sizes, 'default')}
      text={text('text', 'Button')}
    />
  </Box>
));


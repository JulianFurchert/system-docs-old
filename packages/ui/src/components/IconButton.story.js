import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { IconButton } from './IconButton';
import { Box } from './Box';
import { COLOR_SCHEMES } from '../theme-functions'

const stories = storiesOf('Controls|IconButton', module );
stories.addDecorator(withKnobs);

const variants = ['fill', 'outline', 'ghost'];
const sizes = ['default', 'large'];
const ICONS = ['Menu', 'Cast', 'Feather'];


stories.add('primary', () => (
  <Box p={3}>
    <IconButton
      scheme={select('scheme', COLOR_SCHEMES, 'primary')}
      variant={select('variant', variants, 'ghost')}
      size={select('size', sizes, 'large')}
      icon={select('icon', ICONS, 'Menu')}
    >
    </IconButton>
  </Box>
));


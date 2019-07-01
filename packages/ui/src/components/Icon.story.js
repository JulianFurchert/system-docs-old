import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, color } from '@storybook/addon-knobs';
import { Box } from './Box';
import { Icon } from './Icon';

const stories = storiesOf('Components|Icon', module );
stories.addDecorator(withKnobs);

const ICONS = ['Menu', 'ChevronDown', 'Feather'];
const SIZES = [16, 24, 32, 40];
const COLORS = ['primary.1', 'secondary.1', 'text.1']

stories.add('default', () => (
  <Box p={3}>
    <Icon
      name={select('name', ICONS, 'Feather')}
      size={select('size', SIZES, 24)}
      color={select('color', COLORS, 'text.1')}
    />
  </Box>
));

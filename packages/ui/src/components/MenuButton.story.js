import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { MenuButton } from './MenuButton';
import { Box } from './Box';
import { COLOR_SCHEMES } from '../theme-functions'

const stories = storiesOf('Components|MenuButton', module );
stories.addDecorator(withKnobs);

const active = ['default', 'large'];

stories.add('primary', () => (
  <Box p={3}>
    <MenuButton
      scheme={select('scheme', COLOR_SCHEMES, 'primary')}
      text={text('text', 'Button')}
      active={boolean('active', false)}
    />
  </Box>
));


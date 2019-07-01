import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Text } from './Text';
import { Box } from './Box';

const stories = storiesOf('Components|Text', module );
stories.addDecorator(withKnobs);

const textStyles = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle',
  'bodyText',
  'button',
  'buttonLarge',
  'code'
];


stories.add('default', () => (
  <Box p={3}>
    <Text textStyle={select('textStyle', textStyles, 'bodyText')}>
      {text('text', 'Example Text')}
    </Text>
  </Box>
));

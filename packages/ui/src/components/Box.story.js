import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';

const stories = storiesOf('Components|Box', module );

stories.add('primary', () => (
  <Box>
    <Box m={3} bg="primary" width={200} height={200} display="inline-block" />
    <Box m={3} bg="black" width={200} height={200}  display="inline-block" />
  </Box>
));

stories.add('ghost', () => (
  <Box m={3} bg="green" width={200} height={200} />
));


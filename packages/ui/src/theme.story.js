import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './components/Box';

const stories = storiesOf('Theme|Colors', module );

stories.add('primary', () => (
  <div>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
  </div>
));

stories.add('secondary', () => (
  <div>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
  </div>
));

stories.add('onBackground', () => (
  <div>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
    <Box m={2} width={100} height={100}></Box>
  </div>
));



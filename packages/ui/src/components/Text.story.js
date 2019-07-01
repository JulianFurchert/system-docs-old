import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './Text';

const stories = storiesOf('Components|Text', module );

stories.add('default', () => (
  <Text></Text>
));

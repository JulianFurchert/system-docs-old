import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from './Menu';

const stories = storiesOf('Components|Menu', module );

stories.add('default', () => (
  <Menu></Menu>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row } from './List';

const stories = storiesOf('Components|List', module );

stories.add('default', () => (
  <Row />
));

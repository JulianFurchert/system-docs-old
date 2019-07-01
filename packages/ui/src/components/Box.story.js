import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Box } from './Box';

const stories = storiesOf('Components|Box', module );
stories.addDecorator(withKnobs);

const COLORS = ['primary.1', 'secondary.1', 'text.1', 'background', 'sidebar', 'block']
const STYLES = ['none', 'smallComponents', 'mediumComponents', 'largeComponents']

stories.add('primary', () => (
  <Box p={3}>
    <Box
     width={200}
     height={200}
     bg={select('bg', COLORS, 'background')}
     borderRadius={select('borderRadius', STYLES, 'none')}
     border={select('border', [0, 1], 0)}
     borderColor={select('borderColor', COLORS, 'background')}
     boxShadow={select('boxShadow', STYLES, 'none')}
     />
  </Box>
));


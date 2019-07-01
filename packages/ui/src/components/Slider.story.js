import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { Slider } from './Slider';
import { Box } from './Box';
import { COLOR_SCHEMES } from '../theme-functions'

const stories = storiesOf('Controls|Slider', module );
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Box p={3}>
    <Slider
      scheme={select('scheme', COLOR_SCHEMES, 'primary')}
      min={number('min', 0)}
      max={number('max', 50)}
      value={number('value', 10)}
    />
  </Box>
));

// const Controlled = () => {
//   const [value, setValue] = useState('50');
//   return(
//     <Box p={3}>
//       <Slider
//         min={8}
//         max={96}
//         value={value}
//         onChange={event => setValue(event.target.value)}
//       />
//       <p>{`FontSize is ${value}px`}</p>
//       <Button mx="1" onClick={()=>setValue(16)}>16px</Button>
//       <Button mx="1" onClick={()=>setValue(32)}>32px</Button>
//     </Box>
//   )
// }

// stories.add('controlled', () => (
//   <Controlled />
// ));
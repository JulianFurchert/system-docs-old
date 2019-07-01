import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';
import { Box } from './Box';


const stories = storiesOf('Controls|Select', module );

stories.add('default', () => (
  <Box p={3} >
    <Select >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  </Box>
));


// const ControlledSelect = () => {
//   const [value, setValue] = useState('option2');
//   return (
//     <Box p={3} >
//       <Select
//         value={value}
//         onChange={event => setValue(event.target.value)}
//       >
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </Select>
//     </Box>
//   )
// }

// stories.add('controlled', () => (
//   <ControlledSelect />
// ));


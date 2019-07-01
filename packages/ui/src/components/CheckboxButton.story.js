import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { CheckboxButton } from './CheckboxButton';
import { Box } from './Box';
import { COLOR_SCHEMES } from '../theme'


const stories = storiesOf('Controls|CheckboxButton', module );
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Box p={3} >
    <CheckboxButton
      scheme={select('scheme', COLOR_SCHEMES, 'primary')}
      text={text('text', 'CheckboxButton')}
    />
  </Box>
));

const ICONS = ['List', 'Cast', 'Feather'];

stories.add('icon', () => (
  <Box p={3} >
    <CheckboxButton
      scheme={select('scheme', COLOR_SCHEMES, 'primary')}
      icon={select('icon', ICONS, 'List')}
    />
  </Box>
));

// const Controled = () => {
//   const [checked, setChecked] = useState(true);
//   return (
//     <Box p={3} >
//       <CheckboxButton
//         checked={checked}
//         onChange={e => setChecked(e.target.checked)}
//       >
//         { checked ? 'ON' : 'OFF' }
//       </CheckboxButton>
//       <CheckboxButton
//         checked={checked}
//         onChange={e => setChecked(e.target.checked)}
//       >
//         { checked ? 'ON' : 'OFF' }
//       </CheckboxButton>
//     </Box>
//   )
// }

// stories.add('controled', () => (
//   <Controled />
// ));
import React from 'react'
import { GlobalStyle } from '../src/GlobalStyle'
import { addDecorator, configure, addParameters } from '@storybook/react'


const Wrapper = ({children}) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

function loadStories() {
  const req = require.context('../src', true, /story\.js$/)
  req.keys().forEach(req)
}

addParameters({
  backgrounds: [
    { name: 'default Theme', value: '#ffffff', default: true },
  ],
});

addDecorator((story) => <Wrapper>{story()}</Wrapper>);

configure(loadStories, module);


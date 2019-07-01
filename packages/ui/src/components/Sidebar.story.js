import React from 'react';
import { storiesOf } from '@storybook/react';
import { Sidebar, SidebarHeader, SidebarContent } from './Sidebar';

const stories = storiesOf('Layout|Sidebar', module );

stories.add('default', () => (
  <Sidebar>
    <SidebarHeader>
    </SidebarHeader>
    <SidebarContent isOpen={false}>
    </SidebarContent>
  </Sidebar>
));

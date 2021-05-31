import React from 'react';
import { Story, Meta } from '@storybook/react';
import Sidebar, { ISidebarProps } from './index';

export default {
    title: "Dashboard/Sidebar",
    component: Sidebar,
} as Meta;

const Template: Story<ISidebarProps> = (args) => <Sidebar {...args} />

export const Default = Template.bind({});
Default.args = {
    brandInfo: {
        name: "Apple",
        category: "Computer company"
    }
};
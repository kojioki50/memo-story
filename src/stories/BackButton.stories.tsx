import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackButton } from '../components/Button/BackButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/BackButton",
  component: BackButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof BackButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackButton> = (args) => 
<BackButton {...args}>
  戻る
</BackButton>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  height: "1.75rem",
  label: "BackButton",
};


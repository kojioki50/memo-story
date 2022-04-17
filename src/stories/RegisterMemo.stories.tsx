// MyComponent.story.ts|tsx
// import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";
import { RegisterMemo } from '../components/pages/RegisterMemo';

export default {
  title: "Example/RegisterMemo",
  component: RegisterMemo,
  decorators: [
    (Story) => (
      <div style={{ margin: "10em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RegisterMemo>;

export const Basic: ComponentStory<typeof RegisterMemo> = (args) => 
<BrowserRouter><RegisterMemo {...args} ></RegisterMemo></BrowserRouter>;
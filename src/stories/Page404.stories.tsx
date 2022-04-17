// MyComponent.story.ts|tsx
// import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";
import { Page404 } from '../components/pages/Page404';

export default {
  title: 'Example/Page404',
  component: Page404,
} as ComponentMeta<typeof Page404>;

export const Basic: ComponentStory<typeof Page404> = (args) => 
<BrowserRouter><Page404 {...args} ></Page404></BrowserRouter>;
// MyComponent.story.ts|tsx
// import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../components/pages/Login";

export default {
  title: "Example/Login",
  component: Login,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  //   onClick: { action: "clicked" },
  // },
  decorators: [
    (Story) => (
      <div style={{ margin: "10em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Login>;

export const Basic: ComponentStory<typeof Login> = (args) => (
  <BrowserRouter>
    <Login {...args}></Login>
  </BrowserRouter>
);

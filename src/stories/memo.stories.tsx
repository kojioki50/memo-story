// MyComponent.story.ts|tsx
// import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { Mock } from "../components/pages/Mock";
import { rest } from "msw";
import { memoType } from "../types/type1";

export default {
  title: "Example/Memo",
  component: Mock,
  decorators: [
    (Story) => (
      <div style={{ margin: "10em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Mock>;

export const Basic: ComponentStory<typeof Mock> = (args) => (
  <RecoilRoot>
    <BrowserRouter>
      <Mock {...args}></Mock>
    </BrowserRouter>
  </RecoilRoot>
);

Basic.parameters = {
  msw: {
    handlers: [
      rest.get("/example-memo--success-behavior", (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            id: "3",
            title: "今日の噂話",
            category: "噂話",
            description: "あの日この日",
            date: "2022/02/22",
            mark_div: true,
          } as memoType)
        );
      }),
    ],
  },
};

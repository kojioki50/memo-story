// MyComponent.story.ts|tsx
// import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ModalEdit } from '../components/modal/modalEdit';
import withMock from 'storybook-addon-mock';
import { memoType } from '../types/type1';
import { rest } from 'msw'

export default {
  title: "Example/Modal",
  component: ModalEdit,
  decorators: [
    withMock,
    (Story) => (
      <div style={{ margin: "10em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ModalEdit>;

export const Basic: ComponentStory<typeof ModalEdit> = (args) => 
<RecoilRoot>
  <BrowserRouter>
  <ModalEdit {...args} ></ModalEdit>
  </BrowserRouter>
  </RecoilRoot>

Basic.parameters = {
  msw: {
    handlers: [
      rest.get("/example-modal--basic", (_, res, ctx) => {

        return res(
          ctx.status(200),
          ctx.json({
            id: "5",
            title: "今日の出来事",
            category: "噂話",
            description: "今日は〇〇でした",
            date: "2022/02/22",
            mark_div:true,
          } as memoType)
        );
      })]
    }};
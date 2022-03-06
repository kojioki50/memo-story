import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Login } from "../components/pages/Login";
import { Memo } from "../components/pages/Memo";
import { Page404 } from "../components/pages/Page404";
import { RegisterMemo } from "../components/pages/RegisterMemo";

export const Router: VFC = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="memo">
          <Route path="" element={<Memo loading />} />
          <Route path="register" element={<RegisterMemo />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </RecoilRoot>
  );
};

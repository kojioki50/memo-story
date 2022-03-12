import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Memo } from "../components/pages/Memo";
import { Page404 } from "../components/pages/Page404";
import { RegisterMemo } from "../components/pages/RegisterMemo";
import { AuthenticatedGuard } from "./AuthenticatedGuard";
// import { AuthenticatedRoute } from "./AuthenticatedRoute";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="memo">
        <Route
          path=""
          element={
            <AuthenticatedGuard>
              <Memo loading />
            </AuthenticatedGuard>
          }
        />
        <Route
          path="register"
          element={
            <AuthenticatedGuard>
              <RegisterMemo />
            </AuthenticatedGuard>
          }
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

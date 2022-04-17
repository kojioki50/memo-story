import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Mock } from "../components/pages/Mock";

import { Login } from "../components/pages/Login";

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
          path="register"
          element={
            <AuthenticatedGuard>
              <RegisterMemo />
            </AuthenticatedGuard>
          }
        />
      </Route>
      <Route path="all" element={<Mock />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

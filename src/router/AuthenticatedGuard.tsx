import { FC } from "react";
import { Navigate,useLocation } from "react-router-dom";

import { loginInfoProvider } from "../hooks/LoginProvider";

export const AuthenticatedGuard: FC = ({ children }) => {
  const { loginInfo } = loginInfoProvider();
  const auth:boolean = JSON.parse(localStorage.getItem("auth") || "{}");
  
  const location = useLocation();

  return loginInfo || auth === true ? <>{children}</> : <Navigate to="/"
    replace={false}
    state={{from:location}}
  />
}
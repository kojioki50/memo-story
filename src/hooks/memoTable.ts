import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { axiosInstance } from "../libs/axios/axiosInstance";
import { loginUserState } from "../recoil/recoilState";
import { memoType } from "../types/type1";
import { loginInfoProvider } from "./LoginProvider";
// import { loginInfoProvider } from "./LoginProvider";


interface AxiosResponse<T> {
  data: T;
}

export const memoTable = () => {
  // const navigate = useNavigate();
   const {setLoginInfo, loginInfo } = loginInfoProvider();
  localStorage.setItem("auth", JSON.stringify(loginInfo));
  const setMemos = useSetRecoilState<memoType[]>(loginUserState);
  const memoData = useCallback(async () => {
    await axiosInstance
      .get("/memos", {
       
      })
      .then((response: AxiosResponse<memoType[]>) => {
        setMemos(response.data);
        setLoginInfo(true);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);
  return { memoData };
};

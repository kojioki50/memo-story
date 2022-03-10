import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { axiosInstance } from "../libs/axios/axiosInstance";
import { loginUserState } from "../recoil/recoilState";
import { memoType } from "../types/type1";

interface AxiosResponse<T> {
  data: T;
}

export const memoTable = () => {
  const navigate = useNavigate();
  const setMemos = useSetRecoilState<memoType[]>(loginUserState);
  const memoData = useCallback(async () => {
    await axiosInstance
      .get("/memos", {})
      .then((response: AxiosResponse<memoType[]>) => {
        setMemos(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        navigate("/");
      });
  }, []);
  return { memoData };
};

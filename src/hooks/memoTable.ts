import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { loginUserState } from "../recoil/recoilState";
import { memoType } from "../types/type1";

interface AxiosResponse<T> {
  data: T;
}

export const memoTable = () => {
  const setMemos = useSetRecoilState<memoType[]>(loginUserState);
  const { instance } = axiosInstance();

  const memoData = useCallback(async () => {
    await instance
      .get("/memos", {})
      .then((response: AxiosResponse<memoType[]>) => {
        setMemos(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, []);
  return { memoData };
};

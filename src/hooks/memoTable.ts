import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../axios/axiosInstance";
import { recoileState } from "../recoil/recoilState";
import { memoType } from "../types/type1";


export const memoTable = () => {
  const [memos, setMemos] = useRecoilState<memoType[]>(recoileState);
  const memoData = useCallback(async () => {
    await axiosInstance
      .get("/memos")
      .then((response) => {
        setMemos(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return { memoData, memos,setMemos };
};

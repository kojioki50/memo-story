import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { recoileState } from "../recoil/recoilState";
import { memoType } from "../types/type1";

interface AxiosResponse<T> {
  data: T;
}

export const memoTable = () => {
  const token = localStorage.getItem("key");
  const navigate = useNavigate();
  const [memos, setMemos] = useRecoilState<memoType[]>(recoileState);
  const memoData = useCallback(async () => {
    await axiosInstance
      .get("/memos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response:AxiosResponse<memoType[]>) => {
        console.log(response);
        setMemos(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
        navigate("/");
      });
  }, []);
  return { memoData, memos, setMemos };
};

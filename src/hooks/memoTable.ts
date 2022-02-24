import { useCallback, useState } from "react";
import { axiosInstance } from "../axios/axiosInstance";
import { memoType } from "../types/type1";


export const memoTable = () => {
 
  const [memos, setMemos] = useState<memoType[]>([]);
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

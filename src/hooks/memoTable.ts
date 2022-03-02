import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../axios/axiosInstance";
import { recoileState } from "../recoil/recoilState";
import { memoType } from "../types/type1";

export const memoTable = () => {
  const token = localStorage.getItem("key");
  const [memos, setMemos] = useRecoilState<memoType[]>(recoileState);
  const memoData = useCallback(async () => {
    await axiosInstance
      .get("/memos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // for(let i=0; i<=response.data.length; i++) {
        //   if(response.data.mark_div === 0 ) {
        //     response.data[i].mark_div = false ;
        // response.data[i].setItem("mark_div", false);
        //   }else {
        //     response.data[i].mark_div = true ;
        //   }
        // }
        setMemos(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return { memoData, memos, setMemos };
};

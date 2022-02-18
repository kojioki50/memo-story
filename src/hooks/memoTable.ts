import axios from "axios";
import { useCallback, useState } from "react";
import { memoType } from "../types/type1";

export const memoTable = () => {
  const token = localStorage.getItem("key");
  const [memos, setMemos] = useState<memoType[]>([]);
  const memoData = useCallback(async () => {
    await axios
      .get("https://raisetech-memo-api.herokuapp.com/api/memos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMemos(response.data);
        console.log(response.data)
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return { memoData, memos };
};

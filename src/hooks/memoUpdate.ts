/* eslint-disable camelcase */
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useState } from "react";

export const memoUpdate = () => {
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const token = localStorage.getItem("key");
  const updateInfo = useCallback(
    async (
      id: string,
      title: string,
      category: string,
      description: string,
      date: string,
      mark: number
    ) => {
      setLoading(true);
      axios
        .put(
          `https://raisetech-memo-api.herokuapp.com/api/memo/${id}`,
          {
            title,
            category,
            description,
            date,
            mark_div: mark,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setLoading(false);
          toast({
            title: "updated",
            duration: 2000,
          });
          location.reload();
        })
        .catch(() => {
          id ?? alert("IDが不正です");
          title === "" && alert("タイトルは必須です");
          date !== String(date.match(/(\d{4})(\d{2})(\d[2])/)) && alert("日付の形式が不正です");
          mark !== Number(mark) && alert("マーク区分は数値で入力してください");
          setLoading(false);
        });
    },
    []
  );
  return { updateInfo, loading };
};

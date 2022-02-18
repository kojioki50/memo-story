/* eslint-disable camelcase */
import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const memoRegister = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("key");
  const registerInfo = useCallback(
    async (
      title: string,
      category: string,
      description: string,
      date: string,
      mark: number
    ) => {
      axios
        .post(
          "https://raisetech-memo-api.herokuapp.com/api/memo",
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
          navigate('/memo');
          console.log(response);
        })
        .catch(() => {
          title === "" && alert("タイトルは必須です");
          date !== String(date.match(/(\d{4})(\d{2})(\d[2])/)) &&
            alert("日付の形式が不正です");
          mark !== Number(mark) && alert("マーク区分は数値で入力してください");

          navigate("");
        });
    },
    []
  );
  return { registerInfo };
};

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios/axiosInstance";

export const memoRegister = () => {
  const navigate = useNavigate();
   const [load, setLoad] = useState(false);

  const registerInfo = useCallback(
    async (
      title: string,
      category: string,
      description: string,
      date: string,
      mark: number
    ) => {
      setLoad(true);
      axiosInstance
        .post(
          "/memo",
          {
            title,
            category,
            description,
            date,
            mark_div: mark,
          },
        )
        .then((response) => {
          setLoad(false);
          navigate('/memo');
        })
        .catch(() => {
          title === "" && alert("タイトルは必須です");
          date !== String(date.match(/(\d{4})(\d{2})(\d[2])/)) &&
            alert("日付の形式が不正です");
          mark !== Number(mark) && alert("マーク区分は数値で入力してください");
          navigate("");
          setLoad(false);
        });
    },
    []
  );
  return { registerInfo,load,setLoad };
};

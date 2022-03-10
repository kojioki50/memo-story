import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { memoType } from "../types/type1";

interface AxiosResponse<T> {
  data: T;
}

export const memoRegister = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  const registerInfo = useCallback(
    async (
      title: string,
      category: string,
      description: string,
      date: string,
      mark: boolean
    ) => {
      setLoad(true);
      axiosInstance
        .post("/memo", {
          title,
          category,
          description,
          date,
          mark_div: Number(mark),
        })
        .then((response: AxiosResponse<memoType[]>) => {
          navigate("/memo");
          console.log(response);
        })
        .catch((error) => {
          alert(error.response.data.message);
        })
        .finally(() => {
          setLoad(false);
        });
    },
    []
  );
  return { registerInfo, load, setLoad };
};

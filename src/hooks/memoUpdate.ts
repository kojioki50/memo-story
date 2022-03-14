import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { memoType } from "../types/type1";
import { memoTable } from "./memoTable";

interface AxiosResponse<T> {
  data: T;
}

export const memoUpdate = () => {
  const [load, setLoad] = useState(false);
  const { memoData } = memoTable();
  const toast = useToast();
  const { instance } = axiosInstance();
  const updateInfo = useCallback(
    async (
      id: string | undefined,
      title: string,
      category: string,
      description: string,
      date: string,
      mark: boolean
    ) => {
      setLoad(true);
      instance
        .put(`/memo/${id}`, {
          title,
          category,
          description,
          date,
          mark_div: Number(mark),
        })
        .then((response: AxiosResponse<memoType[]>) => {
          toast({
            title: "updated",
            duration: 2000,
          });
          memoData();
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
  return { updateInfo, load };
};

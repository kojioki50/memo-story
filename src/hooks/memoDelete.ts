import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { memoType } from "../types/type1";
import { memoTable } from "./memoTable";

interface AxiosResponse<T> {
  data: T;
}

export const memoDelete = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { memoData } = memoTable();
  const deleteInfo = useCallback(async (id: string) => {
    setLoading(true);
    axiosInstance
      .delete(`/memo/${id}`)
      .then((response: AxiosResponse<memoType[]>) => {
        toast({
          title: "deleted",
          duration: 2000,
        });
        memoData();
      })
      .catch((error) => {
        alert(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { deleteInfo, loading };
};

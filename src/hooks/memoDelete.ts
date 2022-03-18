import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { modalOpenState, modalOverlayState } from "../recoil/recoilState";
import { memoType } from "../types/type1";
import { memoTable } from "./memoTable";

interface AxiosResponse<T> {
  data: T;
}

export const memoDelete = () => {
  const [loaded, setLoaded] = useState(false);
  const toast = useToast();
  const { memoData } = memoTable();
  const { instance } = axiosInstance();
  const setModalOpen = useSetRecoilState(modalOpenState);
  const setModalOverlay = useSetRecoilState(modalOverlayState);
  const deleteInfo = useCallback(async (id: string) => {
    setLoaded(true);
    console.log(loaded);
    instance
      .delete(`/memo/${id}`)
      .then((response: AxiosResponse<memoType[]>) => {
        toast({
          title: "deleted",
          duration: 2000,
        });
        memoData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => {
        setLoaded(false);
        console.log(loaded);
        setModalOpen(false);
        setModalOverlay(true);
      });
  }, []);
  return { deleteInfo, loaded };
};

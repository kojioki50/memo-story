import { useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { axiosInstance } from "../axios/axiosInstance";

export const memoDelete = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const token = localStorage.getItem("key");
  const deleteInfo = useCallback(async (id: string) => {
    setLoading(true);
    axiosInstance
      .delete(`/memo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast({
          title: "deleted",
          duration: 2000,
        });
        console.log(response);
        setLoading(false);
        location.reload();
      })
      .catch(() => {
        id ?? alert("IDが不正です");
        setLoading(false);
      });
  }, []);
  return { deleteInfo, loading };
};

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useState } from "react";

export const memoDelete = () => {
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const token = localStorage.getItem("key");
  const deleteInfo = useCallback(async (id: string) => {
    setLoading(true);
    axios
      .delete(`https://raisetech-memo-api.herokuapp.com/api/memo/${id}`, {
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

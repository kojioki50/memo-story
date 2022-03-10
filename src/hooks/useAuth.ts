import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../libs/axios/axiosInstance";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useCallback(async (email: string, passWord: string) => {
    setLoading(true);
    axiosInstance
      .post("/login", {
        email,
        password: passWord,
      })
      .then((response) => {
        setLoading(false);
        const token = response.data.access_token;
        console.log(response.data);
        localStorage.setItem("key", token);
        navigate("memo");
      })
      .catch(() => {
        alert("ログインできません");
        navigate("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { login, loading };
};

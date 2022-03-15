import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../libs/axios/axiosInstance";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { instance } = axiosInstance();
  
  const login = useCallback(async (email: string, passWord: string) => {
    setLoading(true);
    instance
    .post("/login", {
      email,
      password: passWord,
    })
    .then((response) => {
      localStorage.setItem("auth", JSON.stringify(<boolean>true));
      const token = response.data.access_token;
      localStorage.setItem("key", token);
      setLoading(false);
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

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios/axiosInstance";

export const userAuth = () => {
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
        setLoading(false);
        navigate("");
      })
      .finally(() => {
        console.log("OK");
      });
  }, []);
  return { login, loading };
};

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../libs/axios/axiosInstance";
import { loginInfoProvider } from "./LoginProvider";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setLoginInfo } = loginInfoProvider();

  const login = useCallback(async (email: string, passWord: string) => {
    setLoading(true);
    axiosInstance
      .post("/login", {
        email,
        password: passWord,
      })
      .then((response) => {
        const token = response.data.access_token;
        setLoginInfo(true);
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

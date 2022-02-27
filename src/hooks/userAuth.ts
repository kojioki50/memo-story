import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios/axiosInstance";

export const userAuth = () => {
  const navigate = useNavigate();
  const login = useCallback(async (email:string, passWord:string) => {
    axiosInstance
      .post("/login", {
        email,
        password: passWord,
      })
      .then((response) => {
        navigate("memo");
        const token = response.data.access_token;
        localStorage.setItem("key", token);
      })
      .catch(() => {
        alert("ログインできません");
        navigate("");
      })
      .finally(() => {
        console.log("OK");
      });
  }, []);
  return { login };
};

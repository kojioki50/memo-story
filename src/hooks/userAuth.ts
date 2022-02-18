import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const userAuth = () => {
  const navigate = useNavigate();
  const login = useCallback(async (email, passWord) => {
    axios
      .post("https://raisetech-memo-api.herokuapp.com/api/login", {
        email: email,
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

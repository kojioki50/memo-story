import axios from "axios";

export const axiosInstance = () => {
  const token = localStorage.getItem("key");
  const instance = axios.create({
    baseURL: "https://raisetech-memo-api.herokuapp.com/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return { instance };
}

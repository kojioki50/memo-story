import axios from "axios";

const token = localStorage.getItem("key");
export const axiosInstance = axios.create({
  baseURL: "https://raisetech-memo-api.herokuapp.com/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

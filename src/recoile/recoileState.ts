import { atom } from "recoil";
import { memoType } from "../types/type1";

export const recoileState = atom<memoType[]>({
  key: "USER_STATE",
  default: [],
});

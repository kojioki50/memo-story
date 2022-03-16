import { atom } from "recoil";
import { memoType } from "../types/type1";

export const loginUserState = atom<memoType[]>({
  key: "MEMOS_STATE",
  default: [],
});

export const modalOpenState = atom<boolean>({
  key: "MODAL_Open",
  default: false,
});

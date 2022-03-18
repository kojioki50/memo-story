import { atom } from "recoil";
import { memoType } from "../types/type1";

export const memosState = atom<memoType[]>({
  key: "MEMOS_STATE",
  default: [],
});

export const modalOpenState = atom<boolean>({
  key: "MODAL_Open",
  default: false,
});

export const modalOverlayState = atom<boolean>({
  key: "MODAL_Overlay",
  default: true,
});

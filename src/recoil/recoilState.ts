import { atom } from "recoil";
import { memoType } from "../types/type1";

export const memosState = atom<memoType[]>({
  key: "MEMOS_STATE",
  default: [],
});

export const modalOpenState = atom<boolean>({
  key: "MODALOpen_STATE",
  default: false,
});

export const modalOverlayState = atom<boolean>({
  key: "MODALOverlay_STATE",
  default: true,
});

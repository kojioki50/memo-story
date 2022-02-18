import { useCallback, useState } from "react";
import { memoType } from "../types/type1";

type Selected = {
  id: string;
  memos: Array<memoType>;
};
export const memoSelect = () => {
  const [selectTarget, setSelectTarget] = useState<memoType | null>(null);

  const selectedMemo = useCallback((props: Selected) => {
    const { id, memos } = props;
    const targetMemo = memos.find((memo) => memo.id === id);
    setSelectTarget(targetMemo ?? null);
  }, []);

  return { selectedMemo, selectTarget };
};

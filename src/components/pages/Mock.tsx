import React, { useEffect, useState } from "react";
import { MemoCard } from "./Memo";
import { memoType } from "../../types/type1";

// import { User } from "../../common/types/User";

export const Mock: React.FC = () => {
  const [memo, setMemo] = useState<memoType>({
    id: "1",
    title: "aaa",
    category: "bbb",
    description: "aaa",
    date: "2022/11/30",
    mark_div: true,
  });

  useEffect(() => {
    const fetchUser = async () => {
      await fetch("/example-memo--success-behavior")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setMemo(res);
        })
        .catch((res) => {
          console.log(res.errorMessage);
        });
    };
    fetchUser();
    console.log(memo);
  }, []);

  return (
    <>
      {/* <h1>Hello</h1> */}
      <MemoCard memos={memo} />
    </>
  );
};

export default Mock;

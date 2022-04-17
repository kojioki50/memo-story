import React, { useEffect, useState } from "react";
import { ModalCard } from "./ModalCard";
import { memoType } from "../../types/type1";
// import { useDisclosure } from "@chakra-ui/react";

// import { User } from "../../common/types/User";

export const ModalEdit: React.FC = () => {
  const [memo, setMemo] = useState<memoType>({id: "string",
    title: "string",
    category: "string",
    description: "string",
    date: "string",
    mark_div: true,});

    // const {onClose,isOpen} = useDisclosure()

  useEffect(() => {
    const fetchUser = async () => {
      await fetch("/example-modal--basic")
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
  }, []);

  return (
    <>
      {/* <h1>Hello</h1> */}
      <ModalCard 
        memos={memo} 
        // isOpen={isOpen}
        // onClose={onClose}
        // loading
        />
    </>
  );
};

export default ModalEdit;
/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";


type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const BackButton: VFC<Props> = memo((props) => {
  const {children, disabled = false, loading = false, onClick } = props;
  


  return (
    <>
      <Button
        ml={3}
        mt={5}
        fontSize={16}
        p={3}
        color="#fff"
        bg="tomato"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
        disabled={disabled}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
});

/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <>
      <Button
        ml={3}
        mt={5}
        fontSize={16}
        p={3}
        _hover={{
          background: "white",
          color: "teal.500",
        }}
        color="#fff"
        bg="#1F0FF5"
        opacity=".8"
        onClick={onClick}
        isLoading={loading}
        disabled={disabled}
      >
        {children}
      </Button>
    </>
  );
});

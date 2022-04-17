/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  ml?: string
  height?: string
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const {height, ml,children, onClick, disabled = false, loading = false } = props;
  return (
    <>
      <Button
        ml={ml}
        // mt={5}
        // fontSize={16}
        // p={3}
        p={10}
        height={height}
        _hover={{
          background: "white",
          color: "teal",
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

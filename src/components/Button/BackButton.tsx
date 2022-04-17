/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";


type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  height?: string;
  backgroundColor?: string;
  ml?: string;
};
export const BackButton: VFC<Props> = memo((props) => {
  const {
    children,
    disabled = false,
    loading = false,
    onClick,
    backgroundColor,
    height,
    ml
  } = props;

  return (
    <>
      <Button
        style={{ backgroundColor }}
        ml={ml}
        // ml={3}
        // mt={5}
        // fontSize={16}
        // p={3}
        h={height}
        p={10}
        color="#fff"
        border="none"
        bg="tomato"
        _hover={{
          background: "white",
          color: "teal",
          cursor: "pointer",
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

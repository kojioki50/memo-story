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
        onClick={onClick}
        isLoading={loading}
        disabled={disabled || loading}
      >
        {children}
      </Button>
    </>
  );
});

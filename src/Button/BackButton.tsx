/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClick?: () => void;
};

export const BackButton: VFC<Props> = memo(() => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };
  return (
    <>
      <Button onClick={onClick}>戻る</Button>
    </>
  );
});

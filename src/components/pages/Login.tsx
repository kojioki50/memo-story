import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { ChangeEventHandler, useState, VFC } from "react";
// import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../Button/PrimaryButton";
// import { MemoCard } from "./MemoCard";

export const Login: VFC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [textInput, setTextInput] = useState("");
  const [pass, setPass] = useState("");

  const textChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTextInput(e.target.value);
  };
  const passChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPass(e.target.value);
  };
  // const { login } = useAuth();

  // const onClickLogin = () => {
  //   login(textInput, pass);
  // };
  return (
    <>
      {/* <MemoCard /> */}
      <Flex align="center" justify="center">
        <Box>
          <Heading ml="20%" mb="10">
            ログイン
          </Heading>
          <Input
            mb="5"
            h="1.75rem"
            focusBorderColor="teal.500"
            errorBorderColor="crimson"
            onChange={textChange}
            value={textInput}
            placeholder="ユーザーID"
          />
          <InputGroup mb="5" size="md">
            <Input
              focusBorderColor="teal.500"
              errorBorderColor="crimson"
              h="1.75rem"
              mb={2}
              type={show ? "text" : "password"}
              onChange={passChange}
              value={pass}
              placeholder="パスワード"
            />
            <InputRightElement width="4.5rem">
              <Button
                bg="skyblue"
                color="#fff"
                _hover={{
                  background: "white",
                  color: "teal",
                }}
                h="1.75rem"
                size="sm"
                mb={3}
                ml={30}
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <PrimaryButton
            // loading={loading}
            height="1.75rem"
            ml="35%"
            // onClick={onClickLogin}
          >
            Login
          </PrimaryButton>
        </Box>
      </Flex>
    </>
  );
};

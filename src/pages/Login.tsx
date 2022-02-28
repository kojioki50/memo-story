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
// import { PrimaryButton } from "../Button/PrimaryButton";
import { userAuth } from "../hooks/userAuth";

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
  const { login } = userAuth();

  const onClickLogin = () => {
    login(textInput, pass);
  };
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box>
          <Heading ml="25%" mb="5">
            ログイン
          </Heading>
          <Input
            mb="5"
            focusBorderColor="teal.500"
            errorBorderColor="crimson"
            size="md"
            onChange={textChange}
            value={textInput}
            placeholder="ユーザーID"
          />
          <InputGroup mb="5" size="md">
            <Input
              focusBorderColor="teal.500"
              errorBorderColor="crimson"
              size="md"
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
                  color: "teal.500",
                }}
                h="1.75rem"
                size="sm"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            _hover={{
              background: "white",
              color: "teal.500",
            }}
            color="#fff"
            bg="#1F0FF5"
            opacity=".8"
            ml="35%"
            onClick={onClickLogin}
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};

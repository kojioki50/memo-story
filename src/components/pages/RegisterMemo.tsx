import { ChangeEventHandler, memo, useState, VFC } from "react";
import { BackButton } from "../Button/BackButton";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoRegister } from "../../hooks/memoRegister";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const RegisterMemo: VFC = memo(() => {
  const [mark, setMark] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [backBtn, setBackbtn] = useState(false);

  const titleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  const textChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  const { registerInfo, load } = memoRegister();
  const onClickRegister = () => {
    registerInfo(title, category, description, date, mark);
  };

  const navigate = useNavigate();
  const onClickBack = () => {
    setBackbtn(true);
    navigate(-1);
  };

  const onClick = () => {
    setMark(!mark);
  };

  const onClickOut = () => {
    localStorage.removeItem("key");
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <>
      <Flex height="100vh" justify="center">
        <Stack bg="#0363A8" spacing={5}>
          <Heading pt={3} ml={3} fontSize={{ base: "28px", md: "32px" }}>
            RegisterMemo
            <Button
              onClick={onClickOut}
              fontSize={{ base: "8px", sm: "12px" }}
              ml={6}
            >
              ログアウト
            </Button>
          </Heading>
          <Box pb="10" bg="skyblue">
            <Box
              fontSize={{ base: "16px", md: "20px" }}
              pt="2"
              ml="3"
              mt="3"
              mb={2}
            >
              タイトル
            </Box>
            <Input
              fontSize={{ base: "16px", md: "20px" }}
              placeholder="title"
              value={title}
              onChange={titleChange}
            />
            <Box
              fontSize={{ base: "16px", md: "20px" }}
              pt="2"
              ml="3"
              mt="3"
              mb={2}
            >
              カテゴリー
            </Box>
            <RadioGroup onChange={setCategory} value={category}>
              <Stack direction="row">
                <Radio colorScheme="green" size="md" ml={3} value="噂話">
                  噂話
                </Radio>
                <Radio colorScheme="green" size="md" value="悪口">
                  悪口
                </Radio>
              </Stack>
            </RadioGroup>
            <Box
              fontSize={{ base: "16px", md: "20px" }}
              mt="3"
              pt="2"
              ml="3"
              mb={2}
            >
              内容
            </Box>
            <Textarea
              fontSize={{ base: "16px", md: "20px" }}
              value={description}
              onChange={textChange}
              placeholder="content"
            ></Textarea>
            <Box
              fontSize={{ base: "16px", md: "20px" }}
              pt="2"
              ml="3"
              mt="3"
              mb={2}
            >
              日付
            </Box>
            <Input
              fontSize={{ base: "16px", md: "20px" }}
              pr="50%"
              type="date"
              value={date}
              onChange={onChangeDate}
            />
            <Box
              fontSize={{ base: "16px", md: "20px" }}
              pt="2"
              ml="3"
              mt="3"
              mb={2}
            >
              チェック未完了or完了(0:未完了、1:完了)
            </Box>

            <Checkbox ml="3" isChecked={mark} onChange={onClick}>
              チェック未完了or完了
            </Checkbox>
            <PrimaryButton
              disabled={(backBtn && true) || load}
              loading={load}
              onClick={onClickRegister}
            >
              登録
            </PrimaryButton>
            <BackButton
              onClick={onClickBack}
              loading={backBtn}
              disabled={(load && true) || backBtn}
            >
              戻る
            </BackButton>
          </Box>
        </Stack>
      </Flex>
    </>
  );
});

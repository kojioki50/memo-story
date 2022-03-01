import { ChangeEventHandler, memo, useEffect, useState, VFC } from "react";
import { BackButton } from "../Button/BackButton";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoTable } from "../hooks/memoTable";
import { memoRegister } from "../hooks/memoRegister";
import {
  Box,
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
  const { memoData } = memoTable();
  const [mark, setMark] = useState<number>(0);
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

  const markChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMark(e.target.valueAsNumber);
  };

  useEffect(() => {
    memoData();
  }, [memoData]);

  const { registerInfo, load } = memoRegister();
  const onClickRegister = () => {
    registerInfo(title, category, description, date, mark);
  };

  const navigate = useNavigate();
  const onClickBack = () => {
    setBackbtn(true);
    navigate(-1);
  };

  return (
    <>
      <Flex height="100vh" justify="center">
        <Stack bg="#0363A8" spacing={5}>
          <Heading pt={3} ml={3} fontSize={{ base: "28px", md: "32px" }}>
            RegisterMemo
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
            <Input
              fontSize={{ base: "16px", md: "20px" }}
              type="number"
              min="0"
              max="1"
              name="mark"
              onChange={markChange}
              value={mark}
              placeholder="チェック未完了or完了(0:未完了、1:完了)"
            />
            {/* <RadioGroup onChange={setMark} value={mark}>
              <Stack direction="row">
                <Radio colorScheme="green" size="md" ml={3} value="未完了">
                  未完了
                </Radio>
                <Radio colorScheme="green" size="md" value="完了">
                  完了
                </Radio>
              </Stack>
            </RadioGroup> */}
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

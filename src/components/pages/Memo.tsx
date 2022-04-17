import React, { useCallback, VFC } from "react";
import { memoType } from "../../types/type1";
import {
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
  // useDisclosure,
} from "@chakra-ui/react";
import { PrimaryButton } from "../Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

type Props = {
  memos: memoType;
};

export const MemoCard: VFC<Props> = (props: Props) => {
  const { memos } = props;
  const navigate = useNavigate();
  const onClickOut = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <>
      {/* <p>{memos.id}</p> */}

      <Flex height="100%" justify="center">
        <Stack bg="#0363A8" spacing={5}>
          <Heading pt={3} ml={3} fontSize={{ base: "28px", sm: "32px" }}>
            Memo
            <PrimaryButton onClick={onClickOut} ml="30px">
              ログアウト
            </PrimaryButton>
          </Heading>
          <PrimaryButton>新規メモ登録</PrimaryButton>
          {/* {memos ? ( */}
          <Box>
            {/* const id = memos.id;
                const mark = Boolean(memos.mark_div); */}
            <Box color="#333" bg="skyblue" key={memos.id}>
              <Box
                fontSize={{ base: "16px", md: "20px" }}
                pt="2"
                ml="3"
                mt="3"
                mb={2}
              >
                ID
              </Box>
              <Input
                fontSize={{ base: "16px", md: "20px" }}
                value={memos.id}
                readOnly
                h="1.75rem"
              ></Input>
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
                value={memos.title}
                readOnly
                h="1.75rem"
              />
              <br />
              <Box
                fontSize={{ base: "16px", md: "20px" }}
                pt="2"
                ml="3"
                mt="3"
                mb={2}
              >
                カテゴリー
              </Box>
              <Input
                fontSize={{ base: "16px", md: "20px" }}
                value={memos.category}
                readOnly
                h="1.75rem"
              />
              <br />
              <Box
                fontSize={{ base: "16px", md: "20px" }}
                pt="2"
                ml="3"
                mt="3"
                mb={2}
              >
                内容
              </Box>
              <Textarea
                fontSize={{ base: "16px", md: "20px" }}
                value={memos.description}
                readOnly
              />
              <br />
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
                value={memos.date}
                readOnly
                h="1.75rem"
              />
              <br />
              <Box
                fontSize={{ base: "16px", md: "20px" }}
                pt="2"
                ml="3"
                mt="3"
                mb={2}
              >
                チェックマークで完了
              </Box>

              <Box fontSize={{ base: "16px", md: "20px" }} ml="5">
                {Boolean(memos.mark_div) === false ? "unchecked" : "✔️"}
              </Box>
              <PrimaryButton ml="35%">編集</PrimaryButton>
              <br />
              <br />
            </Box>
          </Box>
          ) : ({/* <Text>該当するデータはありません。</Text> */})
          {/* <EditModal
            isOpen={modalOpen}
            onClose={onClickModal}
            memo={selectTarget}
            loading={loading}
          /> */}
        </Stack>
      </Flex>
    </>
  );
};

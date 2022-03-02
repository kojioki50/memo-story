import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { useRecoilValue } from "recoil";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoSelect } from "../hooks/memoSelect";
import { memoTable } from "../hooks/memoTable";
import { recoileState } from "../recoil/recoilState";
import { memoType } from "../types/type1";
import { EditModal } from "../user/EditModal";

type Props = {
  loading: boolean;
};

export const Memo: VFC<Props> = memo((props) => {
  const { loading } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { memoData } = memoTable();
  const { selectedMemo, selectTarget } = memoSelect();
  const memos = useRecoilValue(recoileState);

  useEffect(() => {
    memoData();
  }, []);

  const onClickOpen = useCallback((id: string, memos: memoType[]) => {
    selectedMemo({ id, memos, onOpen });
  }, []);

  return (
    <>
      <Flex height="100%" justify="center">
        <Stack bg="#0363A8" spacing={5}>
          <Heading pt={3} ml={3} fontSize={{ base: "28px", sm: "32px" }}>
            Memo
          </Heading>
          <Button
            p="3"
            fontSize={{ base: "16px", sm: "20px" }}
            color="#fff"
            bg="blue.300"
            _hover={{
              background: "white",
              color: "teal.500",
            }}
            as="a"
            href="/memo/register"
          >
            新規メモ登録
          </Button>
          {memos ? (
            <Box>
              {memos.map((memo) => {
                const id = memo.id;
                const mark = Boolean(memo.mark_div);
                return (
                  <Box color="#333" bg="skyblue" key={memo.id}>
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
                      value={memo.id}
                      readOnly
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
                      value={memo.title}
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
                      カテゴリー
                    </Box>
                    <Input
                      fontSize={{ base: "16px", md: "20px" }}
                      value={memo.category}
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
                      内容
                    </Box>
                    <Textarea
                      fontSize={{ base: "16px", md: "20px" }}
                      value={memo.description}
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
                      value={memo.date}
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
                      チェックマークで完了
                    </Box>
                    {/* <Input
                    fontSize={{ base: "16px", md: "20px" }}
                    value={memo.mark_div === 0 ? "未完了" : "完了"}
                    readOnly
                  /> */}
                    <Box fontSize={{ base: "16px", md: "20px" }} ml="5">
                      {mark === false ? "unchecked" : "✔️"}
                    </Box>
                    <PrimaryButton onClick={() => onClickOpen(id, memos)}>
                      編集
                    </PrimaryButton>
                    <br />
                    <br />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Text>該当するデータはありません。</Text>
            )}
            <EditModal
              isOpen={isOpen}
              onClose={onClose}
              memo={selectTarget}
              loading={loading}
            />
        </Stack>
      </Flex>
    </>
  );
});

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
import { useRecoilState, useRecoilValue } from "recoil";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoSelect } from "../../hooks/memoSelect";
import { memoTable } from "../../hooks/memoTable";
import { loginUserState, modalOpenState } from "../../recoil/recoilState";
import { memoType } from "../../types/type1";
import { EditModal } from "../modal/EditModal";
import { useNavigate } from "react-router-dom";
import { loginInfoProvider } from "../../hooks/LoginProvider";

type Props = {
  loading: boolean;
};

export const Memo: VFC<Props> = memo((props) => {
  const { loading } = props;
  const { onOpen } = useDisclosure();
  const { memoData } = memoTable();
  const { selectedMemo, selectTarget } = memoSelect();
  const memos = useRecoilValue(loginUserState);
  const navigate = useNavigate();
  const { setLoginInfo } = loginInfoProvider();
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);

  useEffect(() => {
    memoData();
  }, []);

  const onClickOpen = useCallback((id: string, memos: memoType[]) => {
    setModalOpen(true);
    selectedMemo({ id, memos, onOpen });
  }, []);

  const onClickOut = useCallback(() => {
    localStorage.removeItem("key");
    localStorage.removeItem("auth");
    setLoginInfo(false);
    navigate("/");
  }, []);

  const onClickRegister = useCallback(() => {
    navigate("/memo/register");
  }, []);

  const onClickModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <>
      <Flex height="100%" justify="center">
        <Stack bg="#0363A8" spacing={5}>
          <Heading pt={3} ml={3} fontSize={{ base: "28px", sm: "32px" }}>
            Memo
            <Button
              onClick={onClickOut}
              fontSize={{ base: "8px", sm: "12px" }}
              ml={6}
            >
              ログアウト
            </Button>
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
            onClick={onClickRegister}
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
            isOpen={modalOpen}
            onClose={onClickModal}
            memo={selectTarget}
            loading={loading}
          />
        </Stack>
      </Flex>
    </>
  );
});

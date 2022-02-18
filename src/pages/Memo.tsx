import { Box, Button, Input, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { useCallback, useEffect, VFC } from "react";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoSelect } from "../hooks/memoSelect";
import { memoTable } from "../hooks/memoTable";
import { memoType } from "../types/type1";
import { EditModal } from "../user/EditModal";

type Props = {
  loading: boolean;
};

export const Memo: VFC<Props> = (props) => {
  const { loading } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { memoData, memos } = memoTable();
  const { selectedMemo, selectTarget } = memoSelect();

  useEffect(() => {
    memoData();
  }, [memoData]);

  const onClickOpen = useCallback((id: string, memos: memoType[] ) => {
    selectedMemo({ id, memos });
    onOpen();
  }, []);

  return (
    <>
     <Stack  spacing={5}>
        <Box fontSize={32}>Memo</Box>
      <Button as="a" href="/memo/register">新規メモ登録</Button>
      {memos ? (
        <Box  >
          {memos.map((memo) => {
            const id = memo.id;
            return (
              <Box mb={30} bg="skyblue" key={memo.id}>
                <Input value={memo.id} readOnly></Input>
                <Input value={memo.title} readOnly />
                <br />
                <Input value={memo.category} readOnly />
                <br />
                <Textarea value={memo.description} readOnly />
                <br />
                <Input value={memo.date} readOnly />
                <br />
                <Input value={memo.mark_div} readOnly />
                <PrimaryButton onClick={() => onClickOpen(id, memos)}>
                  編集
                </PrimaryButton>
                <br />
                <br />
                <EditModal
                  isOpen={isOpen}
                  onClose={onClose}
                  memo={selectTarget}
                  loading={loading}
                />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Text>該当するデータはありません。</Text>
        )}
        </Stack>
    </>
  );
};

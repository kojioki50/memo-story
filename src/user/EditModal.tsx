/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";

import {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
  VFC,
} from "react";
import { BackButton } from "../Button/BackButton";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoDelete } from "../hooks/memoDelete";
import { memoUpdate } from "../hooks/memoUpdate";
import { memoType } from "../types/type1";

type Props = {
  memo: memoType | null;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

export const EditModal: VFC<Props> = memo((props) => {
  const { memo, isOpen, onClose } = props;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mark, setMark] = useState<number | undefined>(0);
  const { updateInfo, load } = memoUpdate();
  const { deleteInfo, loading } = memoDelete();

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);

  const onChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  const onChangeMark: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMark(e.target.valueAsNumber);
  };

  useEffect(() => {
    setTitle(memo?.title ?? "");
    setCategory(memo?.category ?? "");
    setDescription(memo?.description ?? "");
    setDate(memo?.date ?? "");
    setMark(memo?.mark_div);
  }, [memo]);

  const onClickUpdate = useCallback(
    (
      id: string | undefined,
      title: string,
      category: string,
      description: string,
      date: string,
      mark: number | undefined
    ) => {
      updateInfo(id, title, category, description, date, mark);
    },
    []
  );

  const onClickDelete = useCallback((id) => {
    deleteInfo(id);
    onClose();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent pb={5} mb={8}>
        <ModalHeader pt={2} ml={4}>
          Memo編集
        </ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody mx={4}>
          <Stack spacing={5}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input value={title} onChange={onChangeTitle} />
            </FormControl>

            <RadioGroup onChange={setCategory} value={category}>
              <Box mb={2}>カテゴリー</Box>
              <Stack direction="row">
                <Radio value="噂話">噂話</Radio>
                <Radio value="悪口">悪口</Radio>
              </Stack>
            </RadioGroup>

            <FormControl>
              <FormLabel>内容</FormLabel>
              <Textarea value={description} onChange={onChangeDescription} />
            </FormControl>
            <FormControl>
              <FormLabel>日付</FormLabel>
              <Input type="date" value={date} onChange={onChangeDate} />
            </FormControl>
            <FormControl>
              <FormLabel> チェック未完了or完了(0:未完了、1:完了)</FormLabel>
              <Input
                type="number"
                min="0"
                max="1"
                value={mark}
                onChange={onChangeMark}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Container pl={130}>
            <PrimaryButton
              loading={load}
              onClick={() =>
                onClickUpdate(
                  memo?.id,
                  title,
                  category,
                  description,
                  date,
                  mark
                )
              }
              disabled={(loading && true) || load}
            >
              更新
            </PrimaryButton>
            <BackButton
              loading={loading}
              onClick={() => onClickDelete(memo?.id)}
              disabled={(load && true) || loading}
            >
              削除
            </BackButton>
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

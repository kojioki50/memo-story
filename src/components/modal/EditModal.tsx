import {
  Box,
  Checkbox,
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
import { memoDelete } from "../../hooks/memoDelete";
import { memoUpdate } from "../../hooks/memoUpdate";
import { memoType } from "../../types/type1";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalOpenState,  modalOverlayState } from "../../recoil/recoilState";

type Props = {
  memo: memoType | null;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

export const EditModal: VFC<Props> = memo((props) => {
  const { memo, onClose} = props;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mark, setMark] = useState(false);
  const { updateInfo, load } = memoUpdate();
  const { deleteInfo, loaded } = memoDelete();
  const modalOpen = useRecoilValue(modalOpenState);
  const [modalOverlay, setModalOverlay] = useRecoilState(modalOverlayState);

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);

  const onChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    setTitle(memo?.title ?? "");
    setCategory(memo?.category ?? "");
    setDescription(memo?.description ?? "");
    setDate(memo?.date ?? "");
    setMark(memo?.mark_div ?? false);
  }, [memo]);

  const onClickUpdate = useCallback(
    (
      id: string | undefined,
      title: string,
      category: string,
      description: string,
      date: string,
      mark: boolean
    ) => {
      updateInfo(id, title, category, description, date, mark);
    },
    []
  );

  const onClickDelete = useCallback((id) => {
    setModalOverlay(false)
    deleteInfo(id);
  }, []);

  const onClick = () => {
    setMark(!mark);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInRight"
      closeOnOverlayClick={modalOverlay}
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
              <Input
                disabled={(load && true) || loaded}
                value={title}
                onChange={onChangeTitle}
              />
            </FormControl>

            <RadioGroup onChange={setCategory} value={category}>
              <Box mb={2}>カテゴリー</Box>
              <Stack direction="row">
                <Radio isDisabled={(load && true) || loaded} value="噂話">
                  噂話
                </Radio>
                <Radio isDisabled={(load && true) || loaded} value="悪口">
                  悪口
                </Radio>
              </Stack>
            </RadioGroup>

            <FormControl>
              <FormLabel>内容</FormLabel>
              <Textarea
                disabled={(load && true) || loaded}
                value={description}
                onChange={onChangeDescription}
              />
            </FormControl>
            <FormControl>
              <FormLabel>日付</FormLabel>
              <Input
                disabled={(load && true) || loaded}
                type="date"
                value={date}
                onChange={onChangeDate}
              />
            </FormControl>
            <FormControl>
              <FormLabel> チェックマークで完了</FormLabel>

              <Checkbox
                isDisabled={(load && true) || loaded}
                isChecked={mark}
                onChange={onClick}
              >
                unchecked or ✔️
              </Checkbox>
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
              disabled={(loaded && true) || load}
            >
              更新
            </PrimaryButton>
            <BackButton
              loading={loaded}
              onClick={() => onClickDelete(memo?.id)}
              disabled={(load && true) || loaded}
            >
              削除
            </BackButton>
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

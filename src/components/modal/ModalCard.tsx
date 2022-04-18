import React, { ChangeEventHandler, useEffect, useState, VFC } from "react";
import { memoType } from "../../types/type1";
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
  useDisclosure,
} from "@chakra-ui/react";
import { BackButton } from "../Button/BackButton";
import { PrimaryButton } from "../Button/PrimaryButton";

type Props = {
  memos: memoType;
};

export const ModalCard: VFC<Props> = (props: Props) => {
  const { memos } = props;
  const { onClose } = useDisclosure();
  const [modalOpen] = useState(true);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mark, setMark] = useState(false);

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);

  const onChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  const onClick = () => {
    setMark(!mark);
  };
  // const onClickModal = useCallback(() => {
  //     setModalOpen(false);
  //   }, []);

  useEffect(() => {
    setTitle(memos.title ?? "");
    setCategory(memos.category ?? "");
    setDescription(memos.description ?? "");
    setDate(memos.date ?? "");
    setMark(memos.mark_div ?? false);
  }, [memos]);

  return (
    <>
      <Modal
        isOpen={modalOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInRight"
        closeOnOverlayClick={true}
      >
        <ModalOverlay />
        <ModalContent width="50%" pb={5} mb={8}>
          <ModalHeader pt={2} ml={4}>
            Memo編集
          </ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody mx={4}>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>タイトル</FormLabel>
                <Input onChange={onChangeTitle} value={title} h="1.75rem" />
              </FormControl>

              <RadioGroup onChange={setCategory} value={category}>
                <Box mb={2}>カテゴリー</Box>
                <Stack direction="row">
                  <Radio colorScheme="green" value="噂話">
                    噂話
                  </Radio>
                  <Radio colorScheme="green" value="悪口">
                    悪口
                  </Radio>
                </Stack>
              </RadioGroup>

              <FormControl>
                <FormLabel>内容</FormLabel>
                <Textarea onChange={onChangeDescription} value={description} />
              </FormControl>
              <FormControl>
                <FormLabel>日付</FormLabel>
                <Input
                  type="date"
                  onChange={onChangeDate}
                  value={date}
                  h="1.75rem"
                />
              </FormControl>
              <FormControl>
                <FormLabel> チェックマークで完了</FormLabel>
                <Checkbox onChange={onClick} isChecked={mark}>
                  unchecked or ✔️
                </Checkbox>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Container ml="50%">
              <PrimaryButton>更新</PrimaryButton>
              <BackButton ml="10%">削除</BackButton>
            </Container>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

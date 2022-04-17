import React, { useState, VFC } from "react";
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
    useDisclosure
  } from "@chakra-ui/react";
  import { BackButton } from "../Button/BackButton";
import { PrimaryButton } from "../Button/PrimaryButton";


type Props = {
  memos: memoType;
};

export const ModalCard:VFC<Props> = (props:Props) => {
    const {memos} = props;
    const { onClose } = useDisclosure();
    const [modalOpen] = useState(true);

    // const onClickModal = useCallback(() => {
    //     setModalOpen(false);
    //   }, []);
      
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
          <ModalContent width="50%" pb={5} mb={8} background="skyblue">
            <ModalHeader pt={2} ml={4}>
              Memo編集
            </ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody mx={4}>
              <Stack spacing={5}>
                <FormControl>
                  <FormLabel>タイトル</FormLabel>
                  <Input value={memos.title} h="1.75rem" />
                </FormControl>

                <RadioGroup>
                  <Box mb={2}>カテゴリー</Box>
                  <Stack direction="row">
                    <Radio value="噂話">噂話</Radio>
                    <Radio value="悪口">悪口</Radio>
                  </Stack>
                </RadioGroup>

                <FormControl>
                  <FormLabel>内容</FormLabel>
                  <Textarea value={memos.description} />
                </FormControl>
                <FormControl>
                  <FormLabel>日付</FormLabel>
                  <Input value={memos.date} h="1.75rem" />
                </FormControl>
                <FormControl>
                  <FormLabel> チェックマークで完了</FormLabel>
                  <Checkbox
                    ml="30px"
                    height="1.75rem"
                    isChecked={memos.mark_div}
                    p={10}
                  >
                    {/* unchecked or ✔️ */}
                  </Checkbox>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Container ml="40%" pl={130}>
                <PrimaryButton height="1.75rem">更新</PrimaryButton>
                <BackButton height="1.75rem" ml="20px">
                  削除
                </BackButton>
              </Container>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
        };

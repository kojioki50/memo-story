/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
import {
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
// import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
  VFC,
} from "react";
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
  const initialDate = new Date();

  const { memo, isOpen, onClose } = props;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<any>(initialDate);
  const [mark, setMark] = useState<number | undefined>(0);
  const { updateInfo,load } = memoUpdate();
  const { deleteInfo,loading } = memoDelete();

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);

  const onChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };
  //  const onChangeDate = (e:any) => {
  //    setDate(e);
  //  };
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
    (id, title, category, description, date, mark) => {
      updateInfo(id, title, category, description, date, mark);
    },
    []
  );

  const onClickDelete = useCallback((id) => {
    deleteInfo(id);
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
        <ModalHeader>Memo更新</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody mx={4}>
          <Stack spacing={5}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input value={title} onChange={onChangeTitle} />
            </FormControl>

            <RadioGroup onChange={setCategory} value={category}>
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
              <Input type={date} value={date} onChange={onChangeDate} />
              {/* <SingleDatepicker
                name="date-input"
                date={date}
                onDateChange={onChangeDate}
              /> */}
            </FormControl>
            <FormControl>
              <FormLabel> マークつけるか区分(0:つけない、1:つける)</FormLabel>
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
          <PrimaryButton
            loading={load}
            onClick={() =>
              onClickUpdate(memo?.id, title, category, description, date, mark)
            }
            disabled={loading && true}
          >
            更新
          </PrimaryButton>
          <PrimaryButton
            loading={loading}
            onClick={() => onClickDelete(memo?.id)}
            disabled={load && true}
          >
            削除
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

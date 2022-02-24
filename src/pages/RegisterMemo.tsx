import { ChangeEventHandler, memo, useCallback, useEffect, useState, VFC } from "react";
import { BackButton } from "../Button/BackButton";
import { PrimaryButton } from "../Button/PrimaryButton";
import { memoTable } from "../hooks/memoTable";
import { memoRegister } from "../hooks/memoRegister";
import { Box, Input, Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export const RegisterMemo: VFC = memo(() => {
  const initialDate = new Date();
  const { memoData } = memoTable();
  const [mark, setMark] = useState<number>(0);
  const [date, setDate] = useState<any>(initialDate);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  const titleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  const textChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (date:Date) => {
    setDate(date);
  };
  const markChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMark(e.target.valueAsNumber);
  };

  useEffect(() => {
    memoData();
  }, [memoData]);

  const { registerInfo } = memoRegister();
  const onClickRegister = useCallback(() => {
    registerInfo(title, category, description, date, mark);
  },[]);

  return (
    <>
      <Stack spacing={5}>
        <Box fontSize={32}>RegisterMemo</Box>
        <Input placeholder="title" value={title} onChange={titleChange} />

        <RadioGroup onChange={setCategory} value={category}>
          <Stack direction="row">
            <Radio value="噂話">噂話</Radio>
            <Radio value="悪口">悪口</Radio>
          </Stack>
        </RadioGroup>
        <Textarea
          value={description}
          onChange={textChange}
          placeholder="内容"
        ></Textarea>
        <SingleDatepicker
          name="date-input"
          date={date}
          onDateChange={onChangeDate}
        />
        <Input
          type="number"
          min="0"
          max="1"
          name="mark"
          onChange={markChange}
          value={mark}
          placeholder="マークつけるか区分(0:つけない、1:つける)"
        />
        <PrimaryButton onClick={onClickRegister}>登録</PrimaryButton>
        <BackButton></BackButton>
      </Stack>
    </>
  );
});

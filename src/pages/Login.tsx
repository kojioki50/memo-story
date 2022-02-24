import { ChangeEventHandler, memo, useCallback, useState, VFC } from "react";
import { PrimaryButton } from "../Button/PrimaryButton";
import { userAuth } from "../hooks/userAuth";

export const Login:VFC = memo(() => {
  const [textInput, setTextInput] = useState("");
  const [pass, setPass] = useState("");
  const textChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTextInput(e.target.value);
  };
  const passChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPass(e.target.value);
  };
  const { login } = userAuth();

  const onClickLogin = useCallback(() => {
    login(textInput, pass);
},[]);
  return (
    <>
      <input onChange={textChange} value={textInput} placeholder="ユーザーID" />
      <input
        type="password"
        onChange={passChange}
        value={pass}
        placeholder="パスワード"
      />
      <PrimaryButton onClick={onClickLogin}>Login</PrimaryButton>
    </>
  );
});


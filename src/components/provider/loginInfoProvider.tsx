import { createContext,  Dispatch,  ReactNode,  SetStateAction,  useState } from "react";

export type login = {
  loginInfo: boolean;
  setLoginInfo: Dispatch<SetStateAction<boolean>>
}


export const LoginInfoContext = createContext<login>({} as login
);
export const LoginInfoProvider = (props: {children:ReactNode}) => {
  const { children } = props;

  const [loginInfo, setLoginInfo] = useState<boolean>(false);

  return (
    <LoginInfoContext.Provider value={{ loginInfo, setLoginInfo }}>
      {children}
    </LoginInfoContext.Provider>
  );
}
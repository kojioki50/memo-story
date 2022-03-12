import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { LoginInfoProvider } from "./components/provider/loginInfoProvider";
import { Router } from "./router/Router";

export const App = () => {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <LoginInfoProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </LoginInfoProvider>
      </RecoilRoot>
    </ChakraProvider>
  );
};

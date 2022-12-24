import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
);

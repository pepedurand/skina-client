import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { Router } from "./router/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  </ChakraProvider>
);

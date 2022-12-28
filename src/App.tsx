import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./router/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);

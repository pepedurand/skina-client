import { Box, Text } from "@chakra-ui/react";
import { LoginForm } from "../../components";

export const LoginPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      h="100vh"
      backgroundColor="#FFB800"
    >
      <Box flexDirection="column" marginTop="20vh" width="300px">
        <Text fontSize="26" fontFamily={"Inria Sans"}>
          Bem vindo de volta
        </Text>
        <LoginForm />
      </Box>
    </Box>
  );
};

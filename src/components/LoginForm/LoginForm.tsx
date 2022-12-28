import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validator";
import { FormInput } from "../common";
import { Button, useToast } from "@chakra-ui/react";
import { login } from "../../services";
import { LoginData } from "../../types";
import { useAppNavigate } from "../../router/coordinator";
import { useAuth } from "../../hooks/";

export const LoginForm = () => {
  const { setAuth } = useAuth();
  const { goToHome, goToAdminHome } = useAppNavigate();
  const toast = useToast();

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const body = methods.getValues();

  const onSubmitForm = async () => {
    const loginResponse = await login(body as unknown as LoginData);
    const userName = loginResponse.user.name;
    const accessToken = loginResponse.token;
    const role = loginResponse.user.role;
    setAuth({ userName, role, accessToken });
    localStorage.setItem("token", accessToken);

    toast({
      title: `Bem vindo ${userName}`,
      position: "top",
      isClosable: true,
      status: "success",
      duration: 9000,
    });
    if (role === "admin") {
      goToAdminHome();
    } else {
      goToHome();
    }
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmitForm)}>
      <FormProvider {...methods}>
        <FormInput
          placeholder="Insira seu e-mail"
          htmlFor="email"
          label="E-mail"
          name="email"
          id="name"
        />
        <FormInput
          placeholder="Insira sua senha"
          htmlFor="password"
          label="Senha"
          name="password"
          id="password"
        />
        <Button
          fontFamily="Inria Sans"
          marginTop="30px"
          fontSize="14px"
          backgroundColor="#560000"
          type="submit"
          w="100%"
        >
          Login
        </Button>
      </FormProvider>
    </form>
  );
};

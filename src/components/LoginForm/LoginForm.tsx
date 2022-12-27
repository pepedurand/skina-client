import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validator";
import { FormInput } from "../common";
import { Button } from "@chakra-ui/react";

export const LoginForm = () => {
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
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
